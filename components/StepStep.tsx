"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="text-center max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        How It Works
      </h2>
      <Carousel items={cards}></Carousel>
      <div className="text-center mt-10">
        <button className="btn btn-primary text-white text-lg px-8 py-3">
          Try Now - First Wash Free!
        </button>
        <p className="mt-2 text-sm text-gray-500">
          *Terms apply. Valid up to ₹200 on your first order.
        </p>
      </div>
    </div>
  );
}

const data = [
  {
    category:
      "Get our app from App Store or Play Store, or share your number to receive the link.",
    title: "Download App",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    category:
      "Choose your preferred time slot for clothes pickup from your doorstep.",
    title: "Schedule Pickup",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    category:
      "Your clothes are cleaned with premium detergents and modern equipment.",
    title: "We Clean",
    src: "",
  },

  {
    category:
      "Fresh, clean clothes delivered back to your doorstep within 24 hours.",
    title: "Delivery",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
