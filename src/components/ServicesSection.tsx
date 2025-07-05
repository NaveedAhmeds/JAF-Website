
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Employee Transportation",
      description: "Reliable daily commute solutions for your workforce with our trained drivers and well-maintained fleet.",
      icon: "🚐",
      features: ["Door-to-door pickup", "Real-time tracking", "Safety protocols"]
    },
    {
      title: "Car Rentals",
      description: "Flexible short-term and long-term car rental solutions for corporate executives and business needs.",
      icon: "🚗",
      features: ["Self-drive options", "Chauffeur services", "Premium vehicles"]
    },
    {
      title: "Event Transport",
      description: "Seamless transportation coordination for corporate events, conferences, and special occasions.",
      icon: "🎉",
      features: ["Group transportation", "Event coordination", "VIP services"]
    },
    {
      title: "Airport Transfers",
      description: "Professional airport pickup and drop services ensuring punctual and comfortable travel.",
      icon: "✈️",
      features: ["Flight tracking", "Meet & greet", "Luxury vehicles"]
    },
    {
      title: "Fleet Management",
      description: "Comprehensive fleet management services including maintenance, compliance, and optimization.",
      icon: "⚙️",
      features: ["Maintenance scheduling", "Compliance audits", "Cost optimization"]
    },
    {
      title: "Long Term Rentals",
      description: "Cost-effective long-term vehicle rental solutions with flexible terms and conditions.",
      icon: "📅",
      features: ["Flexible contracts", "Maintenance included", "Driver training"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-500">7 Business Lines</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive transportation solutions tailored for corporate excellence and reliability
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
