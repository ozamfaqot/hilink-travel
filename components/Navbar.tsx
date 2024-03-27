import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

// import React from "react";
const Navbar = () => {
  return (
    // flexBetween max-container padding-container relative z-30 p-5
    <nav className="flexBetween max-container padding-container relative z-30 p-5">
      {/* Start Logo */}
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="logo hilink"
          width={74}
          height={29}
        />
      </Link>
      {/* End Logo */}
      {/* Start Navbar */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      {/* End Navbar */}
      {/* Start Button */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
      {/* End Button */}
    </nav>
  );
};

export default Navbar;
