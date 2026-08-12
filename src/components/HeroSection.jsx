import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-car.jpg"
          alt="Premium performance car showcasing high-end tyres"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/70 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-charcoal-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">
          {/* Accent Line */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="w-12 h-[2px] bg-accent-400" />
            <span className="text-accent-400 text-sm font-semibold tracking-[0.2em] uppercase">
              Dubai&apos;s Premium Tyre Destination
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Engineered for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
              Performance
            </span>
            <br />
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
              Safety
            </span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-lg sm:text-xl text-zinc-300 leading-relaxed mb-10 max-w-lg animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Premium EV and standard tyres, expert fitting, and precision
            alignment — all under one roof in Ras Al Khor.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#categories"
              id="cta-explore"
              className="group inline-flex items-center justify-center gap-2 bg-accent-400 text-charcoal-950 px-8 py-4 rounded-full text-base font-bold hover:bg-accent-300 transition-all duration-300 hover:shadow-xl hover:shadow-accent-400/20 hover:-translate-y-0.5"
            >
              Explore Tyres
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/971545141499"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-whatsapp-hero"
              className="group inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-full text-base font-bold hover:border-whatsapp hover:text-whatsapp transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contact via WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="text-center">
              <span className="block text-2xl font-bold text-accent-400">
                10+
              </span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider">
                Years
              </span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <span className="block text-2xl font-bold text-accent-400">
                50K+
              </span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider">
                Tyres Fitted
              </span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <span className="block text-2xl font-bold text-accent-400">
                4.9★
              </span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider">
                Rating
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-accent-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
