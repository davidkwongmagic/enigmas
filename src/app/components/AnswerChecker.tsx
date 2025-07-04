'use client';

import React, { useState, useEffect } from 'react';

interface AnswerCheckerProps {
  className?: string;
}

export default function AnswerChecker({ className = '' }: AnswerCheckerProps) {
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [solvedPuzzles, setSolvedPuzzles] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Load solved puzzles from localStorage
    const solved = localStorage.getItem('menagerieSolvedPuzzles');
    if (solved) {
      setSolvedPuzzles(new Set(JSON.parse(solved)));
    }
  }, []);

  const saveProgress = (puzzleNumber: number) => {
    const newSolved = new Set([...solvedPuzzles, puzzleNumber]);
    setSolvedPuzzles(newSolved);
    localStorage.setItem('menagerieSolvedPuzzles', JSON.stringify([...newSolved]));
  };

  const correctAnswers: { [key: string]: number } = {
    'ace of hearts': 1,
    'two of hearts': 2,
    'three of hearts': 3,
    'four of hearts': 4,
    'five of hearts': 5,
    'six of hearts': 6,
    'seven of hearts': 7,
    'eight of hearts': 8,
  };

  const checkAnswer = () => {
    setIsLoading(true);
    const cleanAnswer = answer.toLowerCase().trim();

    setTimeout(() => {
      if (correctAnswers[cleanAnswer]) {
        const puzzleNumber = correctAnswers[cleanAnswer];
        setResult(`✅ Correct! You solved Puzzle ${puzzleNumber}: ${cleanAnswer}`);
        saveProgress(puzzleNumber);
        setAnswer('');
      } else if (cleanAnswer === '') {
        setResult('Please enter an answer!');
      } else {
        setResult('❌ Incorrect. Keep trying!');
      }
      setIsLoading(false);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkAnswer();
  };

  return (
    <div className={`bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-lg ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 font-montserrat">🔍 Answer Checker</h3>
        <p className="text-gray-600">Enter your puzzle answers here</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-4 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none"
        >
          {isLoading ? 'Checking...' : 'Check Answer'}
        </button>
      </form>

      {result && (
        <div className={`mt-4 p-4 rounded-lg text-center font-medium ${
          result.includes('✅') 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {result}
        </div>
      )}

      {solvedPuzzles.size > 0 && (
        <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
          <h4 className="text-sm font-semibold text-primary-800 mb-2">
            Progress: {solvedPuzzles.size}/8 puzzles solved
          </h4>
          <div className="flex flex-wrap gap-2">
            {Array.from({length: 8}, (_, i) => i + 1).map(num => (
              <span
                key={num}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  solvedPuzzles.has(num)
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {num}
              </span>
            ))}
          </div>
          {solvedPuzzles.size === 8 && (
            <div className="mt-3 text-center">
              <p className="text-primary-800 font-bold">🎉 Congratulations! You completed all puzzles!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 