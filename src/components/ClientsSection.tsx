
const ClientsSection = () => {
  const clients = [
    "TCS", "Infosys", "Wipro", "HCL Technologies", "Tech Mahindra",
    "Accenture", "IBM India", "Microsoft India", "Amazon India", "Flipkart",
    "HDFC Bank", "ICICI Bank"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-orange-500">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600">
            Serving Fortune 500 companies and leading enterprises across India
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-20 flex items-center justify-center">
                <span className="text-gray-700 font-semibold text-sm">{client}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Join <span className="font-bold text-orange-500">500+</span> satisfied corporate clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
