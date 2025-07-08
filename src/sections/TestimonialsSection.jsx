// src/sections/TestimonialsSection.jsx (Final Recommended Version)
import React from 'react';

const testimonials = [
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, bibendum purus scelerisque ipsum id. Fringilla ipsum elementum aliquam aliquam sed duis feugiat molestie nisl. Sed sit cursus vulputate dignissim.",
        name: "Eda Nakamoto",
    },
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, bibendum purus scelerisque ipsum id. Fringilla ipsum elementum aliquam aliquam sed duis feugiat molestie nisl. Sed sit cursus vulputate dignissim.",
        name: "Joel Miller",
    },
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, bibendum purus scelerisque ipsum id. Fringilla ipsum elementum aliquam aliquam sed duis feugiat molestie nisl. Sed sit cursus vulputate dignissim.",
        name: "John Nichole",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                        Our Customers Say
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-[#282828] p-8 rounded-lg flex flex-col h-full">
                            {/* Centered Image Placeholder */}
                            <img
                                className="w-20 h-auto mx-auto mb-6" // mx-auto centers the image
                                src= "/src/assets/quote-icon.svg"
                                alt="Quotation mark"
                            />

                            <p className="text-muted-foreground text-center leading-relaxed flex-grow">
                                {testimonial.quote}
                            </p>

                            <h2 className="mt-8 font-bold text-center text-foreground">
                                {testimonial.name}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* Pagination Indicators */}
                <div className="mt-16 flex justify-center items-center gap-3">
                    <button aria-label="Go to slide 1" className="w-2.5 h-2.5 rounded-full bg-foreground" />
                    <button aria-label="Go to slide 2" className="w-2.5 h-2.5 rounded-full bg-muted-foreground/50 hover:bg-muted-foreground/75 transition-colors" />
                    <button aria-label="Go to slide 3" className="w-2.5 h-2.5 rounded-full bg-muted-foreground/50 hover:bg-muted-foreground/75 transition-colors" />
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;