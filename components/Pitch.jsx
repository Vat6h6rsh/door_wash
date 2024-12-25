import {
  CheckBadgeIcon,
  DocumentCurrencyRupeeIcon,
} from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/outline";
import React from "react";
const features = [
  {
    title: "Express Delivery",
    description:
      "Get your fresh, clean clothes delivered back to you within 24 hours. Fast and reliable service at your doorstep.",
    icon: <BoltIcon />,
    bgColor: "bg-blue-500/20",
  },
  {
    title: "Cheaper Than Local",
    description:
      "Enjoy professional laundry service at prices lower than your local laundry. Plus, get your first wash free*!",
    icon: <DocumentCurrencyRupeeIcon />,
    bgColor: "bg-green-500/20",
  },
  {
    title: "Premium Materials",
    description:
      "We use high-quality detergents and modern equipment to ensure your clothes get the best possible care.",
    icon: <CheckBadgeIcon />,
    bgColor: "bg-purple-500/20",
  },
];

const FeatureCard = ({ title, description, icon, bgColor }) => (
  <div className="group relative p-8 rounded-2xl border border-neutral-800 bg-neutral-800/50 hover:border-blue-500/50 transition-all duration-300">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-lg ${bgColor} mb-6`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-neutral-400">{description}</p>
    </div>
  </div>
);

export default function Pitch() {
  return (
    <section className="w-full py-20 px-4 sm:px-8 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-black dark:text-white">
          Why Choose DoorWash?
        </h2>
        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 mt-4">
          Experience premium laundry service that&apos;s both affordable and
          convenient.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
