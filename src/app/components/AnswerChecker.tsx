'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Helper function to handle basePath for images
const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/enigmas' : '';
  return `${basePath}${path}`;
};

// Helper function to normalize answers - remove spaces and convert to lowercase
const normalizeAnswer = (answer: string): string => {
  return answer.toLowerCase().replace(/\s+/g, '');
};

interface AnswerCheckerProps {
  className?: string;
  onCorrectAnswer: (cardName: string, solved: boolean) => void;
}

export default function AnswerChecker({ className = '', onCorrectAnswer }: AnswerCheckerProps) {
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [solvedPuzzles, setSolvedPuzzles] = useState<Set<number>>(new Set());
  const [currentPiece, setCurrentPiece] = useState<number | null>(null);
  const [showFinalImage, setShowFinalImage] = useState(false);

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
    setCurrentPiece(puzzleNumber);
    localStorage.setItem('menagerieSolvedPuzzles', JSON.stringify([...newSolved]));
  };

  // All correct answers normalized (no spaces, lowercase)
  const correctAnswers: { [key: string]: number } = {
    'thedeanmartinshow': 1,
    'denialofservice': 2,
    'flatbedtrailer': 3,
    'midtermbreak': 4,
    'lifeinsurance': 5,
    'meteororbits': 6,
    'cosmopolitans': 7,
    'powerpoint': 8,
  };

  const finalAnswer = 'beastfriendsforever';

  const checkAnswer = () => {
    setIsLoading(true);
    const cleanAnswer = normalizeAnswer(answer);

    setTimeout(() => {
      if (correctAnswers[cleanAnswer]) {
        const puzzleNumber = correctAnswers[cleanAnswer];
        setResult(''); // Clear any previous messages
        saveProgress(puzzleNumber);
        setAnswer('');
        onCorrectAnswer(`puzzle-${puzzleNumber}`, true);
      } else if (cleanAnswer === finalAnswer) {
        setResult('');
        setShowFinalImage(true);
        setCurrentPiece(null);
        setAnswer('');
      } else if (cleanAnswer === '') {
        setResult('Please enter an answer!');
      } else {
        setResult('❌ Incorrect. Keep trying!');
        setCurrentPiece(null);
      }
      setIsLoading(false);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkAnswer();
  };

  return (
    <div className={`bg-white/70 backdrop-blur-sm border border-emerald-200 rounded-xl p-6 shadow-lg ${className}`}>


      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer..."
            className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 px-4 rounded-lg font-medium hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:transform-none"
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

      {/* Show current solved puzzle piece */}
      {currentPiece && (
        <div className="mt-6 flex justify-center">
          <Image
            src={getImagePath(`/images/${currentPiece}.png`)}
            alt={`Puzzle piece ${currentPiece}`}
            width={400}
            height={400}
            className="w-auto h-auto max-w-full"
          />
        </div>
      )}

      {/* Show final image when complete */}
      {showFinalImage && (
        <div className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-300 rounded-lg">
          <h3 className="text-2xl font-bold text-amber-800 mb-4 text-center">You&apos;ve successfully completed the hunt!</h3>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={getImagePath("/images/menagerie.jpg")}
              alt="The Menagerie"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <p className="mt-4 text-center text-amber-700 font-medium">
            Welcome to the hall of fame!
          </p>
          <p className="mt-2 text-center text-amber-600 text-sm">
            Please email your name to info@davidkwongmagic.com and dshukan@gmail.com 
            with your final answer to be added to our Hall of Fame.
          </p>
        </div>
      )}
    </div>
  );
}
