import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0E0E0E] text-white font-sans px-4 sm:px-6 md:px-12 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="MaCloud Logo" className="h-8 w-8" />
          <span className="text-xl sm:text-2xl font-bold">MACloud</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li className="hover:text-green-400 cursor-pointer">Home</li>
          <li className="hover:text-green-400 cursor-pointer">Hosting</li>
          <li className="hover:text-green-400 cursor-pointer">Pricing</li>
          <li className="hover:text-green-400 cursor-pointer">Contact</li>
        </ul>

        {/* Right Icons & Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <ShoppingCartIcon className="h-6 w-6 text-white hover:text-green-400 cursor-pointer" />
          <button className="border border-white text-white py-1.5 px-4 rounded-md text-sm hover:bg-white hover:text-[#0E0E0E] transition">
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} aria-label="Open Menu">
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>

      {/* Overlay + Sidebar Menu */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-64 bg-[#1A1A1A] z-50 p-6 transition-transform duration-300 transform translate-x-0">
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold">Menu</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close Menu">
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>
            <ul className="space-y-4 text-sm font-medium">
              <li className="hover:text-green-400 cursor-pointer">Home</li>
              <li className="hover:text-green-400 cursor-pointer">Hosting</li>
              <li className="hover:text-green-400 cursor-pointer">Pricing</li>
              <li className="hover:text-green-400 cursor-pointer">Contact</li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
