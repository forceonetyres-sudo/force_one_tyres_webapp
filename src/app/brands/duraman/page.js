import Image from "next/image";

export const metadata = {
  title: "Duraman Tyres | Force One Tyres Dubai",
  description: "In Tire, We Trust. Discover Duraman PCR and TBR tyres — 20 years of international cooperation, delivering to 150+ countries. Available at Force One Tyres Dubai.",
};

export default function DuramanPage() {
  return (
    <div className="w-full pb-20 bg-gray-50 dark:bg-charcoal-950 min-h-screen transition-colors duration-300">
      {/* Brand Hero */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-white dark:bg-charcoal-900 border-b border-gray-200 dark:border-charcoal-800 transition-colors duration-300">
        <div className="absolute inset-0 z-0 opacity-40 dark:opacity-30">
          <Image 
            src="/assets/duraman-hero.jpg" 
            alt="Duraman Tyres Background" 
            fill 
            className="object-cover object-center grayscale"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="h-24 w-64 mx-auto relative mb-6">
            <Image src="/assets/Logo/duraman/Duraman.svg" alt="Duraman Logo" fill className="object-contain" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            In Tire, We Trust
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto">
            A legacy of international cooperation spanning 20 years — delivering tailored tyre solutions to partners in over 150 countries.
          </p>
        </div>
      </section>

      {/* About Duraman */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-2xl p-8 md:p-12 shadow-sm dark:shadow-none mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent-50 dark:bg-accent-400/15 flex items-center justify-center">
              <svg className="w-5 h-5 text-accent-500 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">About Duraman</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-4">
            As a leading global tire supplier, Qingdao Duraman Tyre Co., Ltd. has built a legacy of international cooperation spanning 20 years. Our team's profound expertise in export operations, combined with our unique role as the dedicated sales arm of strategically aligned factories, empowers us to deliver tailored solutions to partners in over 150 countries.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            We specialize in two primary product lines: high-performance PCR tyres designed for comfort and fuel efficiency, and durable TBR tyres built for heavy loads and long-haul durability. We are committed to fostering long-term supply chain collaboration, striving to provide our global partners with the most stable, reliable, and profitable business experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { stat: "20", suffix: "Years", label: "International Cooperation" },
            { stat: "150", suffix: "+", label: "Countries Served" },
            { stat: "20", suffix: "Mil", label: "PCR Units Capacity" },
            { stat: "6", suffix: "Mil", label: "TBR Units Capacity" },
          ].map((item) => (
            <div key={item.label} className="text-center bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-2xl p-6 hover:border-accent-500 dark:hover:border-accent-400 transition-colors">
              <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                {item.stat}<span className="text-accent-500 dark:text-accent-400">{item.suffix}</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wider">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Product Lines */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">Product Lines</h2>
            <div className="h-px flex-grow bg-gray-300 dark:bg-charcoal-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PCR */}
            <div className="bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-2xl p-8 hover:border-accent-500 dark:hover:border-accent-400 transition-all duration-300 group">
              <div className="w-14 h-14 bg-accent-50 dark:bg-accent-400/15 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-accent-500 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">PCR — Passenger Car Radial</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                High-performance passenger car tyres designed for comfort, fuel efficiency, and everyday reliability. Ideal for sedans, hatchbacks, and compact SUVs.
              </p>
              <ul className="space-y-2">
                {["Comfort-optimized tread patterns", "Low rolling resistance for fuel savings", "Enhanced wet grip & braking", "Wide range of sizes available"].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-accent-500 dark:text-accent-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* TBR */}
            <div className="bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-2xl p-8 hover:border-accent-500 dark:hover:border-accent-400 transition-all duration-300 group">
              <div className="w-14 h-14 bg-accent-50 dark:bg-accent-400/15 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-accent-500 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">TBR — Truck & Bus Radial</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Durable truck and bus tyres built for heavy loads and long-haul durability. Engineered for commercial fleets and heavy-duty applications.
              </p>
              <ul className="space-y-2">
                {["Heavy load capacity engineering", "Long-haul mileage durability", "Heat-resistant compounds", "All-position & drive-position variants"].map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-accent-500 dark:text-accent-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">Certifications & Global Presence</h2>
            <div className="h-px flex-grow bg-gray-300 dark:bg-charcoal-800"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {["CCC", "DOT", "ECE", "ISO 9001", "INMETRO", "GCC"].map((cert) => (
              <div key={cert} className="text-center bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-xl p-4 hover:border-accent-500 dark:hover:border-accent-400 transition-colors">
                <div className="text-lg font-bold text-gray-900 dark:text-white">{cert}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Certified</div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
