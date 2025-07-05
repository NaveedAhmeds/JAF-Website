
const StatsSection = () => {
  const stats = [
    { number: "15+", label: "Years of Experience", desc: "Serving corporate clients since 2009" },
    { number: "500+", label: "Fleet Size", desc: "Modern vehicles including EVs" },
    { number: "98%", label: "Client Satisfaction", desc: "Consistently high ratings" },
    { number: "24/7", label: "Support Available", desc: "Round-the-clock assistance" }
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 hover:text-orange-300 transition-colors duration-300">Trusted by Industry Leaders</h2>
          <p className="text-xl text-blue-100 hover:text-white transition-colors duration-300">Numbers that speak for our commitment to excellence</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center hover:scale-110 transform transition-all duration-300 hover:bg-white/10 rounded-lg p-4 cursor-pointer">
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2 hover:text-orange-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1 hover:text-orange-200 transition-colors duration-300">{stat.label}</div>
              <div className="text-sm text-blue-200 hover:text-white transition-colors duration-300">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
