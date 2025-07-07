"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	visible: (i = 1) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.15,
			duration: 0.6,
			ease: "easeOut",
		},
	}),
};

const services = [
	{
		title: "Employee Transportation",
		description:
			"Comprehensive daily commute solutions designed for corporate workforces with emphasis on safety, punctuality, and comfort.",
		features: [
			"Door-to-door pickup and drop",
			"Real-time GPS tracking",
			"Trained and verified drivers",
			"Route optimization",
			"24/7 monitoring",
			"Emergency support",
		],
		benefits: [
			"Reduced employee stress",
			"Improved punctuality",
			"Cost-effective solution",
			"Enhanced safety",
		],
	},
	{
		title: "Car Rentals",
		description:
			"Flexible short-term rental solutions for corporate executives, business meetings, and temporary transportation needs.",
		features: [
			"Self-drive and chauffeur options",
			"Premium vehicle selection",
			"Hourly/daily/weekly rates",
			"Fuel included packages",
			"Insurance coverage",
			"24/7 roadside assistance",
		],
		benefits: [
			"Flexibility and convenience",
			"Professional image",
			"No maintenance hassles",
			"Cost transparency",
		],
	},
	{
		title: "Long Term Rentals",
		description:
			"Cost-effective long-term vehicle solutions with flexible contracts tailored for extended corporate requirements.",
		features: [
			"Flexible contract terms",
			"Maintenance included",
			"Replacement vehicles",
			"Driver training programs",
			"Compliance management",
			"Regular audits",
		],
		benefits: [
			"Predictable costs",
			"Reduced overhead",
			"Professional management",
			"Scalable solution",
		],
	},
	{
		title: "Event Transport",
		description:
			"Seamless transportation coordination for corporate events, conferences, seminars, and special occasions of any scale.",
		features: [
			"Group transportation coordination",
			"VIP and executive services",
			"Event logistics planning",
			"Multiple vehicle types",
			"Professional coordinators",
			"Real-time updates",
		],
		benefits: [
			"Stress-free event management",
			"Professional coordination",
			"Seamless logistics",
			"Enhanced attendee experience",
		],
	},
	{
		title: "Airport Transfers",
		description:
			"Professional airport pickup and drop services ensuring punctual, comfortable, and hassle-free travel experience.",
		features: [
			"Flight tracking and monitoring",
			"Meet and greet services",
			"Luxury vehicle options",
			"Professional chauffeurs",
			"Luggage assistance",
			"Multiple city coverage",
		],
		benefits: [
			"Punctual service",
			"Stress-free travel",
			"Professional image",
			"Comfort and luxury",
		],
	},
	{
		title: "Fleet Management",
		description:
			"Comprehensive end-to-end fleet management services including maintenance, compliance, optimization, and reporting.",
		features: [
			"Preventive maintenance scheduling",
			"Compliance audit and management",
			"Cost optimization analysis",
			"Performance reporting",
			"Driver management",
			"Technology integration",
		],
		benefits: [
			"Reduced operational costs",
			"Improved efficiency",
			"Compliance assurance",
			"Data-driven insights",
		],
	},
];

const Services = () => {
	const navigate = useNavigate();

	return (
		<div className="pt-16 bg-gray-50 dark:bg-black relative overflow-hidden transition-colors duration-500">
			{/* Background dots */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				<div className="w-full h-full bg-[radial-gradient(circle,_#cbd5e1_1px,_transparent_1px)] [background-size:20px_20px] opacity-30 dark:opacity-10 animate-[pulse_4s_ease-in-out_infinite]" />
			</div>

			{/* Hero Section */}
			<section className="relative z-10 py-20">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<motion.h1
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp}
						className="text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white"
					>
						Our <span className="text-orange-500">Services</span>
					</motion.h1>
					<motion.p
						initial="hidden"
						whileInView="visible"
						variants={fadeUp}
						className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300"
					>
						Comprehensive transportation solutions designed for corporate
						excellence, backed by 15+ years of industry expertise.
					</motion.p>
				</div>
			</section>

			{/* Cards Section */}
			<section className="relative z-10 py-20">
				<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
					{services.map((service, i) => (
						<motion.div
							key={i}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={fadeUp}
							custom={i}
						>
							<Card className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-0 shadow-lg bg-white dark:bg-zinc-900">
								<CardHeader className="pb-6">
									<CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
										{service.title}
									</CardTitle>
									<p className="text-gray-600 dark:text-gray-300 text-lg mt-2">
										{service.description}
									</p>
								</CardHeader>
								<CardContent>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<h4 className="font-semibold text-gray-900 dark:text-white mb-3">
												Key Features:
											</h4>
											<ul className="space-y-2">
												{service.features.map((feature, idx) => (
													<li
														key={idx}
														className="flex text-sm text-gray-700 dark:text-gray-300"
													>
														<div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3" />
														{feature}
													</li>
												))}
											</ul>
										</div>
										<div>
											<h4 className="font-semibold text-gray-900 dark:text-white mb-3">
												Benefits:
											</h4>
											<ul className="space-y-2">
												{service.benefits.map((benefit, idx) => (
													<li
														key={idx}
														className="flex text-sm text-gray-700 dark:text-gray-300"
													>
														<div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
														{benefit}
													</li>
												))}
											</ul>
										</div>
									</div>
									<div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
										<Button
											className="w-full bg-blue-900 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700 text-white"
											onClick={() => navigate("/contact")}
										>
											Request Quote for {service.title}
										</Button>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Services;
