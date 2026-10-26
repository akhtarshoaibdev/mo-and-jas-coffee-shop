import React from 'react';
import { Phone, CheckCircle2, Clock, Heart } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

export const AfternoonTeaFeature: React.FC = () => {
  return (
    <section id="afternoon-tea" className="py-20 md:py-28 bg-[#FAF6F0] border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-cream-50 rounded-3xl border border-cream-300 p-8 sm:p-12 lg:p-16 shadow-soft overflow-hidden relative">
          
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-caramel-100/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-sage-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-100 border border-cream-300">
                <Heart className="w-3.5 h-3.5 text-caramel-600" />
                <span className="text-xs font-semibold tracking-[0.2em] text-coffee-800 uppercase">
                  {CAFE_DATA.afternoonTea.eyebrow}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-coffee-950 tracking-tight leading-[1.15]">
                {CAFE_DATA.afternoonTea.heading}
              </h2>

              <p className="font-serif italic text-lg sm:text-xl text-sage-800 leading-relaxed">
                “{CAFE_DATA.afternoonTea.supporting}”
              </p>

              <p className="text-coffee-600 leading-relaxed text-sm sm:text-base">
                {CAFE_DATA.afternoonTea.description}
              </p>

              {/* Verified Features checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {CAFE_DATA.afternoonTea.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-coffee-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Call to Enquire CTA box */}
              <div className="pt-4 border-t border-cream-200 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={CAFE_DATA.contact.phoneTel}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-white bg-coffee-800 hover:bg-coffee-900 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Phone className="w-4 h-4 text-caramel-300" />
                    <span>Enquire About Afternoon Tea</span>
                  </a>

                  <div className="text-xs text-coffee-500 flex items-center justify-center sm:justify-start gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sage-700" />
                    <span>Call ahead for availability</span>
                  </div>
                </div>

                <p className="text-xs text-coffee-500 italic">
                  * {CAFE_DATA.afternoonTea.bookingNote}
                </p>
              </div>

            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden bg-cream-100 border border-cream-300 p-3 shadow-hover">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-cream-200 relative group">
                  <img
                    src="/images/hero_afternoon_tea.jpg"
                    alt="Tiered afternoon tea spread at Mo & Ja's Coffee Shop"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-coffee-950/80 via-coffee-950/30 to-transparent text-white">
                    <p className="text-sm font-serif font-medium">A slower moment together</p>
                    <p className="text-[11px] text-white/80 mt-0.5">Tiered stands with unlimited pots of tea &amp; coffee</p>
                  </div>
                </div>
              </div>

              {/* Subtle customer praise quote chip */}
              <div className="absolute -bottom-5 -left-4 sm:left-4 max-w-xs bg-cream-50/95 backdrop-blur-md p-3.5 rounded-2xl border border-cream-300 shadow-md">
                <div className="flex items-center gap-1.5 text-caramel-600 text-xs font-semibold">
                  <span>★★★★★</span>
                  <span className="text-coffee-800 text-[11px]">“Incredible &amp; so generous”</span>
                </div>
                <p className="text-[11px] text-coffee-500 mt-0.5">Verified Tripadvisor Guest</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
