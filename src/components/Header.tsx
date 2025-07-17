
import { Car } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        
          <div className="header-logo">
            <Car className="car-icon" />
            <span className="brand">NOLI Motor</span>
          </div>
          <nav className="header-nav">
            <Link to="/assurance" className="nav-link">Assurance</Link>
            <Link to="/about" className="nav-link">À propos</Link>
            <Link to="/faq" className="nav-link">FAQ</Link>
           
          </nav>
          <form className="header-search" onSubmit={e => e.preventDefault()}>
            <input type="text" className="header-search-input" placeholder="Rechercher..." />
            <button type="submit" className="header-search-btn">🔍</button>
          </form>
        </div>
      
    </header>
  );
};



export default Header;