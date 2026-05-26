import React from "react";
import { ArrowUp, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-neutral-50 dark:bg-[#080808] border-t border-black/5 dark:border-white/5 py-12 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Empty placeholder for grid balance layout */}
        <div className="hidden md:block w-10 h-10" />

        {/* Middle Credits block */}
        <div className="flex flex-col items-center text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-mono text-center select-none">
          <span>&copy; 2026 Mark Lester Diaz | AI Automation Specialist</span>
        </div>

        {/* Right action button to back to top */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <button
            onClick={handleScrollTop}
            className="w-10 h-10 border border-black/10 dark:border-white/10 dark:bg-neutral-950 bg-white dark:hover:border-[#ECD06F] hover:border-black flex items-center justify-center text-neutral-500 hover:text-black dark:hover:text-[#ECD06F] transition-all cursor-none clickable group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
