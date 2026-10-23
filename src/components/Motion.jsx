'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Attribute-driven motion for the whole site, re-initialised on every route:
//   data-hero-item         hero entrance, played once on load
//   data-reveal            fade/rise when scrolled into view
//   data-reveal-stagger    reveal direct children in sequence
//   data-reveal-image      soft clip reveal for photographs
// Nothing animates when the visitor prefers reduced motion.
export default function Motion() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.__motionStarted = true;
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ease = 'power3.out';
      const hero = gsap.utils.toArray('[data-hero-item]');
      if (hero.length) {
        gsap.fromTo(
          hero,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 1.1, ease, stagger: 0.12, delay: 0.1, clearProps: 'transform' }
        );
      }

      const scrollIn = (targets, vars, trigger) =>
        gsap.from(targets, {
          ...vars,
          ease,
          scrollTrigger: { trigger, start: 'top 88%', once: true },
        });

      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        scrollIn(el, { opacity: 0, y: 28, duration: 0.9 }, el);
      });

      gsap.utils.toArray('[data-reveal-stagger]').forEach((el) => {
        scrollIn(el.children, { opacity: 0, y: 24, duration: 0.8, stagger: 0.1 }, el);
      });

      gsap.utils.toArray('[data-reveal-image]').forEach((el) => {
        scrollIn(el, { clipPath: 'inset(10% 6% 10% 6%)', opacity: 0, duration: 1.2 }, el);
      });
    });

    // Pinned text column: stays in view while its sibling column scrolls past.
    // Wide screens only; on narrow screens the columns simply stack.
    mm.add('(min-width: 900px)', () => {
      gsap.utils.toArray('[data-pin]').forEach((el) => {
        const container = el.closest('[data-pin-container]');
        if (!container) return;
        const offset = () => document.querySelector('header')?.offsetHeight + 32 || 104;
        ScrollTrigger.create({
          trigger: container,
          start: () => `top top+=${offset()}`,
          end: () => `+=${Math.max(0, container.offsetHeight - el.offsetHeight)}`,
          pin: el,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });
      });
    });

    return () => mm.revert();
  }, [pathname]);

  return null;
}
