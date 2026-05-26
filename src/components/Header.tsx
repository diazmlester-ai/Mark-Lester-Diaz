import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About Me", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "border-b border-black/5 dark:border-white/5 bg-white/80 dark:bg-black/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Name Tagline - Anton font display */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col select-none group"
        >
          <span className="font-heading text-3xl sm:text-4xl tracking-widest text-[#ECD06F] group-hover:text-black dark:group-hover:text-white transition-colors duration-300 uppercase">
            MARK
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-[#ECD06F] transition-colors py-2 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ECD06F] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Theme toggle button */}
          <button
            onClick={toggleDarkMode}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 dark:hover:text-[#ECD06F] transition-all duration-300 cursor-none clickable hover:scale-105 active:scale-95"
            aria-label="Toggle Theme Mode"
          >
            <div className="relative w-5 h-5 transition-transform duration-500 [transform-style:preserve-3d] group-hover:rotate-12">
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-[#ECD06F]" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-800" />
              )}
            </div>
          </button>

          {/* Core Call to Action */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="relative inline-flex items-center gap-2 group px-5 py-2.5 rounded-none overflow-hidden bg-black dark:bg-[#ECD06F] dark:text-black text-white text-xs font-semibold uppercase tracking-widest cursor-none clickable hover:shadow-[0_0_20px_rgba(236,208,111,0.25)] transition-all"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Controls Right */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* Mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-[#ECD06F]"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-neutral-800" />}
          </button>

          {/*burger menu*/}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-none bg-black dark:bg-[#ECD06F] dark:text-black text-white hover:opacity-90"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 top-[72px] bg-white dark:bg-black/95 z-30 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 pb-20 px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl font-bold font-heading tracking-wider uppercase text-black dark:text-white hover:text-[#ECD06F] dark:hover:text-[#ECD06F] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ECD06F] text-black text-sm uppercase font-bold tracking-widest hover:brightness-110"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
