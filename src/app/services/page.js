import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Services | Force One Tyres",
  description: "Professional tyre fitting, 3D wheel alignment, computerized balancing, and puncture repair services in Dubai.",
};

const services = [
  {
    title: "Professional Tyre Fitting",
    description: "Expert installation using state-of-the-art equipment to ensure perfect seating and safety for all vehicle types including EVs.",
    details: [
      "Passenger, SUV, and light truck fitment",
      "EV-specific low rolling resistance tyre mounting",
      "TPMS sensor calibration and reset",
      "Run-flat tyre specialist handling",
    ],
    image: "/assets/services/tyre-fitting.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "3D Wheel Alignment",
    description: "Precision laser alignment to improve handling, significantly reduce tyre wear, and optimize fuel efficiency.",
    details: [
      "Advanced 3D camera alignment technology",
      "Toe, camber, and caster adjustments",
      "Before & after printout for transparency",
      "Ideal after pothole impacts or new tyre fitment",
    ],
    image: "/assets/services/wheel-alignment.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
  },
  {
    title: "Computerized Wheel Balancing",
    description: "Advanced diagnostic balancing for a smooth, vibration-free driving experience at all speeds.",
    details: [
      "High-precision spin balancing machines",
      "Eliminates vibrations and uneven wear",
      "Extends tyre lifespan significantly",
      "Recommended with every new tyre fitment",
    ],
    image: "/assets/services/wheel-balancing.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Puncture Repair & Inspection",
    description: "Safe, industry-standard puncture repairs and comprehensive tyre health assessments to keep you safe on the road.",
    details: [
      "Internal patch and plug repairs",
      "Full tread depth and sidewall inspection",
      "Damage assessment and safety reporting",
      "Quick turnaround — back on the road fast",
    ],
    image: "/assets/services/puncture-repair.jpg",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full bg-gray-50 dark:bg-charcoal-950 py-16 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-accent-500 dark:bg-accent-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Precision and care for your vehicle's performance. We utilize state-of-the-art equipment to ensure safety and longevity for your tyres.
          </p>
        </div>

        {/* Alternating Service Sections */}
        <div className="space-y-24 md:space-y-32">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div 
                key={service.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>
                  
                  {/* Text Side */}
                  <div className="w-full md:w-1/2 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent-50 dark:bg-accent-400/15 rounded-xl flex items-center justify-center text-accent-500 dark:text-accent-400 shrink-0">
                        {service.icon}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-accent-500 dark:text-accent-400">
                        Service {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 pt-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <svg className="w-5 h-5 text-accent-500 dark:text-accent-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Side */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl dark:shadow-none border border-gray-200 dark:border-charcoal-800 group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  
                </div>

                {/* Divider between services (not after the last one) */}
                {index < services.length - 1 && (
                  <div className="mt-20 md:mt-28 flex items-center justify-center">
                    <div className="w-16 h-px bg-gray-300 dark:bg-charcoal-700"></div>
                    <div className="w-2 h-2 rounded-full bg-accent-500 dark:bg-accent-400 mx-4"></div>
                    <div className="w-16 h-px bg-gray-300 dark:bg-charcoal-700"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-2xl p-10 md:p-14 shadow-sm dark:shadow-none">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Need a Service Right Away?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
              Get in touch with our team and we'll have your vehicle ready in no time.
            </p>
            <Link 
              href="https://wa.me/971545141499"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#1ebd59] rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contact us on WhatsApp
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
