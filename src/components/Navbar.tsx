"use client"
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Link from 'next/link';
import { IoBagOutline } from "react-icons/io5";
import Image from 'next/image';
 import { useState } from 'react';
import { FaBars,FaTimes } from 'react-icons/fa';
 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Image src="/logo1.jpg" alt="logo1" width={60} height={20} />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex justify-center items-center gap-6">
          <li><Link href="/">New &#38; Featured</Link></li>
          <li><Link href="/allproducts">Men</Link></li>
          <li><Link href="/allproducts">Women</Link></li>
          <li><Link href="/allproducts">Kids</Link></li>
          <li><Link href="/sale">Sale</Link></li>
          <li><Link href="/">SNIKRS</Link></li>
        </ul>

        {/* Search Bar */}
        <div
          className="hidden md:flex bg-[#F5F5F5] rounded-full relative"
          style={{ padding: "7px 12px 7px 20px" }}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-[180px] h-[40px] text-[14px] mr-4 bg-transparent outline-none"
          />
          <IoSearchOutline
            className="ml-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800"
            size={20}
          />
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center text-gray-500 text-[24px] gap-6">
          <CiHeart />
          <IoBagOutline />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden text-black border-t">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><Link href="/">New &#38; Featured</Link></li>
            <li><Link href="/allproducts">Men</Link></li>
            <li><Link href="/allproducts">Women</Link></li>
            <li><Link href="/allproducts">Kids</Link></li>
            <li><Link href="/sale">Sale</Link></li>
            <li><Link href="/">SNIKRS</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
