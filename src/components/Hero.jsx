import React from "react";
import heroImage from "../assets/Hero.svg";

export const HeroSection = () => {
  return (
      <section className="bg-[#0E0E0E] text-white font-sans px-4 sm:px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
          {/* Image Column: Appears first on large screens, second on mobile */}
          <div className="flex justify-center lg:order-last">
            <img
                src={heroImage}
                alt="Hosting Illustration"
                className="max-w-lg w-full h-auto object-contain"
            />
          </div>

          {/* Text Column */}
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
        </div>
      </section>
  );
};
