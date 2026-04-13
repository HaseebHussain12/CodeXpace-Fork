"use client";

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Services from '@/components/Services';
import LatestProjects from '@/components/LatestProjects';
import IndustryExpertise from '@/components/IndustryExpertise';
// import WorkWithUs from '@/components/WorkWithUs';
import AboutCompany from '@/components/AboutCompany';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import GlobalLeadership from '@/components/GlobalLeadership';

export default function Home() {
  useEffect(() => {
    // Scroll to top on mount (unless there's a hash)
    const hash = window.location.hash;
    if (!hash || hash !== '#contact-form') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    // Handle hash navigation for contact form
    const handleHashScroll = () => {
      const currentHash = window.location.hash;
      if (currentHash === '#contact-form') {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          const contactForm = document.getElementById('contact-form');
          if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }
        }, 300);
      } else {
        // If no hash or different hash, scroll to top
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    // Check hash on mount
    handleHashScroll();

    // Also listen for hash changes
    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <main className="bg-black relative" style={{ overflowX: 'hidden', overflowY: 'visible', minHeight: '100vh', height: 'auto', width: '100%' }}>
      <Header />
      <Hero />
      <TechStack />
      <LatestProjects />
      <Services />
      <IndustryExpertise />
      {/* <WorkWithUs /> */}
      <AboutCompany />
      <div style={{ position: 'relative', zIndex: 100, overflow: 'visible', width: '100%' }}>
        <GlobalLeadership />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}

