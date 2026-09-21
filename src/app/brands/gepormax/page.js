import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

export const metadata = {
  title: "Gepormax Tyres | Force One Tyres Dubai",
  description: "Safety, Quality, Efficiency & Environmental Protection. Discover Gepormax SUV, All-Terrain, UHP, and Passenger tyres at Force One Tyres Dubai.",
};

export default function GepormaxPage() {
  const brandName = "Gepormax";

  const categories = [
    {
      name: "SUV & All-Terrain",
      tyres: [
        { src: "/assets/brands/gepormax/enterra-rt-v8.jpg", alt: "Gepormax ENTERRA RT V8", pattern: "ENTERRA RT V8" },
        { src: "/assets/brands/gepormax/enterra-mt-v9.jpg", alt: "Gepormax ENTERRA MT V9", pattern: "ENTERRA MT V9" },
        { src: "/assets/brands/gepormax/enterra-at-v6.jpg", alt: "Gepormax ENTERRA A/T V6", pattern: "ENTERRA A/T V6" },
        { src: "/assets/brands/gepormax/enterra-at.jpg", alt: "Gepormax ENTERRA A/T", pattern: "ENTERRA A/T" },
        { src: "/assets/brands/gepormax/ecoplus-suv.jpg", alt: "Gepormax ECOPLUS SUV", pattern: "ECOPLUS SUV" },
      ],
    },
    {
      name: "UHP & Passenger",
      tyres: [
        { src: "/assets/brands/gepormax/sports-t1.jpg", alt: "Gepormax SPORTS T1", pattern: "SPORTS T1" },
        { src: "/assets/brands/gepormax/ecoplus-uhp.jpg", alt: "Gepormax ECOPLUS UHP", pattern: "ECOPLUS UHP" },
        { src: "/assets/brands/gepormax/entro-cs1.jpg", alt: "Gepormax ENTRO CS1", pattern: "ENTRO CS1" },
      ],
    },
  ];

  return (
    <div className="w-full pb-20 bg-gray-50 dark:bg-charcoal-950 min-h-screen transition-colors duration-300">
      {/* Brand Hero */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-white dark:bg-charcoal-900 border-b border-gray-200 dark:border-charcoal-800 transition-colors duration-300">
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-30">
          <Image 
            src="/assets/gepormax-hero.jpg" 
            alt="Gepormax Tyres Background" 
            fill 
            className="object-cover object-center grayscale"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="h-24 w-72 mx-auto relative mb-6">
            <Image src="/assets/Logo/gepormax/Gepormax.png" alt="Gepormax Logo" fill className="object-contain" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Passion Meets Performance
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            Safety, quality, efficiency and environmental protection — every drive is an adventure that leads to the future.
          </p>
        </div>
      </section>

      {/* About Gepormax */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-2xl p-8 md:p-12 shadow-sm dark:shadow-none mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent-50 dark:bg-accent-400/15 flex items-center justify-center">
              <svg className="w-5 h-5 text-accent-500 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">About Gepormax</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-4">
            GEPORMAX tires are the crystallization of passion and speed. Built under the umbrella of Qingdao Duraman Tyre Co., Ltd., Gepormax delivers a comprehensive lineup of tyres covering SUV, all-terrain, mud-terrain, UHP, and passenger segments.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            With a strong focus on safety, quality, efficiency, and environmental protection, Gepormax tyres are engineered for drivers who demand both performance and reliability across diverse driving conditions. From the rugged ENTERRA off-road series to the refined ECOPLUS highway range, every tyre is built for the journey ahead.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "21+", label: "Tyre Models" },
              { stat: "150+", label: "Countries Served" },
              { stat: "DOT", label: "Certified" },
              { stat: "ECE", label: "Approved" },
            ].map((item) => (
              <div key={item.label} className="text-center bg-gray-50 dark:bg-charcoal-950 rounded-xl p-4 border border-gray-200 dark:border-charcoal-800">
                <div className="text-2xl font-extrabold text-accent-500 dark:text-accent-400">{item.stat}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tyre Categories */}
        {categories.map((category) => (
          <div key={category.name} className="mb-16">
            <div className="flex items-center space-x-4 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">{category.name}</h2>
              <div className="h-px flex-grow bg-gray-300 dark:bg-charcoal-800"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.tyres.map((tyre) => (
                <ImageLightbox 
                  key={tyre.pattern}
                  src={tyre.src}
                  alt={tyre.alt}
                  brandName={brandName}
                  patternName={tyre.pattern}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
