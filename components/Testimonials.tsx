import { StarIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

// Testimonial data
const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Regular Customer",
    avatarUrl: "https://avatar.iran.liara.run/public",
    rating: 5,
    feedback:
      "Express delivery is amazing! My clothes come back perfectly clean and fresh every time. The app makes scheduling super easy.",
  },
  {
    name: "Michael Chen",
    role: "New Customer",
    avatarUrl: "https://avatar.iran.liara.run/public",
    rating: 5,
    feedback:
      "Absolutely love the service! The attention to detail and care for my clothes are unparalleled.",
  },
  {
    name: "Sarah Thompson",
    role: "Regular Customer",
    avatarUrl: "https://avatar.iran.liara.run/public",
    rating: 5,
    feedback:
      "Express delivery is amazing! My clothes come back perfectly clean and fresh every time. The app makes scheduling super easy.",
  },
  // Add more testimonials as needed
];

// Testimonial card component
const TestimonialCard: React.FC<{
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  feedback: string;
}> = ({ name, role, avatarUrl, rating, feedback }) => (
  <div className="group relative p-8 rounded-2xl border border-blue-500/50 bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-emerald-100 to-sky-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative">
      <div className="flex items-center mb-6">
        <Image
          src={avatarUrl}
          alt={name}
          className="w-12 h-12 rounded-full transition-opacity duration-300 opacity-100"
          width={48}
          height={48}
          loading="lazy"
        />
        <div className="ml-4">
          <h4 className="text-black font-semibold">{name}</h4>
          <p className="text-neutral-700 text-sm">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, index) => (
          <StarIcon
            key={index} // Unique key for each star
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
          />
        ))}
      </div>
      <p className="text-emerald-500">{`"${feedback}"`}</p>
    </div>
  </div>
);

// Main Testimonials Component
const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-24"
      style={
        {
          // background: "linear-gradient(to bottom, white, #9eeaf7, #bbf0d6)",
        }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What Our Customers Say
          </h2>
          <p className="text-neutral-700 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust DoorWash with their
            laundry
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
