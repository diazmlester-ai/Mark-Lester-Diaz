import { TESTIMONIALS } from "../data";
import { Quote } from "lucide-react";

export default function Testimonials() {
  // Duplicate the reviews array to guarantee seamless infinite right-to-left scroll
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-24 bg-neutral-50 dark:bg-[#050505] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        
        {/* Section Title */}
        <div className="max-w-xl">
          <span className="text-base font-mono tracking-[0.2em] text-[#ECD06F] uppercase block mb-3 font-bold">
            // Client's Feedback
          </span>
          <h2 className="font-heading text-4xl sm:text-6xl text-neutral-900 dark:text-white uppercase leading-none">
            Testimonials
          </h2>
        </div>
      </div>

      {/* Cinematic infinite marquee row (movie effect from right to left, a bit slow in speed) */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Fades on left and right for beautiful movie theater transition */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-r from-neutral-50 dark:from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-40 bg-gradient-to-l from-neutral-50 dark:from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-left flex gap-6 hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((t, index) => (
            <div
              key={`${t.name}-${index}`}
              className="relative w-[340px] sm:w-[440px] shrink-0 p-8 sm:p-10 border border-black/5 dark:border-white/5 bg-white dark:bg-[#0a0a0a] transition-all duration-300 hover:border-[#ECD06F]/30 hover:shadow-[0_0_20px_rgba(236,208,111,0.05)] flex flex-col justify-between group select-none"
            >
              {/* Decorative background quote icon watermark */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-black/5 dark:text-white/5 pointer-events-none select-none" />

              <div>
                {/* Visual quote text body - adjusted bigger */}
                <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed italic mb-8 relative z-10 font-normal">
                  "{t.text}"
                </p>
              </div>

              {/* Author details foot - adjusted bigger */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-black/5 dark:border-white/5">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-none bg-neutral-100 dark:bg-neutral-950 border border-black/5 dark:border-white/5 group-hover:border-[#ECD06F]/50 transition-colors duration-300 text-sm font-mono text-neutral-800 dark:text-neutral-200 uppercase font-bold shrink-0">
                  {t.initials}
                </div>
                
                <div className="flex flex-col min-w-0">
                  <span className="font-heading text-xl sm:text-2xl text-neutral-950 dark:text-white leading-tight uppercase font-bold tracking-wider truncate">
                    {t.name}
                  </span>
                  <span className="text-xs sm:text-[13px] tracking-wider font-mono text-neutral-500 uppercase mt-1 truncate">
                    {t.role} @ <span className="text-[#ECD06F] font-semibold">{t.company}</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
