"use client";
import { useState } from "react";

export default function MobMenuHandler() {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  return (
    <div
      onClick={() => setIsMobileOpen(!isMobileOpen)}
      className={`flex h-16 w-16 cursor-pointer flex-col items-center justify-center`}
    >
      <div
        className={`duractio 300 h-1 w-full rounded-full bg-black transition-all ease-in-out ${isMobileOpen ? "origin-[75% 10%] mt-1 rotate-45" : "mb-1"}`}
      ></div>
      <div
        className={`duractio 300 h-1 w-full rounded-full bg-black transition-all ease-in-out ${isMobileOpen ? "origin[75% 10%] -mt-1 -rotate-45" : "mt-1"}`}
      ></div>
    </div>
  );
}
