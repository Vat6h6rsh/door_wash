import Image from "next/image";
import React from "react";

export default function Content() {
  return (
    <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between">
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
        alt="DoorWash"
      />
      <p>© copyright 2024</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Support</h3>
        <p>Contact Us </p>
        <p>Privacy Policy </p>
        <p>Terms Of Service</p>
        <p>Refund Policy</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Quick links</h3>
        <p>Features</p>
        <p>Pricing</p>
        <p>How It Works</p>
        <p>FAQ's</p>
      </div>
      <div className="flex flex-col gap-2">
        <Image src="/GooglePlay.png" width={150} height={30} alt="GooglePlay" />
        <Image src="/AppStore.png" width={150} height={30} alt="GooglePlay" />
      </div>
    </div>
  );
};
