"use client";
import PriceCards from "@/components/Pricecards";
import Faq from "@/components/Faq";
import HowItWorks from "@/components/HowItWorks";
import Elp from "@/components/Elp";
import { HeroAurora } from "@/components/HeroAurora";
import Announcement from "@/components/Announcement";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import WappHeader from "@/components/WappHeader";
import { useState } from "react";
import Footer2 from "@/components/Foottoo";
import Head from "next/head";

export default function Home() {
  const [isAnnouncementVisible, setAnnouncementVisible] = useState(true);
  //bg-gradient-to-b from-amber-50 via-purple-100 via-blue-100via-emerald-100 to-gray-50
  return (
    <div>
      <Head>
        <title>Door Wash - Premium Laundry Service</title>
        <meta
          name="description"
          content="Get premium laundry service at your doorstep with Door Wash. Use the code LAUNDRY120 to get ₹115 off on your first order."
        />
        <meta
          name="keywords"
          content="laundry,best laundry service,laundry in patna, premium laundry service, Door Wash, laundry pickup, laundry delivery, laundry discount code"
        />
        <meta name="author" content="Door Wash" />
        <meta
          property="og:title"
          content="Door Wash - Premium Laundry Service"
        />
        <meta
          property="og:description"
          content="Get premium laundry service at your doorstep with Door Wash. Use the code LAUNDRY120 to get ₹120 off on your first order."
        />
        <meta property="og:image" content="/images/hero-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Door Wash - Premium Laundry Service"
        />
        <meta
          name="twitter:description"
          content="Get premium laundry service at your doorstep with Door Wash. Use the code LAUNDRY120 to get ₹120 off on your first order."
        />
        <meta name="twitter:image" content="/images/hero-image.jpg" />
        {/* Add any additional meta tags you need */}
      </Head>
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
