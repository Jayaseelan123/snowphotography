import React from "react";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/servicessection";
import PortfolioSection from "./components/PortfolioSection";
import GallerySection from "./components/GallerySection";
import StatsSection from "./components/statssection"
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import ClickEffect from "./components/clickeffect";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gradient-to-b from-white via-gray-100 to-gray-900 text-gray-800 relative">
      <ClickEffect />

      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <GallerySection />
        <StatsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
