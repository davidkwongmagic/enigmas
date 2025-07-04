'use client';

import React from 'react';
import Link from 'next/link';
import { AuthProvider } from '../context/AuthContext';
import PasswordGate from '../components/PasswordGate';
import Header from '../components/Header';

function InfoPage() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
            ℹ️ Info & Errata
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about The Menagerie Puzzle Hunt, including credits, 
            corrections, and contact information.
          </p>
        </div>

        <div className="space-y-8">
          {/* About Section */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
              <h2 className="text-2xl font-bold text-white font-montserrat">
                📖 About The Menagerie
              </h2>
            </div>
            <div className="p-6">
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Menagerie is a special eight-puzzle hunt that showcases the beautiful 
                  artwork of the <a 
                    href="https://store.theory11.com/products/enigma-deck" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium underline"
                  >
                    Enigma Deck
                  </a> from Theory11.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Each card in the deck features intricate designs and hidden patterns that form 
                  the basis of our puzzles. Solvers must carefully examine the card images to 
                  discover hidden messages, count specific elements, or identify patterns that 
                  correspond to specific playing cards.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The goal is to determine which playing card each puzzle represents, with 
                  answers in the format of "Ace of Hearts", "Two of Spades", etc.
                </p>
              </div>
            </div>
          </div>

          {/* Credits Section */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
              <h2 className="text-2xl font-bold text-white font-montserrat">
                👥 Credits
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Puzzle Design</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Original puzzle concepts and design</li>
                    <li>• Card image analysis and pattern creation</li>
                    <li>• Progressive hint system development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Artwork</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <a 
                      href="https://store.theory11.com/products/enigma-deck" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium underline"
                    >
                      Enigma Deck by Theory11
                    </a></li>
                    <li>• Beautiful card designs and illustrations</li>
                    <li>• High-quality printing and finish</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Technology</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Built with React and Next.js</li>
                    <li>• Styled with Tailwind CSS</li>
                    <li>• Progressive web app features</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Special Thanks</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Puzzle hunting community</li>
                    <li>• Beta testers and early solvers</li>
                    <li>• Theory11 for the amazing deck</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Errata Section */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-6 py-4">
              <h2 className="text-2xl font-bold text-white font-montserrat">
                📝 Errata & Updates
              </h2>
            </div>
            <div className="p-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-green-600 font-semibold">✅ Current Status:</span>
                </div>
                <p className="text-green-800 text-sm">
                  All puzzles are functioning correctly. No known issues at this time.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Version History</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary-500 pl-4">
                      <div className="text-sm text-gray-600">v2.0.0 - March 2024</div>
                      <div className="font-medium text-gray-800">React Migration</div>
                      <div className="text-sm text-gray-700">
                        Complete rewrite using React and Next.js for better performance and user experience.
                      </div>
                    </div>
                    <div className="border-l-4 border-gray-400 pl-4">
                      <div className="text-sm text-gray-600">v1.0.0 - January 2024</div>
                      <div className="font-medium text-gray-800">Initial Release</div>
                      <div className="text-sm text-gray-700">
                        Original HTML/CSS/JavaScript version with all 8 puzzles.
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Known Issues</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-600 text-sm italic">
                      No known issues currently. If you encounter any problems, please contact us!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
              <h2 className="text-2xl font-bold text-white font-montserrat">
                📧 Contact & Support
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Get Help</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💡</span>
                      <div>
                        <Link href="/hints" className="text-primary-600 hover:text-primary-700 font-medium">
                          Check the Hints Page
                        </Link>
                        <div className="text-sm text-gray-600">Progressive hints for each puzzle</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏆</span>
                      <div>
                        <Link href="/hall-of-fame" className="text-primary-600 hover:text-primary-700 font-medium">
                          Hall of Fame
                        </Link>
                        <div className="text-sm text-gray-600">See who solved all puzzles</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Feedback</h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="text-sm">
                      Found a bug or have suggestions? We'd love to hear from you!
                    </p>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                      <div className="text-sm font-medium text-gray-800">Report Issues:</div>
                      <div className="text-sm text-gray-600">
                        Include puzzle number, browser, and description of the problem.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl border border-primary-200 p-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-primary-800 mb-4 font-montserrat">
                🧭 Quick Navigation
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/"
                  className="bg-white text-primary-700 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors border border-primary-200"
                >
                  🏠 Home
                </Link>
                <Link
                  href="/hints"
                  className="bg-white text-primary-700 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors border border-primary-200"
                >
                  💡 Hints
                </Link>
                <Link
                  href="/hall-of-fame"
                  className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  🏆 Hall of Fame
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default function InfoPageWrapper() {
  return (
    <AuthProvider>
      <PasswordGate>
        <InfoPage />
      </PasswordGate>
    </AuthProvider>
  );
} 