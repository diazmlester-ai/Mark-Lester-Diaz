import { useState, useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import CircuitBackground from "./CircuitBackground";
import { motion } from "motion/react";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function Counter({ target, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setCount(target);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // easeOutExpo deceleration curve
            const easeOutExpo = (x: number): number => {
              return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            };

            const easedProgress = easeOutExpo(percentage);
            const currentCount = Math.floor(easedProgress * target);

            setCount(currentCount);

            if (percentage < 1) {
              animationFrameId = requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          animationFrameId = requestAnimationFrame(animate);

          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-8 pt-36 pb-24 overflow-hidden bg-white dark:bg-black select-none">
      {/* Animated tiny connecting nodes background with 75% opacity */}
      <div className="absolute inset-0 opacity-75 z-0 pointer-events-none select-none">
        <CircuitBackground />
      </div>

      {/* Futuristic Gold Ambient Glow Blob behind Hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#ECD06F]/5 dark:bg-[#ECD06F]/5 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* AI Automation Specialist Tag with glowing pulse dot and circular borders */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-8 border border-[#ECD06F]/40 rounded-full bg-neutral-50/70 dark:bg-neutral-950/70 backdrop-blur-md shadow-[0_0_20px_rgba(236,208,111,0.15)] select-none">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ECD06F] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ECD06F]"></span>
          </span>
          <span className="text-xs sm:text-sm tracking-[0.2em] font-mono text-neutral-800 dark:text-neutral-200 uppercase font-bold">
            AI Automation Specialist
          </span>
        </div>

        {/* Main Headline with Clarify Text Effect */}
        <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[1.05] transition-all select-all text-neutral-900 dark:text-white max-w-5xl flex flex-col items-center justify-center space-y-1 md:space-y-2">
          {[
            { text: "Automate Smarter.", delay: 0 },
            { text: "Optimize Workflows.", delay: 0.2 },
            { text: "Scale Businesses.", delay: 0.4 }
          ].map((item, index) => {
            const letters = Array.from(item.text);
            return (
              <motion.span
                key={index}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.02,
                      delayChildren: item.delay
                    }
                  }
                }}
                className="inline-block relative text-center cursor-default select-none group"
              >
                {letters.map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    variants={{
                      hidden: { filter: "blur(12px)", opacity: 0, y: 15 },
                      visible: { 
                        filter: "blur(0px)", 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          duration: 0.7,
                          ease: [0.16, 1, 0.3, 1]
                        }
                      }
                    }}
                    whileHover={{
                      scale: 1.12,
                      transition: { duration: 0.12, ease: "easeOut" }
                    }}
                    className="inline-block transition-colors duration-200 text-neutral-900 dark:text-white hover:text-[#ECD06F] dark:hover:text-[#ECD06F] cursor-none clickable"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            );
          })}
        </h1>

        {/* Exact Requested Tagline */}
        <p className="max-w-3xl mt-11 text-neutral-600 dark:text-neutral-300 text-xl md:text-2xl font-normal leading-relaxed text-balance font-sans">
          Helping businesses automate repetitive tasks, optimize workflows, and scale efficiently with AI-powered solutions.
        </p>

        {/* Hero Button Actions */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-5 w-full justify-center">
          <button
            onClick={() => handleScrollTo("#projects")}
            className="w-full sm:w-auto px-10 py-5 bg-black dark:bg-[#ECD06F] text-white dark:text-black font-semibold text-sm uppercase tracking-widest rounded-none hover:bg-neutral-900 dark:hover:bg-[#dfc259] transition-all hover:shadow-[0_0_25px_rgba(236,208,111,0.25)] flex items-center justify-center gap-2.5 cursor-none clickable group"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleScrollTo("#contact")}
            className="w-full sm:w-auto px-10 py-5 border border-black/10 dark:border-white/10 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white dark:bg-neutral-950 bg-neutral-50 hover:border-black dark:hover:border-white font-semibold text-sm uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-2.5 cursor-none clickable group"
          >
            <Play className="w-3.5 h-3.5 fill-current group-hover:scale-110 transition-transform" />
            <span>Book a Strategy Call</span>
          </button>
        </div>

        {/* Modern Metrics Bar */}
        <div className="w-full max-w-5xl mt-32 pt-12 border-t border-black/5 dark:border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <span className="font-heading text-8xl md:text-9xl xl:text-[110px] text-[#ECD06F] tracking-tight">
              <Counter target={10} suffix="" />
            </span>
            <span className="text-xs sm:text-sm tracking-wider uppercase font-mono text-neutral-500 mt-2 text-center">
              Workflows Deployed
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-heading text-8xl md:text-9xl xl:text-[110px] text-neutral-900 dark:text-white tracking-tight">
              <Counter target={10} suffix="K+" />
            </span>
            <span className="text-xs sm:text-sm tracking-wider uppercase font-mono text-neutral-500 mt-2 text-center">
              Hours Saved Yearly
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-heading text-8xl md:text-9xl xl:text-[110px] text-neutral-900 dark:text-white tracking-tight">
              <Counter target={99} suffix="%" />
            </span>
            <span className="text-xs sm:text-sm tracking-wider uppercase font-mono text-neutral-500 mt-2 text-center">
              Process Accuracy
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-heading text-8xl md:text-9xl xl:text-[110px] text-[#ECD06F] tracking-tight">
              <Counter target={3} suffix="X+" />
            </span>
            <span className="text-xs sm:text-sm tracking-wider uppercase font-mono text-neutral-500 mt-2 text-center">
              Average Client ROI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
