"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import image from "next/image";

const services = [
  {
    // icon: "🧠",
    image: "/AI-Machine.jpeg",
    title: "AI & Machine Learning Development",
    slug: "ai-machine-learning-development",
    description: "Your business — now intelligent.",
    cta: "See AI in Action"
  },
  {
    // icon: "📱",
    image: "/mobile.jpeg",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Secure, scalable, and innovative mobile apps that deliver results.",
    cta: "Start Your Mobile App Journey"
  },
  {
    // icon: "💻",
    image: "/web.jpeg",
    title: "Web Development",
    slug: "web-development",
    description:
      "Your one-stop shop for stellar web applications, built with the latest technologies.",
    cta: "Discover Our Development Approach"
  },
  {
    // icon: "📲",
    image: "/enter.jpeg",
    title: "Enterprise Mobility Solutions",
    slug: "enterprise-mobility-solutions",
    description: "Mobility that accelerates efficiency.",
    cta: "Discover Mobility Solutions"
  },
  {
    // icon: "🚀",
    image: "/MVP.jpeg",
    title: "MVP Development",
    slug: "mvp-development",
    description: "Validate ideas and launch quicker, smarter.",
    cta: "Start Your MVP"
  },
  {
    // icon: "🏢",
    image: "/saas.jpeg",
    title: "SAAS Development",
    slug: "saas-development",
    description:
      "End-to-end innovative SaaS software development services that are scalable, secure, and user-centric.",
    cta: "Explore SAAS Solutions"
  },
  {
    // icon: "✅",
    image: "/testing.jpeg",
    title: "Software Testing",
    slug: "software-testing",
    description:
      "Speed up your software journey and mitigate risk with our full-cycle software testing service.",
    cta: "Ensure Quality"
  },
  {
    // icon: "⚙️",
    image: "/custum.jpeg",
    title: "Custom Software Development",
    slug: "custom-software-development",
    description:
      "From concept to execution - every line of code is designed to optimize your business processes and drive measurable ROI.",
    cta: "Explore Custom Solutions"
  },
  {
    // icon: "✨",
    image: "/UIUX-Designing.jpeg",
    title: "UI/UX Designing",
    slug: "ui-ux-designing",
    description: "User-centered UI/UX design services",
    cta: "Explore Design Services"
  },
  {
    // icon: "☁️",
    image: "/devops.jpeg",
    title: "Devops and Cloud",
    slug: "devops-cloud-services",
    description: "Cloud that delivers. DevOps that empowers.",
    cta: "Optimize with DevOps"
  },
  {
    // icon: "🎨",
    image: "/graphic.jpeg",
    title: "Graphic Designing",
    slug: "graphic-designing",
    description:
      "Transform your digital user experience through our intuitive and visually appealing designing services.",
    cta: "See Our Designs"
  },

  {
    // icon: "💼",
    image: "/IT.jpeg",
    title: "IT Consultation",
    slug: "it-consultation",
    description: "Consulting that works — even when you’re offline.",
    cta: "Get Consultation"
  },
  {
    // icon: "⛓️",
    image: "block-chain.jpeg",
    title: "Blockchain",
    slug: "blockchain-development",
    description: "Trust, transparency, and transactions—redefined.",
    cta: "Explore Blockchain"
  }
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const displayedServices = showAll ? services : services.slice(0, 6);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        }
      );

      observer.observe(card);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [showAll]);

  return (
    <section id="services" className="py-20 pt-[90px] bg-black relative">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Excellence - When it{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Comes
          </span>{" "}
          to
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              ref={(el: any) => (cardRefs.current[index] = el)}
              className={`group relative overflow-hidden bg-black border border-red-500/40 rounded-xl p-6 hover:border-red-500/70 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full ${visibleCards.has(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                transitionDelay: `${index * 0.1}s`,
                boxShadow:
                  "0 2px 8px rgba(220, 38, 38, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.03)",
                minHeight: "150px",
                height: "300px"
              }}
            >
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-5 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-300 text-xs font-medium mt-auto"
                >
                  <span>{service.cta}</span>
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
            </div>
          ))}
        </div>
        {services.length > 6 && (
          <div className="flex justify-center mt-12">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 bg-transparent border border-red-500/60 text-red-400 rounded-lg font-medium hover:bg-red-500/10 hover:border-red-500 transition-all duration-300"
              >
                Show more
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowAll(false);
                  // Scroll to top of services section when collapsing
                  window.scrollTo({
                    top: document.getElementById('services')?.offsetTop || 0,
                    behavior: 'smooth'
                  });
                }}
                className="px-8 py-3 bg-transparent border border-red-500/60 text-red-400 rounded-lg font-medium hover:bg-red-500/10 hover:border-red-500 transition-all duration-300"
              >
                Show less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
