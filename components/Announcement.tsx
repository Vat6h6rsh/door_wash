"use client";

import { useState } from "react";
import { FaTimes, FaGift, FaClipboard } from "react-icons/fa";

interface AnnouncementProps {
  onClose: () => void; // Define the type for onClose prop
}

const Announcement: React.FC<AnnouncementProps> = ({ onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("LAUNDRY120").then(() => {
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
      <div className="flex items-center justify-center flex-1 space-x-2">
        <FaGift className="text-red-600" size={12} />
        <span className="flex items-center text-xs">
          ✨First Wash Free*✨{" "}
          <strong className="ml-1 flex items-center space-x-1 text-xs">
            Use code:{" "}
            <span className="bg-red-200 px-1 py-0.5 rounded text-red-900">
              LAUNDRY115
            </span>
            <button
              onClick={handleCopyCode}
              className="bg-gray-100 px-2 py-1 rounded text-gray-800 hover:bg-gray-300 transition-all text-sm"
              aria-label="Copy discount code"
            >
              <FaClipboard size={10} />
            </button>
          </strong>
        </span>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="text-red-600 hover:text-red-800 transition ml-auto"
        aria-label="Close announcement"
      >
        <FaTimes size={20} />
      </button>
      {/* Disappearing Box for Copied Message */}
      {isCopied && (
        <div
          className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-emerald-600 border border-lime-400 text-white px-4 py-2 rounded shadow-md transition-all duration-300"
          role="alert"
        >
          Code Copied!
        </div>
      )}
    </div>
  );
};

export default Announcement;
