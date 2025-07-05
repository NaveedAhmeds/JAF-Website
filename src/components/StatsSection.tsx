
import { CountingNumber } from './CountingNumber';
import { TrendingUp, Users, Clock, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { 
      number: 15, 
      suffix: "+",
      label: "Years of Experience", 
      desc: "Serving corporate clients since 2009",
      icon: Clock,
      color: "text-blue-400"
    },
    { 
      number: 500, 
      suffix: "+",
      label: "Fleet Size", 
      desc: "Modern vehicles including EVs",
      icon: TrendingUp,
      color: "text-green-400"
    },
    { 
      number: 98, 
      suffix: "%",
      label: "Client Satisfaction", 
      desc: "Consistently high ratings",
      icon: Award,
      color: "text-yellow-400"
    },
    { 
      number: 24, 
      suffix: "/7",
      label: "Support Available", 
      desc: "Round-the-clock assistance",
      icon: Users,
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-16 bg-blue-900 dark:bg-gray-900 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 hover:text-orange-300 transition-colors duration-300">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-blue-100 dark:text-gray-300 hover:text-white transition-colors duration-300">
            Numbers that speak for our commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center hover:scale-110 transform transition-all duration-500 hover:bg-white/10 dark:hover:bg-gray-800/50 rounded-lg p-6 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-white/10 dark:bg-gray-800/50 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${stat.color} group-hover:animate-pulse`} />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2 hover:text-orange-400 transition-colors duration-300">
                  <CountingNumber end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-semibold mb-1 hover:text-orange-200 transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200 dark:text-gray-400 hover:text-white transition-colors duration-300">
                  {stat.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
