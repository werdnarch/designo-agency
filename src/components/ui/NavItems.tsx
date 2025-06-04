import React from "react";
import Link from "next/link";

export default function NavItems({ className }: { className?: string }) {
  return (
    <nav className="bgdark p-4">
      <ul className={`flex flex-col lg:flex-row ${className} text-white gap-6`}>
        <Link href="/about">
          <li className="text-lg cursor-pointer">OUR COMPANY</li>
        </Link>
        <Link href="/locations">
          <li className="text-lg cursor-pointer">LOCATIONS</li>
        </Link>
        <Link href="/contact">
          <li className="text-lg cursor-pointer">CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
}
