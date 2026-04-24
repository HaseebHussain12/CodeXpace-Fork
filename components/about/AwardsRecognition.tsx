'use client';

export default function AwardsSection() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-black overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[300px] md:h-[400px] bg-red-700/20 blur-[140px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        {/* heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4 md:mb-6">
          <span className="text-white">Awards &</span>{' '}
          <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-500 bg-clip-text text-transparent">
            Recognition
          </span>
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10 md:mb-16 text-sm sm:text-base">
          At DevsOrb, recognition reflects the trust our clients place in us and the value we deliver through technology.
          Our dedication to innovation, quality, and client success has been acknowledged by industry leaders and global platforms.
        </p>

        {/* cards */}
        <div className="grid grid-cols-1 max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1 min-[1025px]:grid-cols-3 gap-6 md:gap-8">

          {/* card 1 */}
          <div className="rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center border border-red-400">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path fill="rgb(255, 255, 255)" d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
              </svg>
            </div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Top Software Development Company 2025
            </h3>
            <p className="text-gray-400 text-sm">
              Recognized by leading tech directories for consistent delivery of high-quality custom software solutions.
            </p>
          </div>

          {/* card 2 */}
          <div className="rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center border border-red-400">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path fill="rgb(255, 255, 255)" d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
              </svg>
            </div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Clutch Leader in AI and Blockchain Development
            </h3>
            <p className="text-gray-400 text-sm">
              Acknowledged as a top provider for emerging technology projects, including AI-powered platforms and blockchain solutions.
            </p>
          </div>

          {/* card 3 */}
          <div className="rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
            <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 md:mb-6 rounded-full flex items-center justify-center border border-red-400">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path fill="rgb(255, 255, 255)" d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
              </svg>
            </div>
            <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">
              Trusted by Global Clients
            </h3>
            <p className="text-gray-400 text-sm">
              Featured in international case studies for helping businesses scale with reliable engineering teams.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}