import React from 'react';
import { Phone, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Afternoon Tea', href: '#afternoon-tea' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Find Us', href: '#find-us' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-cream-100 border-t border-cream-300 pt-16 pb-12 text-coffee-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-cream-300">
          
          {/* Brand & Welcoming Line */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Mo & Ja's Coffee Shop"
                className="w-12 h-12 rounded-full object-cover border border-cream-300 shadow-xs"
              />
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-coffee-950 block">
                  Mo &amp; Ja’s
                </span>
                <span className="text-[11px] font-semibold tracking-[0.22em] text-coffee-500 uppercase block -mt-0.5">
                  COFFEE SHOP
                </span>
              </div>
            </div>

            <p className="text-sm text-coffee-600 max-w-sm leading-relaxed">
              A welcoming neighbourhood spot in The Straits, Dudley. Relaxed breakfasts, comforting homemade favourites, and leisurely afternoon tea.
            </p>

            <div className="pt-2 text-xs text-coffee-500">
              <p>Dog-friendly • Homemade daily • Free local smiles</p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-coffee-900">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-coffee-600 hover:text-coffee-950 transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-coffee-900">
              Visit &amp; Enquire
            </h4>

            <div className="space-y-2.5 text-sm text-coffee-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-caramel-600 shrink-0 mt-0.5" />
                <span>
                  110 The Straits, Lower Gornal, Dudley, West Midlands, DY3 3BA
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sage-700 shrink-0" />
                <a
                  href={CAFE_DATA.contact.phoneTel}
                  className="font-medium text-coffee-800 hover:text-coffee-950 underline underline-offset-2"
                >
                  {CAFE_DATA.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href={CAFE_DATA.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-coffee-700 hover:text-coffee-900 bg-cream-50 hover:bg-cream-200 border border-cream-300 transition-colors"
              >
                <span>Facebook</span>
                <ExternalLink className="w-3 h-3 text-coffee-400" />
              </a>

              <a
                href={CAFE_DATA.contact.tripadvisorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-coffee-700 hover:text-coffee-900 bg-cream-50 hover:bg-cream-200 border border-cream-300 transition-colors"
              >
                <span>Tripadvisor</span>
                <ExternalLink className="w-3 h-3 text-coffee-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-coffee-500">
          <div>
            &copy; {currentYear} {CAFE_DATA.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="italic">Made with care for Mo &amp; Ja’s Coffee Shop</span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-coffee-600 hover:text-coffee-950 font-medium transition-colors p-1 focus:outline-none"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
