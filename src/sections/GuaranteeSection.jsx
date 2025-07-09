import React from "react";

export default function GuaranteeSection() {
  return (
    <div className="bg-[#1A1A1A] text-white py-20 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        30 Days Money Back Guarantee
      </h2>
      <p className="text-gray-300 max-w-xl mx-auto mb-8">
        If you are not satisfied with the services offered, we will refund your money. Unconditional!
      </p>
      <button className="bg-[#27AE60] hover:bg-[#219653] text-white font-semibold px-6 py-3 rounded-md">
        Get Started
      </button>
    </div>
  );
}
