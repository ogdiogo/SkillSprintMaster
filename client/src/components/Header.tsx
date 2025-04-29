import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-gradient-banking text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo centered */}
        <div className="flex justify-center py-8">
          <div className="relative w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center text-white font-bold text-2xl shadow-lg border-4 border-amber-700/30">
            <div className="absolute inset-0 rounded-full border-2 border-white/30"></div>
            <div className="absolute -inset-1 rounded-full border border-amber-500/30"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </div>
        </div>
        
        {/* Desktop Navigation - Centered below logo */}
        <nav className="hidden md:flex justify-center py-3 border-t border-amber-700/30">
          <div className="flex space-x-16">
            <Link href="/" className={`nav-link text-sm font-medium uppercase tracking-wider ${isActive('/') ? 'text-amber-500 font-semibold' : 'text-white hover:text-amber-300'}`}>
              Home
            </Link>
            <Link href="/banking-privacy" className={`nav-link text-sm font-medium uppercase tracking-wider ${isActive('/banking-privacy') ? 'text-amber-500 font-semibold' : 'text-white hover:text-amber-300'}`}>
              Sigilo Bancário
            </Link>
            <Link href="/about" className={`nav-link text-sm font-medium uppercase tracking-wider ${isActive('/about') ? 'text-amber-500 font-semibold' : 'text-white hover:text-amber-300'}`}>
              Sobre Nós
            </Link>
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end py-3">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md text-white hover:text-amber-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-blue-950 border-t border-amber-700/30 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 py-3 space-y-2">
          <Link 
            href="/" 
            className={`nav-link block px-3 py-2 text-base font-medium text-center uppercase ${
              isActive('/') 
                ? 'text-amber-500 font-semibold' 
                : 'text-white hover:text-amber-300'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/banking-privacy" 
            className={`nav-link block px-3 py-2 text-base font-medium text-center uppercase ${
              isActive('/banking-privacy') 
                ? 'text-amber-500 font-semibold' 
                : 'text-white hover:text-amber-300'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Sigilo Bancário
          </Link>
          <Link 
            href="/about" 
            className={`nav-link block px-3 py-2 text-base font-medium text-center uppercase ${
              isActive('/about') 
                ? 'text-amber-500 font-semibold' 
                : 'text-white hover:text-amber-300'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nós
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
