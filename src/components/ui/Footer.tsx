import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import NavItems from "./NavItems";
import Socials from "./Socials";
export default function Footer() {
  return (
    <footer className="bgdark ">
      <div className="w-full py-6 flex flex-col gap-4 items-center max-w-5xl mx-auto">
        <div className="flex items-center justify-center lg:justify-between w-full">
          <Logo mode="light" />
          <div className="hidden lg:block">
            <NavItems className="" />
          </div>
        </div>
        <hr className="border-white/10  border-b-[1px] w-full"></hr>
        <div className="w-full lg:hidden">
          <NavItems className="items-center" />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:my-8 w-full gap-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="text-zinc-400 text-center">
              <p className="font-bold">Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className="text-zinc-400 text-center">
              <p className="font-bold">Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>

          <Socials />
        </div>
      </div>
    </footer>
  );
}
