'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const services = [
  {
    title: "Web Development",
    slug: "web-development",
    description: "Your one-stop shop for stellar web applications, built with the latest technologies. We create responsive, scalable, and high-performance web solutions that drive business growth."
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Secure, scalable, and innovative mobile apps that deliver results. We develop native and cross-platform mobile applications for iOS and Android."
  },
  {
    title: "Software Testing",
    slug: "software-testing",
    description: "Speed up your software journey and mitigate risk with our full-cycle software testing service. We ensure quality, reliability, and performance of your software products."
  },
  {
    title: "Custom Software Development",
    slug: "custom-software-development",
    description: "From concept to execution - every line of code is designed to optimize your business processes and drive measurable ROI. Tailored solutions for your unique needs."
  },
  {
    title: "AI & Machine Learning Development",
    slug: "ai-machine-learning-development",
    description: "Your business — now intelligent. We build AI-powered solutions that automate processes, analyze data, and provide intelligent insights to drive decision-making."
  },
  {
    title: "UI/UX Designing",
    slug: "ui-ux-designing",
    description: "User-centered UI/UX design services that create intuitive and engaging user experiences. We design interfaces that users love and that drive conversions."
  },
  {
    title: "DevOps and Cloud",
    slug: "devops-cloud-services",
    description: "Cloud that delivers. DevOps that empowers. We help you deploy, scale, and maintain your applications with modern cloud infrastructure and DevOps practices."
  },
  {
    title: "SaaS Development",
    slug: "saas-development",
    description: "End-to-end innovative SaaS software development services that are scalable, secure, and user-centric. Build subscription-based software solutions that grow with your business."
  },
  {
    title: "MVP Development",
    slug: "mvp-development",
    description: "Validate ideas and launch quicker, smarter. We help you build Minimum Viable Products that test market demand and gather user feedback before full-scale development."
  },
  {
    title: "Graphic Designing",
    slug: "graphic-designing",
    description: "Transform your digital user experience through our intuitive and visually appealing designing services. Create compelling visual identities and marketing materials."
  },
  {
    title: "IT Consultation",
    slug: "it-consultation",
    description: "Consulting that works — even when you're offline. Get expert advice on technology strategy, architecture, and digital transformation to achieve your business goals."
  },
  {
    title: "Enterprise Mobility Solutions",
    slug: "enterprise-mobility-solutions",
    description: "Mobility that accelerates efficiency. We develop enterprise-grade mobile solutions that streamline operations, improve productivity, and enhance employee engagement."
  },
  {
    title: "Blockchain Development",
    slug: "blockchain-development",
    description: "Trust, transparency, and transactions—redefined. We build blockchain solutions including smart contracts, decentralized applications, and cryptocurrency platforms."
  }
];

export default function WhatWeDo() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What We{' '}
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-base md:text-lg max-w-3xl mx-auto">
            As a software company, we provide comprehensive services to help businesses transform their digital presence and achieve their goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-xl p-6 hover:border-red-500/70 transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${index * 0.05}s`,
                  boxShadow: '0 2px 8px rgba(220, 38, 38, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.03)'
                }}
              >
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-300 text-xs font-medium"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

