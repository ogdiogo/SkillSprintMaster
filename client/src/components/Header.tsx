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
        <div className="flex justify-center py-6">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-md bg-gradient-gold flex items-center justify-center text-white font-bold text-2xl shadow-md">
              FB
            </div>
            <span className="mt-3 font-bold text-3xl text-white">FinanceBanco</span>
          </div>
        </div>
        
        {/* Desktop Navigation - Centered below logo */}
        <nav className="hidden md:flex justify-center py-3 border-t border-amber-700/30">
          <div className="flex space-x-16">
            <Link href="/" className={`font-medium uppercase tracking-wider ${isActive('/') ? 'text-amber-500 font-semibold' : 'text-white hover:text-amber-300'}`}>
              Home
            </Link>
            <Link href="/about" className={`font-medium uppercase tracking-wider ${isActive('/about') ? 'text-amber-500 font-semibold' : 'text-white hover:text-amber-300'}`}>
              Sobre Nós
            </Link>
            <Link href="/banking-privacy" className={`font-medium uppercase tracking-wider ${isActive('/banking-privacy') ? 'text-amber-500 font-semibold' : 'text-white hover:text-amber-300'}`}>
              Sigilo Bancário
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
            className={`block px-3 py-2 text-base font-medium text-center ${
              isActive('/') 
                ? 'text-amber-500 font-semibold' 
                : 'text-white hover:text-amber-300'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`block px-3 py-2 text-base font-medium text-center ${
              isActive('/about') 
                ? 'text-amber-500 font-semibold' 
                : 'text-white hover:text-amber-300'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nós
          </Link>
          <Link 
            href="/banking-privacy" 
            className={`block px-3 py-2 text-base font-medium text-center ${
              isActive('/banking-privacy') 
                ? 'text-amber-500 font-semibold' 
                : 'text-white hover:text-amber-300'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Sigilo Bancário
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
