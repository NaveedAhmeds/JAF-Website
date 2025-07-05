
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      title: "Reliability",
      description: "Consistent, dependable service that corporate clients can count on, rain or shine.",
      icon: "🛡️"
    },
    {
      title: "Safety First",
      description: "Comprehensive driver training, vehicle maintenance, and safety protocols.",
      icon: "🦺"
    },
    {
      title: "Innovation",
      description: "Embracing eco-friendly vehicles and modern technology for better service.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "Continuous improvement and quality assurance in every aspect of our service.",
      icon: "⭐"
    }
  ];

  const advantages = [
    "Low attrition rates ensuring consistent service quality",
    "24/7 crisis management and support system",
    "Strict compliance with safety and regulatory standards", 
    "Comprehensive driver training and verification programs",
    "Proactive maintenance and fleet management",
    "Real-time tracking and monitoring systems"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-orange-500">JAF Logistics</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
              15+ years of excellence in corporate transportation, serving Fortune 500 
              companies with unmatched reliability and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey Since 2009</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2009, JAF Logistics began with a simple mission: to provide reliable, 
                professional transportation solutions for India's growing corporate sector. What started 
                as a small fleet has grown into a comprehensive logistics powerhouse.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over the years, we've weathered every crisis - from monsoon floods to bandh situations, 
                diesel shortages to pandemic challenges. Each obstacle has made us stronger and more 
                resilient, earning the trust of hundreds of corporate clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we operate a modern fleet of 500+ vehicles, including eco-friendly electric 
                vehicles, serving clients across multiple cities with our signature blend of 
                reliability, safety, and innovation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Milestones</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">2009</div>
                    <div className="text-gray-700">Company founded with 10 vehicles</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">2015</div>
                    <div className="text-gray-700">Expanded to 100+ vehicles, multiple cities</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">2020</div>
                    <div className="text-gray-700">Introduced electric vehicles to fleet</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mt-1 mr-4 flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-gray-900">2024</div>
                    <div className="text-gray-700">500+ vehicles, 200+ corporate clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-orange-500">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Sets Us <span className="text-orange-500">Apart</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our competitive advantages have been built over 15 years of dedicated service 
                to the corporate sector, focusing on reliability, safety, and operational excellence.
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Crisis Management Excellence</h3>
              <p className="text-gray-700 mb-6">
                Our proven track record includes successfully managing transportation during:
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Mumbai floods (2017, 2019)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>State-wide bandh situations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Diesel crisis periods</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>COVID-19 pandemic challenges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Leadership <span className="text-orange-500">Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals leading JAF Logistics to new heights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Agarwal", position: "Founder & CEO", experience: "20+ years in logistics" },
              { name: "Priya Mehta", position: "COO", experience: "15+ years in operations" },
              { name: "Amit Singh", position: "Head of Fleet", experience: "12+ years in fleet management" }
            ].map((leader, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-orange-500 font-semibold mb-2">{leader.position}</p>
                  <p className="text-gray-600">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
