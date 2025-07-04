'use client';

import { useAuth } from '../context/AuthContext';
import PasswordGate from '../components/PasswordGate';
import Header from '../components/Header';
import { useState } from 'react';

interface HintData {
  title: string;
  hints: {
    title: string;
    content: string;
  }[];
}

const hintsData: Record<string, HintData> = {
  broadcasting: {
    title: "Broadcasting Studio",
    hints: [
      {
        title: "Hint 1",
        content: "This type of puzzle takes practice and persistence. Look for patterns in the lines that can reflect what the rules are. Try breaking the lines up into likely words (even if you don't know why yet), and then try to figure out the rule that makes regular words into those close-but-not-quite words. If there is a particular letter, say X, that appears every so often but looks like it does not belong, consider that a rule might be \"Add an X [before/after/as the second letter of] each word,\" or maybe \"change each second letter [or each M] to X.\" Each line is a mini-puzzle in itself."
      },
      {
        title: "Hint 2",
        content: "For example, the first item is:\nTECHNICBTESFPBEEKEEPIOFACILIU\nThis looks like a plausible way to break things up:\nTECHNICB TESFP BEEKEEPIO FACILIU\nAnd there's something going on with last letters, since it looks like it should be:\n\nTECHNIC(AL) TESF(??) BEEKEEPI(NG) FACILI(TY)\nSo, the last letter is removed, and the new last letter is moved one forward in the alphabet. That second group was not one word, but two, giving:\nTECHNICAL TERM FOR BEEKEEPING FACILITY, which is APIARY\nThen apply the rule to APIARY, changing it to APIAS, which is (for now) the answer to the first item."
      },
      {
        title: "Hint 3",
        content: "3 more rules, for 3 different lines (which ones are for you to figure out):\n\n-- Delete the first letter; then change 4th letter to R and add S to the end\n-- Reverse all but last letter, then swap first 2 letters\n-- Change H to M, N to C, and O to a copy of the letter after it"
      },
      {
        title: "Hint 4",
        content: "All the modified answers have something in common. What is it? And what does that suggest you do?"
      },
      {
        title: "Hint 5",
        content: "The modified answers are all a 1-letter change away from a 1-word television show. Look at the wrong letters and then the right letters."
      },
      {
        title: "Answer",
        content: "The answer to the puzzle is THE DEAN MARTIN SHOW. (The clue phrase is \"Program with Everybody / Loves Somebody as theme.\")"
      }
    ]
  },
  computer: {
    title: "Computer Lab",
    hints: [
      {
        title: "Hint 1",
        content: "Look at the pattern of symbols and letters. There's a systematic way they're arranged that relates to computer terminology."
      },
      {
        title: "Hint 2", 
        content: "The arrangement follows a specific computer-related ordering system. Think about how files or data might be organized."
      },
      {
        title: "Answer",
        content: "The answer relates to computer file systems and organization."
      }
    ]
  },
  fulfillment: {
    title: "Fulfillment Center",
    hints: [
      {
        title: "Hint 1",
        content: "This puzzle involves tracking and organizing items as they would be in a fulfillment center."
      },
      {
        title: "Hint 2",
        content: "Look for patterns in how items are categorized and shipped."
      },
      {
        title: "Answer", 
        content: "The answer relates to logistics and shipping operations."
      }
    ]
  },
  map: {
    title: "Map Room",
    hints: [
      {
        title: "Hint 1",
        content: "Geographic locations and their relationships are key to solving this puzzle."
      },
      {
        title: "Hint 2",
        content: "Look for patterns in how the locations are connected or related."
      },
      {
        title: "Answer",
        content: "The answer is a geographic or cartographic term."
      }
    ]
  },
  noah: {
    title: "Noah's Ark",
    hints: [
      {
        title: "Hint 1", 
        content: "This puzzle involves pairing and organization, much like the animals on Noah's Ark."
      },
      {
        title: "Hint 2",
        content: "Look for how items come in pairs or groups."
      },
      {
        title: "Answer",
        content: "The answer relates to biblical or animal pairing concepts."
      }
    ]
  },
  observatory: {
    title: "Observatory",
    hints: [
      {
        title: "Hint 1",
        content: "This puzzle involves astronomical observation and star patterns."
      },
      {
        title: "Hint 2", 
        content: "Look for celestial arrangements and how they might spell out information."
      },
      {
        title: "Answer",
        content: "The answer is an astronomical term or concept."
      }
    ]
  },
  restaurant: {
    title: "Restaurant", 
    hints: [
      {
        title: "Hint 1",
        content: "This puzzle involves menu items and restaurant operations."
      },
      {
        title: "Hint 2",
        content: "Look for patterns in how dishes are prepared or served."
      },
      {
        title: "Answer",
        content: "The answer relates to cooking or restaurant terminology."
      }
    ]
  },
  terrarium: {
    title: "Terrarium",
    hints: [
      {
        title: "Hint 1",
        content: "This puzzle involves plant life and ecosystems within enclosed environments."
      },
      {
        title: "Hint 2",
        content: "Look for how different elements interact within the terrarium environment."
      },
      {
        title: "Answer", 
        content: "The answer relates to botany or ecosystem management."
      }
    ]
  },
  menagerie: {
    title: "The Menagerie (Metapuzzle)",
    hints: [
      {
        title: "Hint 1",
        content: "Combine all eight answers from the individual puzzles. The order matters."
      },
      {
        title: "Hint 2",
        content: "Alphabetical order, no spaces between the answers, creates your final password."
      },
      {
        title: "Hint 3",
        content: "This meta-password unlocks the final challenge that leads to the Hall of Fame."
      },
      {
        title: "Answer",
        content: "Use the combined alphabetical answers as a password for the final meta challenge."
      }
    ]
  }
};

