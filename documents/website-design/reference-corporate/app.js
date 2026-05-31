/* Officine Lario prototype: interactions.
   Robust + progressive: content is visible without JS; reveals use IntersectionObserver
   (fires on any viewport intersection, incl. hash jumps) with a failsafe so nothing ever
   stays hidden; all motion is skipped under prefers-reduced-motion. Lenis adds smooth scroll. */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  // Mobile menu
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

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Lenis smooth scroll (own rAF loop; no GSAP dependency)
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  // Same-page anchor links with sticky-header offset (safe: if target not on page, let it navigate)
  document.querySelectorAll('a[href*="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') || '';
      const hash = href.slice(href.indexOf('#'));
      if (hash.length < 2) return;
      const target = document.querySelector(hash);
      if (!target) return;            // anchor lives on another page -> normal navigation
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -84 });
      else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  // Reveal on scroll (IntersectionObserver). Content is visible by default; we only hide+animate
  // when motion is on, and a failsafe guarantees everything is shown even if observers misfire.
  const revs = Array.from(document.querySelectorAll('.reveal, .reveal-stagger > *'));
  if (!reduce && revs.length) {
    document.documentElement.classList.add('anim');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    revs.forEach(el => io.observe(el));
    setTimeout(() => revs.forEach(el => el.classList.add('in')), 2600); // never leave content hidden
  }

  // Counters (IntersectionObserver + rAF). The final value is in the HTML as a no-JS fallback.
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
});
