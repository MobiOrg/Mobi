import React from 'react';
import { X } from 'lucide-react';

interface QuoteFormProps {
  currentStep: number;
  formData: any;
  onInputChange: (field: string, value: string) => void;
  onOptionToggle: (option: string) => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onResetForm: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({
  currentStep,
  formData,
  onInputChange,
  onOptionToggle,
  onNextStep,
  onPrevStep,
  onResetForm
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: string) => {
    onInputChange(field, e.target.value);
  };

  const handleOptionToggle = (option: string) => {
    onOptionToggle(option);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Obtenir un devis personnalisé</h2>
          <button
            onClick={onResetForm}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Étape {currentStep} sur 3</span>
            <span>{Math.round((currentStep / 3) * 100)}% complété</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>
        {/* Step 1: Profil Conducteur */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profil Conducteur</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Âge</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange(e, 'age')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 30"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Années de permis</label>
                <input
                  type="number"
                  value={formData.licenseYears}
                  onChange={(e) => handleInputChange(e, 'licenseYears')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 5"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sinistres dans les 3 dernières années</label>
              <select
                value={formData.accidents}
                onChange={(e) => handleInputChange(e, 'accidents')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionner</option>
                <option value="0">Aucun sinistre</option>
                <option value="1">1 sinistre</option>
                <option value="2">2 sinistres</option>
                <option value="3+">3 sinistres ou plus</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Usage du véhicule</label>
              <select
                value={formData.usage}
                onChange={(e) => handleInputChange(e, 'usage')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionner</option>
                <option value="personnel">Personnel</option>
                <option value="professionnel">Professionnel</option>
                <option value="mixte">Mixte</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kilométrage annuel</label>
              <select
                value={formData.annualKm}
                onChange={(e) => handleInputChange(e, 'annualKm')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionner</option>
                <option value="0-10000">0 - 10 000 km</option>
                <option value="10000-20000">10 000 - 20 000 km</option>
                <option value="20000-30000">20 000 - 30 000 km</option>
                <option value="30000+">Plus de 30 000 km</option>
              </select>
            </div>
          </div>
        )}
        {/* Step 2: Véhicule */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations Véhicule</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Valeur du véhicule (FCFA)</label>
                <input
                  type="number"
                  value={formData.vehicleValue}
                  onChange={(e) => handleInputChange(e, 'vehicleValue')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ex: 5000000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de places</label>
                <select
                  value={formData.seats}
                  onChange={(e) => handleInputChange(e, 'seats')}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Sélectionner</option>
                  <option value="2">2 places</option>
                  <option value="4">4 places</option>
                  <option value="5">5 places</option>
                  <option value="7">7 places</option>
                  <option value="9+">9 places ou plus</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type d'énergie</label>
              <select
                value={formData.energy}
                onChange={(e) => handleInputChange(e, 'energy')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionner</option>
                <option value="essence">Essence</option>
                <option value="diesel">Diesel</option>
                <option value="hybride">Hybride</option>
                <option value="electrique">Électrique</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date d'immatriculation</label>
              <input
                type="date"
                value={formData.registrationDate}
                onChange={(e) => handleInputChange(e, 'registrationDate')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        )}
        {/* Step 3: Besoins d'assurance */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Besoins d'assurance</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type de couverture</label>
              <select
                value={formData.coverage}
                onChange={(e) => handleInputChange(e, 'coverage')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionner</option>
                <option value="tiers">Responsabilité civile (Tiers)</option>
                <option value="tiers-etendu">Tiers étendu</option>
                <option value="tous-risques">Tous risques</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Franchise souhaitée (FCFA)</label>
              <select
                value={formData.deductible}
                onChange={(e) => handleInputChange(e, 'deductible')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Sélectionner</option>
                <option value="0">Sans franchise</option>
                <option value="25000">25 000 FCFA</option>
                <option value="50000">50 000 FCFA</option>
                <option value="100000">100 000 FCFA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Options souhaitées</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Assistance 24h/24', 'Véhicule de remplacement', 'Bris de glace', 'Vol/Incendie', 'Protection juridique'].map((option) => (
                  <label key={option} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.options.includes(option)}
                      onChange={() => handleOptionToggle(option)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}
        {/* Navigation Buttons */}
        <div className="flex justify-between pt-8">
          <button
            onClick={onPrevStep}
            disabled={currentStep === 1}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Précédent
          </button>
          <button
            onClick={onNextStep}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {currentStep === 3 ? 'Comparer les offres' : 'Suivant'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
