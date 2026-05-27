import React, { useState } from "react";
import { Award, MapPin, GraduationCap, Zap, Cpu, Terminal, FileText, ArrowRight, Eye, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CERTIFICATIONS = [
  {
    id: "pe",
    name: "Certified Prompt Engineer",
    icon: <Terminal className="w-5 h-5 text-[#ECD06F]" />,
    imageUrl: "https://lh3.googleusercontent.com/d/1AA6G_ETZIRQ5pU27SL_TdqixzfFs6wOD",
    linkUrl: "https://drive.google.com/file/d/1AA6G_ETZIRQ5pU27SL_TdqixzfFs6wOD/view?usp=drive_link"
  },
  {
    id: "zap",
    name: "Zapier Certified",
    icon: (
      <img 
        src="https://lh3.googleusercontent.com/d/17kwTpdeG8GHDB9v4HX4AdfD89dsyrPuU" 
        alt="Zapier Logo" 
        className="w-5 h-5 object-contain"
        referrerPolicy="no-referrer"
      />
    ),
    imageUrl: "https://lh3.googleusercontent.com/d/1vpayz8pmotBdIHdkRAMmWsDyaIAx_Do1",
    linkUrl: "https://drive.google.com/file/d/1vpayz8pmotBdIHdkRAMmWsDyaIAx_Do1/view?usp=drive_link"
  },
  {
    id: "make",
    name: "Make Certified",
    icon: (
      <img 
        src="https://lh3.googleusercontent.com/d/1wQmmIZ_VJcwD2WijFbXXGEmRCxvwU6Zp" 
        alt="Make Logo" 
        className="w-5 h-5 object-contain"
        referrerPolicy="no-referrer"
      />
    ),
    imageUrl: "https://lh3.googleusercontent.com/d/1sjFKOqD72bTlRVkQXKIMcHSodi384onQ",
    linkUrl: "https://drive.google.com/file/d/1sjFKOqD72bTlRVkQXKIMcHSodi384onQ/view?usp=drive_link"
  },
  {
    id: "n8n",
    name: "n8n Certified",
    icon: (
      <img 
        src="https://lh3.googleusercontent.com/d/12GLNghLYNqkVxuZOQnF-tw0-BHkAGuIR" 
        alt="n8n Logo" 
        className="w-5 h-5 object-contain"
        referrerPolicy="no-referrer"
      />
    ),
    imageUrl: "https://lh3.googleusercontent.com/d/1DzYyAb71Vzvq5PIaU2pJillLTxeOV6hq",
    linkUrl: "https://drive.google.com/file/d/1DzYyAb71Vzvq5PIaU2pJillLTxeOV6hq/view?usp=drive_link"
  }
];

interface ViewCertData {
  imageUrl: string;
  name: string;
  linkUrl: string;
}

function CertificationRow({ 
  cert, 
  onView 
}: { 
  cert: typeof CERTIFICATIONS[0], 
  onView: (imageUrl: string, name: string, linkUrl: string) => void,
  key?: React.Key
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onView(cert.imageUrl, cert.name, cert.linkUrl)}
      className="relative flex items-center py-2 px-3 border border-transparent transition-all duration-350 min-h-[50px] select-none rounded-none cursor-none clickable cursor-pointer w-full"
    >
      <div className="shrink-0 flex items-center justify-center w-5 h-5 mr-3.5">
        {cert.icon}
      </div>
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.span
              key="name"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              transition={{ duration: 0.12 }}
              className="font-sans text-base sm:text-[17px] font-bold text-neutral-900 dark:text-neutral-100 block"
            >
              {cert.name}
            </motion.span>
          ) : (
            <motion.div
              key="button"
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              transition={{ duration: 0.12 }}
              className="inline-block"
            >
              <button
                className="px-3.5 py-1.5 bg-[#ECD06F] text-black font-black text-[10px] tracking-wider uppercase flex items-center gap-1.5 border-none hover:brightness-110 pointer-events-none select-none"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Certification</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function AboutMe() {
  const [selectedCert, setSelectedCert] = useState<ViewCertData | null>(null);

  const handleViewCert = (imageUrl: string, name: string, linkUrl: string) => {
    setSelectedCert({ imageUrl, name, linkUrl });
  };

  return (
    <section id="about" className="py-32 px-8 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-base font-mono tracking-[0.2em] text-[#ECD06F] uppercase block mb-4 font-bold">
            // About Me
          </span>
          <h2 className="font-heading text-5xl sm:text-7xl text-neutral-900 dark:text-white uppercase leading-none">
            The Mastermind
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUMN 1: Profile Photo (5/12 cols) & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div className="relative group w-full max-w-[420px] aspect-square rounded-full border border-neutral-200 dark:border-neutral-800 p-2 bg-neutral-50 dark:bg-neutral-950/40 select-none animate-bounce-slow">
              <div className="relative w-full h-full overflow-hidden rounded-full font-sans">
                <img
                  src="https://lh3.googleusercontent.com/d/1YLVmC0hY7Syu5OrPLqUx36FKv9DWnXRk"
                  alt="Mark Lester Diaz Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover contrast-110 transition-all duration-500"
                />
              </div>

              {/* Gold floating circular border */}
              <div className="absolute inset-0 rounded-full border border-[#ECD06F]/35 pointer-events-none group-hover:border-[#ECD06F]/60 transition-colors duration-500" />
            </div>

            {/* Elegant, clean caption under profile image */}
            <p className="mt-5 text-center font-sans font-bold text-lg sm:text-xl text-neutral-900 dark:text-neutral-100 tracking-tight leading-relaxed select-none">
              Let’s <span className="text-[#ECD06F]">Automate Your Workflow!</span>
            </p>

            {/* Action Buttons under my profile photo */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-[420px]">
              <a
                href="https://drive.google.com/file/d/1qb7QUGm4OU74bxJWXJcxYsDdV97kmX19/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-4 px-4 bg-transparent border border-neutral-200 dark:border-neutral-800 hover:border-[#ECD06F]/40 hover:bg-[#ECD06F]/5 dark:hover:bg-[#ECD06F]/10 text-neutral-900 dark:text-white font-mono text-center text-sm sm:text-base font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-none clickable select-none"
              >
                <FileText className="w-4.5 h-4.5 text-[#ECD06F]" />
                <span>View Resume</span>
              </a>
              <a
                href="#contact"
                className="flex-1 py-4 px-4 bg-black dark:bg-[#ECD06F] text-white dark:text-black border border-black dark:border-[#ECD06F] hover:opacity-90 font-mono text-center text-sm sm:text-base font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-none clickable select-none"
              >
                <span>Work With Me</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Biography & Certifications (7/12 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            {/* Short concise bio */}
            <div className="space-y-6">
              <p className="text-neutral-900 dark:text-neutral-100 text-lg sm:text-xl font-normal leading-relaxed text-balance">
                I’m <span className="text-[#ECD06F] font-bold">Mark</span>, an <span className="text-[#ECD06F] font-bold">AI Automation Specialist</span> based in Cavite, Philippines. I got into automation after seeing how much time businesses lose on repetitive, manual work that could easily be streamlined with the right systems.
              </p>
              <p className="text-neutral-800 dark:text-neutral-200 text-lg sm:text-xl font-normal leading-relaxed">
                I specialize in building AI-powered workflows, CRM automations, and custom integrations that turn messy operations into clean, efficient, and scalable systems. I don’t just build automations—I design solutions that reduce friction, save time, and help businesses grow sustainably.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl leading-relaxed border-l-2 border-[#ECD06F]/50 pl-4 py-1">
                My approach is simple: <strong className="font-extrabold text-neutral-900 dark:text-white">think like a business owner, build like an engineer, and create systems that keep delivering value long after they’re implemented.</strong>
              </p>
            </div>

            {/* Credentials list directly linked with tight, elegant vertical spacing */}
            <div className="pt-6 border-t border-black/5 dark:border-white/5 space-y-3">
              <span className="font-mono text-xs font-bold tracking-[0.1em] text-[#ECD06F] uppercase block mb-2">
                // Credentials & Certifications
              </span>
              <div className="flex flex-col gap-1">
                {/* 1. BS Information Technology / CvSU */}
                <div id="cred-it" className="flex items-center gap-3.5 py-0.5 px-0 border border-transparent bg-transparent transition-all select-none">
                  <div className="text-[#ECD06F] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-sans text-base sm:text-[17px] font-bold text-neutral-900 dark:text-neutral-100">
                    BS Information Technology / CvSU
                  </span>
                </div>

                {/* Dynamic Certifications with Quick Hover View Action */}
                {CERTIFICATIONS.map((cert) => (
                  <CertificationRow
                    key={cert.id}
                    cert={cert}
                    onView={handleViewCert}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal for Certificates */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none"
          >
            {/* Backdrop click to close */}
            <div 
              className="absolute inset-0 cursor-none clickable"
              onClick={() => setSelectedCert(null)}
            />
            
            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-850 max-w-4xl w-full p-6 md:p-8 z-10 rounded-none shadow-[0_0_50px_rgba(236,208,111,0.15)] flex flex-col"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-black dark:hover:text-[#ECD06F] transition-colors cursor-none clickable select-none"
                aria-label="Close Certificate modal"
              >
                <X className="w-6 h-6" />
              </button>

              <span className="text-[10px] font-mono tracking-widest text-[#ECD06F] border border-[#ECD06F]/20 px-2.5 py-1 uppercase inline-block mb-3 max-w-fit font-bold">
                VERIFIED CREDENTIAL
              </span>

              <h3 className="font-heading text-xl sm:text-2xl text-neutral-900 dark:text-white uppercase mb-4 tracking-wide pr-8 font-black leading-tight">
                {selectedCert.name}
              </h3>

              <div className="border border-neutral-150 dark:border-neutral-850 bg-neutral-100 dark:bg-neutral-900/40 p-2 sm:p-4 flex justify-center items-center overflow-hidden">
                <img 
                  src={selectedCert.imageUrl} 
                  alt={selectedCert.name}
                  className="max-h-[74vh] sm:max-h-[82vh] w-auto max-w-full object-contain shadow-xl rounded-none hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
