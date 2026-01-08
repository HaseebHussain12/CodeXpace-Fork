"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change, except if there's a hash
    const hash = window.location.hash;
    
    if (!hash || hash !== '#contact-form') {
      // Multiple methods to ensure scroll to top works
      const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        if (window.scrollY !== 0) {
          window.scrollTo(0, 0);
        }
      };

      // Immediate scroll
      scrollToTop();

      // Also try after a small delay to catch any delayed rendering
      requestAnimationFrame(() => {
        scrollToTop();
        setTimeout(scrollToTop, 0);
        setTimeout(scrollToTop, 10);
      });
    }
  }, [pathname]);

  return null;
}
