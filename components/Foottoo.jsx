import React from "react";

const Footer2 = () => {
  return (
    <footer id="footer" className="bg-zinc-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-950 mb-2">
                DoorWash
              </h3>
              <p className="text-cyan-400">
                Premium laundry service at your doorstep
              </p>
            </div>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {["Facebook", "Instagram", "Twitter"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-cyan-700 hover:text-lime-500 transition-colors duration-300"
                  aria-label={platform}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {/* Add respective SVG paths for each platform */}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "How it Works", "FAQs"].map((link) => (
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
              {[
                "Contact Us",
                "Privacy Policy",
                "Terms of Service",
                "Refund Policy",
              ].map((item) => (
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
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get the App
            </h3>
            <div className="space-y-4">
              {["App Store", "Google Play"].map((store) => (
                <a
                  key={store}
                  href="#"
                  className="block p-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      {/* Add respective SVG paths */}
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-neutral-400">
                        {store === "App Store"
                          ? "Download on the"
                          : "GET IT ON"}
                      </div>
                      <div className="text-sm font-semibold text-white">
                        {store}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm text-center md:text-left">
              © 2024 DoorWash. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (policy) => (
                  <a
                    key={policy}
                    href="#"
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {policy}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