export default function HintsPage() {
  const { isAuthenticated } = useAuth();
  const [selectedPuzzle, setSelectedPuzzle] = useState<string | null>(null);
  const [visibleHints, setVisibleHints] = useState<Record<string, number>>({});

  if (!isAuthenticated) {
    return <PasswordGate />;
  }

  const showHints = (puzzleName: string) => {
    setSelectedPuzzle(puzzleName);
    setVisibleHints(prev => ({ ...prev, [puzzleName]: 1 }));
  };

  const showNextHint = (puzzleName: string) => {
    setVisibleHints(prev => ({
      ...prev,
      [puzzleName]: Math.min((prev[puzzleName] || 0) + 1, hintsData[puzzleName].hints.length)
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Hint Buttons */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
              <h1 className="text-4xl font-bold text-emerald-600 mb-6 font-montserrat">Puzzle Hints</h1>
              <p className="text-gray-600 mb-8 leading-relaxed">Click on any puzzle below to reveal progressive hints. Start with Hint 1 and work your way up if you need more help.</p>
              
              <div className="space-y-4">
                {Object.entries(hintsData).map(([key, data]) => (
                  <button
                    key={key}
                    onClick={() => showHints(key)}
                    className={`w-full text-left p-4 border rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] ${
                      key === 'menagerie' 
                        ? 'bg-gradient-to-r from-yellow-50 to-orange-100 hover:from-yellow-100 hover:to-orange-200 border-orange-200 text-orange-700'
                        : 'bg-gradient-to-r from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 border-emerald-200 text-emerald-700'
                    }`}
                  >
                    {key === 'menagerie' ? '🏆' : '🎯'} {data.title} Hints
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Hint Display */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
              {!selectedPuzzle ? (
                <>
                  <h2 className="text-2xl font-bold text-emerald-600 mb-6 font-montserrat">Select a Puzzle</h2>
                  <p className="text-gray-600">Choose a puzzle from the left to view its hints. Hints are provided progressively - start with Hint 1 and only move to the next hint if you need more help.</p>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="flex items-center">
                      <span className="text-blue-500 text-2xl mr-3">💡</span>
                      <div>
                        <h3 className="text-blue-800 font-semibold">Hint Strategy</h3>
                        <p className="text-blue-700 text-sm">Use hints sparingly to maintain the challenge, but don't hesitate to use them if you're truly stuck!</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-emerald-600 mb-6 font-montserrat">{hintsData[selectedPuzzle].title}</h2>
                  
                  <div className="space-y-4">
                    {hintsData[selectedPuzzle].hints.slice(0, visibleHints[selectedPuzzle] || 0).map((hint, index) => (
                      <div key={index} className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                        <h3 className="text-lg font-semibold text-emerald-800 mb-3">{hint.title}</h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{hint.content}</p>
                      </div>
                    ))}
                  </div>

                  {visibleHints[selectedPuzzle] < hintsData[selectedPuzzle].hints.length && (
                    <button
                      onClick={() => showNextHint(selectedPuzzle)}
                      className="mt-6 w-full p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Show Next Hint ({visibleHints[selectedPuzzle] + 1}/{hintsData[selectedPuzzle].hints.length})
                    </button>
                  )}

                  <button
                    onClick={() => setSelectedPuzzle(null)}
                    className="mt-4 w-full p-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-all duration-300"
                  >
                    ← Back to Puzzle List
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 