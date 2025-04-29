import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
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
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold text-xl">
                SB
              </div>
              <span className="ml-2 font-bold text-xl text-gray-800">SkillBite</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className={`font-medium ${isActive('/') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className={`font-medium ${isActive('/about') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                Sobre Nós
              </a>
            </Link>
            <Link href="/banking-privacy">
              <a className={`font-medium ${isActive('/banking-privacy') ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
                Sigilo Bancário
              </a>
            </Link>
            <Button className="bg-primary hover:bg-blue-600 text-white">
              Log In
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t border-gray-200 ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/">
            <a 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'text-primary bg-blue-50' 
                  : 'text-gray-600 hover:text-primary hover:bg-blue-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </Link>
          <Link href="/about">
            <a 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') 
                  ? 'text-primary bg-blue-50' 
                  : 'text-gray-600 hover:text-primary hover:bg-blue-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </a>
          </Link>
          <Link href="/banking-privacy">
            <a 
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/banking-privacy') 
                  ? 'text-primary bg-blue-50' 
                  : 'text-gray-600 hover:text-primary hover:bg-blue-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sigilo Bancário
            </a>
          </Link>
          <a 
            href="#" 
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-blue-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Log In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
