import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t-[6px] border-accent-600 dark:border-accent-500 pt-16 pb-8 mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="h-12 w-48 relative">
                <Image src="/assets/Logo/LOGO-Transparent.png" alt="Force One Tyres" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium tyre provider based in Dubai. Expert tyre fitting, 3D alignment, and balancing services for all vehicle types.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-500 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-500 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-500 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links Column 1 */}
          <div className="col-span-1">
            <h3 className="text-gray-200 font-semibold mb-6 text-base tracking-wide uppercase">Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/services" className="hover:text-accent-400 transition-colors flex items-center"><span className="text-accent-500 mr-2">›</span> Tyre Fitting</Link></li>
              <li><Link href="/services" className="hover:text-accent-400 transition-colors flex items-center"><span className="text-accent-500 mr-2">›</span> 3D Wheel Alignment</Link></li>
              <li><Link href="/services" className="hover:text-accent-400 transition-colors flex items-center"><span className="text-accent-500 mr-2">›</span> Wheel Balancing</Link></li>
              <li><Link href="/services" className="hover:text-accent-400 transition-colors flex items-center"><span className="text-accent-500 mr-2">›</span> Puncture Repair</Link></li>
            </ul>
          </div>
          
          {/* Quick Links Column 2 */}
          <div className="col-span-1">
            <h3 className="text-gray-200 font-semibold mb-6 text-base tracking-wide uppercase">Brands</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/brands/accelera" className="hover:text-accent-400 transition-colors flex items-center"><span className="text-accent-500 mr-2">›</span> Accelera</Link></li>
              <li><Link href="/brands/winrun" className="hover:text-accent-400 transition-colors flex items-center"><span className="text-accent-500 mr-2">›</span> Winrun</Link></li>
              <li><Link href="/brands/gepormax" className="hover:text-accent-400 transition-colors flex items-center"><span className="text-accent-500 mr-2">›</span> Gepormax</Link></li>
              <li><Link href="/brands/duraman" className="hover:text-accent-400 transition-colors flex items-center"><span className="text-accent-500 mr-2">›</span> Duraman</Link></li>
            </ul>
          </div>
          
          {/* Contact Details */}
          <div className="col-span-1" id="contact">
            <h3 className="text-gray-200 font-semibold mb-6 text-base tracking-wide uppercase">Visit Us</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <p className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>RAS AL KHOR - IND Area 2<br />Dubai, United Arab Emirates</span>
              </p>
              <p className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon-Sun, 8:00 AM - 7:30 PM</span>
              </p>
              <p className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-accent-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+971 54 514 1499</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Force One Tyres. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
