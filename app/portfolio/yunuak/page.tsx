"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./styles.css";
import logo from "../../../assets/portfolio/yunuak/logo.png";
import backgroundImage from "../../../assets/portfolio/yunuak/background.png";
import secpageImage from "../../../assets/portfolio/yunuak/secpage.png";
// TODO: Add Yunuak screen images
// import img1 from "../../../assets/portfolio/yunuak/1.PNG";
// import img2 from "../../../assets/portfolio/yunuak/2.PNG";
// import img3 from "../../../assets/portfolio/yunuak/3.PNG";
// import img4 from "../../../assets/portfolio/yunuak/4.PNG";
// import img5 from "../../../assets/portfolio/yunuak/5.PNG";
// import img1Light from "../../../assets/portfolio/yunuak/1-Light.PNG";
// import img2Light from "../../../assets/portfolio/yunuak/2-Light.PNG";
// import img3Light from "../../../assets/portfolio/yunuak/3-Light.png";
// import img4Light from "../../../assets/portfolio/yunuak/4-Light.PNG";
// import img5Light from "../../../assets/portfolio/yunuak/5-Light.png";

export default function YunuakPortfolio() {
  const [scrollPositions, setScrollPositions] = useState({
    section2: 0,
    section3: 0,
    section4: 0,
    section5: 0,
    section6: 0,
    section7: 0,
    section8: 0,
    section9: 0,
    section10: 0
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);
  const videoRef5 = useRef<HTMLVideoElement>(null);
  const videoRef6 = useRef<HTMLVideoElement>(null);
  const videoRef7 = useRef<HTMLVideoElement>(null);
  const videoRef8 = useRef<HTMLVideoElement>(null);
  const videoRef9 = useRef<HTMLVideoElement>(null);
  const videoRef10 = useRef<HTMLVideoElement>(null);

  // Refs for client section videos (staffSection videos)
  const clientVideoRef3 = useRef<HTMLVideoElement>(null);
  const clientVideoRef4 = useRef<HTMLVideoElement>(null);
  const clientVideoRef5 = useRef<HTMLVideoElement>(null);
  const clientVideoRef6 = useRef<HTMLVideoElement>(null);
  const clientVideoRef7 = useRef<HTMLVideoElement>(null);
  const clientVideoRef8 = useRef<HTMLVideoElement>(null);

  // Refs for horizontal scroll containers
  const section2ScrollRef = useRef<HTMLDivElement>(null);
  const section3ScrollRef = useRef<HTMLDivElement>(null);
  const section4ScrollRef = useRef<HTMLDivElement>(null);
  const section5ScrollRef = useRef<HTMLDivElement>(null);
  const section6ScrollRef = useRef<HTMLDivElement>(null);
  const section7ScrollRef = useRef<HTMLDivElement>(null);
  const section8ScrollRef = useRef<HTMLDivElement>(null);
  const section9ScrollRef = useRef<HTMLDivElement>(null);
  const section10ScrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (sectionKey: string, scrollRef: React.RefObject<HTMLDivElement>) => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      setScrollPositions((prev) => ({
        ...prev,
        [sectionKey]: scrollLeft
      }));
    }
  };

  const handleButtonClick = (scrollRef: React.RefObject<HTMLDivElement>, sectionKey: string) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10; // 10px threshold

      if (isAtEnd) {
        // Scroll left (back to staff app)
        container.scrollTo({
          left: 0,
          behavior: "smooth"
        });
      } else {
        // Scroll right (to client app)
        container.scrollTo({
          left: scrollWidth - clientWidth,
          behavior: "smooth"
        });
      }
    }
  };

  const isScrolledRight = (sectionKey: string) => {
    return scrollPositions[sectionKey as keyof typeof scrollPositions] > 10; // 10px threshold
  };

  useEffect(() => {
    // Scroll to top when portfolio page mounts
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Initialize scroll positions
    const scrollRefs = [
      { ref: section2ScrollRef, key: "section2" },
      { ref: section3ScrollRef, key: "section3" },
      { ref: section4ScrollRef, key: "section4" },
      { ref: section5ScrollRef, key: "section5" },
      { ref: section6ScrollRef, key: "section6" },
      { ref: section7ScrollRef, key: "section7" },
      { ref: section8ScrollRef, key: "section8" },
      { ref: section9ScrollRef, key: "section9" },
      { ref: section10ScrollRef, key: "section10" }
    ];

    scrollRefs.forEach(({ ref, key }) => {
      if (ref.current) {
        handleScroll(key, ref);
      }
    });

    // Cleanup: scroll to top when component unmounts (user navigates away)
    return () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
  }, []);

  useEffect(() => {
    // TODO: Update video paths when Yunuak videos are added
    // Video sources - videos will be in public/assets/portfolio/yunuak/
    const section3Video = "/assets/portfolio/yunuak/section3.mp4";
    const section4Video = "/assets/portfolio/yunuak/section4.mp4";
    const section5Video = "/assets/portfolio/yunuak/section5.mp4";
    const section6Video = "/assets/portfolio/yunuak/section6.MP4";
    const section7Video = "/assets/portfolio/yunuak/section7.MP4";
    const section8Video = "/assets/portfolio/yunuak/section8.MP4";
    const section9Video = "/assets/portfolio/yunuak/section9.mp4";
    const section10Video = "/assets/portfolio/yunuak/section10.MP4";
    const staffSection3Video = "/assets/portfolio/yunuak/staffSection-3.mp4";
    const staffSection4Video = "/assets/portfolio/yunuak/staffSection-4.mp4";
    const staffSection5Video = "/assets/portfolio/yunuak/staffSection-5.mp4";
    const staffSection6Video = "/assets/portfolio/yunuak/staffSection-6.mp4";
    const staffSection7Video = "/assets/portfolio/yunuak/staffSection-7.mp4";
    const staffSection8Video = "/assets/portfolio/yunuak/staffSection-8.mp4";

    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.src = section3Video;
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef4.current) {
      videoRef4.current.src = section4Video;
      videoRef4.current.load();
      videoRef4.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef5.current) {
      videoRef5.current.src = section5Video;
      videoRef5.current.load();
      videoRef5.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef6.current) {
      videoRef6.current.src = section6Video;
      videoRef6.current.load();
      videoRef6.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef7.current) {
      videoRef7.current.src = section7Video;
      videoRef7.current.load();
      videoRef7.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef8.current) {
      videoRef8.current.src = section8Video;
      videoRef8.current.load();
      videoRef8.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (clientVideoRef3.current) {
      clientVideoRef3.current.src = staffSection3Video;
      clientVideoRef3.current.load();
      clientVideoRef3.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (clientVideoRef4.current) {
      clientVideoRef4.current.src = staffSection4Video;
      clientVideoRef4.current.load();
      clientVideoRef4.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (clientVideoRef5.current) {
      clientVideoRef5.current.src = staffSection5Video;
      clientVideoRef5.current.load();
      clientVideoRef5.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (clientVideoRef6.current) {
      clientVideoRef6.current.src = staffSection6Video;
      clientVideoRef6.current.load();
      clientVideoRef6.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (clientVideoRef7.current) {
      clientVideoRef7.current.src = staffSection7Video;
      clientVideoRef7.current.load();
      clientVideoRef7.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (clientVideoRef8.current) {
      clientVideoRef8.current.src = staffSection8Video;
      clientVideoRef8.current.load();
      clientVideoRef8.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef9.current) {
      videoRef9.current.src = section9Video;
      videoRef9.current.load();
      videoRef9.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
    if (videoRef10.current) {
      videoRef10.current.src = section10Video;
      videoRef10.current.load();
      videoRef10.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="yunuak-portfolio-wrapper app-wrapper">
      {/* First Page */}
      <div
        className="app"
        style={{
          backgroundImage: `url(${backgroundImage.src})`
        }}
      >
        {/* Logo at the very top center */}
        <div className="logo-top-center">
          <Image
            src={logo}
            alt="Yunuak Logo"
            className="app-logo"
            width={80}
            height={80}
          />
        </div>

        {/* Hero Section - Centered */}
        <div className="hero-section">
          <p className="hero-label">Future-Ready ERP Solution</p>
          <h1 className="hero-title">The Future of Supply Chain Digital Transformation</h1>
          <p className="hero-description">
            Refining an organization&apos;s comprehensive strategy for its entire supply chain and operational processes to promote growth, streamline operations, and ensure protection with a cloud-based ERP solution.
          </p>
        </div>
      </div>

      {/* Second Page - Login and Authentication */}
      <div 
        className="app app-page-2"
        style={{
          backgroundImage: `url(${secpageImage.src})`
        }}
      >
        {/* Staff App View */}
        <div className="section-view">
          <div className="container">
            {/* Left Side - Phone Screens Gallery */}
            <div className="screens-gallery screens-gallery-left">
              <div className="phone-screens-stack">
                {/* TODO: Add Yunuak screen images when available */}
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className="phone-screen"
                    style={{
                      width: 240,
                      height: 480,
                      background: "#f5f5f5",
                      borderRadius: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontSize: "14px"
                    }}
                  >
                    Image {num}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Content Section */}
            <div className="branding-section branding-section-right">
              <div className="info-section">
                <h2 className="design-title">Authentication & Access</h2>
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">
                      Secure authentication & login: Enterprise-grade security.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">
                      Single Sign-On (SSO): Streamlined access across platforms.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">
                      Role-based access control: Granular permissions management.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet"></div>
                    <p className="feature-text">
                      Multi-factor authentication: Enhanced security layers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Page */}
      <div 
        className="app app-page-3"
        style={{
          backgroundImage: `url(${secpageImage.src})`
        }}
      >
        <div
          className="horizontal-scroll-container"
          ref={section3ScrollRef}
          onScroll={() => handleScroll("section3", section3ScrollRef)}
        >
          <div className="section-view">
            <div className="container">
              {/* TODO: Add section 3 content */}
            </div>
          </div>
        </div>
        <button
          className="next-button"
          onClick={() => handleButtonClick(section3ScrollRef, "section3")}
          aria-label={isScrolledRight("section3") ? "Go left" : "Go right"}
        >
          {isScrolledRight("section3") ? "←" : "→"}
        </button>
      </div>

      {/* Fourth Page */}
      <div 
        className="app app-page-4"
        style={{
          backgroundImage: `url(${secpageImage.src})`
        }}
      >
        <div
          className="horizontal-scroll-container"
          ref={section4ScrollRef}
          onScroll={() => handleScroll("section4", section4ScrollRef)}
        >
          <div className="section-view">
            <div className="container">
              {/* TODO: Add section 4 content */}
            </div>
          </div>
        </div>
        <button
          className="next-button"
          onClick={() => handleButtonClick(section4ScrollRef, "section4")}
          aria-label={isScrolledRight("section4") ? "Go left" : "Go right"}
        >
          {isScrolledRight("section4") ? "←" : "→"}
        </button>
      </div>

      {/* Fifth Page */}
      <div 
        className="app app-page-5"
        style={{
          backgroundImage: `url(${secpageImage.src})`
        }}
      >
        <div
          className="horizontal-scroll-container"
          ref={section5ScrollRef}
          onScroll={() => handleScroll("section5", section5ScrollRef)}
        >
          <div className="section-view">
            <div className="container">
              {/* TODO: Add section 5 content */}
            </div>
          </div>
        </div>
        <button
          className="next-button"
          onClick={() => handleButtonClick(section5ScrollRef, "section5")}
          aria-label={isScrolledRight("section5") ? "Go left" : "Go right"}
        >
          {isScrolledRight("section5") ? "←" : "→"}
        </button>
      </div>

      {/* Sixth Page */}
      <div 
        className="app app-page-6"
        style={{
          backgroundImage: `url(${secpageImage.src})`
        }}
      >
        <div
          className="horizontal-scroll-container"
          ref={section6ScrollRef}
          onScroll={() => handleScroll("section6", section6ScrollRef)}
        >
          <div className="section-view">
            <div className="container">
              {/* TODO: Add section 6 content */}
            </div>
          </div>
        </div>
        <button
          className="next-button"
          onClick={() => handleButtonClick(section6ScrollRef, "section6")}
          aria-label={isScrolledRight("section6") ? "Go left" : "Go right"}
        >
          {isScrolledRight("section6") ? "←" : "→"}
        </button>
      </div>

      {/* Seventh Page */}
      <div 
        className="app app-page-7"
        style={{
          backgroundImage: `url(${secpageImage.src})`
        }}
      >
        <div
          className="horizontal-scroll-container"
          ref={section7ScrollRef}
          onScroll={() => handleScroll("section7", section7ScrollRef)}
        >
          <div className="section-view">
            <div className="container">
              {/* TODO: Add section 7 content */}
            </div>
          </div>
        </div>
        <button
          className="next-button"
          onClick={() => handleButtonClick(section7ScrollRef, "section7")}
          aria-label={isScrolledRight("section7") ? "Go left" : "Go right"}
        >
          {isScrolledRight("section7") ? "←" : "→"}
        </button>
      </div>

      {/* Eighth Page */}
      <div 
        className="app app-page-8"
        style={{
          backgroundImage: `url(${secpageImage.src})`
        }}
      >
        <div
          className="horizontal-scroll-container"
          ref={section8ScrollRef}
          onScroll={() => handleScroll("section8", section8ScrollRef)}
        >
          <div className="section-view">
            <div className="container">
              {/* TODO: Add section 8 content */}
            </div>
          </div>
        </div>
        <button
          className="next-button"
          onClick={() => handleButtonClick(section8ScrollRef, "section8")}
          aria-label={isScrolledRight("section8") ? "Go left" : "Go right"}
        >
          {isScrolledRight("section8") ? "←" : "→"}
        </button>
      </div>

      {/* Ninth Page */}
      <div 
        className="app app-page-9"
        style={{
          backgroundImage: `url(${secpageImage.src})`
        }}
      >
        <div className="section-view">
          <div className="container">
            {/* TODO: Add section 9 content */}
          </div>
        </div>
      </div>

      {/* Tenth Page */}
      <div 
        className="app app-page-10"
        style={{
          backgroundImage: `url(${secpageImage.src})`
        }}
      >
        <div className="section-view">
          <div className="container">
            {/* TODO: Add section 10 content */}
          </div>
        </div>
      </div>
      
    </div>
  );
}
