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
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-[#121212]/90 backdrop-blur-md border-b border-gray-200 dark:border-[#2a2a2a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-12 w-44 sm:w-48 relative">
                <Image src="/assets/Logo/LOGO-Transparent.png" alt="Force One Tyres" fill className="object-contain" />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-sm font-medium transition-colors hover:text-[#D4A843] ${pathname === "/" ? "text-[#D4A843]" : "text-gray-600 dark:text-gray-300"}`}>Home</Link>
            <Link href="/services" className={`text-sm font-medium transition-colors hover:text-[#D4A843] ${pathname === "/services" ? "text-[#D4A843]" : "text-gray-600 dark:text-gray-300"}`}>Services</Link>
            
            <div className="relative" ref={desktopDropdownRef}>
              <div className="flex items-center space-x-1">
                <Link 
                  href="/brands"
                  className={`text-sm font-medium transition-colors hover:text-[#D4A843] ${pathname?.startsWith("/brands") ? "text-[#D4A843]" : "text-gray-600 dark:text-gray-300"}`}
                >
                  Brands
                </Link>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`text-sm font-medium transition-colors hover:text-[#D4A843] focus:outline-none ${pathname?.startsWith("/brands") ? "text-[#D4A843]" : "text-gray-600 dark:text-gray-300"}`}
                  aria-label="Toggle brands dropdown"
                >
                  <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white dark:bg-[#1a1a1a] rounded-md shadow-lg border border-gray-200 dark:border-[#2a2a2a] py-2 animate-fade-in-up">
                  {brands.map((brand) => (
                    <Link
                      key={brand.name}
                      href={brand.path}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 dark:hover:bg-[#2a2a2a] hover:text-[#D4A843] ${pathname === brand.path ? 'text-[#D4A843] bg-gray-50 dark:bg-[#2a2a2a]/50' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="#contact" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#D4A843] transition-colors">Contact</Link>
            
            {/* Theme Toggle */}
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
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Toggle Mobile */}
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
    </nav>
  );
}

