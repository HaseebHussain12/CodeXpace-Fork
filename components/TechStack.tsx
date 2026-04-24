"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Import all language icons
import djangoIcon from "../assets/languages/django.png";
import reactIcon from "../assets/languages/react.png";
import nodeIcon from "../assets/languages/NODE.png";
import pythonIcon from "../assets/languages/PYTHON.png";
import dockerIcon from "../assets/languages/dok.png";
import kubernetesIcon from "../assets/languages/Kubernetes.png";
import vueIcon from "../assets/languages/vue.png";
import angularIcon from "../assets/languages/anguler.png";
import typescriptIcon from "../assets/languages/TypeScript.png";
import javascriptIcon from "../assets/languages/javascript.png";
import phpIcon from "../assets/languages/php.png";
import awsIcon from "../assets/languages/aws.png";
import azureIcon from "../assets/languages/Azure.png";
import gcpIcon from "../assets/languages/gcp.png";
import mongodbIcon from "../assets/languages/mongodb.png";
import postgresqlIcon from "../assets/languages/Postgresql.png";
import mysqlIcon from "../assets/languages/mysql.png";
import redisIcon from "../assets/languages/redis.png";

const techStack = [
  "django",
  "react",
  "node",
  "python",
  "docker",
  "kubernetes",
  "vue",
  "angular",
  "typescript",
  "javascript",
  "php",
  "aws",
  "azure",
  "gcp",
  "mongodb",
  "postgresql",
  "mysql",
  "redis",
  "nextjs",
  "express"
];

// Map tech names to imported icons
const getIcon = (tech: string) => {
  const iconMap: Record<string, any> = {
    django: djangoIcon,
    react: reactIcon,
    nextjs: nodeIcon, // Using node icon as fallback for nextjs (icon not available)
    node: nodeIcon,
    python: pythonIcon,
    docker: dockerIcon,
    kubernetes: kubernetesIcon,
    vue: vueIcon,
    angular: angularIcon,
    typescript: typescriptIcon,
    javascript: javascriptIcon,
    php: phpIcon,
    aws: awsIcon,
    azure: azureIcon,
    gcp: gcpIcon,
    express: javascriptIcon, // Using javascript icon as fallback for express (icon not available)
    mongodb: mongodbIcon,
    postgresql: postgresqlIcon,
    mysql: mysqlIcon,
    redis: redisIcon,
  };
  return iconMap[tech.toLowerCase()] || reactIcon; // fallback to react icon
};

// Format tech name for display
const formatTechName = (tech: string) => {
  const nameMap: Record<string, string> = {
    nextjs: "Next.js",
    postgresql: "PostgreSQL",
    typescript: "TypeScript",
    javascript: "JavaScript",
    kubernetes: "Kubernetes",
    mongodb: "MongoDB",
    aws: "AWS",
    azure: "Azure",
    gcp: "GCP",
    docker: "Docker",
    vue: "Vue.js",
    angular: "Angular",
    react: "React",
    node: "Node.js",
    python: "Python",
    php: "PHP",
    mysql: "MySQL",
    redis: "Redis",
    django: "Django",
    express: "Express",
  };
  return nameMap[tech.toLowerCase()] || tech.charAt(0).toUpperCase() + tech.slice(1);
};

export default function TechStack() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const itemWidth = 184; // 160px width + 24px gap (gap-6)

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Calculate total width of one set of items for seamless loop
    const totalWidth = techStack.length * itemWidth;
    let position = 0;
    let animationId: number;
    let lastTime = performance.now();
    const speed = 30; // pixels per second

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
      lastTime = currentTime;

      position += speed * deltaTime;

      // Reset position when we've scrolled through one full set
      if (position >= totalWidth) {
        position = 0;
      }

      slider.style.transform = `translateX(-${position}px)`;

      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a short delay
    const startDelay = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 1500);

    return () => {
      clearTimeout(startDelay);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [itemWidth]);

  // Create duplicated array for seamless scrolling
  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-20 bg-black relative">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          What solutions{" "}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Do you need
          </span>
        </h1>
      </div>

      {/* Slider Container - Full Width */}
      <div
        className="relative overflow-hidden py-2"
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }}
      >
        <div
          ref={sliderRef}
          className="flex gap-6"
          style={{
            willChange: 'transform',
            transform: 'translateX(0px)'
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-300 transform"
              style={{
                width: "160px",
              }}
            >
              <div className="flex items-center justify-center" style={{ height: "80px" }}>
                <Image
                  src={getIcon(tech)}
                  alt={tech}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-sm text-center">
                {formatTechName(tech)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
