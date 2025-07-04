'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AuthProvider } from './context/AuthContext';
import PasswordGate from './components/PasswordGate';
import Header from './components/Header';
import AnswerChecker from './components/AnswerChecker';

function HomePage() {
  const puzzles = [
    { id: 1, image: '/images/1.png', alt: 'Puzzle 1' },
    { id: 2, image: '/images/2.png', alt: 'Puzzle 2' },
    { id: 3, image: '/images/3.png', alt: 'Puzzle 3' },
    { id: 4, image: '/images/4.png', alt: 'Puzzle 4' },
    { id: 5, image: '/images/5.png', alt: 'Puzzle 5' },
    { id: 6, image: '/images/6.png', alt: 'Puzzle 6' },
    { id: 7, image: '/images/7.png', alt: 'Puzzle 7' },
    { id: 8, image: '/images/8.png', alt: 'Puzzle 8' },
  ];

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
            🦁 The Menagerie Puzzle Hunt
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            A special eight-puzzle hunt using the beautiful{' '}
            <a
              href="https://store.theory11.com/products/enigma-deck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium underline"
            >
              Enigma Deck
            </a>{' '}
            from Theory11. Solve the puzzles hidden in each card image!
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-yellow-800 text-sm">
              <span className="font-semibold">💡 Tip:</span> Each puzzle image contains a hidden message or pattern. 
              Look carefully at details, text, symbols, and arrangements!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Puzzles Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {puzzles.map((puzzle) => (
                <div
                  key={puzzle.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary-300"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={puzzle.image}
                      alt={puzzle.alt}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-montserrat">
                      Puzzle {puzzle.id}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Find the hidden pattern in this card
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Answer Checker */}
            <AnswerChecker />

            {/* Quick Links */}
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 font-montserrat">🔗 Quick Links</h3>
              <div className="space-y-3">
                <Link
                  href="/hints"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  💡 Get Hints
                </Link>
                <Link
                  href="/hall-of-fame"
                  className="block w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-yellow-700 hover:to-yellow-800 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  🏆 Hall of Fame
                </Link>
                <Link
                  href="/info"
                  className="block w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  ℹ️ Info & Errata
                </Link>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 font-montserrat">📖 About</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>
                  The Menagerie features 8 unique puzzles hidden within the stunning artwork of the Enigma playing cards.
                </p>
                <p>
                  Each card contains a secret waiting to be discovered. Study the images carefully!
                </p>
                <div className="pt-2 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Created with ❤️ for puzzle enthusiasts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>
            The Menagerie Puzzle Hunt © 2024 |{' '}
            <a
              href="https://store.theory11.com/products/enigma-deck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700"
            >
              Enigma Deck by Theory11
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}

export default function Page() {
  return (
    <AuthProvider>
      <PasswordGate>
        <HomePage />
      </PasswordGate>
    </AuthProvider>
  );
} 