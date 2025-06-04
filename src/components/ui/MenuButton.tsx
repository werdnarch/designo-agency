"use client";

import { useEffect, useState } from "react";
import React from "react";
import NavItems from "./NavItems";

export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <section className="relative overflow-hidden lg:hidden">
      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="cursor-pointer"
      >
        <div className="h-[22px] w-7 relative overflow-hidden ">
          <div
            className={`absolute origin-left transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-[38.66deg]" : ""
            } left-0 top-0 bgdark w-full h-1`}
          ></div>
          <div
            className={`absolute transition-all duration-300 ease-in-out ${
              !menuOpen ? "left-0 opacity-100" : "left-[100%] opacity-0"
            } top-1/2 -translate-y-1/2 bgdark w-full h-1`}
          ></div>
          <div
            className={`absolute origin-left transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-[38.66deg]" : ""
            } left-0 bottom-0 bgdark w-full h-1`}
          ></div>
        </div>
      </button>

      <div
        className={`bg-black/30 mt-4 lg:hidden transition-all duration-300 ease-in-out fixed ${
          menuOpen ? "left-0" : "left-[100%]"
        } h-full w-full`}
      >
        <NavItems />
      </div>
    </section>
  );
}
