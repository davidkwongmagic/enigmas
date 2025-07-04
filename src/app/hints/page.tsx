'use client';

import React, { useState } from 'react';
import { AuthProvider } from '../context/AuthContext';
import PasswordGate from '../components/PasswordGate';
import Header from '../components/Header';

function HintsPage() {
  const [selectedPuzzle, setSelectedPuzzle] = useState<number | null>(null);
  const [revealedHints, setRevealedHints] = useState<Set<string>>(new Set());

  const puzzleHints = {
    1: [
      "Look at the symbols in the corners of the card",
      "Count how many of each symbol there are",
      "The answer is the card with the same number of symbols"
    ],
    2: [
      "Focus on the decorative border pattern",
      "Notice the repetition in the design",
      "Look for patterns that repeat exactly twice"
    ],
    3: [
      "Examine the text or numbers visible on the card",
      "Look for mathematical relationships",
      "The answer relates to the number of elements shown"
    ],
    4: [
      "Pay attention to the positioning of elements",
      "Count the distinct sections or areas",
      "The layout itself is the clue"
    ],
    5: [
      "Look for hidden letters or text",
      "Check corners, edges, and decorative elements",
      "Sometimes the answer is spelled out visually"
    ],
    6: [
      "Focus on color patterns or variations",
      "Count elements of different types",
      "The diversity of elements matters"
    ],
    7: [
      "Look for symmetry or asymmetry in the design",
      "Count elements on different sides",
      "The arrangement tells the story"
    ],
    8: [
      "This is the final puzzle - combine insights from previous ones",
      "Look for the most prominent elements",
      "The answer should be clear once you know the pattern"
    ]
  };

  const toggleHint = (puzzle: number, hintIndex: number) => {
    const hintKey = `${puzzle}-${hintIndex}`;
    const newRevealed = new Set(revealedHints);
    if (revealedHints.has(hintKey)) {
      newRevealed.delete(hintKey);
    } else {
      newRevealed.add(hintKey);
    }
    setRevealedHints(newRevealed);
  };

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
            💡 Puzzle Hints
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stuck on a puzzle? Get progressive hints to help you solve each challenge.
            Click on a puzzle to reveal hints one by one.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Puzzle Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4 font-montserrat">
                Select a Puzzle
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {Array.from({length: 8}, (_, i) => i + 1).map(num => (
                  <button
                    key={num}
                    onClick={() => setSelectedPuzzle(num)}
                    className={`p-4 rounded-lg border-2 font-semibold transition-all duration-200 ${
                      selectedPuzzle === num
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-primary-300 hover:bg-primary-25'
                    }`}
                  >
                    Puzzle {num}
                  </button>
                ))}
              </div>
              
              {selectedPuzzle && (
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <span className="font-semibold">💡 Tip:</span> Try to solve the puzzle yourself first!
                    Hints are revealed progressively - start with Hint 1.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Hints Display */}
          <div className="lg:col-span-2">
            {selectedPuzzle ? (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 font-montserrat">
                    Puzzle {selectedPuzzle} Hints
                  </h2>
                  
                  <div className="space-y-4">
                    {puzzleHints[selectedPuzzle as keyof typeof puzzleHints].map((hint, index) => {
                      const hintKey = `${selectedPuzzle}-${index}`;
                      const isRevealed = revealedHints.has(hintKey);
                      
                      return (
                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleHint(selectedPuzzle, index)}
                            className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left flex items-center justify-between"
                          >
                            <span className="font-semibold text-gray-800">
                              Hint #{index + 1}
                            </span>
                            <span className="text-gray-500">
                              {isRevealed ? '▼' : '▶'}
                            </span>
                          </button>
                          
                          {isRevealed && (
                            <div className="px-6 py-4 bg-white border-t border-gray-200 animate-in slide-in-from-top duration-200">
                              <p className="text-gray-700">{hint}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <span className="font-semibold">⚠️ Remember:</span> The final answer should be in the format 
                      of a playing card (e.g., "Ace of Hearts", "Two of Spades").
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-12 text-center">
                <div className="text-6xl mb-4">🧩</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat">
                  Choose a Puzzle
                </h2>
                <p className="text-gray-600">
                  Select a puzzle from the left panel to view its hints.
                  Remember, it's more rewarding to try solving it yourself first!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8 border border-primary-200">
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary-800 mb-4 font-montserrat">
              Need More Help?
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/"
                className="bg-white text-primary-700 px-6 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors border border-primary-200"
              >
                ← Back to Puzzles
              </a>
              <a
                href="/hall-of-fame"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                See Who Solved It →
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default function HintsPageWrapper() {
  return (
    <AuthProvider>
      <PasswordGate>
        <HintsPage />
      </PasswordGate>
    </AuthProvider>
  );
} 