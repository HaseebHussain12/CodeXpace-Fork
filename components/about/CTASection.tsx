'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div
          ref={ref}
          className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            boxShadow: '0 8px 32px rgba(220, 38, 38, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* Decorative gradient */}
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
            style={{ transform: 'translate(30%, -30%)' }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
            style={{ transform: 'translate(-30%, 30%)' }}
          ></div>

          <div className="relative z-10">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Ready to partner with{' '}
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
                CodeXpace?
              </span>
            </h2>
            <p
              className={`text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Let's build something great together.
            </p>
            <Link
              href="/#contact-form"
              onClick={(e) => {
                e.preventDefault();
                if (pathname === "/") {
                  // If already on home page, scroll to contact form
                  const contactForm = document.getElementById("contact-form");
                  if (contactForm) {
                    contactForm.scrollIntoView({ behavior: "smooth", block: "end" });
                  }
                } else {
                  // If on another page, navigate to home with hash
                  router.push("/#contact-form");
                }
              }}
              className={`inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-3 rounded-lg font-semibold text-sm md:text-base transition-all shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 hover:scale-105 transform uppercase tracking-wide transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span>START A PROJECT</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


