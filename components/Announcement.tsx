"use client";

import { useState } from "react";
import { FaTimes, FaGift, FaClipboard } from "react-icons/fa"; // Import FaClipboard

const Announcement = ({ onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = () => {
    // Copy the code to clipboard
    navigator.clipboard.writeText("SANTA10").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  return (
    <div
      id="sticky_banner"
      className="flex items-center justify-between bg-gradient-to-r from-amber-100 via-purple-100 to-sky-100 text-emerald-700 px-4 py-3 shadow-md"
    >
      {/* Announcement Text */}
      <div className="flex justify-items-center m-px">
        <FaGift className="text-red-600" size={20} />
        <span>
          Try our premium service today. Valid up to ₹120 on your first order.{" "}
          <strong className="ml-1">
            Use code:{" "}
            <span className="bg-red-200 px-1 py-0.5 rounded text-red-900">
              Laundry
            </span>
          </strong>
        </span>
      </div>

      {/* Copy Button */}
      <div className="relative flex items-center space-x-2">
        <button
          onClick={handleCopyCode}
          className="flex items-center space-x-1 bg-gray-200 px-2 py-1 rounded text-gray-800 hover:bg-gray-300 transition-all"
          aria-label="Copy discount code"
        >
          <FaClipboard size={16} />
        </button>

        {/* Copied Message */}
        {isCopied && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-1 text-sm text-green-600 bg-white border border-green-500 rounded px-2 py-1">
            Copied!
          </div>
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="text-red-600 hover:text-red-800 transition"
        aria-label="Close announcement"
      >
        <FaTimes size={20} />
      </button>
    </div>
  );
};

export default Announcement;
