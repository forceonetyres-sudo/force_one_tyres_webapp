"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/assets/accelera/IOTA ST68/Gallery/Land Cruiser VXR/Land-Cruiser-VXR-HSR-Edited (143 of 171).jpg",
    title: "Premium Quality. Unmatched Performance.",
    subtitle: "Expert tyre fitting, alignment, and balancing in Dubai.",
    buttonPrimary: { text: "Connect on WhatsApp", link: "https://wa.me/971545141499" },
    buttonSecondary: { text: "Explore Brands", link: "/brands" }
  },
  {
    id: 2,
    image: "/assets/accelera/Omikron A-T/Porsche Cayyene with Omikron A-T/7.jpg",
    title: "State-of-the-Art Service Center",
    subtitle: "Precision alignment and balancing for your ultimate safety.",
    buttonPrimary: { text: "Our Services", link: "/services" },
    buttonSecondary: { text: "Contact Us", link: "#contact" }
  },
  {
    id: 3,
    image: "/assets/accelera/Desert Expedition/Gallery/Land Rover with Desert Expedition/IMG_7127 copy.jpg",
    title: "Extreme Off-Road Capabilities",
    subtitle: "Equip your 4x4 with the best all-terrain and mud-terrain tyres.",
    buttonPrimary: { text: "View Accelera", link: "/brands/accelera" },
    buttonSecondary: { text: "Explore Brands", link: "/brands" }
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] flex items-center overflow-hidden bg-gray-100">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
          
          {/* Very faint overlay to guarantee text readability without muddying the image */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      ))}

      {/* Foreground Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center items-center text-center">
        <div className="max-w-5xl animate-fade-in-up mt-12">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-4 font-medium tracking-wide drop-shadow-md">
            {slides[currentSlide].subtitle}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-10 drop-shadow-2xl leading-tight sm:leading-tight" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.7)' }}>
            {slides[currentSlide].title}
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href={slides[currentSlide].buttonPrimary.link}
              target={slides[currentSlide].buttonPrimary.link.startsWith('http') ? "_blank" : "_self"}
              className="w-full sm:w-auto flex items-center justify-center px-10 py-4 text-base md:text-lg font-medium text-white bg-accent-600 hover:bg-accent-500 rounded-full shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] transition-transform hover:-translate-y-1"
            >
              {slides[currentSlide].buttonPrimary.text}
            </Link>
            <Link
              href={slides[currentSlide].buttonSecondary.link}
              className="w-full sm:w-auto flex items-center justify-center px-10 py-4 text-base md:text-lg font-medium text-white bg-transparent border border-white hover:bg-white hover:text-gray-900 rounded-full transition-colors"
            >
              {slides[currentSlide].buttonSecondary.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-accent-600 w-8" : "bg-white/70 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
