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
        <FaGift className="text-red-600" size={20} />
        <span className="flex items-center">
          Try our premium service today. Valid up to ₹120 on your first order.{" "}
          <strong className="ml-1 flex items-center space-x-1">
            Use code:{" "}
            <span className="bg-red-200 px-1 py-0.5 rounded text-red-900">
              LAUNDRY120
            </span>
            <button
              onClick={handleCopyCode}
              className="bg-gray-100 px-2 py-1 rounded text-gray-800 hover:bg-gray-300 transition-all"
              aria-label="Copy discount code"
            >
              <FaClipboard size={16} />
            </button>
            {/* Show feedback message when the code is copied */}
            {isCopied && (
              <span className="ml-2 text-green-600 text-sm">Copied!</span>
            )}
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
    </div>
  );
};

export default Announcement;
