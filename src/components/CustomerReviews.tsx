import React from 'react';
import { ExternalLink, Quote } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

export const CustomerReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAF6F0] border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-sage-700 uppercase">
            Customer Love
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-coffee-950 tracking-tight">
            Kind words from our community.
          </h2>
          <p className="text-base text-coffee-600 max-w-xl mx-auto pt-1">
            Authentic feedback and shared experiences from customers visiting our little coffee shop in Dudley.
          </p>
          <div className="w-12 h-0.5 bg-sage-500/60 mx-auto mt-4" />
        </div>

        {/* Rating summary bar */}
        <div className="max-w-xl mx-auto mb-12 p-4 rounded-2xl bg-cream-50 border border-cream-300 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-sage-100 flex items-center justify-center font-serif font-bold text-sage-900 text-lg">
              4.8
            </div>
            <div>
              <div className="flex text-caramel-500 text-sm">★★★★★</div>
              <p className="text-xs font-semibold text-coffee-900 mt-0.5">
                Top Rated Local Tearoom &amp; Café
              </p>
            </div>
          </div>

          <a
            href={CAFE_DATA.contact.tripadvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-800 hover:text-coffee-950 transition-colors uppercase tracking-wider"
          >
            <span>View on Tripadvisor</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CAFE_DATA.reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-7 sm:p-8 rounded-3xl bg-cream-50 border border-cream-200/90 shadow-soft flex flex-col justify-between transition-all duration-300 hover:shadow-hover hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex text-caramel-500 text-sm">★★★★★</div>
                  <Quote className="w-5 h-5 text-cream-300 shrink-0" />
                </div>

                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-cream-100 text-coffee-800 border border-cream-300 mb-3">
                  {rev.verifiedHighlight}
                </span>

                <h3 className="font-serif text-lg font-semibold text-coffee-900 mb-2">
                  “{rev.title}”
                </h3>

                <p className="text-sm text-coffee-600 leading-relaxed italic">
                  {rev.quote}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200 flex items-center justify-between text-xs text-coffee-500">
                <span className="font-semibold text-coffee-800">{rev.reviewer}</span>
                <span className="text-[11px] text-coffee-400">{rev.source}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Link to Tripadvisor */}
        <div className="mt-12 text-center">
          <a
            href={CAFE_DATA.contact.tripadvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-coffee-800 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors"
          >
            <span>Read full reviews and customer photos on Tripadvisor</span>
            <ExternalLink className="w-3.5 h-3.5 text-sage-700" />
          </a>
        </div>

      </div>
    </section>
  );
};
