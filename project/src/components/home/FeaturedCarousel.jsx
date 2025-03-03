import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function FeaturedCarousel({ podcasts }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % podcasts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [podcasts.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + podcasts.length) % podcasts.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % podcasts.length);
  };

  return (
    <div className="relative h-[400px] overflow-hidden rounded-xl">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <img
              src={podcasts[currentIndex].coverImage}
              alt={podcasts[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {podcasts[currentIndex].title}
              </h2>
              <p className="text-white/90 text-lg">
                {podcasts[currentIndex].description}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}