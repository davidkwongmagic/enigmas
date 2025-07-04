'use client';

import { useAuth } from './context/AuthContext';
import PasswordGate from './components/PasswordGate';
import Header from './components/Header';
import AnswerChecker from './components/AnswerChecker';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Progress {
  [key: string]: boolean;
}

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [progress, setProgress] = useState<Progress>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem('menagerieSolvedPuzzles');
    if (savedProgress) {
      const puzzleNumbers = JSON.parse(savedProgress);
      const newProgress: Progress = {};
      puzzleNumbers.forEach((num: number) => {
        newProgress[`puzzle-${num}`] = true;
      });
      setProgress(newProgress);
    }
  }, []);

  const updateProgress = (cardName: string, solved: boolean) => {
    const newProgress = { ...progress, [cardName]: solved };
    setProgress(newProgress);
  };

  if (!isAuthenticated) {
    return <PasswordGate />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 transform hover:scale-[1.01] transition-transform duration-300">
              <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-6 font-montserrat">
                Welcome to the Menagerie Puzzle Hunt
              </h1>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Welcome, hunters, to the Menagerie Puzzle Hunt, a special eight-puzzle hunt featuring unique challenges across different themed environments.
                </p>
                
                <p>
                  Each puzzle in this collection (numbered 1 through 8) features a unique challenge to solve, and each puzzle has a one-word answer. 
                  Your goal: find all eight answers.
                </p>
                
                <p>
                  But don't think that's where the challenge ends. If you're able to solve all eight puzzles, you'll want to put all eight answers together 
                  (alphabetically, with no spaces between them) to form a super-long "password" that will unlock access to an additional meta-challenge. 
                  And if you can solve that challenge as well, you'll earn the right to your name being displayed on our Hall of Fame. Good luck!
                </p>
                
                <p>
                  The puzzles are themed around different environments: Broadcasting Studio, Computer Lab, Fulfillment Center, Map Room, Noah's Ark, Observatory, Restaurant, and Terrarium. Each presents its own unique challenge and style of puzzle solving.
                </p>
              </div>
            </div>

            {/* Puzzle Grid */}
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
              <h2 className="text-3xl font-bold text-emerald-600 mb-8 font-montserrat">Puzzle Environments</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {Array.from({length: 8}, (_, i) => i + 1).map((puzzleNum) => (
                  <div key={puzzleNum} className="group cursor-pointer">
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 group-hover:from-emerald-100 group-hover:to-emerald-200 transition-all duration-300">
                      <Image
                        src={`/images/${puzzleNum}.png`}
                        alt={`Puzzle ${puzzleNum}`}
                        width={200}
                        height={300}
                        className="w-full h-auto rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                        priority={puzzleNum <= 4}
                      />
                      <div className="mt-3 text-center">
                        <span className="text-lg font-semibold text-emerald-700">Puzzle {puzzleNum}</span>
                        {progress[`puzzle-${puzzleNum}`] && (
                          <div className="mt-1">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              ✓ Solved
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Answer Checker */}
            <AnswerChecker onCorrectAnswer={updateProgress} />

            {/* Progress Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-xl font-bold text-emerald-600 mb-4 font-montserrat">Your Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <span>Puzzles Solved</span>
                    <span>{Object.values(progress).filter(Boolean).length}/8</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${(Object.values(progress).filter(Boolean).length / 8) * 100}%` }}
                    />
                  </div>
                </div>
                
                {Object.values(progress).filter(Boolean).length === 8 && (
                  <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium text-center">
                      🎉 All puzzles solved! Ready for the meta challenge!
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Puzzle Hunt Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-xl font-bold text-emerald-600 mb-4 font-montserrat">About the Hunt</h3>
              <div className="text-gray-700 text-sm space-y-3">
                <p>
                  The Menagerie Puzzle Hunt features eight unique environments, each with its own style and type of puzzle to solve.
                </p>
                <p>
                  Each puzzle contains hidden elements and clues that, when properly interpreted, reveal the answers you need.
                </p>
                <p className="text-xs text-gray-500">
                  Use the answer checker on this page to submit your solutions and track your progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
