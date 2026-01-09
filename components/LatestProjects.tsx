"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import codaImage from "../assets/projects/Coda.png";
import dramaPopImage from "../assets/projects/DramaPop.png";
import HT from "../assets/projects/HT.png";
import Liberty from "../assets/projects/Liberty.png";
import roadTrippersImage from "../assets/projects/RoadTrippers.png";
import Luminary from "../assets/projects/Luminary.png";
import telegraphyImage from "../assets/projects/Palplug.png";
import Dillion from "../assets/projects/Dillion.png";
import coder from "../assets/projects/coder.png";
import zingImage from "../assets/projects/Zing.png";
import yunakImage from "../assets/projects/Yunak.png";
import ftfImage from "../assets/projects/Ftf.png";

const projects = [
  {
    id: "Yunuak",
    name: "Yunuak",
    description: `Yunuak is a next-gen enterprise solutions company empowering organizations with digital transformation, process engineering, and cloud-based business tools. Our platforms deliver workflow automation, real-time analytics, and cross-device accessibility. YUNUAK helps businesses achieve operational efficiency, scalability, and smarter decision-making.`,
    image: yunakImage,
    type: "Productivity"
  },
  {
    id: "Forward-Thinking-Fitness",
    name: "Forward Thinking Fitness",
    description:
      "Forward Fitness Thinking is a comprehensive wellness and fitness platform enabling users to track menstrual cycles, habits, and nutrition, while earning rewards. The platform offers personalized workout plans, real-time performance insights, and seamless multi-device integration. Users experience a fully personalized, engaging, and results-driven health journey.",
    image: ftfImage,
    type: "Entertainment"
  },

  {
    id: "Liberty91",
    name: "Liberty91",
    description:
      "Liberty91 is an AI-powered threat intelligence platform that analyzes real-time cybersecurity data tailored to your organization. It monitors news, dark-web feeds, and vulnerability reports, delivering instant alerts and actionable insights. Liberty91 enables proactive threat detection, risk reduction, and faster cybersecurity response.",
    image: Liberty,
    type: "Social"
  },
  {
    id: "Low-Coder",
    name: "Low Coder",
    description:
      "Low Coder is a modern low-code development platform that enables businesses to build applications quickly with minimal coding expertise. The platform provides drag-and-drop interfaces, automation tools, and multi-device integration. The result is faster app deployment, reduced development costs, and scalable digital solutions.",
    image: coder,
    type: "Developer Tools"
  },
  {
    id: "Luminary-Health",
    name: "Luminary Health",
    description:
      "Luminary Health is an innovative digital health platform empowering users and providers with personalized healthcare solutions and wellness management tools. We built a system offering telemedicine access, health tracking, and seamless multi-device integration. The result is accessible, data-driven, and patient-centric healthcare for better outcomes.",
    image: Luminary,
    type: "Logistics"
  },
  {
    id: "Spectra-Solar",
    name: "Spectra Solar",
    description:
      "Spectra Solar delivers clean, renewable solar energy solutions for businesses and homes. We design and deploy scalable solar installations, integrate smart energy management systems, and monitor performance to maximize energy savings. The result is reliable solar power, reduced carbon footprint, and long-term sustainability.",
    image: codaImage,
    type: "Travel"
  },

  {
    id: "Hammers-Tounges",
    name: "Hammers & Tounges",
    description:
      "Hammers & Tongues Auction is a digital auction platform enabling users to bid, buy, and sell products in real time with secure transactions and transparent pricing. We built a system featuring live bidding, smart inventory management, and instant notifications to enhance user engagement. With seamless mobile access and scalable architecture, the platform delivers a fast, secure, and modern auction experience.",
    image: HT,
    type: "Healthcare"
  },
  {
    id: "Palplug",
    name: "Palplug",
    description: `Palplug is a next‑gen professional networking platform connecting talent, recruiters, and businesses worldwide.
 Create rich profiles, share expertise, post jobs, and build meaningful connections — all with intuitive networking, real‑time messaging, and smart discovery tools.
 Palplug empowers professionals and companies to grow, collaborate, and succeed in a modern, connected ecosystem.`,
    image: telegraphyImage,
    type: "Communication"
  },
  {
    id: "Dillon",
    name: "Dillon",
    description:
      "Dillon Gas is a next-gen e-commerce and delivery platform that connects businesses with customers seamlessly. It offers real-time rider tracking via maps, integrated digital wallets, and secure payment options. The result is faster deliveries, smooth transactions, and enhanced customer experience.",
    image: Dillion,
    type: "E-commerce"
  }
];

