import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Premium Brands | Force One Tyres",
  description: "Explore our premium selection of tyre brands including Accelera, Winrun, Gepormax, and Duraman.",
};

export default function BrandsHubPage() {
  const brands = [
    {
      name: "Accelera",
      path: "/brands/accelera",
      description: "High-performance and passenger tyres designed for elegance and safety.",
      logo: "/assets/Logo/accelera/Accelera_white.jpg",
      logoLight: "/assets/Logo/accelera/Accelera_black.jpg"
    },
    {
      name: "Winrun",
      path: "/brands/winrun",
      description: "Advanced technology for superior handling and a quiet ride.",
      logo: "/assets/Logo/winrun/Winrun_logo.png",
      logoLight: "/assets/Logo/winrun/Winrun_logo.png"
    },
    {
      name: "Gepormax",
      path: "/brands/gepormax",
      description: "Durable and reliable tyres for extreme conditions and everyday use.",
      logo: "/assets/Logo/gepormax/Gepormax.png",
      logoLight: "/assets/Logo/gepormax/Gepormax.png"
    },
    {
      name: "Duraman",
      path: "/brands/duraman",
      description: "Tough, long-lasting tyres engineered for heavy duty performance.",
      logo: "/assets/Logo/duraman/Duraman.svg",
      logoLight: "/assets/Logo/duraman/Duraman.svg"
    }
  ];

  return (
    <div className="w-full bg-gray-50 dark:bg-charcoal-950 py-16 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Our Premium Brands</h1>
          <div className="w-24 h-1 bg-accent-500 dark:bg-accent-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We partner with the world's leading tyre manufacturers to bring you unmatched quality, safety, and performance for every journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <Link 
              key={brand.name}
              href={brand.path}
              className="group block bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-2xl overflow-hidden hover:border-accent-500 dark:hover:border-accent-400 hover:shadow-xl dark:hover:shadow-accent-400/10 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up shadow-sm dark:shadow-none"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="h-48 w-full bg-gray-100 dark:bg-charcoal-950 flex items-center justify-center p-8 relative">
                {brand.logo ? (
                  <>
                    <Image src={brand.logo} alt={`${brand.name} Logo`} fill className="object-contain p-8 hidden dark:block transition-transform duration-500 group-hover:scale-110" />
                    <Image src={brand.logoLight || brand.logo} alt={`${brand.name} Logo`} fill className="object-contain p-8 dark:hidden transition-transform duration-500 group-hover:scale-110" />
                  </>
                ) : (
                  <span className="text-3xl font-extrabold text-gray-400 dark:text-gray-600 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors uppercase tracking-widest">{brand.name}</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-200/50 dark:from-charcoal-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6 border-t border-gray-100 dark:border-charcoal-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors">{brand.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {brand.description}
                </p>
                <div className="mt-4 flex items-center text-accent-600 dark:text-accent-400 text-sm font-semibold">
                  Explore Range 
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
