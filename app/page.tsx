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
import { useEffect } from "react";
import Foo3 from "@/components/Footer3";
import Lenis from "lenis";
import SmoothParallaxScroll from "@/components/SmoothParallaxScroll";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div data-lenis-root className="min-h-screen flex flex-col">
      <Announcement />
      <Header />
      <main className="flex-grow">
        <HeroAurora />
        <Elp />
        <HowItWorks />
        <div className="reletive z-10">
          <PriceCards />
        </div>
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Foo3 />
    </div>
  );
}
