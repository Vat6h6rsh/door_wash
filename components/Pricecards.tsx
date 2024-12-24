"use client";

import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import React from "react";

const pricingData = [
  {
    title: "Regular Wash",
    price: "₹49 /kg",
    features: ["Wash & Fold", "48 Hour Delivery", "Free Pickup & Delivery"],
    buttonLabel: "Select Plan",
  },
  {
    title: "Express Wash",
    price: "₹69 /kg",
    features: [
      "Wash & Fold",
      "24 Hour Delivery",
      "Priority Processing",
      "Free Pickup & Delivery",
    ],
    buttonLabel: "Select Plan",
  },
  {
    title: "Dry Clean",
    price: "₹99 /piece",
    features: [
      "Premium Dry Clean",
      "48 Hour Delivery",
      "Stain Treatment",
      "Free Pickup & Delivery",
    ],
    buttonLabel: "Select Plan",
  },
];

const PriceCards = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed min-h-[600px] md:min-h-[700px] lg:min-h-[800px]"
      style={{
        backgroundImage: `url('/currency.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow-lg">
          Simple, Transparent Pricing
        </h1>
        <h3 className="text-lg md:text-xl font-light mb-8">
          Affordable rates for all your laundry needs with no hidden charges
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-80 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {plan.title}
                </h2>

                {/* Price */}
                <p className="text-4xl font-bold text-gray-900 mb-4">
                  {plan.price}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckBadgeIcon className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-105 transition mt-auto">
                  {plan.buttonLabel}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceCards;
