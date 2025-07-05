
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight hover:text-orange-300 transition-colors duration-500">
              Reliable Corporate 
              <span className="text-orange-500 hover:text-orange-400 transition-colors duration-300"> Transportation</span>,
              <br />Powered by Experience
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed hover:text-white transition-colors duration-300">
              15+ years of trusted service delivering end-to-end logistics solutions 
              to Fortune 500 companies across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse">
                  Get Your Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-black bg-white border-white hover:bg-gray-100 hover:text-black font-semibold px-8 py-4 text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 hover:scale-105 transform">
              <h3 className="text-2xl font-bold mb-6 hover:text-orange-300 transition-colors duration-300">Why Choose JAF Logistics?</h3>
              <div className="space-y-4">
                <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4 hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-lg hover:text-orange-200 transition-colors duration-300">24/7 Crisis Management Support</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4 hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-lg hover:text-orange-200 transition-colors duration-300">Low Attrition, High Reliability</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4 hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-lg hover:text-orange-200 transition-colors duration-300">Eco-Friendly Electric Fleet</span>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4 hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-lg hover:text-orange-200 transition-colors duration-300">Strict Compliance & Training</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
