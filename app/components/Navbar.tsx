"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import Box from "./Box";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuLinks = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    // You can add Sticky to NavBar to make it always on screen
    <header className="w-full text-black z-20 top-0 bg-amber-50">
      <Box className="flex items-center h-[100px]">
        {/* LEFT - Logo */}
        <div className="flex-1">
          <Link href="/" className="w-[120px] h-[90px] block">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* CENTER - Menu links */}
        <div className="hidden md:flex justify-center flex-1 space-x-5">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="hover:underline hover:text-orange-500 cursor-pointer"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* RIGHT - Cart & Username */}
        <div className="flex justify-end items-center space-x-4 flex-1">
          <span className="relative z-10">
            <FaShoppingCart size={20} />
            <span className="absolute -top-4 -right-2 text-red text-lg rounded-full w-5 h-5 flex items-center">
              3
            </span>
          </span>
          <span className="cursor-pointer">Username</span>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="cursor-pointer">
              {mobileMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </Box>

      {/* Only shows if the Condtion before && is True */}
      {mobileMenu && (
        <div className="md:hidden bg-black text-white p-5 space-y-4">
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="block hover:underline"
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
