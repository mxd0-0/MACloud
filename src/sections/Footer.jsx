import React from "react";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo and Social Links */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="MaCloud Logo" className="h-8 w-8" />
            <span className="text-xl sm:text-2xl font-bold">MACloud</span>
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0 text-lg">
            <FaYoutube />
            <FaTwitter />
            <FaInstagram />
            <FaFacebookF />
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center md:text-right">
          <p className="mb-2">Sign up Newsletter</p>
          <form className="flex items-center justify-center md:justify-end gap-2">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-[#1A1A1A] text-white border border-gray-700 px-4 py-2 rounded-md w-60"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-4 py-2 rounded-md"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
