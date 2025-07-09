import React from "react";
import heroImage from "../assets/Hero.svg";

export const HeroSection = () => {
  return (
    <div className="bg-[#0E0E0E] text-white font-sans px-4 sm:px-6 md:px-12 py-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Fast & Unlimited <br className="hidden sm:block" /> Web Hosting
          </h1>
          <p className="mt-4 text-gray-300 max-w-md mx-auto lg:mx-0">
            The best web hosting service with the most complete features and 24-hour support for your business.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md">
            Get Started
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={heroImage}
            alt="Hosting Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};
