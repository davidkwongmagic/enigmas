'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function PasswordGate() {
  const { login } = useAuth();
  const [firstPassword, setFirstPassword] = useState('');
  const [secondPassword, setSecondPassword] = useState('');
  const [firstResult, setFirstResult] = useState('');
  const [secondResult, setSecondResult] = useState('');
  const [showSecondChallenge, setShowSecondChallenge] = useState(false);
  const [showHints, setShowHints] = useState({
    'hint2-1': false,
    'hint2-2': false,
    'hint2-3': false,
    'hint2-4': false,
  });

  const handleFirstSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = firstPassword.toUpperCase().replace(/[^A-Z]/g, '');
    const correctAnswer = "CREDITFLASHINDEXREPORT";
    
    setFirstResult('');
    
    if (input === correctAnswer) {
      setFirstResult('correct');
      setShowSecondChallenge(true);
      setTimeout(() => {
        document.getElementById('textInputTwo')?.focus();
      }, 100);
    } else {
      setFirstResult('incorrect');
    }
  };

  const handleSecondSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = secondPassword.toUpperCase().replace(/[^A-Z]/g, '');
    const correctAnswer = "WELLSPOTTED";
    
    setSecondResult('');
    
    if (input === correctAnswer) {
      setSecondResult('correct');
      setTimeout(() => {
        login();
      }, 1500);
    } else {
      setSecondResult('incorrect');
    }
  };

  const toggleHint = (hintId: string) => {
    setShowHints(prev => ({
      ...prev,
      [hintId]: !prev[hintId as keyof typeof prev]
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" 
         style={{
           background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)'
         }}>
      <div className="w-full max-w-2xl">
        {/* Main Container */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 lg:p-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 font-montserrat">
            Puzzle Hunt
          </h1>
          
          {/* First Password Section */}
          <div className="space-y-6 mb-8">
            <div className="bg-black/20 rounded-2xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold text-white mb-4">First Challenge</h2>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Please Enter The Four Answers To The Puzzles In The Playing Cards, In Alphabetical Order, No Spaces.
              </p>
              
              <form onSubmit={handleFirstSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
                <input 
                  id="textInputOne"
                  type="text"
                  value={firstPassword}
                  onChange={(e) => setFirstPassword(e.target.value)}
                  placeholder="Enter your answer" 
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  style={{
                    boxShadow: 'focus:0 0 20px rgba(34, 197, 94, 0.3)'
                  }}
                  autoComplete="off"
                />
                <button 
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  Submit
                </button>
              </form>
              
              <p className="text-gray-400 text-xs">
                For example, if the four answers were RED, YELLOW, GREEN, and PURPLE, you would enter GREENPURPLEREDYELLOW
              </p>
              
              {/* First Result Messages */}
              {firstResult === 'incorrect' && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                  <div className="flex items-center justify-center">
                    <span className="text-red-400 text-2xl mr-2">✗</span>
                    <span className="text-red-300 font-medium">SORRY, YOUR ANSWER IS INCORRECT.</span>
                  </div>
                </div>
              )}
              
              {firstResult === 'correct' && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                  <div className="flex items-center justify-center">
                    <span className="text-green-400 text-2xl mr-2">✓</span>
                    <span className="text-green-300 font-medium">CORRECT! Please proceed to the second password.</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Second Password Section */}
          {showSecondChallenge && (
            <div className="space-y-6">
              <div className="bg-black/20 rounded-2xl p-6 border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-4">Second Challenge</h2>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  The word ENIGMA is also encoded in the bookshelves (can you figure out the code?) but that is not the password you need.
                </p>
                
                <form onSubmit={handleSecondSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
                  <input 
                    id="textInputTwo"
                    type="text"
                    value={secondPassword}
                    onChange={(e) => setSecondPassword(e.target.value)}
                    placeholder="Enter your answer" 
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    autoComplete="off"
                  />
                  <button 
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                    Submit
                  </button>
                </form>
                
                <p className="text-gray-400 text-xs">
                  The word ENIGMA is also secretly hidden in the deck (can you find it?), but that is not the password you need.
                </p>
                
                {/* Second Result Messages */}
                {secondResult === 'incorrect' && (
                  <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl">
                    <div className="flex items-center justify-center">
                      <span className="text-red-400 text-2xl mr-2">✗</span>
                      <span className="text-red-300 font-medium">SORRY, YOUR ANSWER IS INCORRECT.</span>
                    </div>
                  </div>
                )}
                
                {secondResult === 'correct' && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl">
                    <div className="flex items-center justify-center">
                      <span className="text-green-400 text-2xl mr-2">✓</span>
                      <span className="text-green-300 font-medium">CORRECT! Unlocking the puzzle hunt...</span>
                    </div>
                  </div>
                )}
                
                {/* Hints Section */}
                <div className="mt-8 space-y-3">
                  <h3 className="text-white font-semibold text-lg mb-4">Need Help?</h3>
                  <div className="space-y-2">
                    <button 
                      className="w-full text-left px-4 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-300 hover:bg-blue-500/30 transition-all" 
                      onClick={() => toggleHint('hint2-1')}
                    >
                      💡 Show Hint 1
                    </button>
                    {showHints['hint2-1'] && (
                      <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-blue-400">
                        <p className="text-gray-300 text-sm">The backs of the cards are all identical. The password can be found, in code, on the back of any card.</p>
                      </div>
                    )}
                    
                    <button 
                      className="w-full text-left px-4 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-300 hover:bg-blue-500/30 transition-all" 
                      onClick={() => toggleHint('hint2-2')}
                    >
                      💡 Show Hint 2
                    </button>
                    {showHints['hint2-2'] && (
                      <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-blue-400">
                        <p className="text-gray-300 text-sm">The password is encoded in a string of items that at first glance might look identical, but are not.</p>
                      </div>
                    )}
                    
                    <button 
                      className="w-full text-left px-4 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl text-blue-300 hover:bg-blue-500/30 transition-all" 
                      onClick={() => toggleHint('hint2-3')}
                    >
                      💡 Show Hint 3
                    </button>
                    {showHints['hint2-3'] && (
                      <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-blue-400">
                        <p className="text-gray-300 text-sm">The circles and triangles that run around the edge of the back design can be interpreted as Morse Code: one circle = DOT and two circles = DASH. Single triangles separate the dots and dashes, and double triangles separate the letters. The message runs along the top and right side, and then is repeated along the bottom and left side.</p>
                      </div>
                    )}
                    
                    <button 
                      className="w-full text-left px-4 py-3 bg-yellow-500/20 border border-yellow-500/30 rounded-xl text-yellow-300 hover:bg-yellow-500/30 transition-all" 
                      onClick={() => toggleHint('hint2-4')}
                    >
                      🎯 Show Answer
                    </button>
                    {showHints['hint2-4'] && (
                      <div className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-yellow-400">
                        <p className="text-gray-300 text-sm font-medium">The Password is WELLSPOTTED</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
