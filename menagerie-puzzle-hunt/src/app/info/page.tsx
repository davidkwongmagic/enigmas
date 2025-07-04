'use client';

import { useAuth } from '../context/AuthContext';
import PasswordGate from '../components/PasswordGate';
import Header from '../components/Header';

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
        </div>
      </main>
    </div>
  );
} 