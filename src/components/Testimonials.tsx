import { useState, useEffect } from "react";
import { TESTIMONIALS } from "../data";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 12000); // Transitions reviews every 12 seconds automatically
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false); // Pause auto-play on user interaction
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false); // Pause auto-play on user interaction
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-neutral-50 dark:bg-[#050505] transition-colors duration-300 relative overflow-hidden">
      {/* Decorative architectural background details */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 dark:via-neutral-850 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 flex flex-col justify-center items-center">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-base font-mono tracking-[0.2em] text-[#ECD06F] uppercase block mb-3 font-bold">
            // Client Reviews
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl text-neutral-900 dark:text-white uppercase leading-none font-black tracking-tight">
            Client Success
          </h2>
        </div>

        {/* Carousel Outer Wrapper */}
        <div className="relative w-full max-w-3xl flex items-center justify-center min-h-[380px] sm:min-h-[320px] px-2 sm:px-12">
          
          {/* Navigation - Left Arrow (Desktop) */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] lg:left-[-50px] z-15 p-3 rounded-none border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-[#ECD06F]/50 text-neutral-850 dark:text-neutral-200 transition-all duration-300 hidden sm:flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 group-hover:text-[#ECD06F] transition-colors" />
          </button>

          {/* Testimonial Active Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(4px)", y: -10 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="relative w-full p-8 sm:p-12 border border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a] shadow-[0_10px_30px_rgba(0,0,0,0.02)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col items-center text-center select-none"
            >
              {/* Decorative Watermark Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-black/5 dark:text-white/5 pointer-events-none select-none" />

              {/* 5 GOLD STARS */}
              <div className="flex items-center gap-1.5 mb-6 justify-center" id="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#ECD06F] text-[#ECD06F]" />
                ))}
              </div>

              {/* Verified Text Quote Area */}
              <div className="relative z-10 w-full mb-8">
                <p className="text-neutral-800 dark:text-neutral-200 text-base sm:text-lg md:text-xl leading-relaxed italic font-medium max-w-2xl mx-auto">
                  "{currentTestimonial.text}"
                </p>
              </div>

              {/* Line Divider */}
              <div className="w-16 h-0.5 bg-[#ECD06F]/40 mb-6" />

              {/* Clear, High-Contrast Author Details */}
              <div className="flex flex-col items-center">
                <h3 className="font-heading text-xl sm:text-2xl text-neutral-950 dark:text-white leading-tight uppercase font-black tracking-wider">
                  {currentTestimonial.name}
                </h3>
                
                <p className="text-xs sm:text-sm font-extrabold uppercase mt-1 tracking-widest text-[#ECD06F]">
                  {currentTestimonial.company}
                </p>
                <span className="text-xs sm:text-[13px] font-mono tracking-wider text-neutral-600 dark:text-neutral-400 font-bold uppercase mt-1">
                  {currentTestimonial.role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation - Right Arrow (Desktop) */}
          <button
            onClick={handleNext}
            className="absolute right-[-20px] lg:right-[-50px] z-15 p-3 rounded-none border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-950 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-[#ECD06F]/50 text-neutral-850 dark:text-neutral-200 transition-all duration-300 hidden sm:flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 group-hover:text-[#ECD06F] transition-colors" />
          </button>

        </div>

        {/* Mobile controls & Desktop Dots Indicators combined */}
        <div className="flex items-center gap-4 mt-8">
          {/* Previous (Mobile only view) */}
          <button
            onClick={handlePrev}
            className="flex sm:hidden p-2.5 border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] text-neutral-850 dark:text-neutral-200"
            aria-label="Previous page button"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator Track */}
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                className={`h-2 transition-all duration-300 rounded-none ${
                  activeIndex === index 
                    ? "w-8 bg-[#ECD06F]" 
                    : "w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-[#ECD06F]/50"
                }`}
                aria-label={`Jump to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next (Mobile only view) */}
          <button
            onClick={handleNext}
            className="flex sm:hidden p-2.5 border border-black/10 dark:border-white/10 bg-white dark:bg-[#0a0a0a] text-neutral-850 dark:text-neutral-200"
            aria-label="Next page button"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
