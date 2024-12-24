import React from "react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  TruckIcon,
  CalendarIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Download App",
    description:
      "Get our app from App Store or Play Store, or share your number to receive the link.",
    icon: <PhoneIcon className="w-8 h-8 text-blue-500" />,
    bgColor: "bg-blue-500/20",
  },
  {
    title: "Schedule Pickup",
    description:
      "Choose your preferred time slot for clothes pickup from your doorstep.",
    icon: <CalendarIcon className="w-8 h-8 text-purple-500" />,
    bgColor: "bg-purple-500/20",
  },
  {
    title: "We Clean",
    description:
      "Your clothes are cleaned with premium detergents and modern equipment.",
    icon: <CheckCircleIcon className="w-8 h-8 text-green-500" />,
    bgColor: "bg-green-500/20",
  },
  {
    title: "Delivery",
    description:
      "Fresh, clean clothes delivered back to your doorstep within 24 hours.",
    icon: <TruckIcon className="w-8 h-8 text-pink-500" />,
    bgColor: "bg-pink-500/20",
  },
];

const Step = ({ title, description, icon, bgColor }) => (
  <div className="relative flex flex-col items-center text-center p-8 rounded-2xl shadow-lg bg-opacity-90 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
    <div
      className={`w-16 h-16 flex items-center justify-center rounded-full ${bgColor} mb-6`}
    >
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-cyan-500 mb-3">{title}</h3>
    <p className="text-neutral-400">{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section
      id="how_it_works"
      className="py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url('/brina-blum-NCRlqW_jkIQ-unsplash.jpg')`,
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            How DoorWash Works
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Simple steps to get your laundry done without leaving your home.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              title={step.title}
              description={step.description}
              icon={step.icon}
              bgColor={step.bgColor}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 text-cyan-400 hover:bg-blue-700 transition-all duration-300"
          >
            <span>Try Now - First Wash Free!</span>
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </a>
          <p className="mt-4 text-sm text-yellow-600">
            *Terms apply. Valid up to ₹200 on your first order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
