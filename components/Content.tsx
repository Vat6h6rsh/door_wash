import Image from "next/image";
import React from "react";

export default function Content() {
  return (
    <div className="bg-gradient-to-b from-emerald-100 to-sky-200 py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex justify-between items-end">
      <Image
        src="/doorwash_combined_logo.svg"
        width={300}
        height={40}
        alt="DoorWash Logo"
      />
      <p className="text-zinc-900">© copyright 2024</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex flex-wrap gap-20 text-emerald-900">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-neutral-900">Support</h3>
        <p className="hover:text-cyan-500 transition-colors">Contact Us</p>
        <p className="hover:text-cyan-500 transition-colors">Privacy Policy</p>
        <p className="hover:text-cyan-500 transition-colors">
          Terms Of Service
        </p>
        <p className="hover:text-cyan-400 transition-colors">Refund Policy</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-neutral-900">Quick Links</h3>
        <p className="hover:text-cyan-400 transition-colors">Features</p>
        <p className="hover:text-cyan-400 transition-colors">Pricing</p>
        <p className="hover:text-cyan-400 transition-colors">How It Works</p>
        <p className="hover:text-cyan-400 transition-colors">FAQ</p>
      </div>
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
  );
};
