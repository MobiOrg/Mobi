
import { Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">NOLI Motor</span>
            </div>
            <p className="text-gray-400">
              Votre comparateur d'assurance auto de confiance en Côte d'Ivoire.
              Trouvez la meilleure protection pour votre véhicule.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Assurance Auto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Assurance Moto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Assurance Habitation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Assurance Santé</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>📍 Abidjan, Côte d'Ivoire</p>
              <p>📞 +225 XX XX XX XX XX</p>
              <p>✉️ contact@nolimotor.ci</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NOLI Motor. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
