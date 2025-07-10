// src/sections/DdosProtectionSection.jsx (Updated)
import React from 'react';
import illustration from "../assets/ddos-protection-illustration.svg";
import MotionWrap from '../components/MotionWrap'; // Import the HOC

// eslint-disable-next-line react-refresh/only-export-components
const DdosProtectionSection = () => {
    return (
        <section className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
                    {/* Image Column: First in DOM for mobile, ordered to the right on desktop */}
                    <div className="flex justify-center lg:order-last">
                        <img
                            src={illustration}
                            alt="Illustration of a security shield protecting servers from attack"
                            className="max-w-lg w-full h-auto object-contain"
                        />
                    </div>

                    {/* Text Column: Second in DOM, appears on the left on desktop */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                            DDoS Protection
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

// eslint-disable-next-line react-refresh/only-export-components
export default MotionWrap(DdosProtectionSection, 'w-full');
