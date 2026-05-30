/*
 * Lavder — case-study screenshot capture
 * Logs into a running web app (session cookie via /api/auth/login), then captures
 * clean, high-DPI screenshots of each page in LIGHT and DARK theme, ready to drop
 * into the deck's browser frames. See screenshots.md for the full workflow.
 *
 * Usage (run from inside the target project so `puppeteer` resolves, or fix the
 * import path below to that project's node_modules):
 *   THEME=light BASE=http://localhost:5050 LOGIN_USER=admin@client.it LOGIN_PASS=... \
 *     OUT=/abs/path/to/shots node capture-screenshots.mjs
 *   THEME=dark  ... node capture-screenshots.mjs   # second pass for dark-theme shots
 *
 * Adjust per project: puppeteer import path, the login step, the route list, and the
 * theme mechanism. Login varies by stack — JSON POST /api/auth/login for SPA apps;
 * for server-rendered apps (Laravel/Blade, Livewire) drive the HTML form instead
 * (type #email / #password, click button[type=submit], wait for navigation). If the
 * app has no dark theme, run only the light pass. executablePath = system Google
 * Chrome (same binary that renders the PDF).
 */
import puppeteer from '/Users/giacomo/Claude/gestionale-fabbri/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';

const BASE = process.env.BASE || 'http://localhost:5050';
const USER = process.env.LOGIN_USER || 'admin@fabbriarredamenti.it';
const PASS = process.env.LOGIN_PASS || 'Fabbri2026!';
const OUT = process.env.OUT || '/Users/giacomo/Claude/gestionale-fabbri/shots-clean';
const THEME = process.env.THEME === 'dark' ? 'dark' : 'light';
const SFX = THEME === 'dark' ? '-dark' : '';

import fs from 'node:fs';
fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--force-device-scale-factor=2'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
// force LIGHT theme: app reads localStorage 'theme' then falls back to prefers-color-scheme
await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: THEME }]);
await page.evaluateOnNewDocument((t) => { try { localStorage.setItem('theme', t); } catch (e) {} }, THEME);

function log(...a){ console.log(...a); }

// establish origin, then login via API so the session cookie is set
await page.goto(BASE + '/login', { waitUntil: 'networkidle2', timeout: 60000 }).catch(()=>{});
const loginRes = await page.evaluate(async (u, p) => {
  const r = await fetch('/api/auth/login', {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: u, password: p }),
  });
  return { status: r.status, body: await r.text() };
}, USER, PASS);
log('LOGIN', loginRes.status, loginRes.body.slice(0, 200));
if (loginRes.status !== 200) { log('LOGIN FAILED — aborting'); await browser.close(); process.exit(2); }

// grab ids for detail pages
const ids = await page.evaluate(async () => {
  async function firstId(path) {
    try {
      const r = await fetch(path); if (!r.ok) return null;
      const d = await r.json();
      const arr = Array.isArray(d) ? d : (d.items || d.data || d.quotes || d.orders || []);
      return arr[0]?.id ?? null;
    } catch { return null; }
  }
  return {
    quote: await firstId('/api/quotes'),
    order: await firstId('/api/sales-orders'),
  };
});
log('IDS', JSON.stringify(ids));

async function shot(name, path, { full = false, wait = 1800 } = {}) {
  try {
    await page.goto(BASE + path, { waitUntil: 'networkidle2', timeout: 60000 });
    await page.evaluate((d) => document.documentElement.classList.toggle('dark', d), THEME==='dark'); // enforce light
    await new Promise(r => setTimeout(r, wait)); // let data + charts render
    await page.evaluate((d) => document.documentElement.classList.toggle('dark', d), THEME==='dark');
    await page.screenshot({ path: `${OUT}/${name}${SFX}.png`, fullPage: full });
    log('OK  ', name, path);
  } catch (e) {
    log('FAIL', name, path, e.message);
  }
}

await shot('dashboard', '/');
await shot('quotes', '/quotes');
await shot('sales-orders', '/sales-orders');
await shot('customers', '/customers');
await shot('suppliers', '/suppliers');
await shot('inventory', '/inventory');
await shot('ddts', '/ddts');
await shot('stores', '/stores');
async function shotScrolled(name, path, headingText) {
  try {
    await page.goto(BASE + path, { waitUntil: 'networkidle2', timeout: 60000 });
    await page.evaluate((d) => document.documentElement.classList.toggle('dark', d), THEME==='dark');
    await new Promise(r => setTimeout(r, 1500));
    await page.evaluate((txt) => {
      const els = [...document.querySelectorAll('h1,h2,h3,h4,div,span,p')];
      const el = els.find(e => e.textContent && e.textContent.trim().startsWith(txt));
      if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
    }, headingText);
    await new Promise(r => setTimeout(r, 700));
    await page.evaluate((d) => document.documentElement.classList.toggle('dark', d), THEME==='dark');
    await page.screenshot({ path: `${OUT}/${name}${SFX}.png`, fullPage: false });
    log('OK   (scrolled)', name, path);
  } catch (e) { log('FAIL', name, path, e.message); }
}

if (ids.quote) {
  await shot('quote-detail-top', `/quotes/${ids.quote}`, { full: false });
  await shotScrolled('quote-righe', `/quotes/${ids.quote}`, 'Righe');
}
if (ids.order) await shot('order-detail-top', `/sales-orders/${ids.order}`, { full: false });

await browser.close();
log('DONE → ' + OUT);
