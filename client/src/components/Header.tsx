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
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo centered */}
        <div className="flex justify-center py-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center text-white font-bold text-xl">
              FB
            </div>
            <span className="ml-2 font-bold text-2xl text-gray-800">FinanceBanco</span>
          </div>
        </div>
        
        {/* Desktop Navigation - Centered below logo */}
        <nav className="hidden md:flex justify-center py-3 border-t border-gray-200">
          <div className="flex space-x-12">
            <Link href="/">
              <a className={`font-medium uppercase tracking-wider ${isActive('/') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}>
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className={`font-medium uppercase tracking-wider ${isActive('/about') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}>
                Sobre Nós
              </a>
            </Link>
            <Link href="/banking-privacy">
              <a className={`font-medium uppercase tracking-wider ${isActive('/banking-privacy') ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}>
                Sigilo Bancário
              </a>
            </Link>
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-end py-3">
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
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
      <div className={`md:hidden bg-white border-t border-gray-200 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 py-3 space-y-2">
          <Link href="/">
            <a 
              className={`block px-3 py-2 text-base font-medium text-center ${
                isActive('/') 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-700 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a 
              className={`block px-3 py-2 text-base font-medium text-center ${
                isActive('/about') 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-700 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </a>
          </Link>
          <Link href="/banking-privacy">
            <a 
              className={`block px-3 py-2 text-base font-medium text-center ${
                isActive('/banking-privacy') 
                  ? 'text-primary font-semibold' 
                  : 'text-gray-700 hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sigilo Bancário
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
