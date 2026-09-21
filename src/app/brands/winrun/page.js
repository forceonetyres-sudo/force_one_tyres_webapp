import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

export const metadata = {
  title: "Winrun Tyres | Force One Tyres Dubai",
  description: "Top-Tier Technology & Ultra-High Performance. Discover Winrun Advanced EV, R330+, and High-Performance tyres with W-Silent Sponge technology at Force One Tyres.",
};

export default function WinrunPage() {
  const brandName = "Winrun";
  
  const categories = [
    {
      name: "Advanced EV & W-Silent Sponge",
      description: "Featuring W-Silent Sponge acoustic foam technology for whisper-quiet rides, tailored for modern Electric Vehicles.",
      tyres: [
        { src: "/assets/winrun/winrun_1.jpeg", alt: "Winrun R330 EV W-SILENT", pattern: "R330 EV W-SILENT" },
        { src: "/assets/winrun/winrun_2.jpeg", alt: "Winrun R330 EV W-SILENT", pattern: "R330 EV W-SILENT (Alt)" },
        { src: "/assets/winrun/winrun_3.jpeg", alt: "Winrun R330 EV W-SILENT", pattern: "R330 EV W-SILENT (Alt 2)" },
      ],
    },
    {
      name: "UHP (Ultra High Performance)",
      description: "Flagship performance lineup including the acclaimed R330 and R330+ models for exceptional grip and control.",
      tyres: [
        { src: "/assets/winrun/winrun_4.jpeg", alt: "Winrun R330", pattern: "R330" },
        { src: "/assets/winrun/winrun_5.jpeg", alt: "Winrun R330 (Alt)", pattern: "R330 (Alt)" },
        { src: "/assets/winrun/winrun_6.jpeg", alt: "Winrun R330 (Alt 2)", pattern: "R330 (Alt 2)" },
      ],
    }
  ];

  return (
    <div className="w-full pb-20 bg-gray-50 dark:bg-charcoal-950 min-h-screen transition-colors duration-300">
      {/* Brand Hero */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-white dark:bg-charcoal-900 border-b border-gray-200 dark:border-charcoal-800 transition-colors duration-300">
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-30">
          <Image 
            src="/assets/winrun-hero.jpg" 
            alt="Winrun Tyres Background" 
            fill 
            className="object-cover object-center grayscale"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="h-24 w-64 mx-auto relative mb-6">
            <Image src="/assets/Logo/winrun/Winrun_logo.png" alt="Winrun Logo" fill className="object-contain" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Top-Tier Technology & Ultra-High Performance
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            Huge Size Range. Advanced EV Technology.
          </p>
        </div>
      </section>

      {/* About Winrun */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-2xl p-8 md:p-12 shadow-sm dark:shadow-none mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent-50 dark:bg-accent-400/15 flex items-center justify-center">
              <svg className="w-5 h-5 text-accent-500 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">About Winrun Tyres</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-4">
            Winrun Tyre offers a comprehensive and premium lineup specializing in UHP (Ultra High Performance), SUV, and advanced EV tyres. Known for providing a huge size range, Winrun meets the demands of almost any modern vehicle on the road.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            A key highlight of Winrun's engineering is the cutting-edge <strong>W-Silent Sponge</strong> technology featured in their EV lineup, which significantly reduces cavity noise for an exceptionally quiet and comfortable ride. Combined with flagship performance models like the <strong>R330+</strong>, Winrun delivers top-tier technology and uncompromising driving dynamics.
          </p>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "EV", label: "Specialized Tyres" },
              { stat: "UHP", label: "Performance Series" },
              { stat: "SUV", label: "MaxClaw Range" },
              { stat: "W-Silent", label: "Acoustic Sponge Tech" },
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
            <div className="flex flex-col mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">{category.name}</h2>
              {category.description && (
                <p className="text-accent-600 dark:text-accent-400 text-sm mt-1 font-medium">{category.description}</p>
              )}
              <div className="h-px w-full bg-gray-300 dark:bg-charcoal-800 mt-4"></div>
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
