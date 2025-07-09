import React from "react";
import Navbar from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import { HostingProductCards } from "../components/HostingProductCards";
import SupportSection from "../sections/SupportSection.jsx";
import DdosProtectionSection from "../sections/DdosProtectionSection.jsx";
import LoadFastSection from "../sections/LoadFastSection.jsx";
import TestimonialsSection from "../sections/TestimonialsSection.jsx";
import GuaranteeSection from "../sections/GuaranteeSection.jsx";
import Footer from "../sections/Footer.jsx";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HostingProductCards />
      <LoadFastSection />
      <DdosProtectionSection />
      <SupportSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <Footer />
    </div>
  );
}
