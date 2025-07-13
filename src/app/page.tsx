'use client';

import { useAuth } from './context/AuthContext';
import PasswordGate from './components/PasswordGate';
import Header from './components/Header';

export default function Home() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <PasswordGate />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 transform hover:scale-[1.01] transition-transform duration-300">
            <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-6 font-montserrat">
              Welcome
            </h1>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                The Menagerie is a puzzle hunt inspired by the animal residents and other attractions of George Fabyan&apos;s sprawling estate Riverbank, referenced in David Kwong&apos;s Magic and puzzle show The Enigmatist and in the Enigmas deck that led you here. The specific menagerie and other attractions mentioned in this puzzle hunt are fictional, and no knowledge of the Fabyan Villa at Riverbank, or of the Enigmatist, is required while solving.
              </p>
              
              <p>
                The puzzles for the Menagerie Hunt can be downloaded as a PDF from the button below. Answers to the individual puzzles can, and should, be checked with the <a href="/answer-checker" className="text-emerald-600 hover:text-emerald-700 underline">Answer Checker</a>, which will provide additional, useful information when a correct answer is entered.
              </p>
              
              <p>
                A full slate of hints for each puzzle is available in the <a href="/hints" className="text-emerald-600 hover:text-emerald-700 underline">Hints section</a> – they can be revealed one at a time, with the intention that solvers will never need to see more information than they need at the moment, and hints should be taken liberally; in many cases they will provide instructions that might have been included as part of the main instructions for the puzzle but were relegated to hint status to provide an extra challenge for solvers who want to attack the puzzles in their most challenging form.
              </p>
              
              <p>
                <strong>Happy solving!</strong>
              </p>
              
              <p className="text-sm text-gray-600">
                (Please direct any questions, comments, or errata reports to dshukan@gmail.com)
              </p>

              {/* Download Button */}
              <div className="mt-8">
                <a 
                  href="/images/Menagerie Puzzle Hunt (1).pdf" 
                  download="Menagerie Puzzle Hunt.pdf"
                  className="block w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-center py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  Download the Puzzle Hunt
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
