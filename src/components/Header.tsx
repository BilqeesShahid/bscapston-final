"use client"
import React from 'react'
import Image from 'next/image'

 

const Header = () => {
  return (
    <header className="bg-gray-100">
      <div className="container w-full h-[36px] flex justify-between items-center px-4">
        {/* Logo */}
        <div className="hidden md:flex items-center">
          <Image src="/logo.png" alt="logo" width={24} height={24} />
        </div>

        {/* Centered Text */}
        <h1 className="text-center text-sm lg:text-base font-medium mx-auto">
          Skip to main content
        </h1>

        {/* Right Side Links */}
        <div className="hidden md:flex space-x-4 text-sm lg:text-base">
          <a href="#" className="hover:underline">Find a Store</a>
          <a href="/help" className="hover:underline">Help</a>
          <a href="/joinus" className="hover:underline">Join Us</a>
          <a href="/signin" className="hover:underline">Sign In</a>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center py-2 space-y-2">
        <a href="#" className="hover:underline text-sm">Find a Store</a>
        <a href="/help" className="hover:underline text-sm">Help</a>
        <a href="/joinus" className="hover:underline text-sm">Join Us</a>
        <a href="/signin" className="hover:underline text-sm">Sign In</a>
      </div>
    </header>
  );
};

export default Header;
