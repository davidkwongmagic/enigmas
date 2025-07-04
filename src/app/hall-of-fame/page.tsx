'use client';

import React, { useState, useEffect } from 'react';
import { AuthProvider } from '../context/AuthContext';
import PasswordGate from '../components/PasswordGate';
import Header from '../components/Header';

interface Solver {
  name: string;
  date: string;
}

function HallOfFamePage() {
  const [solvers, setSolvers] = useState<Solver[]>([]);
  const [newSolverName, setNewSolverName] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    // Load solvers from localStorage
    const savedSolvers = localStorage.getItem('menagerieSolvers');
    if (savedSolvers) {
      setSolvers(JSON.parse(savedSolvers));
    } else {
      // Default solvers
      const defaultSolvers = [
        { name: 'Alex Chen', date: '2024-01-15' },
        { name: 'Sarah Miller', date: '2024-01-20' },
        { name: 'Marcus Johnson', date: '2024-02-03' }
      ];
      setSolvers(defaultSolvers);
      localStorage.setItem('menagerieSolvers', JSON.stringify(defaultSolvers));
    }
  }, []);

  const addSolver = () => {
    if (newSolverName.trim()) {
      const newSolver = {
        name: newSolverName.trim(),
        date: new Date().toISOString().split('T')[0]
      };
      const updatedSolvers = [...solvers, newSolver];
      setSolvers(updatedSolvers);
      localStorage.setItem('menagerieSolvers', JSON.stringify(updatedSolvers));
      setNewSolverName('');
      setShowAddForm(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSolver();
  };

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4 animate-bounce">🏆</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-montserrat">
            Hall of Fame
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating the brilliant minds who have conquered The Menagerie.
            These puzzle masters have solved all eight challenges!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-800 mb-2">{solvers.length}</div>
            <div className="text-yellow-700 font-medium">Total Solvers</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-800 mb-2">8</div>
            <div className="text-green-700 font-medium">Puzzle Challenges</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-800 mb-2">100%</div>
            <div className="text-blue-700 font-medium">Success Rate</div>
          </div>
        </div>

        {/* Champions List */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-4">
            <h2 className="text-2xl font-bold text-white font-montserrat flex items-center">
              🥇 Champions
            </h2>
          </div>
          
          <div className="p-6">
            {solvers.length > 0 ? (
              <div className="space-y-4">
                {solvers.map((solver, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        {index === 0 && <span className="text-2xl">👑</span>}
                        {index === 1 && <span className="text-2xl">🥈</span>}
                        {index === 2 && <span className="text-2xl">🥉</span>}
                        {index > 2 && <span className="text-2xl">⭐</span>}
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-gray-800">{solver.name}</div>
                        <div className="text-sm text-gray-600">Completed all 8 puzzles</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Solved on</div>
                      <div className="text-sm font-medium text-gray-700">
                        {new Date(solver.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🏆</div>
                <p className="text-gray-600">No solvers yet. Be the first to complete all puzzles!</p>
              </div>
            )}
          </div>
        </div>

        {/* Add Solver Section */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl border border-primary-200 p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-primary-800 mb-4 font-montserrat">
              🎉 Solved All Puzzles?
            </h3>
            <p className="text-primary-700 mb-6">
              Congratulations! Add your name to the Hall of Fame and join the elite puzzle masters.
            </p>
            
            {!showAddForm ? (
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors transform hover:scale-105"
              >
                Add My Name
              </button>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={newSolverName}
                    onChange={(e) => setNewSolverName(e.target.value)}
                    placeholder="Enter your name..."
                    className="flex-1 px-4 py-2 border border-primary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddForm(false);
                      setNewSolverName('');
                    }}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Achievement Showcase */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 font-montserrat flex items-center">
              🏅 Achievement Unlocked
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🧩</span>
                <div>
                  <div className="font-medium text-gray-800">Puzzle Master</div>
                  <div className="text-sm text-gray-600">Solved all 8 Menagerie puzzles</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <div className="font-medium text-gray-800">Detective</div>
                  <div className="text-sm text-gray-600">Found hidden patterns in card images</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="font-medium text-gray-800">Precision</div>
                  <div className="text-sm text-gray-600">Identified exact playing card answers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 font-montserrat flex items-center">
              🚀 Next Challenge
            </h3>
            <p className="text-gray-600 mb-4">
              Ready for more puzzle adventures? Check out these recommendations:
            </p>
            <div className="space-y-2">
              <a
                href="https://store.theory11.com/products/enigma-deck"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-primary-600 hover:text-primary-700 font-medium"
              >
                🃏 Get your own Enigma Deck
              </a>
              <a
                href="#"
                className="block text-primary-600 hover:text-primary-700 font-medium"
              >
                🎲 Explore more puzzle hunts
              </a>
              <a
                href="/info"
                className="block text-primary-600 hover:text-primary-700 font-medium"
              >
                📖 Learn about puzzle creation
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default function HallOfFamePageWrapper() {
  return (
    <AuthProvider>
      <PasswordGate>
        <HallOfFamePage />
      </PasswordGate>
    </AuthProvider>
  );
} 