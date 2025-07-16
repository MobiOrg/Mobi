import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

interface Quote {
  id: number;
  insurer: string;
  logo: string;
  price: number;
  coverage: string;
  deductible: number;
  options: string[];
  rating: number;
  details: string;
}

interface ResultsProps {
  quotes: Quote[];
  onResetForm: () => void;
  onDownloadQuote: (quote: Quote) => void;
}

const Results: React.FC<ResultsProps> = ({ quotes, onResetForm, onDownloadQuote }) => {
  const [filters, setFilters] = useState({
    insurer: '',
    coverage: '',
    maxPrice: ''
  });
  const [expandedQuote, setExpandedQuote] = useState<number | null>(null);

  const filteredQuotes = quotes.filter(quote => {
    return (!filters.insurer || quote.insurer.toLowerCase().includes(filters.insurer.toLowerCase())) &&
           (!filters.coverage || quote.coverage === filters.coverage) &&
           (!filters.maxPrice || quote.price <= parseInt(filters.maxPrice));
  });

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Résultats de comparaison</h2>
            <button
              onClick={onResetForm}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          {/* Filters */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <h3 className="font-medium text-gray-900">Filtres</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assureur</label>
                <input
                  type="text"
                  value={filters.insurer}
                  onChange={(e) => setFilters({...filters, insurer: e.target.value})}
                  placeholder="Rechercher un assureur..."
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Couverture</label>
                <select
                  value={filters.coverage}
                  onChange={(e) => setFilters({...filters, coverage: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Toutes</option>
                  <option value="Tiers étendu">Tiers étendu</option>
                  <option value="Tous risques">Tous risques</option>
                  <option value="Tous risques Premium">Tous risques Premium</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prix maximum (FCFA)</label>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                  placeholder="Ex: 100000"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
          {/* Quotes List */}
          <div className="space-y-4">
            {filteredQuotes.map((quote) => (
              <div key={quote.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{quote.logo}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{quote.insurer}</h3>
                      <p className="text-sm text-gray-600">{quote.coverage}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(quote.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                            ⭐
                          </span>
                        ))}
                        <span className="text-sm text-gray-600 ml-2">{quote.rating}/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{quote.price.toLocaleString()} FCFA</div>
                    <div className="text-sm text-gray-600">Franchise: {quote.deductible.toLocaleString()} FCFA</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {quote.options.map((option, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {option}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setExpandedQuote(expandedQuote === quote.id ? null : quote.id)}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    {expandedQuote === quote.id ? (
                      <>Masquer les détails <ChevronUp className="ml-1 h-4 w-4" /></>
                    ) : (
                      <>Voir les détails <ChevronDown className="ml-1 h-4 w-4" /></>
                    )}
                  </button>
                  <div className="space-x-2">
                    <button
                      onClick={() => onDownloadQuote(quote)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      Choisir cette couverture
                    </button>
                  </div>
                </div>
                {expandedQuote === quote.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 mb-3">{quote.details}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Garanties incluses:</h4>
                        <ul className="space-y-1">
                          {quote.options.map((option, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-gray-700">{option}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">Informations tarifaires:</h4>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Prime annuelle:</span>
                            <span className="font-medium">{quote.price.toLocaleString()} FCFA</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Franchise:</span>
                            <span className="font-medium">{quote.deductible.toLocaleString()} FCFA</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Note:</span>
                            <span className="font-medium">{quote.rating}/5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {filteredQuotes.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">Aucune offre ne correspond à vos critères de recherche.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
