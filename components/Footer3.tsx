import React from "react";
import Content from "./Content";

export default function Footer() {
  return (
    <div
      className="relative h-[500px] bg-gradient-to-b from-emerald-100 to-sky-200"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="absolute inset-0 flex items-end">
        <Content />
      </div>
    </div>
  );
}
