"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IconHome2, IconUserCircle, IconWallet } from "@tabler/icons-react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

const GradientHover: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="relative group">
    <div className="absolute inset-0 rounded-md bg-gradient-to-br from-sky-200/30 to-purple-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative">{children}</div>
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", link: "#", icon: <IconHome2 className="icon-style" /> },
    {
      name: "How it works",
      link: "HowitWorks",
      icon: <IconUserCircle className="icon-style" />,
    },
    { name: "Pricing", link: "#", icon: <IconWallet className="icon-style" /> },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-2 px-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/doorwash_combined_logo.svg"
            alt="DoorWash"
            width={80}
            height={35}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 text-slate-950 font-medium">
          {navItems.map((item, index) => (
            <GradientHover key={index}>
              <a href={item.link} className="px-3 py-1 rounded-md">
                {item.name}
              </a>
            </GradientHover>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <Bars3BottomLeftIcon
            className="w-6 h-6 text-pink-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="text-center space-y-2 py-3">
            {navItems.map((item, index) => (
              <li key={index}>
                <GradientHover>
                  <a href={item.link} className="block py-2">
                    {item.name}
                  </a>
                </GradientHover>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
