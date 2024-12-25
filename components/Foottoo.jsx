import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer2 = () => {
  const socialLinks = [
    { platform: "Facebook", icon: <FaFacebookF />, url: "#" },
    { platform: "Instagram", icon: <FaInstagram />, url: "#" },
    { platform: "Twitter", icon: <FaTwitter />, url: "#" },
  ];

  const quickLinks = ["Features", "Pricing", "How it Works", "FAQs"];
  const supportLinks = [
    "Contact Us",
    "Privacy Policy",
    "Terms of Service",
    "Refund Policy",
  ];
  const policies = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  return (
    <footer className="bg-zinc-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/doorwash_combined_logo.svg"
                alt="DoorWash Logo"
                width={200}
                height={50}
              />
            </div>
            <div className="flex space-x-4">
              {socialLinks.map(({ platform, icon, url }) => (
                <a
                  key={platform}
                  href={url}
                  className="text-cyan-700 hover:text-lime-500 transition-colors duration-300"
                  aria-label={platform}
                >
                  {icon}
                </a>
              ))}
            </div>
            <div>
              <p className="text-cyan-400">
                Premium laundry service at your doorstep
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "_")}`}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div className="flex flex-col gap-6">
            <Image
              src="/GooglePlay.png"
              width={150}
              height={40}
              alt="Download on Google Play"
              className="hover:scale-105 transition-transform"
            />
            <Image
              src="/AppStore.png"
              width={150}
              height={40}
              alt="Download on App Store"
              className="hover:scale-105 transition-transform"
            />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © 2024 DoorWash. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {policies.map((policy) => (
                <a
                  key={policy}
                  href="#"
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
