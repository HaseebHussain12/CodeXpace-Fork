"use client";

export default function FeaturesSection() {
  const features = [
    { text: "Inventory Visibility", color: "orange" },
    { text: "Customer Portal Access", color: "purple" },
    { text: "Integrated Financial Management", color: "green" },
    { text: "Interconnectivity", color: "blue" },
    { text: "Online Payment", color: "red" },
    { text: "Demand Forecasting & Planning", color: "orange" },
    { text: "Mobile Accessibility", color: "purple" },
    { text: "Live Quickbooks Connection", color: "green" },
    { text: "Process Automation", color: "purple" },
    { text: "Real-Time Analytics & Reporting", color: "orange" },
  ];

  const getDiamondColor = (color: string) => {
    const colors: Record<string, string> = {
      orange: "#FF6B35",
      purple: "#8C5FFF",
      green: "#4CAF50",
      blue: "#2196F3",
      red: "#F44336",
    };
    return colors[color] || "#8C5FFF";
  };

  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center bg-primary"
      style={{
        backgroundImage: "url(/secpage.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-primary/40"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <div className="relative flex flex-wrap justify-center items-center gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 bg-primary/80 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full font-poppins text-sm hover:bg-primary/90 transition-all"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"
                    fill={getDiamondColor(feature.color)}
                  />
                </svg>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

