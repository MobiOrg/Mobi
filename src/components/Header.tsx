
import { Car } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">NOLI Motor</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Assurance</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Connexion
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
