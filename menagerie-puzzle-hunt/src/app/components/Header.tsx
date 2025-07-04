'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-6 gap-4 sm:gap-0">
          <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors font-montserrat">
            The Menagerie
          </Link>
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className={`nav-underline font-medium transition-colors relative ${
                isActive('/') 
                  ? 'text-gray-700' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/hall-of-fame" 
              className={`nav-underline font-medium transition-colors relative ${
                isActive('/hall-of-fame') 
                  ? 'text-gray-700'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Hall of Fame
            </Link>
            <Link 
              href="/hints" 
              className={`nav-underline font-medium transition-colors relative ${
                isActive('/hints') 
                  ? 'text-gray-700'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Hints
            </Link>
            <Link 
              href="/info" 
              className={`nav-underline font-medium transition-colors relative ${
                isActive('/info') 
                  ? 'text-gray-700'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Info / Errata
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
