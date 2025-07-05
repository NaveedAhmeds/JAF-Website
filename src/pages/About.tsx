"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const values = [
	{
		title: "Reliability",
		description:
			"Consistent, dependable service that corporate clients can count on, rain or shine.",
		icon: "🛡️",
	},
	{
		title: "Safety First",
		description:
			"Comprehensive driver training, vehicle maintenance, and safety protocols.",
		icon: "🦺",
	},
	{
		title: "Innovation",
		description:
			"Embracing eco-friendly vehicles and modern technology for better service.",
		icon: "💡",
	},
	{
		title: "Excellence",
		description:
			"Continuous improvement and quality assurance in every aspect of our service.",
		icon: "⭐",
	},
];

const advantages = [
	"Low attrition rates ensuring consistent service quality",
	"24/7 crisis management and support system",
	"Strict compliance with safety and regulatory standards",
	"Comprehensive driver training and verification programs",
	"Proactive maintenance and fleet management",
	"Real-time tracking and monitoring systems",
];

const team = ["Javeed", "Arshad", "Farhan"];

const About = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const observer = new MutationObserver(() => {
			setTheme(
				document.documentElement.classList.contains("dark") ? "dark" : "light"
			);
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"],
		});
		return () => observer.disconnect();
	}, []);

	return (
		<div className="pt-16 relative overflow-hidden">
			{/* Background dots overlay */}
			<div
				className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-700 ${
					theme === "dark" ? "opacity-30" : "opacity-10"
				}`}
				style={{
					backgroundImage:
						theme === "dark"
							? "radial-gradient(circle, #555 1px, transparent 1px)"
							: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
					backgroundSize: "20px 20px",
					animation: "pulseDots 4s ease-in-out infinite",
				}}
			/>
			<style>{`
        @keyframes pulseDots {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>

			{/* Hero */}
			<section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 overflow-hidden z-10">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<motion.h1
						className="text-4xl lg:text-5xl font-bold mb-6"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						About <span className="text-orange-500">JAF Logistics</span>
					</motion.h1>
					<motion.p
						className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						15+ years of excellence in corporate transportation, serving Fortune
						500 companies with unmatched reliability and professionalism.
					</motion.p>
				</div>
			</section>

			{/* Company Story */}
			<section className="py-20 bg-white dark:bg-black transition-colors relative z-10">
				<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<motion.h2
							className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}
							viewport={{ once: true }}
						>
							Our Journey Since 2009
						</motion.h2>
						<p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
							Founded in 2009, JAF Logistics began with a mission: reliable
							corporate transportation.
						</p>
						<p className="text-lg text-gray-700 dark:text-gray-300">
							From floods to fuel shortages to a pandemic — we survived and
							thrived. Today, we boast a fleet of 500+ vehicles serving 200+
							clients.
						</p>
					</div>

					{/* Animated Milestone Card */}
					<motion.div
						className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg hover:shadow-orange-500/40 transition-shadow"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
							Key Milestones
						</h3>
						<ul className="space-y-3">
							{[
								["2009", "Company founded with 10 vehicles"],
								["2015", "Expanded to 100+ vehicles, multiple cities"],
								["2020", "Introduced electric vehicles to fleet"],
								["2024", "500+ vehicles, 200+ corporate clients"],
							].map(([year, note], i) => (
								<li key={i} className="flex gap-4 items-start">
									<div className="w-4 h-4 bg-orange-500 rounded-full mt-1 animate-pulse" />
									<div>
										<div className="font-semibold text-gray-900 dark:text-white">
											{year}
										</div>
										<div className="text-gray-700 dark:text-gray-400">
											{note}
										</div>
									</div>
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</section>

			{/* Values */}
			<section className="py-20 bg-gray-100 dark:bg-zinc-900 transition-colors relative z-10">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
						Our <span className="text-orange-500">Core Values</span>
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{values.map((value, i) => (
							<motion.div
								key={i}
								whileHover={{ scale: 1.05 }}
								className="backdrop-blur-sm bg-white/60 dark:bg-black/40 p-6 rounded-xl shadow-lg"
							>
								<div className="text-4xl mb-2">{value.icon}</div>
								<h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
									{value.title}
								</h4>
								<p className="text-gray-700 dark:text-gray-300">
									{value.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Crisis Management */}
			<section className="py-20 bg-white dark:bg-black relative z-10">
				<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
							What Sets Us <span className="text-orange-500">Apart</span>
						</h2>
						<p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
							These aren’t just services, they’re *survival badges*. We’ve
							handled it all:
						</p>
						<ul className="space-y-2">
							{advantages.map((adv, i) => (
								<li
									key={i}
									className="flex items-center text-gray-700 dark:text-gray-300"
								>
									<div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-ping" />
									{adv}
								</li>
							))}
						</ul>
					</div>
					<motion.div
						className="bg-blue-50 dark:bg-zinc-800 rounded-2xl p-8 shadow-md hover:shadow-orange-400/30 transition-shadow"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-bold text-blue-900 dark:text-orange-400 mb-4">
							Crisis Moments
						</h3>
						<p className="text-gray-700 dark:text-gray-300 mb-4">
							We kept rolling through:
						</p>
						<ul className="space-y-3 text-gray-800 dark:text-gray-200">
							<li>Mumbai Floods (2017, 2019)</li>
							<li>Bandh situations</li>
							<li>Diesel crises</li>
							<li>COVID-19 lockdown</li>
						</ul>
					</motion.div>
				</div>
			</section>

			{/* Leadership */}
			<section className="py-20 bg-gray-100 dark:bg-zinc-900 relative z-10">
				<div className="max-w-7xl mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Meet The Founders
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
						Together, they form the soul of{" "}
						<span className="text-orange-500 font-bold">JAF</span>
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{team.map((name, i) => (
							<motion.div
								key={i}
								className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-lg hover:shadow-orange-400/30 transition"
								whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
								transition={{ duration: 0.3 }}
							>
								<div className="text-6xl font-extrabold text-orange-500 animate-bounce-slow">
									{name[0]}
								</div>
								<h4 className="text-xl font-bold mt-4 text-gray-900 dark:text-white">
									{name}
								</h4>
								<p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
									Co-Founder
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
