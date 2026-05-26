import { SERVICES } from "../data";
import { ArrowUpRight, Brain, Workflow, Link2, ClipboardCheck } from "lucide-react";

const getServiceIcon = (id: string) => {
  switch (id) {
    case "ai-implementation":
      return <Brain className="w-6 h-6 text-[#ECD06F]" />;
    case "crm-pipeline":
      return <Workflow className="w-6 h-6 text-[#ECD06F]" />;
    case "custom-api":
      return <Link2 className="w-6 h-6 text-[#ECD06F]" />;
    case "workflow-audit":
      return <ClipboardCheck className="w-6 h-6 text-[#ECD06F]" />;
    default:
      return <Brain className="w-6 h-6 text-[#ECD06F]" />;
  }
};

export default function Services() {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="relative py-32 px-8 bg-neutral-50 dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <span className="text-base font-mono tracking-[0.2em] text-[#ECD06F] uppercase block mb-4 font-bold">
              // CORE SERVICES
            </span>
            <h2 className="font-heading text-5xl sm:text-7xl text-neutral-900 dark:text-white uppercase leading-none">
              What I Build?
            </h2>
            <p className="mt-5 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg">
              From manual chaos to smart, automated systems—streamlining workflows so your business runs faster, smoother, and more efficiently.
            </p>
          </div>
        </div>

        {/* 4-Card Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-10 border border-neutral-200 dark:border-neutral-900 bg-white dark:bg-[#0a0a0a] transition-all duration-300 hover:border-[#ECD06F]/50 hover:-translate-y-1.5 shadow-sm"
            >
              <div>
                {/* Clean Embedded Service Icon */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-[#ECD06F]">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-heading text-3xl sm:text-4xl text-neutral-950 dark:text-white uppercase mb-4 tracking-wide leading-tight group-hover:text-[#ECD06F] transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative base grid-line connector */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ECD06F] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
