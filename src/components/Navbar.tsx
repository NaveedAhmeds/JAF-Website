
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Fleet", path: "/fleet" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center hover:scale-105 transform transition-all duration-300">
            <div className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition-colors duration-300">
              JAF <span className="text-orange-500 hover:text-orange-400 transition-colors duration-300">Logistics</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-gray-700 hover:text-blue-900 transition-all duration-300 font-medium hover:scale-110 transform ${
                  location.pathname === link.path ? "text-blue-900 border-b-2 border-orange-500" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900 transition-colors hover:scale-110 transform duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 text-gray-700 hover:text-blue-900 transition-all duration-300 font-medium hover:translate-x-2 transform ${
                    location.pathname === link.path ? "text-blue-900 bg-blue-50" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link to="/contact">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white hover:scale-105 transform transition-all duration-300">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
