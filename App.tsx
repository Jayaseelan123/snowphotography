import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import StatsSection from './components/StatsSection';
import VideoSection from './components/VideoSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/portfolio';
import ContactSection from './components/ContactSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

import ClickEffect from "./components/ClickEffect";



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
        {/* <VideoSection /> */}
       
        <GallerySection />
        {/* <VideoSection /> */}
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
      {/* <ScrollToTopButton /> */}
    </div>
  );
};

export default App;