const PROJECTS_PER_PAGE = 5;

export default function LatestProjects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, endIndex);

  // Preload images for visible projects
  useEffect(() => {
    visibleProjects.forEach((project) => {
      if (project.image) {
        const img = new window.Image();
        // Handle both Next.js static imports and regular URLs
        const imageSrc =
          typeof project.image === "string"
            ? project.image
            : project.image.src || (project.image as any).default?.src;
        if (imageSrc) {
          img.src = imageSrc;
        }
      }
    });
  }, [currentPage, visibleProjects]);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      // Reset selected project to first item of new page
      setSelectedProject(startIndex + PROJECTS_PER_PAGE);
      setImageLoaded(false);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      // Reset selected project to first item of previous page
      setSelectedProject(startIndex - PROJECTS_PER_PAGE);
      setImageLoaded(false);
    }
  };

  const handleProjectSelect = (projectIndex: number) => {
    if (projectIndex !== selectedProject) {
      setImageLoaded(false);
      setSelectedProject(projectIndex);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section id="latest-projects" className="pt-12 pb-0 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Latest{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 items-start">
          {/* Left Side - Project List with Pagination */}
          <div className="flex flex-col bg-black/40 backdrop-blur-sm">
            <div className="space-y-0 flex-1 pt-4">
              {visibleProjects.map((project, index) => {
                const globalIndex = startIndex + index;
                const isSelected = selectedProject === globalIndex;
                return (
                  <button
                    key={project.id}
                    onClick={() => handleProjectSelect(globalIndex)}
                    className={`w-full text-left px-4 py-4 transition-all duration-300 relative ${
                      isSelected
                        ? "bg-red-500/20"
                        : "bg-transparent hover:bg-red-500/10"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
                    )}
                    <span
                      className={`text-sm font-medium transition-colors ${
                        isSelected
                          ? "text-white"
                          : "text-gray-400 hover:text-gray-300"
                      }`}
                    >
                      {project.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-4 py-4 bg-black/60">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 0}
                className={`p-2 rounded transition-all ${
                  currentPage === 0
                    ? "text-gray-600 cursor-not-allowed"
                    : "text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                }`}
                aria-label="Previous page"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage >= totalPages - 1}
                className={`p-2 rounded transition-all ${
                  currentPage >= totalPages - 1
                    ? "text-gray-600 cursor-not-allowed"
                    : "text-gray-400 hover:text-red-400 hover:bg-red-500/10"
                }`}
                aria-label="Next page"
              >
                <svg
                  className="w-5 h-5"
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
              </button>
            </div>
          </div>

          {/* Right Side - Content with Text and Images */}
          <div className="flex flex-col bg-black/40 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Text Content - Small text and button with more width */}
              <div className="flex-[1.5] space-y-4 pt-4">
                <p className="text-sm md:text-base font-normal text-gray-300 leading-relaxed">
                  {projects[selectedProject].description}
                </p>
                {(projects[selectedProject].id ===
                  "Forward-Thinking-Fitness" && (
                  <Link
                    href="/portfolio/ftf"
                    className="inline-block w-full md:w-auto px-6 py-2.5 bg-transparent border border-red-500/60 text-red-400 rounded-lg font-medium hover:bg-red-500/10 hover:border-red-500 transition-all duration-300 text-sm text-center"
                  >
                    See Details
                  </Link>
                )) ||
                  (projects[selectedProject].id === "Yunuak" &&
                    "")
                    // <Link
                    //   href="/portfolio/yunuak"
                    //   className="inline-block w-full md:w-auto px-6 py-2.5 bg-transparent border border-red-500/60 text-red-400 rounded-lg font-medium hover:bg-red-500/10 hover:border-red-500 transition-all duration-300 text-sm text-center"
                    // >
                    //   See Details
                    // </Link>
                }
              </div>

              {/* Images horizontally aligned with text - Made smaller, aligned to top */}
              <div className="flex-shrink-0 w-full lg:w-auto self-start">
                <div className="relative group">
                  <div className="rounded-xl overflow-hidden aspect-[3/4] relative w-full lg:w-[450px] bg-black/20">
                    <Image
                      key={selectedProject}
                      src={projects[selectedProject].image}
                      alt={projects[selectedProject].name}
                      fill
                      priority
                      onLoad={handleImageLoad}
                      className={`object-contain object-top transition-all duration-300 group-hover:scale-105 ${
                        imageLoaded ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="(max-width: 768px) 100vw, 450px"
                    />
                    {!imageLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="w-8 h-8 border-2 border-red-500/30 border-t-red-500 rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
