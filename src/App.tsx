import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { AfternoonTeaFeature } from './components/AfternoonTeaFeature';
import { GallerySection } from './components/GallerySection';
import { CustomerReviews } from './components/CustomerReviews';
import { FindUsSection } from './components/FindUsSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C221E] flex flex-col selection:bg-[#EAF0EA] selection:text-[#263327]">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <MenuSection />
        <AfternoonTeaFeature />
        <GallerySection />
        <CustomerReviews />
        <FindUsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
