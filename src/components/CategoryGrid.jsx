"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const categories = [
  {
    id: "ev-tyres",
    title: "EV Tyres",
    description:
      "Engineered for electric vehicles — low noise, high load capacity, optimized rolling resistance.",
    image: "/assets/winrun/winrun_1.jpeg",
  },
  {
    id: "sedan-tyres",
    title: "Standard & Sedan",
    description:
      "Premium comfort and reliability for everyday driving, from city streets to highways.",
    image: "/assets/brands/gepormax/entro-cs1.jpg",
  },
  {
    id: "suv-tyres",
    title: "SUV & 4x4",
    description:
      "All-terrain capability meets highway comfort. Built tough for Dubai's diverse landscapes.",
    image: "/assets/brands/gepormax/enterra-at.jpg",
  },
  {
    id: "performance-tyres",
    title: "Performance / Sports",
    description:
      "Ultra-high-performance rubber for maximum grip, precision handling, and track-ready confidence.",
    image: "/assets/winrun/winrun_4.jpeg",
  },
];

export default function CategoryGrid() {
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

    const cards = sectionRef.current?.querySelectorAll(".reveal");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-charcoal-950"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-accent-400" />
            <span className="text-accent-400 text-sm font-semibold tracking-[0.2em] uppercase">
              Our Range
            </span>
            <div className="w-8 h-[2px] bg-accent-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Shop by Category
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            From silent EV tyres to aggressive off-road treads — find the
            perfect match for your vehicle.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="https://wa.me/971545141499"
              target="_blank"
              rel="noopener noreferrer"
              id={`category-card-${cat.id}`}
              className="reveal group relative overflow-hidden rounded-2xl bg-charcoal-800 border border-charcoal-700/50 cursor-pointer transition-all duration-500 hover:border-accent-400/50 hover:shadow-2xl hover:shadow-accent-400/10 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-white">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Text */}
              <div className="relative p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-400 transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {cat.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-4 flex items-center gap-2 text-accent-400 text-sm font-medium opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Enquire Now
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-2xl border border-accent-400/0 group-hover:border-accent-400/30 transition-all duration-500 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
