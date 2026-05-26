import React from "react";
import { Award, MapPin, GraduationCap, Zap, Cpu, Terminal, FileText, ArrowRight } from "lucide-react";

export default function AboutMe() {
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
                href="https://drive.google.com/file/d/1fhORVhpqQqUfr8KF34ltQU2-WqR-OLZt/view?usp=sharing"
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
                My approach is simple: think like a business owner, build like an engineer, and create systems that keep delivering value long after they’re implemented.
              </p>
            </div>

            {/* Credentials list directly linked with tight, elegant vertical spacing */}
            <div className="pt-6 border-t border-black/5 dark:border-white/5 space-y-3">
              <span className="font-mono text-xs font-bold tracking-[0.1em] text-[#ECD06F] uppercase block mb-2">
                // Credentials & Certifications
              </span>
              <div className="flex flex-col gap-2">
                {/* 1. BS Information Technology / CvSU */}
                <div id="cred-it" className="flex items-center gap-3.5 py-2 px-0 border border-transparent bg-transparent transition-all select-none">
                  <div className="text-[#ECD06F] shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-sans text-base sm:text-[17px] font-normal text-neutral-800 dark:text-neutral-200">
                    BS Information Technology / CvSU
                  </span>
                </div>

                {/* 2. Certified Prompt Engineer */}
                <div id="cred-pe" className="flex items-center gap-3.5 py-2 px-0 border border-transparent bg-transparent transition-all select-none">
                  <div className="text-[#ECD06F] shrink-0">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <span className="font-sans text-base sm:text-[17px] font-normal text-neutral-800 dark:text-neutral-200">
                    Certified Prompt Engineer
                  </span>
                </div>

                {/* 3. Zapier Certified */}
                <div id="cred-zap" className="flex items-center gap-3.5 py-2 px-0 border border-transparent bg-transparent transition-all select-none">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <img 
                      src="https://lh3.googleusercontent.com/d/17kwTpdeG8GHDB9v4HX4AdfD89dsyrPuU" 
                      alt="Zapier Certified Logo" 
                      referrerPolicy="no-referrer"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className="font-sans text-base sm:text-[17px] font-normal text-neutral-800 dark:text-neutral-200">
                    Zapier Certified
                  </span>
                </div>

                {/* 4. Make Certified */}
                <div id="cred-make" className="flex items-center gap-3.5 py-2 px-0 border border-transparent bg-transparent transition-all select-none">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1wQmmIZ_VJcwD2WijFbXXGEmRCxvwU6Zp" 
                      alt="Make Certified Logo" 
                      referrerPolicy="no-referrer"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className="font-sans text-base sm:text-[17px] font-normal text-neutral-800 dark:text-neutral-200">
                    Make Certified
                  </span>
                </div>

                {/* 5. n8n Certified */}
                <div id="cred-n8n" className="flex items-center gap-3.5 py-2 px-0 border border-transparent bg-transparent transition-all select-none">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <img 
                      src="https://lh3.googleusercontent.com/d/12GLNghLYNqkVxuZOQnF-tw0-BHkAGuIR" 
                      alt="n8n Certified Logo" 
                      referrerPolicy="no-referrer"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span className="font-sans text-base sm:text-[17px] font-normal text-neutral-800 dark:text-neutral-200">
                    n8n Certified
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
