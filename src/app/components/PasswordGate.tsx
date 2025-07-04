'use client';

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, setAuthenticated } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showHints, setShowHints] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'enigma theory eleven') {
      setAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Try again!');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2 font-montserrat">
              🦁 The Menagerie
            </h1>
            <p className="text-slate-300">
              Enter the password to access the puzzle hunt
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                autoFocus
              />
              {error && (
                <p className="text-red-400 text-sm mt-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-4 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Enter The Menagerie
            </button>
          </form>

          <div className="mt-8">
            <button
              onClick={() => setShowHints(!showHints)}
              className="text-slate-300 hover:text-white text-sm transition-colors mb-4"
            >
              {showHints ? '▼' : '▶'} Need a hint?
            </button>
            
            {showHints && (
              <div className="space-y-3 text-sm text-slate-400">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-medium text-slate-300 mb-1">Hint #1:</p>
                  <p>Look at the domain name of this website.</p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-medium text-slate-300 mb-1">Hint #2:</p>
                  <p>Three words. The first is the name of a well-known Alan Turing invention.</p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                  <p className="font-medium text-slate-300 mb-1">Hint #3:</p>
                  <p>The second and third words are the name of a card company.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 