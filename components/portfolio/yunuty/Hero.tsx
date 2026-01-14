"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/background.png)",
        }}
      >
        {/* Overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-primary/20"></div>
      </div>

      {/* Content with slide animation */}
      <div className="relative z-10 container mx-auto px-6 pt-4 pb-0">
        <div className="max-w-4xl mx-auto text-center animate-slide-up-light">
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-4 mb-2 mt-10">
            <Image
              src="/sub-title-left.svg"
              alt=""
              width={79}
              height={17}
              className="flex-shrink-0"
            />
            <p
              className="text-secondary font-medium tracking-wider uppercase font-poppins"
              style={{ fontSize: "11px" }}
            >
              Future-Ready ERP Solution
            </p>
            <Image
              src="/sub-title-right.svg"
              alt=""
              width={79}
              height={17}
              className="flex-shrink-0"
            />
          </div>

          {/* Main Headline */}
          <h1
            className="font-poppins font-medium text-white mb-3 leading-tight"
            style={{ fontSize: "55px" }}
          >
            The Future of Supply Chain Digital Transformation
          </h1>

          {/* Description */}
          <p
            className="text-gray-300 font-poppins mb-4 max-w-md mx-auto leading-relaxed"
            style={{ fontSize: "14px" }}
          >
            Refining an organization&apos;s comprehensive strategy for its
            entire supply chain and operational processes to promote growth,
            streamline operations, and ensure protection with a cloud-based ERP
            solution.
          </p>

          {/* Email Subscription Form */}
          {/* <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row max-w-xl mx-auto relative mb-4"
          >
            <div className="relative flex-1 w-full">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 pr-32 bg-white rounded-full text-gray-900 placeholder-gray-400 font-poppins focus:outline-none transition-all shadow-[0_0_15px_rgba(79,96,250,0.3)]"
                style={{ fontSize: "14px" }}
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-8 py-3 bg-indigo-900 text-white font-poppins font-semibold rounded-full hover:bg-indigo-800 transition-all shadow-[0_0_15px_rgba(79,96,250,0.3)]"
                style={{ fontSize: "14px" }}
              >
                Submit
              </button>
            </div>
          </form> */}

          {/* Dashboard Preview Image */}
          <div className="mt-4 mb-0">
            <Image
              src="/firstimageone.png"
              alt="Dashboard Preview"
              width={800}
              height={164}
              className="max-w-5xl mx-auto rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
