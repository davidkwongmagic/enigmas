'use client';

import { useAuth } from '../context/AuthContext';
import PasswordGate from '../components/PasswordGate';
import Header from '../components/Header';

export default function HallOfFamePage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <PasswordGate />;
  }

  const hallOfFameNames: string[] = [
    'Ben Zimmer',
    'Chris Haimson',
    'Christopher Bow',
    'Circles All the Way Down (Summer Herrick & Jonathan McCue)',
    'Dan Katz',
    'Ellie and Ronnie Kon',
    'Escape Room-antics (Jonathan and Sarah Mendez)',
    'Foggy Brume',
    'Jason Patterson',
    'Jayden Browne',
    'Joseph Echt',
    'Kristian Quino',
    'Michael Steer',
    'Richard Kalustian',
    'Stitch \'n Share (Seth Rotkin and Karen Share)',
    'Suzanne Britton',
    'Sylvain Brugnot',
    'Tamas Toth',
    'Team Palmford',
    'Toast',
    'Viktor Wyot',
    'Vulgar Boatmen (Greg Pliska, Guy Jacobson, Laura Pliska, Felicia Yue)',
    'Yossi Fendel',
    'Zachari Dahran'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-8 font-montserrat text-center">
            Hall of Fame
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 text-center">
            Here is an alphabetical list (by first name) of those intrepid solvers who have conquered the Hunt by submitting a correct final answer.
          </p>
          
          <div className="space-y-4">
            {hallOfFameNames.map((name, index) => (
              <div key={index}>
                <div className="text-lg text-gray-700 font-medium text-center">
                  {name}
                </div>
                {index < hallOfFameNames.length - 1 && (
                  <div className="mt-4 flex justify-center">
                    <div className="w-24 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 