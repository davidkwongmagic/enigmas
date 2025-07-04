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


          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Answer Checker */}
            <AnswerChecker onCorrectAnswer={updateProgress} />


          </div>
        </div>
      </main>
    </div>
  );
}
