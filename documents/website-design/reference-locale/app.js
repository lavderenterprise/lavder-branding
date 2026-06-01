/* OSTERIA DEL BORGO prototype: interactions.
   Robust + progressive: content is visible without JS; reveals use IntersectionObserver
   (fires on any viewport intersection, incl. hash jumps) with a 2.6s failsafe so nothing ever
   stays hidden; all motion is skipped under prefers-reduced-motion. Lenis adds smooth scroll.
   Devices: photo-gallery rail (drag + arrows), heritage number counters, reservation form
   confirmation, accordion (animates open AND closed). All defensive / feature-detected. */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- mobile menu ---- */
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.getElementById('mobileMenu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ---- Lenis smooth scroll (own rAF loop; no GSAP dependency) ---- */
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  /* ---- same-page anchors with sticky-header offset ---- */
  document.querySelectorAll('a[href*="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') || '';
      const hash = href.slice(href.indexOf('#'));
      if (hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;                 // anchor on another page -> normal navigation
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -84 });
      else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  /* ---- reveal on scroll (visible by default; hide+animate only with motion; failsafe) ---- */
  const revs = Array.from(document.querySelectorAll('.reveal, .reveal-stagger > *'));
  if (!reduce && revs.length) {
    document.documentElement.classList.add('anim');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    revs.forEach(el => io.observe(el));
    setTimeout(() => revs.forEach(el => el.classList.add('in')), 2600); // never leave content hidden
  }

  /* ---- counters (final value is in the HTML as a no-JS fallback) ---- */
  const counters = Array.from(document.querySelectorAll('[data-count]'));
  if (!reduce && counters.length) {
    const run = (el) => {
      const end = parseFloat(el.dataset.count), dec = parseInt(el.dataset.dec || '0', 10), dur = 1500;
      const t0 = performance.now();
      const step = (t) => { const p = Math.min(1, (t - t0) / dur); el.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(dec); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { run(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.5 });
    counters.forEach(el => cio.observe(el));
  }

  /* ---- photo-gallery rail: drag to scroll + arrow buttons [DEVICE] ---- */
  document.querySelectorAll('[data-rail]').forEach(wrap => {
    const rail = wrap.querySelector('.hrail');
    if (!rail) return;
    const prev = wrap.querySelector('[data-rail-prev]');
    const next = wrap.querySelector('[data-rail-next]');
    const step = () => Math.max(240, rail.clientWidth * 0.8);
    prev && prev.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' }));
    next && next.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' }));
    let down = false, startX = 0, startL = 0, moved = 0;
    rail.addEventListener('pointerdown', (e) => { down = true; moved = 0; startX = e.clientX; startL = rail.scrollLeft; rail.classList.add('drag'); rail.setPointerCapture?.(e.pointerId); });
    rail.addEventListener('pointermove', (e) => { if (!down) return; const dx = e.clientX - startX; moved += Math.abs(dx); rail.scrollLeft = startL - dx; });
    const end = () => { down = false; rail.classList.remove('drag'); };
    rail.addEventListener('pointerup', end); rail.addEventListener('pointercancel', end); rail.addEventListener('pointerleave', end);
    rail.addEventListener('click', (e) => { if (moved > 6) e.preventDefault(); }, true); // suppress accidental click after drag
  });

  /* ---- accordion smooth open/close (animates both directions; native toggle under reduced-motion) ---- */
  if (!reduce) document.querySelectorAll('details').forEach(d => {
    const body = d.querySelector(':scope > .body');
    const sum = d.querySelector(':scope > summary');
    if (!body || !sum) return;
    sum.addEventListener('click', (e) => {
      e.preventDefault();
      if (d.open) {                                  // closing
        body.style.height = body.scrollHeight + 'px'; body.getBoundingClientRect();
        body.style.height = '0px'; body.style.opacity = '0';
        const done = () => { d.open = false; body.style.height = ''; body.style.opacity = ''; body.removeEventListener('transitionend', done); };
        body.addEventListener('transitionend', done, { once: true });
      } else {                                        // opening
        d.open = true;
        const h = body.scrollHeight;
        body.style.height = '0px'; body.style.opacity = '0'; body.getBoundingClientRect();
        body.style.height = h + 'px'; body.style.opacity = '1';
        const done = () => { body.style.height = ''; body.removeEventListener('transitionend', done); };
        body.addEventListener('transitionend', done, { once: true });
      }
    });
  });

  /* ---- reservation form: demo confirmation (prototype only, no backend) ---- */
  document.querySelectorAll('[data-reserve]').forEach(form => {
    const out = form.querySelector('[data-reserve-msg]');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity || form.reportValidity()) {
        if (out) {
          out.hidden = false;
          out.scrollIntoView ? null : null;
        }
        const btn = form.querySelector('button[type=submit]');
        if (btn) { const o = btn.innerHTML; btn.innerHTML = 'Richiesta inviata'; btn.disabled = true; setTimeout(() => { btn.innerHTML = o; btn.disabled = false; if (window.lucide) lucide.createIcons(); }, 2600); }
      }
    });
  });
});
