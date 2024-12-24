import React from "react";

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-lime-600 mb-4">
      {title}
    </h2>
    <p className="text-emerald-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const InputField = ({ label, type = "text", id, placeholder }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-neutral-900 mb-2"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="w-full px-4 py-3 rounded-lg bg-sky-50 border border-neutral-600 text-neutral-900 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder={placeholder}
    />
  </div>
);

const TextAreaField = ({ label, id, placeholder }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-neutral-900 mb-2"
    >
      {label}
    </label>
    <textarea
      id={id}
      rows={4}
      className="w-full px-4 py-3 rounded-lg bg-sky-50 border border-neutral-600 text-neutral-900 placeholder-cyan-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      placeholder={placeholder}
    ></textarea>
  </div>
);

const ContactCard = ({ icon, title, content, link }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center">
      {icon}
    </div>
    <div className="ml-4">
      <p className="text-white font-medium">{title}</p>
      <a
        href={link}
        className="text-neutral-900 hover:text-blue-500 transition-colors duration-300"
      >
        {content}
      </a>
    </div>
  </div>
);

const BusinessHours = ({ hours }) => (
  <div className="p-8 rounded-2xl border border-neutral-800 bg-sky-50">
    <h3 className="text-xl font-semibold text-emerald-500 mb-6">
      Business Hours
    </h3>
    {hours.map(({ day, time }) => (
      <div key={day} className="flex justify-between">
        <span className="text-neutral-400">{day}</span>
        <span className="text-white">{time}</span>
      </div>
    ))}
  </div>
);

const Contact = () => {
  const hours = [
    { day: "Monday - Saturday", time: "8:00 AM - 10:00 PM" },
    { day: "Sunday", time: "9:00 AM - 8:00 PM" },
  ];

  return (
    <section id="contact" className="py-24 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get in Touch"
          subtitle="Have questions? We're here to help 24/7"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative p-8 rounded-2xl border border-neutral-800 bg-zinc-50">
            <form className="space-y-6">
              <InputField
                label="Your Name"
                id="name"
                placeholder="Enter your name"
              />
              <InputField
                label="Phone Number"
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
              <InputField
                label="Email Address"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
              <TextAreaField
                label="Message"
                id="message"
                placeholder="How can we help you?"
              />
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-emerald-500 text-white hover:bg-sky-500 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-neutral-800 bg-sky-50">
              <h3 className="text-xl font-semibold text-white mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <ContactCard
                  icon={
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  }
                  title="Phone"
                  content="1800-123-456-789"
                  link="tel:1800123456789"
                />
                <ContactCard
                  icon={
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  }
                  title="Email"
                  content="support@doorwash.com"
                  link="mailto:support@doorwash.com"
                />
              </div>
            </div>
            <BusinessHours hours={hours} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
