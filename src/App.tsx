import { useState, useEffect } from "react";
import GlowingCursor from "./components/GlowingCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ToolsMarquee from "./components/ToolsMarquee";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize theme from preferred user preference or default to Dark mode (minimalist futuristic standard)
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio_theme_mode");
      if (savedTheme) {
        setIsDarkMode(savedTheme === "dark");
      } else {
        setIsDarkMode(true); // default to dark mode for an elite futuristic look
      }
    } catch {
      setIsDarkMode(true);
    }
  }, []);

  // Update document root class and store preference
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
      root.style.colorScheme = "dark";
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
    
    try {
      localStorage.setItem("portfolio_theme_mode", isDarkMode ? "dark" : "light");
    } catch (e) {
      console.warn("Storage write failed:", e);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 font-sans transition-colors duration-500 overflow-x-hidden relative select-none">
      
      {/* Custom Glowing Cursor (renders golden halo trace only in Dark Mode) */}
      <GlowingCursor isDarkMode={isDarkMode} />

      {/* Modern Header Navigation and Theme Switch */}
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Single Page Layout Content Panels */}
      <main className="relative">
        <Hero />
        <Services />
        <ToolsMarquee />
        <Projects />
        <AboutMe />
        <Testimonials />
        <Contact />
      </main>

      {/* Master Base Page Footer Info card */}
      <Footer />
    </div>
  );
}
