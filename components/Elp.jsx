import React from "react";
import {
  BoltIcon,
  CheckBadgeIcon,
  DocumentCurrencyRupeeIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Express Delivery",
    description:
      "Get your fresh, clean clothes delivered back to you within 24 hours. Fast and reliable service at your doorstep.",
    icon: <BoltIcon className="w-6 h-6 text-cyan-500" />,
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Cheaper Than Local",
    description:
      "Enjoy professional laundry service at prices lower than your local laundry. Plus, get your first wash free*!",
    icon: <DocumentCurrencyRupeeIcon className="w-6 h-6 text-green-600" />,
    bgColor: "bg-green-500/10",
  },
  {
    title: "Premium Materials",
    description:
      "We use high-quality detergents and modern equipment to ensure your clothes get the best possible care.",
    icon: <CheckBadgeIcon className="w-6 h-6 text-fuchsia-700" />,
    bgColor: "bg-purple-500/10",
  },
];

const Feature = ({ title, description, icon, bgColor }) => (
  <div className="group relative p-8 rounded-2xl shadow-lg bg-opacity-90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
    <div className="relative">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-lg ${bgColor} mb-6`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-sky-950">{title}</h3>
      <p className="text-zinc-800">{description}</p>
    </div>
  </div>
);

const PromotionBanner = () => (
  <div className="mt-16 p-8 rounded-2xl bg-white/90 shadow-md">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          First Wash Free!
        </h3>
        <p className="text-gray-700">
          Try our premium service today. Valid up to ₹200 on your first order.
        </p>
      </div>
      <a
        href="#"
        className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-300"
      >
        Get Started
        <BoltIcon className="w-5 h-5 ml-2" />
      </a>
    </div>
  </div>
);

const Elp = () => (
  <section
    id="features"
    className="relative py-24 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage: `url('/peter-aschoff-j7BDBE0QjUE-unsplash.jpg')`,
    }}
  >
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Why Choose DoorWash?
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Experience premium laundry service that's both affordable and
          convenient.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            bgColor={feature.bgColor}
          />
        ))}
      </div>

      {/* Promotion Banner */}
      <PromotionBanner />
    </div>
  </section>
);

export default Elp;
