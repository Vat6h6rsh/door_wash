import { EnvelopeOpenIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Reusable Section Header
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{title}</h2>
    <p className="text-neutral-700 text-lg max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

// Reusable Input and TextArea Fields
const InputField = ({ label, type = "text", id, placeholder, rows }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-neutral-900 mb-2"
    >
      {label}
    </label>
    {rows ? (
      <textarea
        id={id}
        rows={rows}
        className="w-full px-4 py-3 rounded-lg bg-sky-50 border border-neutral-600 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        className="w-full px-4 py-3 rounded-lg bg-sky-50 border border-neutral-600 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    )}
  </div>
);

// Reusable Contact Card
const ContactCard = ({ icon, title, content, link }) => (
  <div className="flex items-start">
    <div className="w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center">
      {icon}
    </div>
    <div className="ml-4">
      <p className="text-neutral-600 font-medium">{title}</p>
      <a
        href={link}
        className="text-neutral-900 hover:text-blue-500 transition-colors duration-300"
      >
        {content}
      </a>
    </div>
  </div>
);

// Business Hours
const BusinessHours = ({ hours }) => (
  <div className="p-8 rounded-2xl border border-neutral-800 bg-sky-50">
    <h3 className="text-xl font-semibold text-emerald-500 mb-6">
      Business Hours
    </h3>
    {hours.map(({ day, time }) => (
      <div key={day} className="flex justify-between text-neutral-600">
        <span>{day}</span>
        <span>{time}</span>
      </div>
    ))}
  </div>
);

// Download Card
export const DownloadCard = () => (
  <div className="p-8 rounded-2xl border border-neutral-800 bg-sky-50 flex flex-col items-center">
    <h3 className="text-xl font-semibold text-emerald-500 mb-6">
      Download Our App
    </h3>
    <div className="flex flex-col gap-6">
      {["GooglePlay", "AppStore"].map((store) => (
        <Image
          key={store}
          src={`/${store}.png`}
          width={150}
          height={40}
          alt={`Download on ${store}`}
          className="hover:scale-105 transition-transform"
        />
      ))}
    </div>
  </div>
);

// Contact Section
const Contact = () => {
  const hours = [
    { day: "Monday - Saturday", time: "8:00 AM - 10:00 PM" },
    { day: "Sunday", time: "9:00 AM - 8:00 PM" },
  ];

  return (
    <section id="contact" className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get in Touch"
          subtitle="Have questions? We're here to help 24/7"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-2xl border border-neutral-800 bg-sky-50">
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
              <InputField
                label="Message"
                id="message"
                placeholder="How can we help you?"
                rows={4}
              />
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-emerald-500 text-neutral-900 hover:bg-sky-500 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl border border-neutral-800 bg-sky-50">
              <h3 className="text-xl font-semibold text-neutral-600 mb-6">
                Quick Contact
              </h3>
              <ContactCard
                icon={<PhoneIcon className="w-6 h-6 text-blue-700" />}
                title="Phone"
                content="+91 9942005010"
                link="tel:+91 9942005010"
              />
              <ContactCard
                icon={<EnvelopeOpenIcon className="w-6 h-6 text-green-500" />}
                title="Email"
                content="support@doorwash.com"
                link="mailto:support@doorwash.com"
              />
            </div>
            <BusinessHours hours={hours} />
            <DownloadCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
