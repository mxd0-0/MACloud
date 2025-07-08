import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import { HeroSection } from "../components/Hero";
import { HostingProductCards } from "../components/HostingProductCards";
import { LineConnector } from "../components/LineConnector"; // Corrected import syntax
import { throttle } from 'lodash';
import SupportSection from "../sections/SupportSection.jsx";
import DdosProtectionSection from "../sections/DdosProtectionSection.jsx";
import LoadFastSection from "../sections/LoadFastSection.jsx";
import TestimonialsSection from "../sections/TestimonialsSection.jsx";

export default function HomePage() {
  const heroRef = useRef(null);
  const hostingCardsRef = useRef(null);
  const [heroPoint, setHeroPoint] = useState(null);
  const [cardPoints, setCardPoints] = useState([]);

  const calculatePositions = useCallback(() => {
    // Get the origin point from the hero image (now its center)
    const newHeroPoint = heroRef.current?.getHeroCenter(); // Use the new function name
    if (newHeroPoint) {
      setHeroPoint(newHeroPoint);
    } else {
      setHeroPoint(null);
    }

    const newCardPoints = hostingCardsRef.current?.getCardPositions();
    if (newCardPoints) {
      setCardPoints(newCardPoints);
    } else {
      setCardPoints([]);
    }
  }, []);

  const throttledCalculatePositions = useCallback(
    throttle(calculatePositions, 1000 / 60),
    [calculatePositions]
  );

  useLayoutEffect(() => {
    calculatePositions();

    const observer = new ResizeObserver(throttledCalculatePositions);

    if (heroRef.current?.getImageElement()) {
      observer.observe(heroRef.current.getImageElement());
    }

    const hostingCardsContainer = document.querySelector('.max-w-7xl.mx-auto.grid');
    if (hostingCardsContainer) {
      observer.observe(hostingCardsContainer);
    }

    const individualCards = hostingCardsRef.current?.getCardElements();
    if (individualCards && individualCards.length > 0) {
      individualCards.forEach(card => observer.observe(card));
    }

    window.addEventListener("scroll", throttledCalculatePositions);
    window.addEventListener("resize", throttledCalculatePositions);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", throttledCalculatePositions);
      window.removeEventListener("resize", throttledCalculatePositions);
    };
  }, [throttledCalculatePositions]);

  return (
    <div>
      <Navbar />
      <HeroSection ref={heroRef} />
      <HostingProductCards ref={hostingCardsRef} />
      <LoadFastSection/>
      <DdosProtectionSection />
      <SupportSection />
      <TestimonialsSection />
      {heroPoint && cardPoints.length > 0 && (
        <LineConnector heroPoint={heroPoint} targetPoints={cardPoints} />
      )}
    </div>
  );
}