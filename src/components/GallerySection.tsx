import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';
import type { GalleryPhoto } from '../data/cafeData';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Afternoon Tea', 'Breakfast', 'Cakes & Bakes', 'Café Favourites', 'Atmosphere'];

  const filteredPhotos = selectedCategory === 'All'
    ? CAFE_DATA.galleryPhotos
    : CAFE_DATA.galleryPhotos.filter((p) => {
        if (selectedCategory === 'Cakes & Bakes') return p.category.includes('Cakes');
        if (selectedCategory === 'Café Favourites') return p.category.includes('Favourites') || p.category.includes('Comfort');
        return p.category.toLowerCase().includes(selectedCategory.toLowerCase());
      });

  const handleOpenLightbox = (photo: GalleryPhoto) => {
    const idx = CAFE_DATA.galleryPhotos.findIndex((p) => p.id === photo.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 md:mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] text-sage-700 uppercase">
            Visual Journal
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-coffee-950 tracking-tight">
            A taste of Mo &amp; Ja’s.
          </h2>
          <p className="text-base text-coffee-600 max-w-xl mx-auto pt-1">
            Glimpses of our freshly prepared plates, tiered afternoon teas, and warm Dudley tearoom.
          </p>
          <div className="w-12 h-0.5 bg-sage-500/60 mx-auto mt-4" />
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 sm:gap-2.5 scrollbar-none no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 ${
                selectedCategory === cat
                  ? 'bg-coffee-800 text-white shadow-xs'
                  : 'bg-cream-100 text-coffee-700 hover:bg-cream-200 border border-cream-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredPhotos.map((photo, index) => {
            // Apply varied editorial spans for visual rhythm
            const isFeatured = index === 0 && selectedCategory === 'All';
            return (
              <div
                key={photo.id}
                onClick={() => handleOpenLightbox(photo)}
                className={`group relative rounded-3xl overflow-hidden bg-cream-100 border border-cream-300 shadow-soft cursor-pointer transition-all duration-300 hover:shadow-hover hover:-translate-y-1 ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className={`overflow-hidden relative ${isFeatured ? 'aspect-[16/10]' : 'aspect-[4/3]'} bg-cream-200`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-coffee-950/20 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-cream-50/90 backdrop-blur-md text-coffee-800 border border-cream-300/80 shadow-xs">
                      {photo.category}
                    </span>
                  </div>

                  {/* Enlarge Icon */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-full bg-coffee-900/80 text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Caption & Title on Hover */}
                  <div className="absolute bottom-0 inset-x-0 p-5 z-10 transform translate-y-0 sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-white">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-cream-200 line-clamp-2 mt-1">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtle photo notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-coffee-500 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sage-600" />
            <span>Click any image to view in high-resolution detail.</span>
          </p>
        </div>

      </div>

      {/* Accessible Lightbox Modal */}
      <LightboxModal
        photos={CAFE_DATA.galleryPhotos}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
