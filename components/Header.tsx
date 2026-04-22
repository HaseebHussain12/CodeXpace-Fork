"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import new1 from "../assets/new1.jpeg";

const servicesList = [
  { name: "Web Development", slug: "web-development" },
  { name: "Mobile App Development", slug: "mobile-app-development" },
  { name: "Software Testing", slug: "software-testing" },
  { name: "Custom Software Development", slug: "custom-software-development" },
  { name: "AI & Machine Learning Development", slug: "ai-machine-learning-development" },
  { name: "Devops and Cloud", slug: "devops-cloud-services" },
  { name: "SAAS Development", slug: "saas-development" },
  { name: "MVP Development", slug: "mvp-development" },
  { name: "Graphic Designing", slug: "graphic-designing" },
  { name: "UI/UX Designing", slug: "ui-ux-designing" },
  { name: "IT Consultation", slug: "it-consultation" },
  { name: "Enterprise Mobility Solutions", slug: "enterprise-mobility-solutions" },
  { name: "Blockchain", slug: "blockchain-development" }
];

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleBookMeetingClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      const contactForm = document.getElementById("contact-form");
      contactForm?.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      router.push("/#contact-form");
    }
  };

  const handleContactUsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      const contactForm = document.getElementById("contact-form");
      contactForm?.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
      router.push("/#contact-form");
    }
  };

  return (
    <header className="relative z-50 backdrop-blur-2xl">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(20, 0, 0, 0.82) 50%, rgba(0, 0, 0, 0.85) 100%)"
        }}
      ></div>

      <nav className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={new1} alt="CodeXpace Logo" height={60} className="object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-semibold text-sm transition-colors ${isActive("/") ? "text-red-400" : "text-white hover:text-red-400"
                }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`font-semibold text-sm transition-colors ${isActive("/about")
                  ? "text-red-400"
                  : "text-white hover:text-red-400"
                }`}
            >
              About Us
            </Link>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`font-semibold text-sm transition-colors flex items-center space-x-1 ${isServicesOpen || isActive("/services")
                    ? "text-red-400"
                    : "text-white hover:text-red-400"
                  }`}
              >
                <span>Services</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-black/95 backdrop-blur-xl border border-red-500/30 rounded-lg shadow-2xl py-3">
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2.5 text-white text-sm hover:bg-red-500/10 hover:text-red-400"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/careers"
              className={`font-semibold text-sm transition-colors ${isActive("/careers")
                  ? "text-red-400"
                  : "text-white hover:text-red-400"
                }`}
            >
              Careers
            </Link>

            <Link
              href="/#contact-form"
              onClick={handleContactUsClick}
              className="font-semibold text-sm transition-colors text-white hover:text-red-400"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA */}
          <Link
            href="/#contact-form"
            onClick={handleBookMeetingClick}
            className="hidden md:flex bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-2 rounded-lg font-medium text-sm"
          >
            BOOK A MEETING
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-red-500/20 py-4 space-y-3">

            <Link href="/" className="block text-white px-4">Home</Link>
            <Link href="/about" className="block text-white px-4">About Us</Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full text-left text-white px-4 flex items-center justify-between"
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transition ${isMobileServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileServicesOpen && (
                <div className="mt-2 space-y-1">
                  {servicesList.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      className="block text-gray-300 text-sm px-6 py-1.5 hover:text-red-400"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/careers" className="block text-white px-4">Careers</Link>

            <Link href="/#contact-form" className="block text-white px-4">
              Contact Us
            </Link>

            <Link
              href="/#contact-form"
              className="block mx-4 mt-3 bg-red-600 text-white text-center py-2 rounded-lg"
            >
              BOOK A MEETING
            </Link>

          </div>
        )}
      </nav>
    </header>
  );
}