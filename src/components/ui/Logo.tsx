import React from "react";
import Image from "next/image";

interface LogoProps {
  mode?: "dark" | "light";
}

export default function Logo({ mode = "dark" }: LogoProps) {
  return (
    <Image
      src={`/assets/shared/desktop/logo-${mode}.png`}
      alt="logo"
      width={150} // Default for mobile
      height={0}
      style={{ height: "auto" }}
      className="lg:w-[200px] lg:h-auto"
    />
  );
}
