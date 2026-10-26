import React from 'react';
import { Heart, Users, Sparkles, Dog } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream-100/70 border-y border-cream-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] text-sage-700 uppercase">
            Our Little Corner
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-coffee-950 tracking-tight">
            A little place to feel at home.
          </h2>
          <div className="w-12 h-0.5 bg-sage-500/60 mx-auto mt-4" />
        </div>

        {/* Story Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Images Presentation: Diptych arrangement */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-12 gap-4 items-center">
              
              <div className="col-span-7">
                <div className="rounded-2xl overflow-hidden shadow-soft border border-cream-300 aspect-[4/5] bg-cream-200">
                  <img
                    src="/images/cafe_interior.jpg"
                    alt="Welcoming seating area and counter inside Mo & Ja's Coffee Shop"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-soft border border-cream-300 aspect-square bg-cream-200">
                  <img
                    src="/images/cakes_counter.jpg"
                    alt="Freshly baked cakes and scones on the cafe counter"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 rounded-2xl bg-cream-50 border border-cream-200 shadow-xs text-center space-y-1">
                  <span className="text-xs font-semibold text-coffee-800 block">The Straits, Dudley</span>
                  <p className="text-[11px] text-coffee-500">Your warm neighborhood spot</p>
                </div>
              </div>

            </div>
          </div>

          {/* Text Description */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-coffee-900 font-medium leading-snug">
              Freshly prepared with care, served with a friendly smile.
            </h3>

            <p className="text-coffee-700 leading-relaxed text-base sm:text-lg">
              Tucked along The Straits in Lower Gornal, Mo &amp; Ja’s Coffee Shop was created to be a warm, unhurried space for our local community. Whether you're dropping by for a morning coffee, sitting down to a hearty cooked breakfast, or meeting friends for afternoon tea, our doors are always open with a genuine welcome.
            </p>

            <p className="text-coffee-600 leading-relaxed text-sm sm:text-base">
              We take pride in preparing comforting café favourites using quality ingredients—from our freshly assembled bloomer sandwiches and seasonal bakes to our much-loved cheese and potato pie. We believe good food is best enjoyed in good company, with time to pause and catch up.
            </p>

            {/* Core Values / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-cream-50/80 border border-cream-200 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sage-100 text-sage-800 shrink-0">
                  <Dog className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-coffee-900 uppercase tracking-wider">Dog-Friendly</h4>
                  <p className="text-xs text-coffee-600 mt-0.5">Four-legged companions are always greeted with a bowl of water and a warm fuss.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cream-50/80 border border-cream-200 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-caramel-100 text-caramel-800 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-coffee-900 uppercase tracking-wider">Community Hub</h4>
                  <p className="text-xs text-coffee-600 mt-0.5">Proud hosts of Talkin’ Tables, bringing people together over a cup of tea.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cream-50/80 border border-cream-200 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cream-200 text-coffee-800 shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-coffee-900 uppercase tracking-wider">Homemade Comforts</h4>
                  <p className="text-xs text-coffee-600 mt-0.5">Freshly baked scones, sponge cakes, and honest café favourites made daily.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cream-50/80 border border-cream-200 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-sage-100 text-sage-800 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-coffee-900 uppercase tracking-wider">Afternoon Tea</h4>
                  <p className="text-xs text-coffee-600 mt-0.5">Celebrated tiered spreads with savoury bites and sweet treats.</p>
                </div>
              </div>
            </div>

            {/* Quick Location Line */}
            <div className="pt-2">
              <a
                href={CAFE_DATA.contact.phoneTel}
                className="inline-flex items-center gap-2 text-xs font-semibold text-coffee-800 hover:text-coffee-950 uppercase tracking-wider underline underline-offset-4 decoration-sage-500"
              >
                <span>Call to ask about today's fresh bakes &rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
