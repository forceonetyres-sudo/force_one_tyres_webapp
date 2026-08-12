"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    id: "tyre-fitting",
    title: "Professional Tyre Fitting",
    description:
      "Precision mounting and fitting by certified technicians using state-of-the-art equipment for all vehicle types.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a3.12 3.12 0 114.41-4.41l.7.7 .7-.7a3.12 3.12 0 114.41 4.41l-5.1 5.1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
      </svg>
    ),
  },
  {
    id: "wheel-alignment",
    title: "3D Wheel Alignment",
    description:
      "Advanced 3D laser alignment technology ensures optimal tyre contact with the road, extending tyre life and improving fuel efficiency.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "wheel-balancing",
    title: "Computerized Wheel Balancing",
    description:
      "High-precision computer-guided balancing eliminates vibrations, ensuring a smooth, comfortable ride at all speeds.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    id: "puncture-repair",
    title: "Puncture Repair & Inspection",
    description:
      "Fast, reliable puncture repair with thorough safety inspections. We assess damage and advise on repair vs. replacement.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-charcoal-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-accent-400" />
            <span className="text-accent-400 text-sm font-semibold tracking-[0.2em] uppercase">
              What We Do
            </span>
            <div className="w-8 h-[2px] bg-accent-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From fitting to alignment — everything your wheels need, performed
            by experts with the latest technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="reveal group relative rounded-2xl bg-charcoal-800 border border-charcoal-700/50 p-8 text-center transition-all duration-500 hover:border-accent-400/30 hover:bg-charcoal-800/80 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent-400/10 text-accent-400 mb-6 transition-all duration-500 group-hover:bg-accent-400/20 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-3 group-hover:text-accent-400 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed">
                {service.description}
              </p>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-accent-400/0 group-hover:bg-accent-400/[0.02] transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
