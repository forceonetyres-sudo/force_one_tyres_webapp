"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function handleClickOutside(event) {
      if (
        (desktopDropdownRef.current && desktopDropdownRef.current.contains(event.target)) ||
        (mobileDropdownRef.current && mobileDropdownRef.current.contains(event.target))
      ) {
        return;
      }
      setIsDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  const brands = [
    { name: "Accelera", path: "/brands/accelera" },
    { name: "Winrun", path: "/brands/winrun" },
    { name: "Gepormax", path: "/brands/gepormax" },
    { name: "Duraman", path: "/brands/duraman" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex flex-col w-full transition-colors duration-300 shadow-sm dark:shadow-none">
      {/* Top Utility Bar */}
      <div className="w-full bg-charcoal-950 dark:bg-black text-gray-300 text-xs sm:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="mailto:info@forceonetyres.com" className="flex items-center hover:text-white transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="hidden sm:inline">info@forceonetyres.com</span>
            </a>
            <span className="hidden md:flex items-center text-gray-400">
              <svg className="w-4 h-4 mr-2 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              24/7 Expert Support
            </span>
          </div>
          <div className="flex items-center">
            <a href="https://wa.me/971545141499" target="_blank" rel="noopener noreferrer" className="flex items-center font-bold text-white hover:text-accent-400 transition-colors">
              <svg className="w-4 h-4 mr-2 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              +971 54 514 1499
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navbar */}
      <div className="w-full bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md border-b border-gray-200 dark:border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="h-16 w-48 relative transition-transform duration-300 group-hover:scale-105">
                <Image src="/assets/Logo/LOGO-Transparent.png" alt="Force One Tyres" fill className="object-contain" />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-base font-bold transition-colors hover:text-accent-600 dark:hover:text-accent-400 ${pathname === "/" ? "text-accent-600 dark:text-accent-400" : "text-gray-700 dark:text-gray-200"}`}>Home</Link>
            <Link href="/services" className={`text-base font-bold transition-colors hover:text-accent-600 dark:hover:text-accent-400 ${pathname === "/services" ? "text-accent-600 dark:text-accent-400" : "text-gray-700 dark:text-gray-200"}`}>Services</Link>
            
            <div className="relative" ref={desktopDropdownRef}>
              <div className="flex items-center space-x-1">
                <Link 
                  href="/brands"
                  className={`text-base font-bold transition-colors hover:text-accent-600 dark:hover:text-accent-400 ${pathname?.startsWith("/brands") ? "text-accent-600 dark:text-accent-400" : "text-gray-700 dark:text-gray-200"}`}
                >
                  Brands
                </Link>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`text-base font-bold transition-colors hover:text-accent-600 dark:hover:text-accent-400 focus:outline-none ${pathname?.startsWith("/brands") ? "text-accent-600 dark:text-accent-400" : "text-gray-700 dark:text-gray-200"}`}
                  aria-label="Toggle brands dropdown"
                >
                  <svg className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-2xl border border-gray-100 dark:border-[#2a2a2a] py-2 animate-fade-in-up">
                  {brands.map((brand) => (
                    <Link
                      key={brand.name}
                      href={brand.path}
                      className={`block px-4 py-2.5 text-base font-semibold transition-colors hover:bg-gray-50 dark:hover:bg-[#2a2a2a] hover:text-accent-600 dark:hover:text-accent-400 ${pathname === brand.path ? 'text-accent-600 dark:text-accent-400 bg-gray-50 dark:bg-[#2a2a2a]/50' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="#contact" className="text-base font-bold text-gray-700 dark:text-gray-200 hover:text-accent-600 dark:hover:text-accent-400 transition-colors">Contact</Link>
            
            {/* Theme Toggle (Temporarily disabled as requested) */}
            {/*
            <button
              suppressHydrationWarning
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex items-center justify-center p-2 rounded-lg bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#3a3a3a] transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {mounted && resolvedTheme === "dark" ? (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            */}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Mobile (Temporarily disabled) */}
            {/*
            <button
              suppressHydrationWarning
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-100 dark:bg-[#2a2a2a] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#3a3a3a] transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {mounted && resolvedTheme === "dark" ? (
                <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            */}
            
            <div className="relative" ref={mobileDropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-[#1a1a1a] rounded-md shadow-lg border border-gray-200 dark:border-[#2a2a2a] py-2">
                   <Link href="/" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a2a2a]">Home</Link>
                   <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a2a2a]">Services</Link>
                   <Link href="/brands" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a2a2a]">All Brands</Link>
                   <div className="px-4 py-1 text-xs text-gray-500 uppercase font-bold mt-2">By Brand</div>
                   {brands.map((brand) => (
                    <Link
                      key={brand.name}
                      href={brand.path}
                      className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2a2a2a] pl-6`}
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

