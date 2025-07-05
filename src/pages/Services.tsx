
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Employee Transportation",
      description: "Comprehensive daily commute solutions designed for corporate workforces with emphasis on safety, punctuality, and comfort.",
      icon: "🚐",
      features: ["Door-to-door pickup and drop", "Real-time GPS tracking", "Trained and verified drivers", "Route optimization", "24/7 monitoring", "Emergency support"],
      benefits: ["Reduced employee stress", "Improved punctuality", "Cost-effective solution", "Enhanced safety"]
    },
    {
      title: "Car Rentals",
      description: "Flexible short-term rental solutions for corporate executives, business meetings, and temporary transportation needs.",
      icon: "🚗",
      features: ["Self-drive and chauffeur options", "Premium vehicle selection", "Hourly/daily/weekly rates", "Fuel included packages", "Insurance coverage", "24/7 roadside assistance"],
      benefits: ["Flexibility and convenience", "Professional image", "No maintenance hassles", "Cost transparency"]
    },
    {
      title: "Long Term Rentals",
      description: "Cost-effective long-term vehicle solutions with flexible contracts tailored for extended corporate requirements.",
      icon: "📅",
      features: ["Flexible contract terms", "Maintenance included", "Replacement vehicles", "Driver training programs", "Compliance management", "Regular audits"],
      benefits: ["Predictable costs", "Reduced overhead", "Professional management", "Scalable solution"]
    },
    {
      title: "Event Transport",
      description: "Seamless transportation coordination for corporate events, conferences, seminars, and special occasions of any scale.",
      icon: "🎉",
      features: ["Group transportation coordination", "VIP and executive services", "Event logistics planning", "Multiple vehicle types", "Professional coordinators", "Real-time updates"],
      benefits: ["Stress-free event management", "Professional coordination", "Seamless logistics", "Enhanced attendee experience"]
    },
    {
      title: "Airport Transfers",
      description: "Professional airport pickup and drop services ensuring punctual, comfortable, and hassle-free travel experience.",
      icon: "✈️",
      features: ["Flight tracking and monitoring", "Meet and greet services", "Luxury vehicle options", "Professional chauffeurs", "Luggage assistance", "Multiple city coverage"],
      benefits: ["Punctual service", "Stress-free travel", "Professional image", "Comfort and luxury"]
    },
    {
      title: "Fleet Management",
      description: "Comprehensive end-to-end fleet management services including maintenance, compliance, optimization, and reporting.",
      icon: "⚙️",
      features: ["Preventive maintenance scheduling", "Compliance audit and management", "Cost optimization analysis", "Performance reporting", "Driver management", "Technology integration"],
      benefits: ["Reduced operational costs", "Improved efficiency", "Compliance assurance", "Data-driven insights"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-orange-500">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive transportation solutions designed for corporate excellence, 
              backed by 15+ years of industry expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardHeader className="pb-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                      Request Quote for {service.title}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-orange-500">JAF Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              Excellence in every aspect of corporate transportation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customized Solutions</h3>
              <p className="text-gray-600">
                Tailored services designed to meet specific corporate requirements and budget constraints.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety & Compliance</h3>
              <p className="text-gray-600">
                Strict adherence to safety protocols, regulatory compliance, and continuous monitoring.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Integration</h3>
              <p className="text-gray-600">
                Advanced tracking systems, mobile apps, and real-time monitoring for complete transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Corporate Transportation?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a customized quote for your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Get Detailed Quote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
