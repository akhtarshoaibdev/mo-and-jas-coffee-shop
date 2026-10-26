import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { CAFE_DATA } from '../data/cafeData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Typographic Wordmark & Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sage-600 rounded-lg p-1"
            aria-label="Mo & Ja's Coffee Shop Home"
          >
            <img
              src="/logo.jpg"
              alt="Mo & Ja's Coffee Shop"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border border-cream-300 shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-coffee-900 group-hover:text-sage-800 transition-colors">
                Mo &amp; Ja’s
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-coffee-500 uppercase -mt-0.5">
                COFFEE SHOP
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-coffee-700 hover:text-coffee-950 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-sage-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3.5">
            <a
              href={CAFE_DATA.contact.phoneTel}
              className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-coffee-700 hover:text-coffee-900 bg-cream-100 hover:bg-cream-200 border border-cream-300 rounded-full transition-colors"
              title="Call the café"
            >
              <Phone className="w-3.5 h-3.5 text-sage-700" />
              <span>{CAFE_DATA.contact.phoneDisplay}</span>
            </a>

            <a
              href="#find-us"
              onClick={(e) => handleLinkClick(e, '#find-us')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-coffee-800 hover:bg-coffee-900 shadow-sm transition-all duration-200 hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Visit Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={CAFE_DATA.contact.phoneTel}
              aria-label="Call Mo & Ja's"
              className="p-2 rounded-full bg-cream-100 text-coffee-800 border border-cream-300"
            >
              <Phone className="w-4 h-4 text-sage-800" />
            </a>
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-coffee-800 hover:text-coffee-950 hover:bg-cream-200/80 transition-colors focus:outline-none focus:ring-2 focus:ring-sage-600"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[65px] bg-cream-50/98 backdrop-blur-lg border-b border-cream-200 shadow-xl transition-all animate-in fade-in slide-in-from-top-2 duration-200"
          id="mobile-menu"
        >
          <div className="px-6 py-6 space-y-4">
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-coffee-800 hover:text-coffee-950 hover:bg-cream-200/70 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-cream-200 flex flex-col gap-3">
              <a
                href={CAFE_DATA.contact.phoneTel}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-coffee-800 bg-cream-200/90 rounded-xl"
              >
                <Phone className="w-4 h-4 text-sage-700" />
                <span>Call {CAFE_DATA.contact.phoneDisplay}</span>
              </a>

              <a
                href="#find-us"
                onClick={(e) => handleLinkClick(e, '#find-us')}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-coffee-800 rounded-xl shadow-sm"
              >
                <MapPin className="w-4 h-4 text-caramel-300" />
                <span>Find Us in Dudley</span>
              </a>

              <div className="text-center text-xs text-coffee-500 pt-2">
                110 The Straits, Lower Gornal, Dudley
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
