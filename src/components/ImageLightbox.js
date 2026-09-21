"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ImageLightbox({ src, alt, brandName, patternName }) {
  const [isOpen, setIsOpen] = useState(false);

  // Pre-fill WhatsApp message
  const message = `Hi Force One Tyres, I am interested in ${brandName} - ${patternName}. Can you check availability?`;
  const whatsappUrl = `https://wa.me/971545141499?text=${encodeURIComponent(message)}`;

  return (
    <>
      <div 
        className="relative group cursor-pointer overflow-hidden rounded-xl bg-white dark:bg-charcoal-800 border border-gray-200 dark:border-charcoal-700 shadow-sm dark:shadow-lg hover:shadow-md transition-shadow"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-[4/3] relative w-full h-full bg-white flex items-center justify-center">
          <Image 
            src={src} 
            alt={alt} 
            fill
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm shadow-md">
            View Details
          </span>
        </div>
        <div className="p-4 bg-white dark:bg-charcoal-900 border-t border-gray-100 dark:border-charcoal-800">
          <h4 className="text-gray-900 dark:text-white font-semibold text-lg">{patternName}</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{brandName}</p>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/90 dark:bg-black/95 p-4 backdrop-blur-md animate-fade-in">
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-gray-800 dark:bg-charcoal-800 hover:bg-gray-700 dark:hover:bg-charcoal-700 rounded-full p-2 transition-colors z-[101]"
            onClick={() => setIsOpen(false)}
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-white dark:bg-charcoal-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-charcoal-800 animate-fade-in-up">
            <div className="relative w-full h-[60vh] sm:h-[70vh] bg-gray-100 dark:bg-charcoal-950">
              <Image 
                src={src} 
                alt={alt} 
                fill
                className="object-contain p-2"
                sizes="100vw"
              />
            </div>
            
            <div className="p-6 bg-white dark:bg-charcoal-900 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 dark:border-charcoal-800">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{patternName}</h3>
                <p className="text-gray-500 dark:text-gray-400">{brandName}</p>
              </div>
              
              <Link 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-semibold rounded-full shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
