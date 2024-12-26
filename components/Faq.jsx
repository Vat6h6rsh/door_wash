"use client";

import {
  ChevronDoubleDownIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const faqData = [
  {
    question: "How does the first free wash offer work?",
    answer:
      "Your first wash is completely free up to ₹200. Simply download the app, schedule your first pickup, and the discount will be automatically applied to your order. Any amount exceeding ₹115 will be charged normally.",
  },
  {
    question: "What are your delivery timings?",
    answer:
      "We offer standard 48-hour delivery and express 24-hour delivery services. You can choose your preferred pickup and delivery time slots through the app. We operate from 8 AM to 10 PM every day.",
  },
  {
    question: "What type of detergents do you use?",
    answer:
      "We use premium quality, eco-friendly detergents that are gentle on clothes but tough on stains. All our detergents are dermatologically tested and safe for sensitive skin.",
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order in real-time through our app. You'll receive notifications at every step - from pickup to washing to delivery. You can also contact our customer support 24/7 for any queries.",
  },
  {
    question: "What if my clothes are damaged?",
    answer:
      "We take utmost care of your clothes, but in the rare case of any damage, we have a comprehensive insurance policy. Simply report the issue in the app within 24 hours of delivery, and our team will assist you with compensation.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="mb-4">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full p-6 rounded-lg bg-pastel-blue border border-blue-300 text-left hover:border-green-400 transition-colors duration-300"
    >
      <span className="text-lg font-medium text-pastel-green">{question}</span>
      <ChevronDoubleDownIcon
        className={`w-5 h-5 text-pastel-green transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    {isOpen && (
      <div className="p-6 bg-pastel-blue-light border border-t-0 border-blue-300 rounded-b-lg">
        <p className="text-zinc-900">{answer}</p>
      </div>
    )}
  </div>
);

const Faq = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="faq"
      className="py-24"
      style={
        {
          //background: "linear-gradient(to bottom, #f0faff, #e8f8f5)",
        }
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-pastel-green mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-pastel-blue text-lg max-w-2xl mx-auto">
            Everything you need to know about DoorWash laundry services
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={selected === index}
              onClick={() => setSelected(selected === index ? null : index)}
            />
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-16 text-center">
          <p className="text-pastel-blue mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-pastel-green text-neutral-900 bg-green-400 transition-colors duration-300"
          >
            Contact Support
            <ChevronDoubleRightIcon className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
