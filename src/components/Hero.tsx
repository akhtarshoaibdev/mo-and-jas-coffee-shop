import React from 'react';
import { ArrowRight, MapPin, Heart, Coffee } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

export const Hero: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-[#FDFBF7] overflow-hidden"
    >
      {/* Subtle organic background decoration */}
      <div 
        className="absolute top-10 right-0 w-96 h-96 bg-sage-100/50 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-10 w-80 h-80 bg-caramel-100/40 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Refined Editorial Copy */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 lg:pr-4">
            
            {/* Eyebrow & Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-100 border border-cream-300 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-sage-600 animate-pulse" />
              <span className="text-xs font-semibold tracking-[0.2em] text-coffee-700 uppercase">
                {CAFE_DATA.eyebrow}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.12] tracking-tight text-coffee-950 text-balance font-semibold">
              Good coffee.<br />
              <span className="italic font-normal text-sage-800">Lovely food.</span><br />
              Time well spent.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-coffee-600 leading-relaxed max-w-xl">
              {CAFE_DATA.subheading}
            </p>

            {/* Location Line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-coffee-700 font-medium pt-1">
              <MapPin className="w-4 h-4 text-caramel-600 shrink-0" />
              <span>110 The Straits, Dudley, West Midlands</span>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="#menu"
                onClick={(e) => scrollTo(e, '#menu')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white bg-coffee-800 hover:bg-coffee-900 shadow-md hover:shadow-lg transition-all duration-200 group hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#find-us"
                onClick={(e) => scrollTo(e, '#find-us')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-coffee-800 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Find Us</span>
              </a>
            </div>

            {/* Reassurance pills */}
            <div className="pt-6 border-t border-cream-200/90 grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-1.5">
                <Coffee className="w-4 h-4 text-sage-700" />
                <span className="text-xs font-medium text-coffee-700">Artisan Coffee</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1.5">
                <Heart className="w-4 h-4 text-caramel-600" />
                <span className="text-xs font-medium text-coffee-700">Afternoon Tea</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1.5">
                <span className="text-sm">🐾</span>
                <span className="text-xs font-medium text-coffee-700">Dog-Friendly</span>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Authentic Hero Image */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl p-3 sm:p-4 bg-cream-100 border border-cream-300/80 shadow-soft">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-cream-200">
                  <img
                    src="/images/hero_afternoon_tea.jpg"
                    alt="Afternoon tea tiered spread with fresh scones, sandwiches, and teapot at Mo & Ja's Coffee Shop"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-coffee-950/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Editorial floating note */}
                <div className="absolute -bottom-4 -left-2 sm:left-6 bg-cream-50/95 backdrop-blur-md border border-cream-300 py-2.5 px-4 rounded-xl shadow-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center shrink-0">
                    <span className="text-sage-800 text-sm">🫖</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-coffee-900">Afternoon Tea Spread</div>
                    <div className="text-[11px] text-coffee-500">Tiered treats &amp; unlimited tea</div>
                  </div>
                </div>

                {/* Local customer rating badge */}
                <div className="absolute -top-3 -right-2 sm:right-6 bg-cream-50/95 backdrop-blur-md border border-cream-300 py-2 px-3.5 rounded-xl shadow-md flex items-center gap-2">
                  <div className="flex text-caramel-500 text-xs">★★★★★</div>
                  <span className="text-xs font-semibold text-coffee-800">4.8 / 5 Rating</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
