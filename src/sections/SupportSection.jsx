// src/sections/SupportSection.jsx
import React from 'react';
import illustration from "../assets/support-illustration.svg";


const SupportSection = () => {
    return (
        <section className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
                    {/* Image Column: First in DOM to appear on top on mobile */}
                    <div className="flex justify-center">
                        <img
                            src={illustration}
                            alt="Illustration showing 24/7 support with a laptop, chat, and phone icons"
                            className="max-w-lg w-full h-auto object-contain"
                        />
                    </div>

                    {/* Text Column: Second in DOM to appear below on mobile */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                            24/7 Support
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

export default SupportSection;