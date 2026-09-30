import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="w-full transition-colors duration-300">
      {/* 1. Hero Carousel */}
      <HeroCarousel />

      {/* 2. Brand Trust Bar (Logo Garden) */}
      <section className="w-full bg-gray-50 dark:bg-charcoal-900 py-12 border-b border-gray-200 dark:border-charcoal-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest font-semibold mb-8">
            Proudly Representing Premium Brands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-8 lg:gap-16 pb-4">

            <Link href="/brands/accelera" className="group flex flex-col items-center">
              <div className="relative transform group-hover:scale-110 transition-transform duration-500 flex flex-col items-center">
                <div className="h-16 md:h-20 w-32 md:w-40 lg:w-56 relative mb-4">
                  <Image src="/assets/Logo/accelera/Accelera_logo.png" alt="Accelera Logo" fill className="object-contain brightness-0 dark:invert" />
                </div>
              </div>
            </Link>

            <Link href="/brands/winrun" className="group flex flex-col items-center">
              <div className="relative transform group-hover:scale-110 transition-transform duration-500 flex flex-col items-center">
                <div className="h-16 md:h-20 w-32 md:w-40 lg:w-56 relative mb-4">
                  <Image src="/assets/Logo/winrun/Winrun_logo.png" alt="Winrun Logo" fill className="object-contain" />
                </div>
              </div>
            </Link>

            <Link href="/brands/gepormax" className="group flex flex-col items-center">
              <div className="relative transform group-hover:scale-110 transition-transform duration-500 flex flex-col items-center">
                <div className="h-16 md:h-20 w-32 md:w-40 lg:w-56 relative mb-4">
                  <Image src="/assets/Logo/gepormax/Gepormax.png" alt="Gepormax Logo" fill className="object-contain" />
                </div>
              </div>
            </Link>

            <Link href="/brands/duraman" className="group flex flex-col items-center">
              <div className="relative transform group-hover:scale-110 transition-transform duration-500 flex flex-col items-center">
                <div className="h-16 md:h-20 w-32 md:w-40 lg:w-56 relative mb-4">
                  <Image src="/assets/Logo/duraman/Duraman.svg" alt="Duraman Logo" fill className="object-contain" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 3. About Us - Who We Are */}
      <section className="relative w-full bg-white dark:bg-charcoal-950 py-20 transition-colors duration-300 border-b border-gray-100 dark:border-charcoal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/assets/accelera/Omikron A-T/Porsche Cayyene with Omikron A-T/7.jpg" 
                alt="Force One Tyres Workshop" 
                fill 
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              />
              {/* Overlay Badge - No white background card */}
              <div className="absolute bottom-6 left-6 p-4 drop-shadow-2xl">
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-1 tracking-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>10+</div>
                <div className="text-sm sm:text-base font-bold text-gray-100 uppercase tracking-widest" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>Years of Trust</div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="inline-block bg-gray-100 dark:bg-charcoal-900 px-4 py-2 rounded-full mb-6">
                <span className="text-accent-600 dark:text-accent-400 font-bold text-sm uppercase tracking-widest">About Force One Tyres</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
                Dubai's Premier Destination for Performance & Safety
              </h2>
              <div className="w-20 h-1 bg-accent-600 rounded-full mb-8"></div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed">
                At Force One Tyres, we don't just sell rubber; we provide peace of mind. As an authorized distributor for world-class brands like Accelera, Winrun, Gepormax, and Duraman, we ensure that your vehicle is equipped with the exact engineering it needs to conquer UAE roads.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 font-light leading-relaxed">
                From luxury electric vehicles to rugged off-road 4x4s, our expert technicians use state-of-the-art alignment and balancing technology to guarantee your safety, comfort, and driving pleasure.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Authorized Dealer</h4>
                    <p className="text-sm text-gray-500">100% Genuine Products</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent-600 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Expert Fitting</h4>
                    <p className="text-sm text-gray-500">Precision & Safety</p>
                  </div>
                </div>
              </div>

              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gray-900 dark:bg-accent-600 hover:bg-accent-600 dark:hover:bg-accent-500 rounded-full transition-colors group">
                Discover Our Services
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Choose Us — Stats / USPs */}
      <section className="w-full bg-white dark:bg-charcoal-950 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Force One?</h2>
            <div className="w-24 h-1 bg-accent-500 dark:bg-accent-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "10+",
                label: "Years of Experience",
                description: "A decade of trusted tyre expertise in the UAE market.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                stat: "5,000+",
                label: "Tyres Fitted",
                description: "Thousands of vehicles serviced with precision and care.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                stat: "EV",
                label: "Specialist",
                description: "Dubai's go-to destination for electric vehicle tyres.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                stat: "Same Day",
                label: "Service Available",
                description: "Quick turnaround to get you back on the road fast.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 rounded-2xl p-8 hover:border-accent-500 dark:hover:border-accent-400 transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-accent-50 dark:bg-accent-400/15 flex items-center justify-center text-accent-500 dark:text-accent-400 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-1">
                  {item.stat}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-accent-500 dark:text-accent-400 mb-3">
                  {item.label}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Tyre Categories Showcase */}
      <section className="w-full bg-gray-50 dark:bg-charcoal-900 py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Find Your Perfect Tyre</h2>
            <div className="w-24 h-1 bg-accent-500 dark:bg-accent-400 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Whether you drive a sedan, SUV, or electric vehicle — we have the right tyre for your ride.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Passenger / Sedan",
                description: "Comfort, low noise, and fuel efficiency for daily driving.",
                image: "/assets/accelera/Eco Plus/Eco Plush (A).png",
              },
              {
                title: "SUV / 4x4",
                description: "Rugged grip and durability for off-road and highway alike.",
                image: "/assets/accelera/Desert Expedition/Desert Expedition copy.png",
              },
              {
                title: "EV / Electric",
                description: "Low rolling resistance and high load capacity for EVs.",
                image: "/assets/accelera/IOTA EVT/Iota EVT (A).png",
              },
              {
                title: "High Performance",
                description: "Maximum grip and handling for spirited driving.",
                image: "/assets/accelera/IOTA ST68/Iota ST68 (A).png",
              },
            ].map((category) => (
              <Link
                key={category.title}
                href="/brands"
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] block shadow-lg dark:shadow-none"
              >
                {/* Clean dark background for the floating tyre */}
                <div className="absolute inset-0 bg-charcoal-900 z-0"></div>
                
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-contain p-6 pb-20 transition-transform duration-700 group-hover:scale-110 drop-shadow-2xl z-10"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-3 flex items-center text-accent-400 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Browse Tyres
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Services Block */}
      <section className="w-full bg-white dark:bg-charcoal-950 py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-accent-500 dark:bg-accent-400 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Precision and care for your vehicle's performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Service 1 */}
            <div className="bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 p-8 rounded-2xl hover:border-accent-500 dark:hover:border-accent-400 transition-colors group shadow-sm dark:shadow-none">
              <div className="w-16 h-16 bg-white dark:bg-charcoal-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-50 dark:group-hover:bg-accent-400/20 transition-colors border border-gray-100 dark:border-transparent">
                <svg className="w-8 h-8 text-accent-500 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Professional Tyre Fitting</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Expert installation using state-of-the-art equipment to ensure perfect seating and safety.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 p-8 rounded-2xl hover:border-accent-500 dark:hover:border-accent-400 transition-colors group shadow-sm dark:shadow-none">
              <div className="w-16 h-16 bg-white dark:bg-charcoal-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-50 dark:group-hover:bg-accent-400/20 transition-colors border border-gray-100 dark:border-transparent">
                <svg className="w-8 h-8 text-accent-500 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3D Wheel Alignment</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Precision laser alignment to improve handling, reduce tyre wear, and optimize fuel efficiency.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 p-8 rounded-2xl hover:border-accent-500 dark:hover:border-accent-400 transition-colors group shadow-sm dark:shadow-none">
              <div className="w-16 h-16 bg-white dark:bg-charcoal-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-50 dark:group-hover:bg-accent-400/20 transition-colors border border-gray-100 dark:border-transparent">
                <svg className="w-8 h-8 text-accent-500 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Computerized Wheel Balancing</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Advanced diagnostic balancing for a smooth, vibration-free driving experience.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-gray-50 dark:bg-charcoal-900 border border-gray-200 dark:border-charcoal-800 p-8 rounded-2xl hover:border-accent-500 dark:hover:border-accent-400 transition-colors group shadow-sm dark:shadow-none">
              <div className="w-16 h-16 bg-white dark:bg-charcoal-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-50 dark:group-hover:bg-accent-400/20 transition-colors border border-gray-100 dark:border-transparent">
                <svg className="w-8 h-8 text-accent-500 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Puncture Repair & Inspection</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Safe, industry-standard puncture repairs and comprehensive tyre health assessments.
              </p>
            </div>

          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-accent-500 dark:text-accent-400 font-semibold hover:underline underline-offset-4 transition-all group"
            >
              View All Services
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Customer Testimonials (COMMENTED OUT — uncomment when real reviews are available) */}
      {/*
      <section className="w-full bg-gray-50 dark:bg-charcoal-900 py-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-accent-500 dark:bg-accent-400 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Don't just take our word for it — hear from drivers who trust Force One Tyres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed Al Mansoori",
                role: "Tesla Model 3 Owner",
                review: "Best EV tyre shop in Dubai! They understood exactly what my Tesla needed. Fast fitting and the alignment was spot-on. Highly recommend.",
                rating: 5,
              },
              {
                name: "Sarah Johnson",
                role: "Range Rover Sport",
                review: "Professional team and premium service. They balanced all four wheels in under 30 minutes. My car drives like new again. Great pricing too!",
                rating: 5,
              },
              {
                name: "Mohammed Rashid",
                role: "BMW M4 Owner",
                review: "Found them for Accelera tyres and I'm glad I did. The guys know their stuff — perfect fitment and the 3D alignment is next level. Will be back!",
                rating: 5,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white dark:bg-charcoal-950 border border-gray-200 dark:border-charcoal-800 rounded-2xl p-8 shadow-sm dark:shadow-none hover:border-accent-500 dark:hover:border-accent-400 transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-500 dark:bg-accent-400 flex items-center justify-center text-white dark:text-charcoal-950 font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* 7. CTA Banner */}
      <section className="w-full bg-white dark:bg-charcoal-950 py-20 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white dark:bg-charcoal-900 rounded-3xl p-10 md:p-16 overflow-hidden text-center border border-gray-200 dark:border-charcoal-800 shadow-xl dark:shadow-none">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/5 dark:bg-accent-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/5 dark:bg-accent-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                Need Tyres Today?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                Get expert advice and fast fitting. Reach out to our team and drive away with confidence — same day service available.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://wa.me/971545141499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#1ebd59] rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us Now
                </Link>
                <Link
                  href="tel:+971545141499"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-gray-700 dark:text-white bg-transparent border-2 border-gray-300 dark:border-white/30 hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-white/10 rounded-full transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us Directly
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
