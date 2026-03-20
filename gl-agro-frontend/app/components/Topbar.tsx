"use client";

import Link from "next/link";
import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaBars } from "react-icons/fa";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-green-900 text-white text-sm border-b border-green-800">
      <div className="container mx-auto flex justify-between items-center py-2 px-6">
        
        {/* Left side: Contact info */}
        <div className="hidden md:flex space-x-6">
          <a href="tel:+255742258001" className="flex items-center space-x-1 hover:text-yellow-300">
            <FaPhoneAlt /> <span>+255 74 225 8001</span>
          </a>
          <a
            href="https://www.google.com/maps/place/Mbeya,+Tanzania"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-yellow-300"
          >
            <FaMapMarkerAlt /> <span>S.L.P 1498, Mbeya - Tanzania</span>
          </a>
          <a href="mailto:info@glagro.co.tz" className="flex items-center space-x-1 hover:text-yellow-300">
            <FaEnvelope /> <span>info@glagro.co.tz</span>
          </a>
        </div>

        {/* Right side: Quick links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-300">Home</Link>
          <Link href="/about" className="hover:text-yellow-300">About Us</Link>
          <Link href="/products" className="hover:text-yellow-300">Our Services</Link>
          <Link href="/blog" className="hover:text-yellow-300">Farmer’s Blog</Link>
          <Link href="/gallery" className="hover:text-yellow-300">Projects</Link>
          <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>

        {/* Mobile view */}
        <div className="flex md:hidden w-full justify-between items-center">
          <span className="font-bold text-lg">GL Agro Company Ltd</span>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className="text-white text-xl" />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-green-800 px-6 py-4 space-y-3">
          <a href="tel:+255742258001" className="flex items-center space-x-2 hover:text-yellow-300">
            <FaPhoneAlt /> <span>+255 74 225 8001</span>
          </a>
          <a
            href="https://www.google.com/maps/place/Mbeya,+Tanzania"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-yellow-300"
          >
            <FaMapMarkerAlt /> <span>S.L.P 1498, Mbeya - Tanzania</span>
          </a>
          <a href="mailto:info@glagro.co.tz" className="flex items-center space-x-2 hover:text-yellow-300">
            <FaEnvelope /> <span>info@glagro.co.tz</span>
          </a>
          <Link href="/" className="block hover:text-yellow-300">Home</Link>
          <Link href="/about" className="block hover:text-yellow-300">About Us</Link>
          <Link href="/products" className="block hover:text-yellow-300">Our Services</Link>
          <Link href="/blog" className="block hover:text-yellow-300">Farmer’s Blog</Link>
          <Link href="/gallery" className="block hover:text-yellow-300">Projects</Link>
          <Link href="/contact" className="block hover:text-yellow-300">Contact</Link>
        </div>
      )}
    </div>
  );
}