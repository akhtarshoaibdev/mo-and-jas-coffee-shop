import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Heart, Dog } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

export const FindUsSection: React.FC = () => {
  return (
    <section id="find-us" className="py-20 md:py-28 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 md:mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-sage-700 uppercase">
            Visit &amp; Contact
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-coffee-950 tracking-tight">
            We’d love to welcome you.
          </h2>
          <p className="text-base text-coffee-600 max-w-xl mx-auto pt-1">
            Whether you are local to The Straits or visiting Dudley, our door is open with a hot pot of tea and fresh homemade food.
          </p>
          <div className="w-12 h-0.5 bg-sage-500/60 mx-auto mt-4" />
        </div>

        {/* Content & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Business Details & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address & Direction Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-cream-50 border border-cream-300 shadow-soft space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage-800">
                <MapPin className="w-4 h-4 text-caramel-600" />
                <span>Our Address</span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-coffee-900">
                  {CAFE_DATA.location.addressLine}
                </h3>
                <p className="text-sm text-coffee-600 mt-1">
                  {CAFE_DATA.location.suburb}, {CAFE_DATA.location.town}<br />
                  {CAFE_DATA.location.region}, {CAFE_DATA.location.postcode}<br />
                  {CAFE_DATA.location.country}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={CAFE_DATA.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-coffee-800 hover:bg-coffee-900 shadow-sm transition-all duration-200"
                >
                  <Navigation className="w-3.5 h-3.5 text-caramel-300" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={CAFE_DATA.contact.phoneTel}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-coffee-800 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-sage-700" />
                  <span>Call the Café</span>
                </a>
              </div>
            </div>

            {/* Telephone & Direct Contact Card */}
            <div className="p-6 rounded-3xl bg-cream-50 border border-cream-300 shadow-soft flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-coffee-500 block">
                    Direct Telephone
                  </span>
                  <a
                    href={CAFE_DATA.contact.phoneTel}
                    className="font-serif text-lg font-semibold text-coffee-900 hover:text-sage-800 transition-colors"
                  >
                    {CAFE_DATA.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <a
                href={CAFE_DATA.contact.phoneTel}
                className="text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full bg-cream-100 hover:bg-cream-200 border border-cream-300 text-coffee-800 transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-cream-50 border border-cream-300 shadow-soft space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage-800">
                <Clock className="w-4 h-4 text-sage-600" />
                <span>Opening Hours</span>
              </div>

              <div className="space-y-2.5">
                {CAFE_DATA.hours.map((schedule, i) => (
                  <div key={i} className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-cream-200 last:border-0">
                    <span className="font-medium text-coffee-800">{schedule.days}</span>
                    <span className="text-coffee-600 font-medium">{schedule.time}</span>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-cream-100/80 border border-cream-200 text-xs text-coffee-600 italic">
                * {CAFE_DATA.hoursNotice}
              </div>
            </div>

            {/* Social & Review Profiles */}
            <div className="p-6 rounded-3xl bg-cream-50 border border-cream-300 shadow-soft space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-coffee-500 block">
                Official Profiles &amp; Social
              </span>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CAFE_DATA.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-coffee-800 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors"
                >
                  <span>Facebook Page</span>
                  <ExternalLink className="w-3.5 h-3.5 text-coffee-500" />
                </a>

                <a
                  href={CAFE_DATA.contact.tripadvisorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-coffee-800 bg-cream-100 hover:bg-cream-200 border border-cream-300 transition-colors"
                >
                  <span>Tripadvisor Listing</span>
                  <ExternalLink className="w-3.5 h-3.5 text-coffee-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Map & Visiting Amenities */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Map Frame */}
            <div className="rounded-3xl overflow-hidden bg-cream-100 border border-cream-300 p-3 shadow-soft">
              <div className="rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] relative bg-cream-200 border border-cream-300">
                <iframe
                  title="Mo & Ja's Coffee Shop Location Map"
                  src="https://maps.google.com/maps?q=110+The+Straits,+Dudley,+DY3+3BA,+UK&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-coffee-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-caramel-600 shrink-0" />
                  <span>Located at 110 The Straits, Lower Gornal, Dudley DY3 3BA</span>
                </div>
                <a
                  href={CAFE_DATA.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-semibold text-sage-800 hover:text-coffee-950 underline underline-offset-2"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </div>

            {/* What to Expect When Visiting Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-cream-100/70 border border-cream-300/80 space-y-5">
              <h3 className="font-serif text-xl font-semibold text-coffee-900">
                Visiting Mo &amp; Ja’s
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-sage-100 text-sage-800 shrink-0">
                    <Dog className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-coffee-900 uppercase">Dog-Friendly</h4>
                    <p className="text-xs text-coffee-600 mt-0.5">Four-legged companions are always warmly welcomed.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-caramel-100 text-caramel-800 shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-coffee-900 uppercase">Takeaway &amp; Dine-in</h4>
                    <p className="text-xs text-coffee-600 mt-0.5">Relax in our cozy seating or grab coffees and bakes to go.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
