import React from "react";
import { Mail, Linkedin, PhoneCall, MapPin, Briefcase, Calendar, ArrowRight, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const handleInteractiveBook = () => {
    // Redirect directly to the Calendly account
    window.open("https://calendly.com/diazmlester/30-minute-discovery-call-with-mark", "_blank");
  };

  const contactDetails = [
    {
      id: "onlinejobs",
      title: "Onlinejobs.ph",
      description: "Hire me directly on Onlinejobs.ph",
      displayValue: "onlinejobs.ph/marklesterdiaz",
      url: "https://v2.onlinejobs.ph/jobseekers/info/823656",
      icon: <Briefcase className="w-5 h-5 text-[#ECD06F]" />,
    },
    {
      id: "email",
      title: "Email",
      description: "For detailed inquiries & collaboration",
      displayValue: "va.marklesterdiaz@gmail.com",
      url: "mailto:va.marklesterdiaz@gmail.com",
      icon: <Mail className="w-5 h-5 text-[#ECD06F]" />,
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      description: "Professional network profile",
      displayValue: "linkedin.com/in/marklesterdiaz",
      url: "https://www.linkedin.com/in/marklesterdiaz/",
      icon: <Linkedin className="w-5 h-5 text-[#ECD06F]" />,
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      description: "Quick message support",
      displayValue: "+63 938 723 2144",
      url: "https://wa.me/639387232144",
      icon: <MessageSquare className="w-5 h-5 text-[#ECD06F]" />,
    },
    {
      id: "location",
      title: "Location",
      description: "Operating workspace hub",
      displayValue: "Cavite, Philippines",
      url: null,
      icon: <MapPin className="w-5 h-5 text-[#ECD06F]" />,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Subtle background highlight of #ECD06F color blend */}
      <div className="absolute bottom-[-150px] right-[-150px] w-96 h-96 rounded-full bg-[#ECD06F]/5 dark:bg-[#ECD06F]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* COLUMN 1: Heading, Subtitle & Interactive Contact Cards (6/12 cols) */}
          <div className="lg:col-span-6 space-y-8 lg:pr-6">
            <div>
              <span className="font-mono text-sm tracking-[0.2em] text-[#ECD06F] uppercase block mb-3 font-bold select-none animate-fade-in">
                // Contact
              </span>
              <h2 className="font-heading text-4xl sm:text-6xl text-neutral-900 dark:text-white uppercase leading-tight tracking-tight mb-4 select-none">
                Let's Connect!
              </h2>
              <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg font-normal leading-relaxed text-balance select-none max-w-xl">
                Book an audit or reach out directly — I'll help you identify the fastest automation wins.
              </p>
            </div>

            {/* Vertical list of Contact Details in exact requested format */}
            <div className="space-y-4 pt-2">
              {contactDetails.map((contact) => {
                const isLink = contact.url !== null;
                const Wrapper = isLink ? "a" : "div";
                const linkProps = isLink
                  ? {
                      href: contact.url as string,
                      target: "_blank",
                      rel: "noreferrer",
                    }
                  : {};

                return (
                  <Wrapper
                    key={contact.id}
                    {...linkProps}
                    className={`group flex items-center justify-between p-3.5 sm:p-4 border border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/20 hover:border-[#ECD06F]/30 transition-all duration-300 select-none ${
                      isLink ? "cursor-none clickable hover:shadow-[0_2px_15px_rgba(236,208,111,0.02)]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      {/* Left icon wrapper */}
                      <div className="flex items-center justify-center w-10 h-10 bg-white dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800/50 group-hover:border-[#ECD06F]/30 transition-colors shrink-0">
                        {contact.icon}
                      </div>
                      
                      {/* Label and display text (highly legible bold text with larger font-size) */}
                      <div className="min-w-0">
                        <span className="text-[10px] sm:text-xs font-mono uppercase text-[#ECD06F] block tracking-wider leading-none mb-1 text-neutral-450 dark:text-neutral-400 font-bold">
                          {contact.title}
                        </span>
                        <span className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-[#ECD06F] transition-colors leading-snug truncate block">
                          {contact.displayValue}
                        </span>
                      </div>
                    </div>

                    {/* Right slide arrow for visual cues exactly like the schema */}
                    {isLink ? (
                      <div className="text-neutral-300 dark:text-neutral-700 group-hover:text-[#ECD06F] group-hover:translate-x-1.5 transition-all duration-300 px-1">
                        <ArrowRight className="w-5 h-5 animate-pulse" />
                      </div>
                    ) : null}
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: Ultra Polish Book a Consultation UI Card (6/12 cols) */}
          <div className="lg:col-span-6 bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-100 dark:border-neutral-900 p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative flex flex-col justify-between min-h-[440px] overflow-hidden">
            
            <div>
              <div className="mb-6">
                {/* Card Heading & details matching screenshot format */}
                <h3 className="font-heading text-2xl sm:text-3xl text-neutral-900 dark:text-white uppercase font-bold tracking-wide select-none">
                  Book a Consultation
                </h3>
                <span className="text-[#ECD06F] font-mono text-xs uppercase tracking-wider block mt-1 select-none font-bold">
                  30 mins · No pressure · Clear next steps
                </span>
              </div>

              {/* Informational paragraph for Calendly integration */}
              <p className="text-neutral-700 dark:text-neutral-300 text-base sm:text-lg font-normal leading-relaxed mb-8 select-none">
                Ready to find your fastest automation wins? Click the button below to reserve a 30-minute discovery call directly on my calendar. No sales pitch, no obligation—just real, actionable strategy.
              </p>
            </div>

            <div>
              {/* Core Action Button inside right card widget */}
              <button
                type="button"
                onClick={handleInteractiveBook}
                className="w-full py-5 bg-black dark:bg-[#ECD06F] text-white dark:text-black font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-none hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-none clickable select-none"
              >
                <span>Confirm Appointment Block</span>
                <Calendar className="w-4 h-4" />
              </button>

              {/* Visual Footer Caption */}
              <div className="mt-5 text-center select-none">
                <span className="text-[10px] font-mono tracking-widest text-[#ECD06F] uppercase font-bold">
                  // Secure booking powered by Calendly
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
