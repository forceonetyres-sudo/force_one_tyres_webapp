import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-charcoal-900 border-t border-gray-200 dark:border-charcoal-800 pt-16 pb-8 mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <div className="h-10 w-40 relative">
                <Image src="/assets/Logo/LOGO-Transparent.png" alt="Force One Tyres" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Premium tyre provider based in Dubai. Expert tyre fitting, 3D alignment, and balancing services for all vehicle types.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors"><Link href="/services">Tyre Fitting</Link></li>
              <li className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors"><Link href="/services">3D Wheel Alignment</Link></li>
              <li className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors"><Link href="/services">Wheel Balancing</Link></li>
              <li className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors"><Link href="/services">Puncture Repair</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Premium Brands</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors"><Link href="/brands/accelera">Accelera</Link></li>
              <li className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors"><Link href="/brands/winrun">Winrun</Link></li>
              <li className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors"><Link href="/brands/gepormax">Gepormax</Link></li>
              <li className="hover:text-accent-500 dark:hover:text-accent-400 transition-colors"><Link href="/brands/duraman">Duraman</Link></li>
            </ul>
          </div>

          <div className="col-span-1" id="contact">
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Visit Us</h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-accent-500 dark:text-accent-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>RAS AL KHOR - IND Area 2<br />Dubai, United Arab Emirates</span>
              </p>
              <p className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent-500 dark:text-accent-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon-Sun, 8:00 AM - 7:30 PM</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-500">
          <p>&copy; {new Date().getFullYear()} Force One Tyres. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
