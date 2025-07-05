const ClientsSection = () => {
	const clients = [
		"TCS",
		"Infosys",
		"Wipro",
		"HCL Technologies",
		"Tech Mahindra",
		"Accenture",
		"IBM India",
		"Microsoft India",
		"Amazon India",
		"Flipkart",
		"HDFC Bank",
		"ICICI Bank",
	];

	return (
		<section className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors duration-500">
			{/* Dotted pattern overlay */}
			<div
				aria-hidden="true"
				className="absolute inset-0 pointer-events-none bg-dots-light dark:bg-dots-dark"
				style={{ opacity: 0.1 }}
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
						Trusted by <span className="text-orange-500">Industry Leaders</span>
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-400">
						Serving Fortune 50 companies and leading enterprises across
						Hyderabad
					</p>
				</div>

				{/* Belt scrolling container */}
				<div className="overflow-hidden whitespace-nowrap">
					<div
						className="inline-flex animate-marquee space-x-20" // More space horizontally
						aria-label="Scrolling list of trusted clients"
					>
						{clients.concat(clients).map((client, index) => (
							<div
								key={index}
								className="bg-black/20 backdrop-blur-lg border border-black/30 rounded-lg px-12 py-8 shadow-lg flex items-center justify-center
          animate-pulse-slow hover:animate-none hover:scale-110 hover:shadow-orange-400 hover:border-orange-400 transition-transform transition-shadow duration-300"
								style={{ minWidth: "260px" }} // wider client boxes
							>
								<span className="text-gray-900 dark:text-gray-100 font-semibold text-xl select-none">
									{" "}
									{/* bigger font */}
									{client}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className="text-center mt-12">
					<p className="text-gray-600 dark:text-gray-400 text-lg">
						Join <span className="font-bold text-orange-500">500+</span>{" "}
						satisfied corporate clients
					</p>
				</div>
			</div>
		</section>
	);
};

export default ClientsSection;
