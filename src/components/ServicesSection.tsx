import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
	const services = [
		{
			title: "Employee Transportation",
			description:
				"Reliable daily commute solutions for your workforce with our trained drivers and well-maintained fleet.",
			icon: "/Images/EmpTransport.webp", // Replace with your actual icon filenames
			features: [
				"Door-to-door pickup",
				"Real-time tracking",
				"Safety protocols",
			],
		},
		{
			title: "Car Rentals",
			description:
				"Flexible short-term and long-term car rental solutions for corporate executives and business needs.",
			icon: "/Images/CarRentals.webp",
			features: [
				"Self-drive options",
				"Chauffeur services",
				"Premium vehicles",
			],
		},
		{
			title: "Event Transport",
			description:
				"Seamless transportation coordination for corporate events, conferences, and special occasions.",
			icon: "/Images/EventTrans.png",
			features: ["Group transportation", "Event coordination", "VIP services"],
		},
		{
			title: "Airport Transfers",
			description:
				"Professional airport pickup and drop services ensuring punctual and comfortable travel.",
			icon: "/Images/AirportTrans.jpg",
			features: ["Flight tracking", "Meet & greet", "Luxury vehicles"],
		},
		{
			title: "Fleet Management",
			description:
				"Comprehensive fleet management services including maintenance, compliance, and optimization.",
			icon: "/Images/fleetmng.jpg",
			features: [
				"Maintenance scheduling",
				"Compliance audits",
				"Cost optimization",
			],
		},
		{
			title: "Long Term Rentals",
			description:
				"Cost-effective long-term vehicle rental solutions with flexible terms and conditions.",
			icon: "/Images/Long.jpg",
			features: [
				"Flexible contracts",
				"Maintenance included",
				"Driver training",
			],
		},
	];

	return (
		<section className="py-20 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Our <span className="text-orange-500">7 Business Lines</span>
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						Comprehensive transportation solutions tailored for corporate
						excellence and reliability
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<Card
							key={index}
							className="bg-white dark:bg-zinc-800 border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden"
						>
							{/* 🖼️ Image header */}
							<div className="w-full h-40">
								<img
									src={service.icon}
									alt={`${service.title} icon`}
									className="w-full h-full object-cover"
								/>
							</div>

							<CardHeader className="text-center pb-4 pt-6">
								<CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
									{service.title}
								</CardTitle>
							</CardHeader>

							<CardContent>
								<p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
									{service.description}
								</p>
								<ul className="space-y-2">
									{service.features.map((feature, idx) => (
										<li
											key={idx}
											className="flex items-center text-sm text-gray-700 dark:text-gray-400"
										>
											<div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
											{feature}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<Link to="/services">
						<Button
							size="lg"
							className="bg-orange-500 hover:bg-orange-600 text-white"
						>
							View All Services
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
