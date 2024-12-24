import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust DoorWash with their
            laundry
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <TestimonialCard
            name="Sarah Thompson"
            role="Regular Customer"
            avatarUrl="https://avatar.iran.liara.run/public"
            rating={5}
            feedback="Express delivery is amazing! My clothes come back perfectly clean and fresh every time. The app makes scheduling super easy."
          />
          {/* Testimonial 2 */}
          <TestimonialCard
            name="Michael Chen"
            role="New Customer"
            avatarUrl="https://avatar.iran.liara.run/public"
            rating={5}
            feedback="Absolutely love the service! The attention to detail and care for my clothes are unparalleled."
          />
          {/* Add more testimonials as needed */}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  name: string;
  role: string;
  avatarUrl: string;
  rating: number;
  feedback: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  avatarUrl,
  rating,
  feedback,
}) => {
  return (
    <div className="group relative p-8 rounded-2xl border border-blue-500/50 bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br to-purple-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative">
        <div className="flex items-center mb-6">
          <img
            src={avatarUrl}
            alt={name}
            className="w-12 h-12 rounded-full transition-opacity duration-300 opacity-100"
            loading="lazy"
          />
          <div className="ml-4">
            <h4 className="text-cyan-500 font-semibold">{name}</h4>
            <p className="text-neutral-400 text-sm">{role}</p>
          </div>
        </div>
        <div className="flex mb-4">
          {Array.from({ length: rating }, (_, index) => (
            <svg
              key={index}
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        <p className="text-emrald-500">{`"${feedback}"`}</p>
      </div>
    </div>
  );
};

export default Testimonials;
