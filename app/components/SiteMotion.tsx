'use client';

import { useEffect } from 'react';

/** Progressive enhancement: content stays visible without JavaScript. */
export default function SiteMotion() {
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;

    const initialHash = window.location.hash;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        // Don't fade content away after a deep link or restored scroll position.
        if (!motion.matches && initialHash !== `#${target.id}` && target.getBoundingClientRect().top >= 0) {
          target.classList.add('portfolio-reveal');
        }
      });
    }, { threshold: 0 });

    document.querySelectorAll('[data-reveal]').forEach(element => {
      // Never hide anything the browser has already painted in the viewport.
      if (element.getBoundingClientRect().top >= window.innerHeight) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return null;
}
