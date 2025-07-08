// src/sections/LoadFastSection.jsx
import React from 'react';

const LoadFastSection = () => {
    return (
        <section className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
                    {/* Image Column: Order changed for mobile-first layout */}
                    <div className="flex justify-center lg:order-last">
                        <img
                            src="/src/assets/load-fast-illustration.svg" // Update with the correct path to your image
                            alt="Illustration of a fast-loading website with a rocket and analytics charts"
                            className="max-w-lg w-full h-auto object-contain"
                        />
                    </div>

                    {/* Text Column */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                            Load Fast your Site
                        </h2>
                        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                            Managing is difficult work. Indeed harder on the off chance that
                            you do not utilize computer program or have work spread over as
                            well numerous devices. It's simple to lose track of all the extreme to
                            remain up to date.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoadFastSection;