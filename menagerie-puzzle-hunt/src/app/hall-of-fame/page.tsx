'use client';

import { useAuth } from '../context/AuthContext';
import PasswordGate from '../components/PasswordGate';
import Header from '../components/Header';
import Link from 'next/link';

export default function HallOfFamePage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <PasswordGate />;
  }

  // This would typically come from a database or API
  const hallOfFameEntries = [
    { name: "Puzzle Master", date: "2024-01-15", time: "2 hours 45 minutes" },
    { name: "Code Breaker", date: "2024-01-20", time: "3 hours 12 minutes" },
    { name: "Mystery Solver", date: "2024-02-03", time: "2 hours 58 minutes" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-6 font-montserrat">
              🏆 Hall of Fame
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Congratulations to these brilliant puzzle solvers who completed the entire Menagerie Puzzle Hunt!
            </p>
          </div>

          {/* Hall of Fame Entries */}
          <div className="space-y-6 mb-12">
            {hallOfFameEntries.length > 0 ? (
              hallOfFameEntries.map((entry, index) => (
                <div key={index} className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200 transform hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-emerald-800">{entry.name}</h3>
                        <p className="text-emerald-600">Completed: {entry.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-emerald-700 font-medium">Solve Time: {entry.time}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl text-gray-300 mb-4">🎯</div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">No Completions Yet</h3>
                <p className="text-gray-500">Be the first to solve all puzzles and join the Hall of Fame!</p>
              </div>
            )}
          </div>

          {/* How to Join */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
            <h2 className="text-2xl font-bold text-orange-700 mb-4 font-montserrat flex items-center">
              <span className="mr-3">⭐</span>
              How to Join the Hall of Fame
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">1.</span>
                <p>Solve all eight individual puzzles and collect their answers</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">2.</span>
                <p>Arrange the answers alphabetically (no spaces) to create the meta-password</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">3.</span>
                <p>Use the meta-password to unlock the final challenge</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-orange-600 font-bold">4.</span>
                <p>Complete the meta puzzle to earn your place in the Hall of Fame!</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/" className="block p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <span className="text-3xl text-blue-600 block mb-2">🏠</span>
                <h3 className="text-lg font-semibold text-blue-800">Back to Hunt</h3>
                <p className="text-blue-600 text-sm">Continue solving puzzles</p>
              </div>
            </Link>
            
            <Link href="/hints" className="block p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <span className="text-3xl text-green-600 block mb-2">💡</span>
                <h3 className="text-lg font-semibold text-green-800">Get Hints</h3>
                <p className="text-green-600 text-sm">Need some help?</p>
              </div>
            </Link>
            
            <Link href="/info" className="block p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <span className="text-3xl text-purple-600 block mb-2">📋</span>
                <h3 className="text-lg font-semibold text-purple-800">Info & Errata</h3>
                <p className="text-purple-600 text-sm">Additional information</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 