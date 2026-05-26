import { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { X, ArrowRight, CheckCircle2, Cpu, Sparkles, ExternalLink, GitMerge, FileCheck2, Maximize2, ChevronLeft, ChevronRight, Folder, FolderOpen, ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

// Custom premium SVG brand icons for the case study container tabs
const AIAgentIcon = ({ className, isActive }: { className?: string; isActive?: boolean }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={`${className} ${isActive ? "text-[#ECD06F]" : "text-neutral-400"}`}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M21 9h-3M21 15h-3M6 9H3M6 15H3M9 21v-3M15 21v-3M9 6V3M15 6V3" />
    <path d="M12 9v6M9 12h6" strokeWidth="3" />
    <circle cx="12" cy="12" r="1.5" className={isActive ? "animate-pulse" : ""} />
  </svg>
);

const getCategoryIcon = (cat: string, isActive: boolean) => {
  const sizeClass = "w-7 h-7 shrink-0 transition-transform duration-300 group-hover:scale-110 object-contain";
  switch (cat) {
    case "All":
      return <AIAgentIcon className="w-7 h-7 shrink-0 transition-transform duration-300 group-hover:scale-110" isActive={isActive} />;
    case "Zapier":
      return (
        <img
          src="https://lh3.googleusercontent.com/d/17kwTpdeG8GHDB9v4HX4AdfD89dsyrPuU"
          alt="Zapier"
          className={`${sizeClass} ${isActive ? "" : "grayscale opacity-50"}`}
          referrerPolicy="no-referrer"
        />
      );
    case "Make":
    case "Make.com":
      return (
        <img
          src="https://lh3.googleusercontent.com/d/1wQmmIZ_VJcwD2WijFbXXGEmRCxvwU6Zp"
          alt="Make.com"
          className={`${sizeClass} ${isActive ? "" : "grayscale opacity-50"}`}
          referrerPolicy="no-referrer"
        />
      );
    case "n8n":
      return (
        <img
          src="https://lh3.googleusercontent.com/d/12GLNghLYNqkVxuZOQnF-tw0-BHkAGuIR"
          alt="n8n"
          className={`${sizeClass} ${isActive ? "" : "grayscale opacity-50"}`}
          referrerPolicy="no-referrer"
        />
      );
    default:
      return isActive ? (
        <FolderOpen className="w-7 h-7 shrink-0 text-neutral-950 dark:text-black transition-transform duration-300 group-hover:scale-110" />
      ) : (
        <Folder className="w-7 h-7 shrink-0 text-neutral-500 transition-transform duration-300 group-hover:scale-110" />
      );
  }
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    const container = carouselRef.current;
    if (!container) return;
    const card = container.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 32; // gap-8 = 32px
    const step = cardWidth + gap;
    container.scrollBy({ left: -step, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = carouselRef.current;
    if (!container) return;
    const card = container.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 32; // gap-8 = 32px
    const step = cardWidth + gap;
    container.scrollBy({ left: step, behavior: "smooth" });
  };

  const categories = ["All", "Zapier", "Make", "n8n"];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "All") return true;
    if (filter === "Zapier") {
      return proj.tags.some(t => t.toLowerCase() === "zapier");
    }
    if (filter === "Make") {
      return proj.tags.some(t => t.toLowerCase().startsWith("make") || t.toLowerCase().includes("make.com"));
    }
    if (filter === "n8n") {
      return proj.tags.some(t => t.toLowerCase() === "n8n");
    }
    return true;
  });

  // Handle escape key to close modal or expanded view safely
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
        setFullscreenImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when modal or full-window view is open
  useEffect(() => {
    if (activeProject || fullscreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject, fullscreenImage]);

  // Step-by-step automatic scrolling carousel logic (one by one)
  useEffect(() => {
    if (filter !== "All" || isMouseEnter) return;

    const container = carouselRef.current;
    if (!container) return;

    const handleAutoScroll = () => {
      if (!container) return;

      const card = container.firstElementChild as HTMLElement;
      if (!card) return;

      const cardWidth = card.getBoundingClientRect().width;
      const gap = 32; // gap-8 = 32px
      const step = cardWidth + gap;

      const maxScroll = container.scrollWidth - container.clientWidth;

      // If we are at or near the end, wrap smoothly to the start
      if (container.scrollLeft >= maxScroll - step / 2) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Otherwise, scroll to next card (left-to-right progress)
        container.scrollTo({ left: container.scrollLeft + step, behavior: "smooth" });
      }
    };

    const intervalId = setInterval(handleAutoScroll, 3500); // Transitions every 3.5 seconds

    return () => clearInterval(intervalId);
  }, [filter, isMouseEnter]);

  // High-fidelity flow diagram node generator for each project
  const renderFlowDiagram = (projId: string) => {
    switch (projId) {
      case "project-1":
        return (
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 p-6 bg-neutral-950/80 border border-white/5 rounded-none font-mono text-[10px] w-full mt-4 overflow-x-auto">
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">TRIGGER</span>
              <span className="font-bold">Facebook Comment</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600 hidden md:block" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-[#ECD06F]/30 text-neutral-300">
              <span className="text-[#ECD06F]">n8n WEBHOOK</span>
              <span className="font-bold">Capture Event</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600 hidden md:block" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">GEMINI AI</span>
              <span className="font-bold">Prompt & Memory</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600 hidden md:block" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-emerald-500 font-bold">HTTP EXECUTOR</span>
              <span className="font-bold">Send Reply Call</span>
            </div>
          </div>
        );
      case "project-2":
        return (
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 p-6 bg-neutral-950/80 border border-white/5 rounded-none font-mono text-[10px] w-full mt-4 overflow-x-auto">
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">SLACK COMMAND</span>
              <span className="font-bold">Trigger Scrape</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-[#ECD06F]/30 text-neutral-300">
              <span className="text-[#ECD06F]">RAPID API</span>
              <span className="font-bold">Collect Jobs</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">OPENROUTER</span>
              <span className="font-bold">Optimize Resume</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-emerald-500 font-bold">GMAIL CORE</span>
              <span className="font-bold">Draft Inbox Ready</span>
            </div>
          </div>
        );
      case "project-3":
        return (
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 p-6 bg-neutral-950/80 border border-white/5 rounded-none font-mono text-[10px] w-full mt-4 overflow-x-auto">
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">DRIVE WATCH</span>
              <span className="font-bold">New Media item</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-[#ECD06F]/30 text-neutral-300">
              <span className="text-[#ECD06F]">ZAPIER LOOP</span>
              <span className="font-bold">Transcription</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">CLAUDE AI</span>
              <span className="font-bold">Channel Output</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-neutral-800 text-neutral-400">
              <span className="text-[#ECD06F]">LINKEDIN API</span>
              <span className="text-white font-bold">Live Social Dispatch</span>
            </div>
          </div>
        );
      case "project-4":
        return (
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 p-6 bg-neutral-950/80 border border-white/5 rounded-none font-mono text-[10px] w-full mt-4 overflow-x-auto">
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">ASANA WEBHOOK</span>
              <span className="font-bold">Task status changed</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-[#ECD06F]/50 text-neutral-300">
              <span className="text-[#ECD06F]">ROUTING PATHS</span>
              <span className="font-bold">Staging Conditions</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">ZAPIER DELAY</span>
              <span className="font-bold">Wait 3 Days</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-emerald-500 font-bold">NURTURE SEQUENCE</span>
              <span className="font-bold">Custom Gmail Delivered</span>
            </div>
          </div>
        );
      case "project-5":
        return (
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 p-6 bg-neutral-950/80 border border-white/5 rounded-none font-mono text-[10px] w-full mt-4 overflow-x-auto">
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">CHRON TAB</span>
              <span className="font-bold">Daily Auto trigger</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-[#ECD06F]/30 text-neutral-300">
              <span className="text-[#ECD06F]">OPENROUTER</span>
              <span className="font-bold">Script Brainstorm</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">RECURSIVE LOOP</span>
              <span className="font-bold">JWT Polling API</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-red-500 font-bold">YOUTUBE API</span>
              <span className="font-bold">Autonomous Upload</span>
            </div>
          </div>
        );
      case "project-6":
        return (
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 p-6 bg-neutral-950/80 border border-white/5 rounded-none font-mono text-[10px] w-full mt-4 overflow-x-auto">
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">MAIL WATCHER</span>
              <span className="font-bold">Inspect inbox files</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-[#ECD06F]/30 text-neutral-300">
              <span className="text-[#ECD06F]">OPENAI CHAT</span>
              <span className="font-bold">Summary & Naming</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-emerald-500 font-bold">GOOGLE DRIVE</span>
              <span className="font-bold">Save Structured Node</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-emerald-500 p-1 bg-emerald-950 border-emerald-800">GOOGLE SHEETS</span>
              <span className="font-bold">Append Action Log</span>
            </div>
          </div>
        );
      case "project-7":
        return (
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 p-6 bg-neutral-950/80 border border-white/5 rounded-none font-mono text-[10px] w-full mt-4 overflow-x-auto">
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">USER QUERY</span>
              <span className="font-bold">Prompt Received</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-[#ECD06F]/30 text-neutral-300">
              <span className="text-[#ECD06F]">EMBEDDINGS API</span>
              <span className="font-bold">Vectorization</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">VECTOR DB</span>
              <span className="font-bold">Retrieve Chunks</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-305 text-neutral-300">
              <span className="text-emerald-500 font-bold">OPENROUTER LLM</span>
              <span className="font-bold">Zero-Hallucination output</span>
            </div>
          </div>
        );
      case "project-8":
        return (
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 p-6 bg-neutral-950/80 border border-white/5 rounded-none font-mono text-[10px] w-full mt-4 overflow-x-auto">
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">WEBHOOK INBOUND</span>
              <span className="font-bold">Lead Intercepted</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-[#ECD06F]/30 text-neutral-300">
              <span className="text-[#ECD06F]">ENRICHMENT CORE</span>
              <span className="font-bold">Clearbit API Poll</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">GHL CRM SYNC</span>
              <span className="font-bold">Contact Updated</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">SLACK ALERTS</span>
              <span className="font-bold">Priority High-Fit Flag</span>
            </div>
          </div>
        );
      case "project-9":
        return (
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 p-6 bg-neutral-950/80 border border-white/5 rounded-none font-mono text-[10px] w-full mt-4 overflow-x-auto">
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">XERO TRIGGER</span>
              <span className="font-bold">Invoice Approved</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-[#ECD06F]/30 text-neutral-300">
              <span className="text-[#ECD06F] font-bold">MAKE SCENARIO</span>
              <span className="font-bold">Parse Transaction JSON</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">ASANA PROJECT</span>
              <span className="font-bold">Create Checklist</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-emerald-500 font-bold">RECONCILIATION</span>
              <span className="font-bold">Ledger Log Verified</span>
            </div>
          </div>
        );
      case "project-10":
        return (
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 p-6 bg-neutral-950/80 border border-white/5 rounded-none font-mono text-[10px] w-full mt-4 overflow-x-auto">
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-[#ECD06F]/20 text-neutral-300">
              <span className="text-[#ECD06F]">STRIPE WEBHOOK</span>
              <span className="font-bold">Checkout Complete</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-[#ECD06F]">CRM AUTOPROVISION</span>
              <span className="font-bold">Create Learner record</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-[#ECD06F]/30 text-neutral-300">
              <span className="text-[#ECD06F]">GHL DELIVERY CORE</span>
              <span className="font-bold">Schedule Emails</span>
            </div>
            <ArrowRight className="w-4 h-4 text-neutral-600" />
            <div className="flex flex-col items-center p-3 bg-neutral-900 border border-white/10 text-neutral-300">
              <span className="text-emerald-500 font-bold">GMAIL API</span>
              <span className="font-bold">Deliver Course Modules</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-32 px-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-base font-mono tracking-[0.2em] text-[#ECD06F] uppercase block mb-4 font-bold">
              // FEATURED PROJECTS
            </span>
            <h2 className="font-heading text-5xl sm:text-7xl text-neutral-900 dark:text-white uppercase leading-none">
              DEPLOYED WORKFLOWS.
            </h2>
            <p className="mt-5 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
              Real-world automation systems designed to solve business challenges and deliver measurable impact.
            </p>
          </div>
        </div>

        {/* Elegant modern filter buttons */}
        <div className="flex flex-wrap gap-4 mb-10 w-full justify-start">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-4 sm:px-10 sm:py-4.5 font-mono text-sm sm:text-base uppercase tracking-widest font-black transition-all duration-300 rounded-none border clickable select-none cursor-none flex items-center gap-2.5 ${
                  isActive
                    ? "bg-[#ECD06F] text-black border-[#ECD06F] font-extrabold shadow-sm"
                    : "bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 hover:text-neutral-950 dark:hover:text-white"
                }`}
              >
                <span>{cat === "Make" ? "MAKE.COM" : cat}</span>
                <span className={`text-xs font-mono px-2 py-0.5 rounded font-black ${
                  isActive
                    ? "bg-black/10 text-black"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                }`}>
                  {cat === "All" ? PROJECTS.length :
                   cat === "Zapier" ? PROJECTS.filter(p => p.tags.some(t => t.toLowerCase() === "zapier")).length :
                   cat === "Make" ? PROJECTS.filter(p => p.tags.some(t => t.toLowerCase().startsWith("make") || t.toLowerCase().includes("make.com"))).length :
                   PROJECTS.filter(p => p.tags.some(t => t.toLowerCase() === "n8n")).length
                  }
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Sheet Container - Frame-free layer with navigational arrow buttons built-in */}
        <div className="relative w-full">
          
          {filter === "All" ? (
            /* Carousel View for 'All' tab */
            <div className="relative group/carousel py-2 flex items-center gap-4">
              
              {/* Left Encircled Arrow Button */}
              <button
                onClick={scrollLeft}
                className="flex shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-[#ECD06F] hover:border-[#ECD06F] hover:text-black items-center justify-center transition-all select-none cursor-none clickable hover:shadow-[0_0_15px_rgba(236,208,111,0.25)] z-25"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
              </button>
              
              <div className="relative flex-1 min-w-0">
                {/* Overlay scroll indicators / subtle fades */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

                {/* Scrolling Carousel Row */}
                <div
                  ref={carouselRef}
                  onMouseEnter={() => setIsMouseEnter(true)}
                  onMouseLeave={() => setIsMouseEnter(false)}
                  className="flex overflow-x-auto scrollbar-none gap-8 py-6 px-1 select-none"
                  style={{ scrollbarWidth: "none" }}
                >
                  {filteredProjects.map((proj, idx) => (
                    <div
                      key={`${proj.id}-all-${idx}`}
                      onClick={() => setActiveProject(proj)}
                      className="flex-shrink-0 w-[380px] sm:w-[480px] group border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/20 p-12 sm:p-14 flex flex-col justify-between hover:border-[#ECD06F]/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(236,208,111,0.07)] cursor-none clickable select-none hover:scale-[1.02]"
                    >
                      <div>
                         {/* Header info */}
                         <div className="flex items-center justify-between mb-5 pointer-events-none">
                           <span className="font-mono text-xs tracking-widest uppercase text-emerald-500 font-extrabold border border-emerald-500/40 px-3 py-1 bg-emerald-500/5 flex items-center gap-1.5">
                             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                             <span>LIVE</span>
                           </span>
                           <span className="font-mono text-[10px] text-neutral-450 dark:text-neutral-500 uppercase tracking-wider">
                             // Production Stable
                           </span>
                         </div>

                        {/* Title */}
                        <h3 className="font-heading text-3xl sm:text-[34px] xl:text-[38px] text-neutral-900 dark:text-white uppercase group-hover:text-[#ECD06F] transition-colors duration-200 mb-5 tracking-wide leading-tight font-black">
                          {proj.title}
                        </h3>

                        {/* Description */}
                        <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed mb-8 line-clamp-4">
                          {proj.description}
                        </p>
                      </div>

                      <div>
                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-1.5 mb-5 pointer-events-none">
                          {proj.tags.slice(0, 3).map((t) => (
                            <span key={t} className="text-xs font-mono bg-black/5 dark:bg-white/5 px-2.5 py-1 text-neutral-500 dark:text-neutral-400">
                              {t}
                            </span>
                          ))}
                          {proj.tags.length > 3 && (
                            <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mt-1">
                              +{proj.tags.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* CTA Line */}
                        <span className="font-mono text-xs tracking-widest text-[#ECD06F] uppercase inline-flex items-center gap-1.5 group-hover:brightness-110 transition-all">
                          <span>View Blueprint</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Encircled Arrow Button */}
              <button
                onClick={scrollRight}
                className="flex shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 hover:bg-[#ECD06F] hover:border-[#ECD06F] hover:text-black items-center justify-center transition-all select-none cursor-none clickable hover:shadow-[0_0_15px_rgba(236,208,111,0.25)] z-25"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
              </button>

            </div>
          ) : (
            /* Traditional Active Platform view (Zapier, Make, n8n) formatted as categorized sheets */
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setActiveProject(proj)}
                  className="group border border-black/5 dark:border-white/5 bg-white dark:bg-neutral-950/80 p-12 sm:p-14 flex flex-col justify-between hover:border-[#ECD06F]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,208,111,0.06)] cursor-none clickable hover:scale-[1.02]"
                >
                  <div>
                    {/* Header info */}
                    <div className="flex items-center justify-between mb-5 pointer-events-none">
                      <span className="font-mono text-xs tracking-widest uppercase text-emerald-500 font-extrabold border border-emerald-500/40 px-3 py-1 bg-emerald-500/5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>LIVE</span>
                      </span>
                      <span className="font-mono text-[10px] text-neutral-450 dark:text-neutral-500 uppercase tracking-wider">
                        // Production Stable
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-3xl sm:text-[34px] xl:text-[38px] text-neutral-900 dark:text-white uppercase group-hover:text-[#ECD06F] transition-colors duration-200 mb-5 tracking-wide leading-tight font-black">
                      {proj.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed mb-8 line-clamp-4">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5 font-mono">
                      {proj.tags.slice(0, 3).map((t) => (
                        <span key={t} className="text-xs bg-black/5 dark:bg-white/5 px-2.5 py-1 text-[#ECD06F] dark:text-[#ECD06F]/90 bg-[#ECD06F]/5 border border-[#ECD06F]/10">
                          {t}
                        </span>
                      ))}
                      {proj.tags.length > 3 && (
                        <span className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                          +{proj.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA Line */}
                    <span className="font-mono text-xs tracking-widest text-[#ECD06F] uppercase inline-flex items-center gap-1.5 group-hover:brightness-110 transition-all">
                      <span>View Blueprint</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Overlay Component when selected */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Ambient Darkened Backdrop with blur */}
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setActiveProject(null)}
            />

            {/* Modal Box */}
            <div className="relative bg-white dark:bg-neutral-950 border border-[#ECD06F]/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 z-10 rounded-none shadow-[0_0_50px_rgba(236,208,111,0.1)]">
              {/* Close Button right corner */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-black dark:hover:text-[#ECD06F] transition-colors cursor-none clickable"
                aria-label="Close Case Study Details"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Category Pill */}
              <span className="text-[10px] font-mono tracking-widest text-[#ECD06F] border border-[#ECD06F]/20 px-2.5 py-1 uppercase inline-block mb-4">
                {activeProject.category} // ARCHITECTURE BLUEPRINT
              </span>

              {/* Title display */}
              <h3 className="font-heading text-4xl md:text-5xl text-neutral-900 dark:text-white uppercase mb-4 tracking-wider">
                {activeProject.title}
              </h3>

              {/* Core Description */}
              <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed max-w-3xl mb-8">
                {activeProject.description}
              </p>

              {/* If the project has an associated production canvas screenshot, render it */}
              {(activeProject.workflowImageUrl || activeProject.id === "project-1") && (
                <div className="border border-black/5 dark:border-white/5 p-6 bg-neutral-50 dark:bg-neutral-900/30 mb-8 rounded-none">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-black/5 dark:border-white/10">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#ECD06F]" />
                      <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
                        Production Workflow Architecture
                      </span>
                    </div>
                    <button
                      onClick={() => setFullscreenImage(activeProject.workflowImageUrl || "/AI Agent for Facebook.jpg")}
                      className="px-3 py-1.5 font-mono text-[9px] tracking-wider uppercase bg-black dark:bg-[#ECD06F] text-white dark:text-black hover:bg-neutral-850 dark:hover:brightness-110 transition-colors flex items-center gap-1.5 cursor-none clickable select-none font-bold"
                    >
                      <span>View in Full Window</span>
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  
                  <div 
                    onClick={() => setFullscreenImage(activeProject.workflowImageUrl || "/AI Agent for Facebook.jpg")}
                    className="relative group border border-black/10 dark:border-white/10 bg-[#0c0c0c] p-1.5 overflow-hidden cursor-none clickable transition-all duration-300 hover:border-[#ECD06F]/50"
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-black/80 px-3 py-2 border border-white/20">
                        Click to Expand / Fullscreen
                      </span>
                    </div>
                    <img 
                      src={activeProject.workflowImageUrl || "/AI Agent for Facebook.jpg"} 
                      alt={`Production Canvas for ${activeProject.title}`}
                      className="w-full h-auto brightness-95 group-hover:brightness-100 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              )}

              {/* Execution details list & Key metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-t border-black/5 dark:border-white/5 pt-8">
                <div className="md:col-span-2">
                  <h4 className="font-mono text-xs tracking-widest text-[#ECD06F] uppercase mb-4 flex items-center gap-1.5 font-bold">
                    <FileCheck2 className="w-4 h-4" />
                    <span>How it performs</span>
                  </h4>
                  <ul className="space-y-3 font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    {activeProject.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <CheckCircle2 className="w-4 h-4 text-[#ECD06F] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="font-mono text-xs tracking-widest text-[#ECD06F] uppercase mb-3 font-bold">
                      // PERFORMANCE SCORE
                    </h4>
                    {activeProject.metrics && (
                      <div className="bg-neutral-50 dark:bg-neutral-900/50 p-4 border border-black/5 dark:border-white/5">
                        <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                          {activeProject.metrics.label}
                        </span>
                        <span className="font-heading text-3xl text-neutral-900 dark:text-white mt-1 block">
                          {activeProject.metrics.value}
                        </span>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-mono text-xs tracking-widest text-[#ECD06F] uppercase mb-3 font-bold">
                      // TECHNOLOGY STACK
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-1 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Action Footer in modal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-black/5 dark:border-white/5 font-mono text-xs">
                <span className="text-neutral-400">
                  Ready to deploy a similar system?
                </span>
                <button
                  onClick={() => {
                    setActiveProject(null);
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-6 py-3 bg-[#ECD06F] text-black font-semibold text-[10px] tracking-widest uppercase transition-colors hover:brightness-110 cursor-none clickable flex items-center gap-1.5"
                >
                  <span>Build This Stack</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Full Window Lightbox Overlay for Image */}
        {fullscreenImage && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-4">
            {/* Dark glassmorphic backdrop overlay */}
            <div
              className="absolute inset-0 bg-black/98 backdrop-blur-lg cursor-none clickable"
              onClick={() => setFullscreenImage(null)}
            />

            {/* Float header controls bar */}
            <div className="relative w-full max-w-[95vw] sm:max-w-[90vw] flex items-center justify-between text-white border-b border-white/10 pb-4 mb-4 z-10 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-neutral-400 flex items-center gap-1">Workflow:</span>
                <span className="text-[#ECD06F] font-bold uppercase">{activeProject?.title || "Workflow Blueprint"}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline text-neutral-500">
                  Press ESC to Exit Full Window
                </span>
                <button
                  onClick={() => setFullscreenImage(null)}
                  className="px-4 py-2 border border-white/25 hover:border-[#ECD06F] text-neutral-300 hover:text-[#ECD06F] text-[10px] tracking-wider uppercase transition-colors cursor-none clickable flex items-center gap-1.5 font-bold bg-black"
                >
                  <span>Close [Esc]</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Immersive centered image viewport - customized to allow maximum space */}
            <div className="relative max-w-[95vw] sm:max-w-[90vw] max-h-[86vh] w-full flex items-center justify-center z-10 select-none overflow-hidden border border-white/5 bg-[#0a0a0a]">
              <img
                src={fullscreenImage}
                alt="n8n Automation Canvas Screenshot Full Window"
                className="w-full max-h-[84vh] object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Bottom status tagline */}
            <div className="relative mt-4 z-10 text-[9px] font-mono tracking-widest text-[#ECD06F] uppercase select-none text-center">
              Verified Production Node Graph • Running on Cloud Infrastructure
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
