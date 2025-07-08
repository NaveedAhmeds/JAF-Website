"use client";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
	hidden: { opacity: 0, y: 30 },
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
		<div className="pt-16 bg-white dark:bg-[#1C1C1E] relative overflow-hidden transition-colors duration-500 min-h-screen">
			{/* Subtle background pattern */}
			<div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0.04)_1px,_transparent_1px)] bg-[length:20px_20px] dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] dark:bg-[length:20px_20px]" />

			{/* Hero Section */}
			<section className="relative z-10 py-12 px-4 max-w-5xl mx-auto text-center">
				<motion.h1
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={fadeUp}
					className="text-5xl font-semibold mb-6 text-black dark:text-white tracking-tight"
				>
					Our <span className="text-[#0071e3]">Services</span>
				</motion.h1>
				<motion.p
					initial="hidden"
					whileInView="visible"
					variants={fadeUp}
					className="text-lg max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300"
				>
					Comprehensive transportation solutions designed for corporate
					excellence, backed by 15+ years of industry expertise.
				</motion.p>
			</section>

			{/* Cards Section */}
			<section className="relative z-10 py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
				{services.map((service, i) => (
					<motion.div
						key={i}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeUp}
						custom={i}
					>
						<Card
							className="border border-transparent rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.9)] bg-white dark:bg-[#2C2C2E] transition-transform duration-300 hover:scale-[1.04] hover:shadow-[0_30px_50px_rgba(0,113,227,0.4)] cursor-pointer"
							onClick={() => navigate("/contact")}
						>
							<CardHeader className="pb-5 px-8 pt-8">
								<CardTitle className="text-3xl font-semibold text-black dark:text-white">
									{service.title}
								</CardTitle>
								<p className="text-gray-600 dark:text-gray-300 text-base mt-3 leading-relaxed max-w-[85%]">
									{service.description}
								</p>
							</CardHeader>
							<CardContent className="px-8 pb-8 pt-2">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
									<div>
										<h4 className="text-lg font-semibold text-black dark:text-white mb-3">
											Key Features
										</h4>
										<ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
											{service.features.map((feature, idx) => (
												<li key={idx} className="flex items-start gap-3">
													<span className="inline-block w-3 h-3 bg-[#0071e3] rounded-full mt-1 flex-shrink-0" />
													{feature}
												</li>
											))}
										</ul>
									</div>
									<div>
										<h4 className="text-lg font-semibold text-black dark:text-white mb-3">
											Benefits
										</h4>
										<ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
											{service.benefits.map((benefit, idx) => (
												<li key={idx} className="flex items-start gap-3">
													<span className="inline-block w-3 h-3 bg-[#34c759] rounded-full mt-1 flex-shrink-0" />
													{benefit}
												</li>
											))}
										</ul>
									</div>
								</div>
								<div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
									<Button
										className="w-full bg-[#0071e3] hover:bg-[#005bb5] dark:bg-[#005bb5] dark:hover:bg-[#004494] text-white font-semibold shadow-lg hover:shadow-xl transition"
										onClick={() => navigate("/contact")}
									>
										Request Quote for {service.title}
									</Button>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				))}
			</section>
		</div>
	);
};

export default Services;
