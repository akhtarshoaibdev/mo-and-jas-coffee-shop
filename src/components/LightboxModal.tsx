import React, { useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryPhoto } from '../data/cafeData';

interface LightboxModalProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const currentPhoto = photos[currentIndex];

  const handlePrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    onNavigate(newIndex);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    const newIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIndex);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const distance = touchStartXRef.current - touchEndXRef.current;
      const minSwipeDistance = 50;
      if (distance > minSwipeDistance) {
        // Swiped left -> next
        handleNext();
      } else if (distance < -minSwipeDistance) {
        // Swiped right -> prev
        handlePrev();
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo lightbox: ${currentPhoto.title}`}
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-coffee-950/90 backdrop-blur-md p-4 sm:p-6 transition-all animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === modalRef.current) onClose();
      }}
    >
      {/* Top Bar: Counter & Close button */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between text-white z-20">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-cream-300 font-semibold bg-coffee-900/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
            {currentIndex + 1} of {photos.length}
          </span>
          <span className="hidden sm:inline text-xs text-cream-300 font-medium">
            {currentPhoto.category}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo gallery"
          className="p-2.5 rounded-full bg-coffee-900/80 hover:bg-coffee-800 text-cream-100 hover:text-white border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-cream-300"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative rounded-2xl overflow-hidden bg-black/40 shadow-2xl border border-white/10 max-h-[72vh] flex items-center justify-center">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="max-h-[72vh] max-w-full w-auto object-contain select-none"
          />
        </div>

        {/* Caption Card */}
        <div className="mt-3.5 text-center max-w-2xl px-4">
          <h3 className="text-sm sm:text-base font-serif font-semibold text-white tracking-wide">
            {currentPhoto.title}
          </h3>
          <p className="text-xs text-cream-300/90 mt-1 leading-relaxed">
            {currentPhoto.caption}
          </p>
        </div>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous photograph"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-coffee-900/80 hover:bg-coffee-800 text-cream-100 hover:text-white border border-white/10 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cream-300"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next photograph"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-coffee-900/80 hover:bg-coffee-800 text-cream-100 hover:text-white border border-white/10 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cream-300"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
};
