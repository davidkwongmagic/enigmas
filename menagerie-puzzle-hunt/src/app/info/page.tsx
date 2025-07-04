'use client';

import { useAuth } from '../context/AuthContext';
import PasswordGate from '../components/PasswordGate';
import Header from '../components/Header';
import Link from 'next/link';

export default function InfoPage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <PasswordGate />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 transform hover:scale-[1.01] transition-transform duration-300">
          <h1 className="text-4xl lg:text-5xl font-bold text-emerald-600 mb-8 font-montserrat text-center">Info & Errata</h1>
          
          {/* Credits Section */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-12">
            <p className="text-lg">
              Heartfelt thanks go to everyone who helped make this hunt a reality and (I hope!) a fun challenge to everyone who attempts it. This includes, though is not limited to: David Kwong, who conceived the idea and trusted me to write a whole hunt for it (and then playtested it); Chris Chelko, our knowledgeable producing partner on the entire project; Billy French, whose artwork and web design helped the Hunt pop off the page; Patrick Roche, for his additional tireless assistance with the website; and our testsolvers: David Arnott, Stephanie Kelleher Bennett, Mark Halpin, Elissa Grossman, Emily Jillette, Craig Mazin, Melissa Mazin, and Sandor Weisz, all of whom provided essential commentary, insight, and reality checks to make the hunt much better than it was before things were put in their hands.
            </p>
            <div className="text-right">
              <p className="italic text-gray-600 font-medium">-Dave Shukan</p>
            </div>
          </div>

          {/* Decorative Separator */}
          <div className="flex items-center justify-center my-12">
            <div className="flex space-x-4 text-3xl text-gray-400">
              <span>⭐</span>
              <span>⭐</span>
              <span>⭐</span>
            </div>
          </div>

          {/* Errata Section */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
            <h2 className="text-3xl font-bold text-orange-700 mb-6 font-montserrat flex items-center">
              <span className="mr-3">📋</span>
              Errata
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/80 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Computer Lab</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Computer Lab puzzle was clarified after initial release. The hint system now provides additional guidance for solvers who need it.
                </p>
              </div>
              
              <div className="bg-white/80 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Meta Puzzle</h3>
                <p className="text-gray-700 leading-relaxed">
                  Some solvers experienced difficulty with the final meta puzzle. Additional hints have been added to provide clearer guidance on the solving path.
                </p>
              </div>
              
              <div className="bg-white/80 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">General Notes</h3>
                <p className="text-gray-700 leading-relaxed">
                  All puzzles have been tested and verified to have unique solutions. If you encounter any issues, please don't hesitate to use the hint system or contact the puzzle creators.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl p-8 border border-emerald-200">
            <h2 className="text-2xl font-bold text-emerald-700 mb-4 font-montserrat flex items-center">
              <span className="mr-3">📧</span>
              Need Help?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you encounter any issues with the puzzles or have questions about the hunt, feel free to reach out to us at 
              <a href="mailto:info@davidkwongmagic.com" className="text-emerald-600 hover:text-emerald-700 font-medium underline"> info@davidkwongmagic.com</a> 
              or 
              <a href="mailto:dshukan@gmail.com" className="text-emerald-600 hover:text-emerald-700 font-medium underline"> dshukan@gmail.com</a>.
            </p>
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
            
            <Link href="/hall-of-fame" className="block p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border border-yellow-200 hover:from-yellow-100 hover:to-yellow-200 transition-all duration-300 transform hover:scale-105">
              <div className="text-center">
                <span className="text-3xl text-yellow-600 block mb-2">🏆</span>
                <h3 className="text-lg font-semibold text-yellow-800">Hall of Fame</h3>
                <p className="text-yellow-600 text-sm">See successful solvers</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 