import React, { useState } from 'react';
import { Phone, MapPin, Sparkles, Coffee, Utensils, Cake, Croissant } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

export const MenuSection: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState('breakfast');

  const categoryIcons: Record<string, React.ReactNode> = {
    breakfast: <Croissant className="w-4 h-4" />,
    sandwiches: <Utensils className="w-4 h-4" />,
    cakes: <Cake className="w-4 h-4" />,
    drinks: <Coffee className="w-4 h-4" />,
  };

  const categoryImages: Record<string, { src: string; alt: string; label: string }> = {
    breakfast: {
      src: '/images/breakfast.jpg',
      alt: 'Full English breakfast cooked fresh to order',
      label: 'Fresh morning breakfasts & toasties',
    },
    sandwiches: {
      src: '/images/sandwich_blt.jpg',
      alt: 'Freshly prepared bloomer sandwich with crisps and salad',
      label: 'Generous bloomers & homemade bakes',
    },
    cakes: {
      src: '/images/cakes_counter.jpg',
      alt: 'Freshly baked Victoria sponge and scones',
      label: 'Handmade daily cake counter',
    },
    drinks: {
      src: '/images/coffee_and_tea.jpg',
      alt: 'Barista flat white and steaming loose leaf tea',
      label: 'Quality barista coffee & tea pots',
    },
  };

  const activeCategory = CAFE_DATA.menuCategories.find((c) => c.id === activeCategoryId) || CAFE_DATA.menuCategories[0];
  const activeImage = categoryImages[activeCategoryId];

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-sage-700 uppercase">
            Our Menu &amp; Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-coffee-950 tracking-tight">
            Something lovely, whatever the moment.
          </h2>
          <p className="text-base text-coffee-600 max-w-xl mx-auto pt-2">
            From relaxed morning breakfasts to freshly filled bloomers, comforting pies, and warm afternoon treats.
          </p>
          <div className="w-12 h-0.5 bg-sage-500/60 mx-auto mt-4" />
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2.5 sm:gap-3 scrollbar-none no-scrollbar">
          {CAFE_DATA.menuCategories.map((category) => {
            const isActive = category.id === activeCategoryId;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage-500 ${
                  isActive
                    ? 'bg-coffee-800 text-white shadow-md'
                    : 'bg-cream-100 text-coffee-700 hover:bg-cream-200 border border-cream-300'
                }`}
              >
                <span className={isActive ? 'text-caramel-300' : 'text-sage-700'}>
                  {categoryIcons[category.id]}
                </span>
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Menu Items List */}
          <div className="lg:col-span-7 bg-cream-50/70 border border-cream-200 rounded-3xl p-6 sm:p-8 shadow-xs">
            
            <div className="border-b border-cream-200 pb-4 mb-6">
              <h3 className="font-serif text-2xl text-coffee-900 font-semibold">
                {activeCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-coffee-600 mt-1">
                {activeCategory.subtitle}
              </p>
            </div>

            <div className="divide-y divide-cream-200">
              {activeCategory.items.map((item, idx) => (
                <div key={idx} className="py-5 first:pt-0 last:pb-0 group">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-serif text-lg text-coffee-900 font-medium group-hover:text-sage-800 transition-colors">
                      {item.name}
                    </h4>
                    {item.tag && (
                      <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-cream-200 text-coffee-800 border border-cream-300">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-coffee-600 leading-relaxed mt-1.5 pr-4">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Daily Blackboard Note */}
            <div className="mt-8 pt-5 border-t border-cream-200/90 flex items-center justify-between gap-4 text-xs text-coffee-500">
              <span className="italic">
                * Daily blackboard specials and freshly baked cakes rotate throughout the week.
              </span>
              <a
                href={CAFE_DATA.contact.phoneTel}
                className="shrink-0 font-medium text-sage-800 hover:text-coffee-950 underline underline-offset-2"
              >
                Ask today’s specials &rarr;
              </a>
            </div>

          </div>

          {/* Right Column: Visual Anchor & Order Enquiry Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Category Food Visual Card */}
            <div className="rounded-3xl overflow-hidden bg-cream-100 border border-cream-300 p-3 shadow-soft">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative bg-cream-200">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="w-full h-full object-cover transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-coffee-950/70 via-coffee-950/20 to-transparent">
                  <p className="text-xs text-white/90 font-medium">
                    {activeImage.label}
                  </p>
                </div>
              </div>
            </div>

            {/* Friendly Enquiries & Visit CTA Box */}
            <div className="p-6 sm:p-7 rounded-3xl bg-cream-100/90 border border-cream-300/80 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage-800">
                <Sparkles className="w-4 h-4 text-caramel-600" />
                <span>Visit Us in Lower Gornal</span>
              </div>

              <h4 className="font-serif text-xl font-semibold text-coffee-900">
                Planning a breakfast or lunch?
              </h4>

              <p className="text-xs sm:text-sm text-coffee-600 leading-relaxed">
                We prepare everything fresh to order. For group tables or special dietary enquiries, give us a quick ring or drop in.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={CAFE_DATA.contact.phoneTel}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-white bg-coffee-800 hover:bg-coffee-900 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-caramel-300" />
                  <span>Call to Enquire ({CAFE_DATA.contact.phoneDisplay})</span>
                </a>

                <a
                  href="#find-us"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-coffee-800 bg-cream-50 hover:bg-cream-200 border border-cream-300 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-sage-700" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Featured Afternoon Tea Prompt Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-sage-50/70 border border-sage-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-sage-700">
              Celebrated Local Offering
            </span>
            <h4 className="font-serif text-2xl font-semibold text-coffee-900">
              Looking for our Traditional Afternoon Tea?
            </h4>
            <p className="text-xs sm:text-sm text-coffee-600 max-w-xl">
              Freshly cut sandwiches, warm homemade sausage rolls, scones with clotted cream, and unlimited tea.
            </p>
          </div>
          <a
            href="#afternoon-tea"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-sage-700 hover:bg-sage-800 transition-colors shadow-xs"
          >
            <span>View Afternoon Tea Details &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
