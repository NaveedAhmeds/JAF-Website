import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Truck } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Fleet", path: "/fleet" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:scale-105 transform transition-all duration-300">
            <div className="bg-blue-600 text-white p-2 rounded-lg shadow-lg">
              <Truck className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">JAF Logistics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 font-medium transition-colors duration-300 hover:scale-105 transform"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link to="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" className="block px-3 py-2" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
