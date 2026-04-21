"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import codaImage from "../assets/projects/Coda.png";
import HT from "../assets/projects/HT.png";
import Liberty from "../assets/projects/Liberty.png";
import Luminary from "../assets/projects/Luminary.png";
import telegraphyImage from "../assets/projects/Palplug.png";
import Dillion from "../assets/projects/Dillion.png";
import coder from "../assets/projects/coder.png";
import yunakImage from "../assets/projects/Yunak.png";
import ftfImage from "../assets/projects/Ftf.png";

const projects = [
  {
    id: "yunuty",
    name: "Yunuak",
    description:
      "Yunuak is a next-gen enterprise solutions company empowering organizations with digital transformation, process engineering, and cloud-based business tools. Our platforms deliver workflow automation, real-time analytics, and cross-device accessibility. YUNUAK helps businesses achieve operational efficiency, scalability, and smarter decision-making.",
    image: yunakImage
  },
  {
    id: "ftf",
    name: "Forward Thinking Fitness",
    description:
      "Forward Fitness Thinking is a comprehensive wellness and fitness platform enabling users to track menstrual cycles, habits, and nutrition, while earning rewards. The platform offers personalized workout plans, real-time performance insights, and seamless multi-device integration. Users experience a fully personalized, engaging, and results-driven health journey.",
    image: ftfImage
  },
  {
    id: "liberty",
    name: "Liberty91",
    description:
      "Liberty91 is an AI-powered threat intelligence platform that analyzes real-time cybersecurity data tailored to your organization. It monitors news, dark-web feeds, and vulnerability reports, delivering instant alerts and actionable insights. Liberty91 enables proactive threat detection, risk reduction, and faster cybersecurity response.",
    image: Liberty
  },
  {
    id: "lowcoder",
    name: "Low Coder",
    description:
      "Low Coder is a modern low-code development platform that enables businesses to build applications quickly with minimal coding expertise. The platform provides drag-and-drop interfaces, automation tools, and multi-device integration. The result is faster app deployment, reduced development costs, and scalable digital solutions.",
    image: coder
  },
  {
    id: "luminary",
    name: "Luminary Health",
    description:
      "Luminary Health is an innovative digital health platform empowering users and providers with personalized healthcare solutions and wellness management tools. We built a system offering telemedicine access, health tracking, and seamless multi-device integration. The result is accessible, data-driven, and patient-centric healthcare for better outcomes.",
    image: Luminary
  },
  {
    id: "spectra",
    name: "Spectra Solar",
    description:
      "Spectra Solar delivers clean, renewable solar energy solutions for businesses and homes. We design and deploy scalable solar installations, integrate smart energy management systems, and monitor performance to maximize energy savings. The result is reliable solar power, reduced carbon footprint, and long-term sustainability.",
    image: codaImage
  },
  {
    id: "ht",
    name: "Hammers & Tounges",
    description:
      "Hammers & Tongues Auction is a digital auction platform enabling users to bid, buy, and sell products in real time with secure transactions and transparent pricing. We built a system featuring live bidding, smart inventory management, and instant notifications to enhance user engagement. With seamless mobile access and scalable architecture, the platform delivers a fast, secure, and modern auction experience.",
    image: HT
  },
  {
    id: "palplug",
    name: "Palplug",
    description:
      "Palplug is a next-gen professional networking platform connecting talent, recruiters, and businesses worldwide. Create rich profiles, share expertise, post jobs, and build meaningful connections — all with intuitive networking, real-time messaging, and smart discovery tools. Palplug empowers professionals and companies to grow, collaborate, and succeed in a modern, connected ecosystem.",
    image: telegraphyImage
  },
  {
    id: "dillon",
    name: "Dillon",
    description:
      "Dillon Gas is a next-gen e-commerce and delivery platform that connects businesses with customers seamlessly. It offers real-time rider tracking via maps, integrated digital wallets, and secure payment options. The result is faster deliveries, smooth transactions, and enhanced customer experience.",
    image: Dillion
  }
];

export default function LatestProjects() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // ✅ RESPONSIVE DETECTION
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // tablet
      } else {
        setItemsPerPage(3); // desktop
      }
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const paginate = (dir: number) => {
    setPage(([prev]) => {
      const next = prev + dir;
      if (next < 0 || next >= totalPages) return [prev, 0];
      return [next, dir];
    });
  };

  const startIndex = page * itemsPerPage;

  const visibleProjects = projects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0
    })
  };

  return (
    <section className="pt-12 pb-0 bg-black">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="relative overflow-hidden">

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-black/40 p-4 rounded-xl border-[2px] border-red-500/20 relative"
                >
                  <h3 className="text-lg font-semibold text-white mb-2 w-fit py-3 ">
                    {project.name}
                  </h3>

                  <p className="text-sm text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="relative w-full aspect-[2/1] mb-[55px]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-contain transition-opacity duration-500"
                      priority
                    />
                  </div>

                  <Link
                  href={`/portfolio/${project.id}`}
                  className="absolute bottom-4 left-4 right-4 text-center px-4 py-2 border border-red-500/30 text-red-400/80 rounded-lg hover:bg-red-500/10 transition bg-black/40"
                  >
                    See Details
                  </Link>

                </div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>

        {/* ARROWS */}
          <div className="absolute top-1/2 left-[-50px] right-[-50px] -translate-y-1/2 flex justify-between px-2 pointer-events-none">
            <button
              onClick={() => paginate(-1)}
              disabled={page === 0}
              className="pointer-events-auto p-3 bg-red-500/10 border border-red-500/40 rounded-full shadow-lg shadow-black/50 text-white hover:text-red-400 disabled:opacity-30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => paginate(1)}
              disabled={page >= totalPages - 1}
              className="pointer-events-auto p-3 bg-red-500/10 border border-red-500/40 rounded-full shadow-lg shadow-black/50 text-gray-300 hover:text-red-400 disabled:opacity-30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
      </div>
    </section>
  );
}