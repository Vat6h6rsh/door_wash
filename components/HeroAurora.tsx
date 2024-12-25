"use client";

import React from "react";
import Image from "next/image";

export function HeroAurora() {
  return (
    // <AuroraBackground>
    //   <motion.div
    //     initial={{ opacity: 0.0, y: 40 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{
    //       delay: 0.3,
    //       duration: 0.8,
    //       ease: "easeInOut",
    //     }}
    //     className="relative flex flex-col gap-4 items-center justify-center px-4"
    //   >
    <section
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center py-24 bg-fixed"
      style={{
        backgroundImage: `url("/tommaso-pecchioli-wQg7K-Aod50-unsplash.jpg")`,
        fontFamily: "'San Francisco', sans-serif",
      }}
    >
      <div className="absolute inset-0 "></div>{" "}
      {/* Light overlay for contrast */}
      <div className="relative z-10 text-center space-y-8 px-4 sm:px-8 md:px-16">
        {/* Main heading */}
        <div className="text-6xl sm:text-6xl md:text-7xl font-bold text-neutral-950">
          Laundry Service at Your Doorstep
        </div>

        {/* Subheading aligned to the center */}
        <div className="text-center text-xl sm:text-lg md:text-xl text-Blue-900 py-4 max-w-2xl gap-8 mx-auto">
          Professional laundry service that&apos;s cheaper than your local
          laundry with express delivery.
        </div>

        {/* Phone number input field */}
        <form className="flex gap-3 flex-col sm:flex-row">
          {/* Phone Number Input */}
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Enter your Phone Number"
              className="w-2/3 px-6 py-3 rounded-lg bg-white/40 text-cyans-800 placeholder-black focus:outline-double focus:ring-2 focus:ring-blue-500 backdrop-blur-sm pr-4"
            />
          </div>

          {/* Call to Action Button */}
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-emerald-500 transition-all duration-300"
          >
            Get App Link
          </button>
        </form>

        {/* App Store and Google Play images */}
        <div className="mt-8 flex justify-center gap-8 flex-wrap ">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/AppStore.png"
              alt="App Store"
              width={160}
              height={50}
              className="max-w-[150px] sm:max-w-[180px] hover:scale-105 transition-transform"
            />
          </a>
          <a
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/GooglePlay.png"
              alt="Google Play"
              width={200}
              height={50}
              className="max-w-[150px] sm:max-w-[180px] hover:scale-105 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>

    //   </motion.div>
    // </AuroraBackground>
  );
}
