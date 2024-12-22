"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-cyan-100 text-blue shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/doorwash_combined_logo.svg" // Replace with the name of your SVG file in the public folder
            alt="DoorWash"
            width={90}
            height={40}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#option1" className="hover:underline">
            Features
          </a>
          <a href="#option2" className="hover:underline">
            How it works
          </a>
          <a href="#option3" className="hover:underline">
            Pricing
          </a>
          <a href="#option4" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyan-100">
          <ul className="space-y-2 py-2 text-center">
            <li>
              <a href="#option1" className="block py-2 hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#option2" className="block py-2 hover:underline">
                How it works
              </a>
            </li>
            <li>
              <a href="#option3" className="block py-2 hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#option4" className="block py-2 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
