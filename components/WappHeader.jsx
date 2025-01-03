"use client";

import { useState } from "react";
import Image from "next/image";
import { GiClothesline, GiWashingMachine } from "react-icons/gi";
import { MdAddIcCall, MdCurrencyRupee } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";

const WappHeader = ({ isAnnouncementVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    {
      icon: <GiClothesline className="" />,
      label: "Why Doorwash?",
      href: "#elp",
    },
    {
      icon: <GiWashingMachine />,
      label: "How it works",
      href: "#how-it-works",
    },
    { icon: <MdCurrencyRupee />, label: "Pricing", href: "#price-cards" },
    { icon: <MdAddIcCall />, label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 flex items-center justify-between bg-gradient-to-br from-amber-100 via-emerald-100 to-sky-200 bg-opacity-100 p-4 text-black shadow-lg ${
        isAnnouncementVisible ? "mt-0" : ""
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/doorwash_combined_logo.svg"
          alt="DoorWash"
          width={50}
          height={40}
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <IoIosCloseCircleOutline size={24} />
          ) : (
            <FaBarsStaggered size={24} />
          )}
        </button>
      </div>

      {/* Sidebar for Mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-purple-200 via-cyan-200 to-emerald-100 flex flex-col items-center justify-center p-4 z-50"
          onClick={toggleMenu} // Close the menu when clicking anywhere on the overlay
        >
          {/* Close Icon */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl text-amber-400 hover:text-red-800 transition-all"
            aria-label="Close menu"
          >
            <IoIosCloseCircleOutline />
          </button>

          <ul className="space-y-8 text-black text-2xl">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex flex-col items-center justify-center rounded-full space-y-2 p-4 bg-emerald-200 hover:bg-amber-500 transition-all"
                >
                  <div className="text-3xl ">{item.icon}</div>
                  <span className="text-teal-700">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <a
              href={item.href}
              className="flex items-center space-x-2 hover:text-cyan-400 hover:glow-cyan transition-all"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default WappHeader;
