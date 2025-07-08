import React, { useRef, useImperativeHandle } from "react";
import webIcon from "../assets/web_hosting.svg";
import cloudIcon from "../assets/clouad_hosting.svg";
import vpsIcon from "../assets/vps_hosting.svg";
import wordpressIcon from "../assets/wordpress_hosting.svg";

export const HostingProductCards = React.forwardRef((props, ref) => {
  const products = [
    { title: "Web Hosting", desc: "Basic web hosting plans", price: "$9.99", icon: webIcon },
    { title: "Cloud Hosting", desc: "High performance cloud platform ever", price: "$6.99", icon: cloudIcon },
    { title: "VPS Hosting", desc: "Ideal for corporate sites & blogs", price: "$13.99", icon: vpsIcon },
    { title: "Wordpress Hosting", desc: "Optimized for WordPress", price: "$11.99", icon: wordpressIcon },
  ];

  const cardRefs = useRef([]);
  if (cardRefs.current.length !== products.length) {
    cardRefs.current = Array(products.length).fill().map((_, i) => cardRefs.current[i] || React.createRef());
  }

  useImperativeHandle(ref, () => ({
    getCardPositions: () => {
      return cardRefs.current
        .filter(cardRef => cardRef.current)
        .map(cardRef => {
          const rect = cardRef.current.getBoundingClientRect();
          return {
            x: rect.left + rect.width / 2, // Center X
            y: rect.top // Top Y
          };
        });
    },
    getCardElements: () => cardRefs.current.map(ref => ref.current).filter(Boolean)
  }));

  return (
    <div className="bg-[#0E0E0E] text-white font-sans px-4 sm:px-6 md:px-12 py-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            ref={cardRefs.current[index]}
            className="bg-[#1A1A1A] p-6 rounded-lg text-center flex flex-col justify-between h-full shadow-md hover:shadow-lg transition"
          >
            <div className="mb-6">
              <img src={item.icon} alt={`${item.title} icon`} className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
              <p className="text-white text-2xl font-bold">
                {item.price} <span className="text-base font-normal">/mo</span>
              </p>
            </div>
            <button className="mt-auto bg-[#27AE60] hover:bg-[#219653] text-white py-2 px-4 rounded-md font-medium">
              See Features
            </button>
          </div>
        ))}
      </div>
    </div>
  );
});