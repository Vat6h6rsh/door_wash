"use client";
import Header from "@/components/Header";
import PriceCards from "@/components/Pricecards";
import Faq from "@/components/Faq";
import HowItWorks from "@/components/HowItWorks";
import Elp from "@/components/Elp";
import { HeroAurora } from "@/components/HeroAurora";
import Announcement from "@/components/Announcement";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import WappHeader from "@/components/WappHeader";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import SmoothParallaxScroll from "@/components/SmoothParallaxScroll";
import Footer1 from "@/components/Footer";
import Footer from "@/components/Footer3";
import Footer2 from "@/components/Foottoo";
import { DotBackgroundDemo } from "@/components/DotBackgroundDemo";

export default function Home() {
  const [isAnnouncementVisible, setAnnouncementVisible] = useState(true);
  //bg-gradient-to-b from-amber-50 via-purple-100 via-blue-100via-emerald-100 to-gray-50
  return (
    <div>
      {isAnnouncementVisible && (
        <Announcement onClose={() => setAnnouncementVisible(false)} />
      )}
      <WappHeader isAnnouncementVisible={isAnnouncementVisible} />
      <main className="flex-grow">
        {/* Sections with id for navigation */}
        <section id="hero">
          <HeroAurora />
        </section>
        <section id="elp">
          <Elp />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="price-cards" className="relative z-10">
          <PriceCards />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq">
          <Faq />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer2 />
    </div>
  );
}
