"use client";
import React, { useEffect, useState } from "react";

const Announcement = () => {
  const announcements = [
    {
      text: "Get Your First Wash Free ✨",
      link: "/collections/bestsellers",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, [announcements.length]);

  return (
    <div id="shopify-section-announcement" className="relative">
      <section
        data-section-id="announcement"
        data-section-type="announcement"
        className="bg-cyan-100 text-black flex items-center justify-center h-12"
      >
        <div className="transition-opacity duration-500 ease-in-out opacity-100 mx-auto py-2.5 text-center text-base">
          <a
            href={announcements[currentIndex].link}
            className="hover:opacity-50"
          >
            {announcements[currentIndex].text}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Announcement;
