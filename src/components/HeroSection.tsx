import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onCompareClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onCompareClick }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Trouvez la meilleure assurance auto
          <span className="text-blue-600"> en 3 minutes</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Comparez gratuitement les offres d'assurance auto en Côte d'Ivoire et économisez jusqu'à 40%
        </p>
        <button
          onClick={onCompareClick}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
        >
          Comparer les offres d'assurance auto
          <ArrowRight className="ml-2 h-5 w-5 inline" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
