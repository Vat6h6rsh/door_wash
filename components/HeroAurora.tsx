"use client";

import React from "react";
import Image from "next/image";

export function HeroAurora() {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('/letizia-bordoni-vF9AtbfvFoM-unsplash.jpg')`,
        fontFamily: "'San Francisco', sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      {/* Dark overlay for contrast */}
      <div className="relative z-10 text-center space-y-8 px-4 sm:px-8 md:px-16">
        {/* Main heading */}
        <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
          Laundry Service at Your Doorstep
        </div>

        {/* Subheading with new font size, italics, and adjusted margin */}
        <div className="font-extralight text-sm sm:text-lg md:text-3xl text-neutral-200 py-4 shadow-lg bg-white/20 backdrop-blur-sm rounded-lg max-w-2xl mx-auto italic">
          Professional laundry service that's cheaper than your local laundry
          with express delivery.
        </div>

        {/* Phone number input field */}
        <input
          type="text"
          placeholder="Enter your Phone Number"
          className="input input-bordered input-success w-full max-w-xs mt-6 bg-white/40 text-white placeholder-white focus:outline-none rounded-lg backdrop-blur-sm"
        />

        {/* Call to Action Button */}
        <button className="bg-white/60 rounded-full w-fit text-black dark:text-white px-6 py-3 mt-4 backdrop-blur-sm shadow-lg hover:bg-white/70 transition-all duration-300">
          Get App Link
        </button>

        {/* App Store and Google Play images with centered alignment */}
        <div className="mt-8 flex justify-center gap-8 flex-wrap">
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/AppStore.png"
              alt="App Store"
              width={150}
              height={40}
              className="max-w-[150px] sm:max-w-[180px]"
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
              width={150}
              height={40}
              className="max-w-[150px] sm:max-w-[180px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
