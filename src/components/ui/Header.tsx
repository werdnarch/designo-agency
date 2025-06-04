"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import MenuButton from "./MenuButton";
export default function Header() {
  return (
    <header className="p-5 relative w-full max-w-5xl mx-auto flex items-center justify-between">
      <Logo />

      <nav className="hidden lg:flex items-center">
        <ul className="flex items-center gap-6">
          <Link href="/about">
            <li className="text-md tracking-widest text-[0.9rem] hover:underline cursor-pointer">
              OUR COMPANY
            </li>
          </Link>
          <Link href="/locations">
            <li className="text-md tracking-widest text-[0.9rem] hover:underline cursor-pointer">
              LOCATIONS
            </li>
          </Link>
          <Link href="/contact">
            <li className="text-md tracking-widest text-[0.9rem] hover:underline cursor-pointer">
              CONTACT
            </li>
          </Link>
        </ul>
      </nav>
      <MenuButton />
    </header>
  );
}
