"use client";

import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";

interface AnnouncementProps {
  onClose: () => void; // Define the type for onClose prop
}

const Announcement: React.FC<AnnouncementProps> = ({ onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("LAUNDRY115").then(() => {
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
        <span className="flex items-center md: text-xs ">
          ✨First Wash Free*✨{" "}
          <strong className="ml-1 flex items-center space-x-1">
            Use code:{" "}
            <span className="bg-red-200 px-1 py-0.5 rounded text-xs text-red-900 ml-2">
              LAUNDRY115
            </span>
            <button
              onClick={handleCopyCode}
              className="bg-gray-100 px-0.5 py-0.5 rounded text-gray-800 hover:bg-gray-300 transition-all text-sm"
              aria-label="Copy discount code"
            >
              <IoCopyOutline />
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
        <IoIosCloseCircleOutline size={20} />
      </button>
      {/* Disappearing Box for Copied Message */}
      {isCopied && (
        <div
          className="fixed top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-200 via-emerald-200 to-sky-200 bg-opacity-100 border border-lime-400 text-black px-4 py-2 rounded shadow-md z-50 transition-all duration-300"
          role="alert"
        >
          Code Copied!
        </div>
      )}
    </div>
  );
};

export default Announcement;
