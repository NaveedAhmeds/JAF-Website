
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Fleet = () => {
  const vehicles = [
    {
      name: "Tata Tigor EV",
      type: "Electric Sedan",
      category: "Executive",
      seating: "4 passengers",
      features: ["Zero emissions", "AC", "GPS tracking", "Professional driver"],
      image: "Electric vehicle icon",
      eco: true
    },
    {
      name: "Toyota Innova Crysta",
      type: "Premium MPV",
      category: "Group Travel",
      seating: "7-8 passengers",
      features: ["Spacious interiors", "Premium comfort", "Luggage space", "AC"],
      image: "SUV icon",
      eco: false
    },
    {
      name: "Maruti Dzire",
      type: "Compact Sedan",
      category: "Economy",
      seating: "4 passengers",
      features: ["Fuel efficient", "Comfortable", "City-friendly", "AC"],
      image: "Sedan icon",
      eco: false
    },
    {
      name: "Mahindra Bolero",
      type: "Utility Vehicle",
      category: "Workhorse",
      seating: "8-9 passengers",
      features: ["Rugged design", "High ground clearance", "Reliable", "AC"],
      image: "Utility vehicle icon",
      eco: false
    },
    {
      name: "Tempo Traveller",
      type: "Mini Bus",
      category: "Group Transport",
      seating: "12-17 passengers",
      features: ["Group travel", "Luggage space", "Comfortable seating", "AC"],
      image: "Bus icon",
      eco: false
    },
    {
      name: "Bus (35-50 seater)",
      type: "Luxury Coach",
      category: "Mass Transport",
      seating: "35-50 passengers",
      features: ["Mass transport", "Reclining seats", "Entertainment", "AC"],
      image: "Coach icon",
      eco: false
    }
  ];

  const safetyFeatures = [
    "GPS tracking and real-time monitoring",
    "Professional driver training programs",
    "Regular vehicle maintenance schedules",
    "Safety equipment and first aid kits",
    "Insurance coverage for all vehicles",
    "24/7 emergency support system",
    "Speed governors and safety protocols",
    "Vehicle inspection and compliance audits"
  ];

  const maintenanceProcess = [
    {
      step: "Preventive Maintenance",
      description: "Regular scheduled maintenance to prevent breakdowns and ensure optimal performance."
    },
    {
      step: "Quality Inspections",
      description: "Thorough inspections of all vehicle systems, safety equipment, and documentation."
    },
    {
      step: "Driver Training",
      description: "Continuous training programs focusing on safety, customer service, and professionalism."
    },
    {
      step: "Compliance Audits",
      description: "Regular audits to ensure adherence to transportation regulations and safety standards."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-orange-500">Fleet</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              Modern, well-maintained vehicles designed for comfort, safety, and reliability. 
              From eco-friendly electric cars to luxury coaches for group travel.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Total Vehicles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Electric Vehicles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Vehicle Types</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Maintenance Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Vehicle <span className="text-orange-500">Categories</span>
            </h2>
            <p className="text-xl text-gray-600">
              Diverse fleet options to meet every corporate transportation need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                        {vehicle.name}
                      </CardTitle>
                      <p className="text-gray-600">{vehicle.type}</p>
                    </div>
                    {vehicle.eco && (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        🌱 Eco-Friendly
                      </Badge>
                    )}
                  </div>
                  <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">🚗</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Category:</span>
                      <Badge variant="outline">{vehicle.category}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700">Seating:</span>
                      <span className="text-gray-600">{vehicle.seating}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {vehicle.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Safety <span className="text-orange-500">First</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Safety is our top priority. Every vehicle in our fleet is equipped with 
                comprehensive safety features and undergoes regular inspections to ensure 
                the highest standards of passenger security.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Driver Excellence Program</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Training & Certification</h4>
                  <p className="text-gray-600 text-sm">Comprehensive training programs covering safety, customer service, and professional conduct.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Background Verification</h4>
                  <p className="text-gray-600 text-sm">Thorough background checks and character verification for all drivers.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Continuous Monitoring</h4>
                  <p className="text-gray-600 text-sm">Regular performance reviews and feedback systems to maintain high standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Maintenance <span className="text-orange-500">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600">
              Rigorous maintenance processes ensuring optimal vehicle performance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceProcess.map((process, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-500">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {process.step}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Environmental <span className="text-green-600">Commitment</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Leading the way towards sustainable corporate transportation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Electric Fleet</h3>
              <p className="text-gray-600">
                50+ electric vehicles in our fleet, reducing carbon emissions and promoting clean transportation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eco-Friendly Practices</h3>
              <p className="text-gray-600">
                Sustainable practices in vehicle maintenance, route optimization, and waste management.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Carbon Footprint</h3>
              <p className="text-gray-600">
                Continuous monitoring and reduction of carbon footprint through technology and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
