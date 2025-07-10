import React from 'react';
import quoteIcon from '../assets/quote-icon.svg'; // update path if needed
import MotionWrap from '../components/MotionWrap'; // Import the HOC

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, bibendum purus scelerisque ipsum id.",
    name: "Eda Nakamoto",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, bibendum purus scelerisque ipsum id.",
    name: "Joel Miller",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, bibendum purus scelerisque ipsum id.",
    name: "John Nichole",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
const TestimonialsSection =()=> {
  return (
    <section className="py-20 sm:py-28 bg-[#0E0E0E] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Our Customers Say</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
              <div
                  key={index}
                  className="bg-[#282828] p-8 rounded-lg flex flex-col h-full transition-transform duration-300 hover:scale-105"
              >
                <img
                className="w-20 h-auto mx-auto mb-6"
                src={quoteIcon}
                alt="Quotation mark"
              />
              <p className="text-gray-300 text-center leading-relaxed flex-grow">
                {testimonial.quote}
              </p>
              <h2 className="mt-8 font-bold text-center text-white">
                {testimonial.name}
              </h2>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center gap-3">
          <button
            aria-label="Go to slide 1"
            className="w-2.5 h-2.5 rounded-full bg-white"
          />
          <button
            aria-label="Go to slide 2"
            className="w-2.5 h-2.5 rounded-full bg-gray-500/50 hover:bg-gray-400"
          />
          <button
            aria-label="Go to slide 3"
            className="w-2.5 h-2.5 rounded-full bg-gray-500/50 hover:bg-gray-400"
          />
        </div>
      </div>
    </section>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export default MotionWrap(TestimonialsSection, 'w-full');
