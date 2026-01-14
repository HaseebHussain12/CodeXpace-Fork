"use client";

import Image from "next/image";

export default function CardsSection() {
  const column1 = [
    {
      image: "/col1-1.png",
      title: "Sales Orders",
      description: "Create, manage, and track sales orders efficiently",
    },
    {
      image: "/col1-2.png",
      title: "Invoices",
      description: "Generate and manage invoices with ease",
    },
    {
      image: "/col1-3.png",
      title: "Estimates",
      description: "Create professional estimates for your clients",
    },
  ];

  const column2 = [
    {
      image: "/col2-1.png",
      title: "Products",
      description: "Manage your product catalog and inventory",
    },
    {
      image: "/col2-2.png",
      title: "Inventory",
      description: "Track and manage inventory levels in real-time",
    },
    {
      image: "/col2-3.png",
      title: "Customers",
      description: "Manage customer relationships and data",
    },
  ];

  const column3 = [
    {
      image: "/col3-1.png",
      title: "Reports",
      description: "Generate comprehensive business reports",
    },
    {
      image: "/col3-2.png",
      title: "Analytics",
      description: "Get insights with advanced analytics",
    },
    {
      image: "/col3-3.png",
      title: "Settings",
      description: "Configure and customize your system",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Cards Row */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Card 1 - High-Level Workflow Visibility */}
            <div className="relative rounded-lg overflow-hidden border border-white/20 bg-transparent backdrop-blur-sm hover:bg-primary/10 transition-all p-6">
              {/* Icon and Text Row */}
              <div className="flex items-start gap-6 mb-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.3"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="20"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.5"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M32 22L36 28L32 34L28 28L32 22Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-white text-xl font-poppins font-medium mb-2">
                    High-Level Workflow Visibility
                  </h3>
                  <p className="text-gray-300 text-sm font-poppins leading-relaxed">
                    With YunutyConnect, clients gain real-time insights into
                    inventory and operations across the entire supply chain...
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Mobile-App Access */}
            <div className="relative rounded-lg overflow-hidden border border-white/20 bg-transparent backdrop-blur-sm hover:bg-primary/10 transition-all p-6">
              {/* Icon and Text Row */}
              <div className="flex items-start gap-6 mb-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <rect
                      x="12"
                      y="12"
                      width="40"
                      height="40"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.3"
                    />
                    <rect
                      x="16"
                      y="16"
                      width="32"
                      height="32"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.5"
                    />
                    <rect
                      x="20"
                      y="20"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect
                      x="28"
                      y="28"
                      width="8"
                      height="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-white text-xl font-poppins font-medium mb-2">
                    Mobile-App Access
                  </h3>
                  <p className="text-gray-300 text-sm font-poppins leading-relaxed">
                    Our mobile-friendly ERP tools put critical data and workflows at
                    your fingertips.
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="relative w-full bg-transparent" style={{ aspectRatio: "16/10" }}>
                <Image
                  src="/card2.png"
                  alt="Mobile-App Access"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
