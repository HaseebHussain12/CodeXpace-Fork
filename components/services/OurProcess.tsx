"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const defaultProcessSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Planning",
    description:
      "In this stage, we carefully understand your expectations about how your app must look. Discuss the app's user interface, features, user flow, and technical implications. Proposing a solution and creating a final project delivery plan."
  },
  {
    number: 2,
    title: "Design",
    description:
      "At this step, we work on combining information architecture, interaction design, usability, wireframes, and visual design to provide you with an app design that will help you to attract new users, create a good impression at first, and build loyalty later."
  },
  {
    number: 3,
    title: "Development",
    description:
      "In the development phase we develop the project source code, integrate all the APIs, and optimize the working code for a better user experience. All of the processes are seated up with the best Agile methodologies: Plan, Iterate, Evaluate and Repeat."
  },
  {
    number: 4,
    title: "QA/Testing",
    description:
      "Perform rigorous QA/Testing (unit testing, functionality testing, performance testing, usability testing, and acceptance testing) to ensure the launch of a good quality and bug-free product."
  },
  {
    number: 5,
    title: "Deployment",
    description:
      "Prepare for the launch, beta live, and live the project on the respective app store(s)."
  },
  {
    number: 6,
    title: "Support",
    description:
      "Software issues resolution to ensure quality and complete functionality, as well as a retrospective analysis to prevent further issues."
  },
  {
    number: 7,
    title: "Maintenance / Enhancement",
    description:
      "Providing on-demand complete software maintenance, feedback monitoring, and functionality enhancement services."
  }
];

interface OurProcessProps {
  steps?: ProcessStep[];
}

export default function OurProcess(props: OurProcessProps = {}) {
  const { steps } = props;
  const processSteps = steps ?? defaultProcessSteps;
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoAdvanceIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-advance to next step every 3 seconds
  useEffect(() => {
    if (!isVisible) return;

    autoAdvanceIntervalRef.current = setInterval(() => {
      setSelectedStep((prev) => {
        const nextStep = prev + 1;
        return nextStep > processSteps.length ? 1 : nextStep;
      });
    }, 3000);

    return () => {
      if (autoAdvanceIntervalRef.current) {
        clearInterval(autoAdvanceIntervalRef.current);
      }
    };
  }, [isVisible]);

  const handleStepClick = (stepNumber: number) => {
    setSelectedStep(stepNumber);
    // Reset the auto-advance timer when user manually clicks
    if (autoAdvanceIntervalRef.current) {
      clearInterval(autoAdvanceIntervalRef.current);
    }
    autoAdvanceIntervalRef.current = setInterval(() => {
      setSelectedStep((prev) => {
        const nextStep = prev + 1;
        return nextStep > processSteps.length ? 1 : nextStep;
      });
    }, 3000);
  };

  const selectedStepData = processSteps.find(
    (step) => step.number === selectedStep
  );

  return (
    <section ref={sectionRef} className="py-20 bg-black relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          Our{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Process
          </span>
        </h2>

        {/* Process Flow Timeline */}
        <div
          className={`relative mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Connecting Line */}
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-gray-800 hidden md:block"></div>

          {/* Process Steps */}
          <div className="flex flex-wrap justify-between items-start gap-4 md:gap-0">
            {processSteps.map((step, index) => {
              const isSelected = selectedStep === step.number;
              const isLast = index === processSteps.length - 1;

              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center flex-1 min-w-[80px] md:min-w-0"
                >
                  {/* Step Circle */}
                  <button
                    onClick={() => handleStepClick(step.number)}
                    className={`relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-lg md:text-xl transition-all duration-300 border-2 ${isSelected
                      ? "bg-gradient-to-br from-red-600 to-red-500 scale-110 shadow-lg shadow-red-500/50 border-red-500"
                      : "bg-gray-800 hover:bg-gray-700 border-gray-700"
                      }`}
                    style={{
                      boxShadow: isSelected
                        ? "0 0 0 4px rgba(220, 38, 38, 0.2), 0 0 20px rgba(220, 38, 38, 0.4), 0 0 40px rgba(220, 38, 38, 0.2)"
                        : undefined
                    }}
                  >
                    <span className="text-white">{step.number}</span>
                    {/* Glow effect for selected step */}
                    {isSelected && (
                      <>
                        <div className="absolute inset-0 rounded-full bg-red-500/30 animate-ping"></div>
                        <div className="absolute inset-0 rounded-full border-2 border-red-500/50"></div>
                      </>
                    )}
                  </button>

                  {/* Step Title */}
                  <p
                    className={`mt-3 text-xs md:text-sm text-center font-medium transition-colors duration-300 ${isSelected ? "text-white" : "text-gray-400"
                      }`}
                  >
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Description Card */}
        <div
          className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div
            className="bg-black/60 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 md:p-12 relative overflow-hidden"
            style={{
              boxShadow:
                "0 8px 32px rgba(220, 38, 38, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)"
            }}
          >
            {/* Decorative gradient */}
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
              style={{ transform: "translate(30%, -30%)" }}
            ></div>
            <div
              className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
              style={{ transform: "translate(-30%, 30%)" }}
            ></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                {selectedStepData?.title}
              </h3>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  {selectedStepData?.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 hover:scale-105 transform uppercase tracking-wide"
          >
            Let&apos;s Talk About Project
          </Link>
        </div>
      </div>
    </section>
  );
}

