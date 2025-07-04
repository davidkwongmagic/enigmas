'use client';

import { useAuth } from '../context/AuthContext';
import PasswordGate from '../components/PasswordGate';
import Header from '../components/Header';

export default function HallOfFamePage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <PasswordGate />;
  }

  // This would typically come from a database or API
  const hallOfFameNames = [
    // Add names here as people complete the puzzle hunt
    // "John Doe",
    // "Jane Smith",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-8 font-montserrat text-center">
            Hall of Fame
          </h1>
          
          {hallOfFameNames.length > 0 ? (
            <ul className="text-lg text-gray-700 space-y-2">
              {hallOfFameNames.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No one has completed the puzzle hunt yet. Be the first!
            </p>
          )}
        </div>
      </main>
    </div>
  );
} 