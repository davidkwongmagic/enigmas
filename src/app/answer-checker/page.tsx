'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import PasswordGate from '../components/PasswordGate';
import Header from '../components/Header';
import AnswerChecker from '../components/AnswerChecker';

interface Progress {
  [key: string]: boolean;
}

export default function AnswerCheckerPage() {
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-6 font-montserrat text-center">
              Answer Checker
            </h1>
            <p className="text-gray-700 text-lg mb-8 text-center">
              Enter your puzzle answers here to unlock puzzle pieces and track your progress.
            </p>
            
            <AnswerChecker onCorrectAnswer={updateProgress} />
          </div>
        </div>
      </main>
    </div>
  );
} 