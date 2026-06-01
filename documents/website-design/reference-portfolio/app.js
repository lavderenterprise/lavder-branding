/* BRIO prototype: interactions.
   Robust + progressive: content is visible without JS; reveals use IntersectionObserver
   (fires on any viewport intersection, incl. hash jumps) with a failsafe so nothing ever
   stays hidden; all motion is skipped under prefers-reduced-motion. Lenis adds smooth scroll.
   Device interactions for this archetype: horizontal-scroll work rail (drag + arrows) and
   animated stat counters. All defensive (feature-detected, no-op when markup is absent). */

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
      const step = (t) => {
        const p = Math.min(1, (t - t0) / dur);
        el.textContent = (end * (1 - Math.pow(1 - p, 3))).toFixed(dec);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { run(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.5 });
    counters.forEach(el => cio.observe(el));
  }

  /* ---- horizontal-scroll rails: drag to scroll + arrow buttons [DEVICE] ---- */
  document.querySelectorAll('[data-rail]').forEach(wrap => {
    const rail = wrap.querySelector('.hrail');
    if (!rail) return;
    const prev = wrap.querySelector('[data-rail-prev]');
    const next = wrap.querySelector('[data-rail-next]');
    const step = () => Math.max(260, rail.clientWidth * 0.8);
    prev && prev.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: reduce ? 'auto' : 'smooth' }));
    next && next.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: reduce ? 'auto' : 'smooth' }));
    // pointer drag
    let down = false, startX = 0, startL = 0, moved = 0;
    rail.addEventListener('pointerdown', (e) => { down = true; moved = 0; startX = e.clientX; startL = rail.scrollLeft; rail.classList.add('drag'); rail.setPointerCapture?.(e.pointerId); });
    rail.addEventListener('pointermove', (e) => { if (!down) return; const dx = e.clientX - startX; moved += Math.abs(dx); rail.scrollLeft = startL - dx; });
    const end = () => { down = false; rail.classList.remove('drag'); };
    rail.addEventListener('pointerup', end); rail.addEventListener('pointercancel', end); rail.addEventListener('pointerleave', end);
    rail.addEventListener('click', (e) => { if (moved > 6) e.preventDefault(); }, true); // suppress accidental click after drag
  });

  /* ---- hero statement: gentle staggered word fade-in (enhancement only; static if reduced) ---- */
  const statement = document.querySelector('[data-hero-words]');
  if (!reduce && statement && !statement.dataset.split) {
    statement.dataset.split = '1';
    // wrap each top-level word/segment in a span so it can rise in; preserve accent + <br>
    const animate = (el, baseDelay) => {
      Array.from(el.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          node.textContent.split(/(\s+)/).forEach(part => {
            if (part.trim() === '') { frag.appendChild(document.createTextNode(part)); return; }
            const s = document.createElement('span');
            s.className = 'fade-in-word';
            s.textContent = part;
            s.style.opacity = '0';
            s.style.transform = 'translateY(0.34em)';
            s.style.transition = 'opacity .6s var(--ease), transform .6s var(--ease)';
            s.style.transitionDelay = (baseDelay.v += 0.05).toFixed(2) + 's';
            frag.appendChild(s);
          });
          el.replaceChild(frag, node);
        } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'BR') {
          // a styled wrapper (e.g. .accent): animate as one unit
          node.style.display = 'inline-block';
          node.style.opacity = '0';
          node.style.transform = 'translateY(0.34em)';
          node.style.transition = 'opacity .6s var(--ease), transform .6s var(--ease)';
          node.style.transitionDelay = (baseDelay.v += 0.05).toFixed(2) + 's';
        }
      });
    };
    const counter = { v: 0 };
    animate(statement, counter);
    requestAnimationFrame(() => {
      statement.querySelectorAll('.fade-in-word, .accent').forEach(s => {
        s.style.opacity = '1'; s.style.transform = 'none';
      });
    });
    // failsafe: ensure visible regardless
    setTimeout(() => statement.querySelectorAll('.fade-in-word, .accent').forEach(s => { s.style.opacity = '1'; s.style.transform = 'none'; }), 2600);
  }
});
