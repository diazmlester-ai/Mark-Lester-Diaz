import React from "react";

const TOOLS = [
  "n8n", "Zapier", "Make.com", "GoHighLevel", "Power Automate", "Lovable", "Vercel",
  "ActiveCampaign", "ClickFunnels", "Jotform", "Google Forms", "xAI Grok", "Claude AI",
  "OpenAI", "Google Gemini", "Open Router", "Perplexity.ai", "Supabase", "Rapid API",
  "Docker", "Cloudflare", "PostgreSQL", "Google Sheets", "Airtable", "Notion", "Asana",
  "Slack", "API Integration", "HTTP Requests", "Webhooks"
];

export default function ToolsMarquee() {
  // Triple the items to ensure there is no gap in the continuous loop across different screen sizes
  const marqueeItems1 = [...TOOLS, ...TOOLS, ...TOOLS];
  const marqueeItems2 = [...TOOLS.slice().reverse(), ...TOOLS.slice().reverse(), ...TOOLS.slice().reverse()];

  return (
    <section id="tools" className="py-24 bg-white dark:bg-black overflow-hidden border-t border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8 mb-12 flex flex-col items-center justify-center text-center">
        <span className="text-base font-mono tracking-[0.2em] text-[#ECD06F] uppercase block mb-4 font-bold">
          // TOOLS & TECHNOLOGIES
        </span>
        <h2 className="font-heading text-5xl sm:text-7xl text-neutral-900 dark:text-white uppercase leading-none">
          Tech Stack
        </h2>
      </div>

      {/* Infinite Loop Marquee container and its duplicate */}
      <div className="relative flex flex-col gap-8 w-full py-6 bg-neutral-50/50 dark:bg-neutral-900/10">
        
        {/* Soft edge gradients masking the scrolling ends */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scrolling Right to Left */}
        <div className="flex w-full overflow-hidden select-none">
          <div className="animate-marquee-left flex flex-nowrap items-center py-1">
            {marqueeItems1.map((tool, index) => (
              <div key={`row1-${tool}-${index}`} className="flex items-center select-none whitespace-nowrap">
                <span className="text-neutral-600 dark:text-neutral-400 hover:text-[#ECD06F] dark:hover:text-[#ECD06F] text-sm sm:text-base font-sans font-normal transition-colors duration-200">
                  {tool}
                </span>
                <span className="text-neutral-300 dark:text-neutral-800 mx-6 sm:mx-8 text-neutral-300 dark:text-neutral-800 select-none">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Left to Right */}
        <div className="flex w-full overflow-hidden select-none">
          <div className="animate-marquee-reverse flex flex-nowrap items-center py-1">
            {marqueeItems2.map((tool, index) => (
              <div key={`row2-${tool}-${index}`} className="flex items-center select-none whitespace-nowrap">
                <span className="text-neutral-600 dark:text-neutral-400 hover:text-[#ECD06F] dark:hover:text-[#ECD06F] text-sm sm:text-base font-sans font-normal transition-colors duration-200">
                  {tool}
                </span>
                <span className="text-neutral-300 dark:text-neutral-800 mx-6 sm:mx-8 text-neutral-300 dark:text-neutral-800 select-none">•</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
