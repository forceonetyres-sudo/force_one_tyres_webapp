import Image from "next/image";
import ImageLightbox from "@/components/ImageLightbox";

export const metadata = {
  title: "Accelera Tyres | Force One Tyres Dubai",
  description: "Engineered for Speed, Control, and Style. Discover Accelera Ultra High Performance, EV, SUV, and Passenger tyres at Force One Tyres Dubai.",
};

export default function AcceleraPage() {
  const brandName = "Accelera";

  const categories = [
    {
      name: "EV & Ultra High Performance",
      tyres: [
        {
          src: "/assets/accelera/WhatsApp Image 2026-08-17 at 20.50.10.jpeg",
          alt: "Accelera IOTA EVT",
          pattern: "IOTA EVT",
        },
        {
          src: "/assets/accelera/WhatsApp Image 2026-08-17 at 20.50.12.jpeg",
          alt: "Accelera ECO PLUSH",
          pattern: "ECO PLUSH",
        },
      ],
    },
    {
      name: "SUV & 4x4",
      tyres: [
        {
          src: "/assets/accelera/WhatsApp Image 2026-08-17 at 20.50.13.jpeg",
          alt: "Accelera OMIKRON H/T",
          pattern: "OMIKRON H/T",
        },
        {
          pattern: "IOTA ST68",
          placeholder: true,
        },
      ],
    },
  ];

  return (
    <div className="w-full pb-20 bg-gray-50 dark:bg-charcoal-950 min-h-screen transition-colors duration-300">
      {/* Brand Hero */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-white dark:bg-charcoal-900 border-b border-gray-200 dark:border-charcoal-800 transition-colors duration-300">
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-30">
          <Image 
            src="/assets/hero-car.jpg" 
            alt="Accelera Tyres Background" 
            fill 
            className="object-cover object-center grayscale"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="h-24 w-64 mx-auto relative mb-6">
            <Image src="/assets/Logo/accelera/Accelera_logo.png" alt="Accelera Logo" fill className="object-contain brightness-0 dark:invert" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Speed & Style
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            Ultra-high performance tires designed for speed, control, and precision — trusted by driving enthusiasts worldwide.
          </p>
        </div>
      </section>

      {/* About Accelera */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-2xl p-8 md:p-12 shadow-sm dark:shadow-none mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent-50 dark:bg-accent-400/15 flex items-center justify-center">
              <svg className="w-5 h-5 text-accent-500 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">About Accelera</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-4">
            At Accelera, we manufacture passenger car and light truck tires for a wide range of vehicles, including SUVs, CUVs, and 4×4 vehicles. However, where we truly shine is our performance tire lineup.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            Engineered for speed, control, and precision, our performance tires are trusted by driving enthusiasts worldwide. With innovative tread designs and advanced rubber compounds, we deliver the perfect balance of safety, comfort, and responsiveness on the road.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {["5 Year Warranty", "60K Mileage Warranty", "Free Replacement", "Road Hazard Coverage"].map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 dark:bg-accent-400/10 text-accent-600 dark:text-accent-400 rounded-full text-sm font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                {badge}
              </span>
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
                tyre.placeholder ? (
                  <div key={tyre.pattern} className="relative group overflow-hidden rounded-xl bg-gray-100 dark:bg-charcoal-900 border border-gray-300 dark:border-charcoal-800 border-dashed flex flex-col items-center justify-center p-8 aspect-[4/3]">
                    <svg className="w-12 h-12 text-gray-400 dark:text-charcoal-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h4 className="text-gray-900 dark:text-white font-semibold text-lg text-center">{tyre.pattern}</h4>
                    <p className="text-gray-500 text-sm mt-2 text-center">Image Coming Soon</p>
                  </div>
                ) : (
                  <ImageLightbox 
                    key={tyre.pattern}
                    src={tyre.src}
                    alt={tyre.alt}
                    brandName={brandName}
                    patternName={tyre.pattern}
                  />
                )
              ))}
            </div>
          </div>
        ))}

        {/* Tyre Categories Available */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">Full Range Available</h2>
            <div className="h-px flex-grow bg-gray-300 dark:bg-charcoal-800"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Passenger", desc: "Comfort and fuel efficiency for daily driving" },
              { name: "Ultra High Performance", desc: "Maximum grip and speed-rated for spirited driving" },
              { name: "Sport Utility Vehicle", desc: "All-terrain capability with on-road comfort" },
              { name: "All Season", desc: "Year-round performance in varied conditions" },
              { name: "4x4 / Off-Road", desc: "Aggressive tread for extreme terrains" },
              { name: "Light Truck", desc: "Heavy-duty load capacity and durability" },
            ].map((cat) => (
              <div key={cat.name} className="bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-xl p-5 hover:border-accent-500 dark:hover:border-accent-400 transition-colors">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{cat.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
