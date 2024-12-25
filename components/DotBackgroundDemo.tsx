import React from "react";

export function DotBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-white bg-black dark:bg-dot-black/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 py-8">
        Backgrounds
      </p>
    </div>
  );
}
