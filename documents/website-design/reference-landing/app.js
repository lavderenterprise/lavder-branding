/* SCADENZA prototype (landing / lead-gen): interactions.
   Robust + progressive: all content is visible without JS; reveals use IntersectionObserver
   (fires on any intersection, incl. hash jumps) with a 2.6s failsafe so nothing stays hidden;
   all motion is skipped under prefers-reduced-motion. Lenis adds smooth scroll when present.
   Devices: mobile menu, smooth in-page anchors with sticky-header offset, accordion that
   animates open AND closed, and a sticky bottom CTA that appears after the hero (and hides
   near the footer so it never sits on the final CTA). All defensive / feature-detected. */

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
      if (!target) return;                 // anchor elsewhere -> normal navigation
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -80 });
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

  /* ---- accordion smooth open/close (animates both directions; native under reduced-motion) ---- */
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

  /* ---- sticky bottom CTA: show after the hero, hide near the final CTA / footer ---- */
  const bar = document.querySelector('[data-stickybar]');
  const hero = document.querySelector('.hero');
  const tail = document.querySelector('[data-stickybar-stop]');
  if (bar && 'IntersectionObserver' in window) {
    let pastHero = false, atTail = false;
    const sync = () => bar.classList.toggle('show', pastHero && !atTail);
    if (hero) new IntersectionObserver(([e]) => { pastHero = !e.isIntersecting; sync(); },
      { rootMargin: '-40% 0px 0px 0px' }).observe(hero);
    else pastHero = true;
    if (tail) new IntersectionObserver(([e]) => { atTail = e.isIntersecting; sync(); },
      { rootMargin: '0px 0px 0px 0px' }).observe(tail);
    sync();
  }
});
