import Image from "next/image";
import Link from "next/link";

export default function BrandPageTemplate({ brand }) {
  const { 
    name, 
    logoUrl, 
    logoClassName,
    tagline, 
    description, 
    heroImage, 
    zigZagData, 
    flagshipTyres 
  } = brand;

  return (
    <div className="w-full transition-colors duration-300">
      
      {/* 1. Brand Hero (Split Corporate Layout) */}
      <section className="relative w-full bg-white dark:bg-charcoal-950 overflow-hidden transition-colors duration-300 border-b border-gray-100 dark:border-charcoal-900">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-stretch min-h-[50vh] md:min-h-[60vh]">
          
          {/* Left Content Column */}
          <div className="w-full md:w-1/2 flex items-center px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
            <div className="max-w-xl text-center md:text-left">
              <div className="h-16 md:h-20 w-48 md:w-56 relative mb-6 md:mb-8 mx-auto md:mx-0">
                <Image src={logoUrl} alt={`${name} Logo`} fill className={`object-contain ${logoClassName || ''}`} priority />
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 md:mb-6 animate-fade-in-up">
                {tagline}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-10 animate-fade-in-up font-light leading-relaxed" style={{ animationDelay: '0.2s' }}>
                {description}
              </p>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Link 
                  href="#flagship-tyres" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold text-white bg-accent-600 hover:bg-accent-500 rounded-full shadow-lg transition-transform hover:-translate-y-1"
                >
                  View Flagship Tyres
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full md:w-1/2 relative min-h-[35vh] sm:min-h-[40vh] md:min-h-0 mt-6 md:mt-0 flex items-center justify-center md:justify-end">
            <div className="absolute inset-0 md:left-6 lg:left-8 md:inset-y-8 lg:inset-y-12 md:-right-16 lg:-right-32 overflow-hidden rounded-2xl md:rounded-l-3xl md:rounded-r-none shadow-2xl border-4 md:border-r-0 border-white dark:border-charcoal-800 md:ml-4 lg:ml-8 mx-4 md:mx-0 bg-gray-100 dark:bg-charcoal-900 flex items-center justify-center">
              {heroImage ? (
                <Image 
                  src={heroImage} 
                  alt={`${name} Hero`} 
                  fill 
                  className="object-cover object-center"
                  priority
                />
              ) : (
                <div className="text-gray-400 dark:text-gray-500 flex flex-col items-center">
                  <svg className="w-12 h-12 md:w-16 md:h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <p className="text-sm md:text-base">[ Hero Image Placeholder ]</p>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </section>

      {/* 2. Why Choose Brand? (Zig-Zag Layout) */}
      <section className="w-full bg-gray-50 dark:bg-charcoal-900 py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose {name}?</h2>
            <div className="w-24 h-1 bg-accent-500 dark:bg-accent-400 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-24">
            {zigZagData.map((row, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div key={index} className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-20`}>
                  
                  {/* Content Side */}
                  <div className="w-full md:w-1/2 space-y-6">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">
                      {row.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                      {row.description}
                    </p>
                    <ul className="space-y-3 pt-2">
                      {row.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                          <svg className="w-5 h-5 text-accent-500 dark:text-accent-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Side */}
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-charcoal-800 bg-gray-200 dark:bg-charcoal-800 flex items-center justify-center">
                      {row.image ? (
                        <Image src={row.image} alt={row.title} fill className="object-cover" />
                      ) : (
                        <div className="text-gray-500 flex flex-col items-center">
                          <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          <p>[ Story Image ]</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Flagship Patterns (Grid Layout) */}
      <section id="flagship-tyres" className="w-full bg-white dark:bg-charcoal-950 py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Flagship Patterns</h2>
            <div className="w-24 h-1 bg-accent-500 dark:bg-accent-400 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Explore the top-tier inventory for {name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {flagshipTyres.map((tyre, index) => (
              <div key={index} className="bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-none hover:border-accent-500 dark:hover:border-accent-400 transition-all duration-300 flex flex-col group">
                
                {/* Tyre Image Box */}
                <div className="relative aspect-square bg-white dark:bg-charcoal-800 border-b border-gray-200 dark:border-charcoal-800 flex items-center justify-center p-6">
                  {tyre.image ? (
                    <Image src={tyre.image} alt={tyre.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="text-gray-400 flex flex-col items-center">
                       <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                       <p className="text-sm">[ Tyre Image ]</p>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-gray-900 dark:bg-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {tyre.category}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4 uppercase tracking-wide">{tyre.name}</h3>
                  <ul className="space-y-2 mb-8 flex-grow">
                    {tyre.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-accent-500 mt-0.5">•</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`https://wa.me/971545141499?text=I'm interested in the ${name} ${tyre.name}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center py-3 bg-gray-200 dark:bg-charcoal-800 text-gray-900 dark:text-white font-bold rounded-lg hover:bg-accent-600 hover:text-white transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Trust & Warranty Banner */}
      <section className="w-full bg-gray-50 dark:bg-charcoal-900 py-20 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white dark:bg-charcoal-950 rounded-3xl p-10 md:p-14 text-center border border-gray-200 dark:border-charcoal-800 shadow-xl overflow-hidden">
            {/* Decorative background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 dark:bg-accent-500/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 dark:bg-accent-500/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Authorized {name} Distributor</h2>
              <div className="w-16 h-1 bg-accent-500 dark:bg-accent-400 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
                Every {name} tyre purchased from Force One Tyres comes with a full manufacturer warranty and guaranteed authenticity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link 
                  href="https://wa.me/971545141499" 
                  className="px-8 py-4 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold rounded-full transition-all flex items-center shadow-lg hover:-translate-y-1 hover:shadow-xl duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Chat with Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
