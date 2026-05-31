/* Officine Lario prototype: interactions.
   Rich motion (Lenis + GSAP ScrollTrigger), but fully progressive:
   content is visible without JS, and all motion is skipped under
   prefers-reduced-motion or if a library fails to load. See ../README.md §9.6. */

document.addEventListener('DOMContentLoaded', () => {
  // Icons
  if (window.lucide) lucide.createIcons();

  // Mobile menu (always available)
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.getElementById('mobileMenu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      })
    );
  }

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = !!(window.gsap && window.ScrollTrigger);

  // Lenis smooth scroll
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  // Same-page anchor links with sticky-header offset (fixes the "broken menu" jump)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    const sel = a.getAttribute('href');
    if (!sel || sel.length < 2) return;
    a.addEventListener('click', (e) => {
      const target = document.querySelector(sel);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -84 });
      else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  if (reduce || !hasGSAP) return; // static fallback: everything already visible
  gsap.registerPlugin(ScrollTrigger);
  if (lenis) { lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add((t)=>lenis.raf(t*1000)); gsap.ticker.lagSmoothing(0); }

  // Reveals
  gsap.utils.toArray('.reveal').forEach(el => {
    gsap.from(el, { opacity: 0, y: 26, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 86%' } });
  });

  // Staggered groups
  gsap.utils.toArray('.reveal-stagger').forEach(group => {
    gsap.from(group.children, { opacity: 0, y: 22, duration: 0.6, ease: 'power2.out', stagger: 0.08,
      scrollTrigger: { trigger: group, start: 'top 84%' } });
  });

  // Animated counters (final value is in the HTML as a no-JS fallback)
  gsap.utils.toArray('[data-count]').forEach(el => {
    const end = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.dec || '0', 10);
    const o = { v: 0 };
    gsap.to(o, { v: end, duration: 1.6, ease: 'power1.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
      onUpdate() { el.textContent = o.v.toFixed(dec); } });
  });

  // Light hero parallax
  const para = document.querySelector('[data-parallax]');
  if (para) {
    gsap.to(para, { yPercent: 12, ease: 'none',
      scrollTrigger: { trigger: para.closest('section'), start: 'top top', end: 'bottom top', scrub: true } });
  }
});
