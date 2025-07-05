import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
	const services = [
		{
			title: "Employee Transportation",
			description:
				"Reliable daily commute solutions for your workforce with our trained drivers and well-maintained fleet.",
			icon: "/Images/EmpTransport.webp",
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

	// Intersection Observer hook to animate on scroll
	const useInView = (options?: IntersectionObserverInit) => {
		const [isVisible, setIsVisible] = useState(false);
		const ref = useRef<HTMLDivElement>(null);

		useEffect(() => {
			if (!ref.current) return;
			const observer = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			}, options);

			observer.observe(ref.current);

			return () => observer.disconnect();
		}, [ref, options]);

		return [ref, isVisible] as const;
	};

	// Tilt cards on hover, like a playful dance 💃
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * 12;
		const rotateY = ((x - centerX) / centerX) * -12;

		card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
	};

	const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget;
		card.style.transform =
			"perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
		card.style.transition = "transform 0.3s ease-out";
	};

	return (
		<section
			className={`
          py-20 relative transition-colors duration-300
          bg-white text-black
          dark:bg-zinc-900 dark:text-white
        `}
		>
			{/* Dotted map pattern bg */}
			<div
				aria-hidden="true"
				className="absolute inset-0 pointer-events-none"
				style={{
					backgroundImage:
						"radial-gradient(circle 1px, rgba(200,200,200,0.15) 1px, transparent 1px), radial-gradient(circle 1px, rgba(200,200,200,0.15) 1px, transparent 1px)",
					backgroundPosition: "0 0, 25px 25px",
					backgroundSize: "50px 50px",
					zIndex: 0,
				}}
			/>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4 drop-shadow-sm">
						Our <span className="text-orange-500">7 Business Lines</span>
					</h2>
					<p className="text-xl max-w-3xl mx-auto drop-shadow-sm">
						Comprehensive transportation solutions tailored for corporate
						excellence and reliability
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => {
						const [ref, inView] = useInView({ threshold: 0.3 });

						return (
							<Card
								key={index}
								ref={ref}
								onMouseMove={handleMouseMove}
								onMouseLeave={handleMouseLeave}
								className={`
                  group bg-white dark:bg-zinc-800 border border-gray-200 dark:border-gray-700
                  backdrop-blur-xl shadow-lg dark:shadow-black/60
                  relative overflow-hidden rounded-xl
                  transition-all duration-300
                  ${
										inView
											? "opacity-100 translate-y-0"
											: "opacity-0 translate-y-12"
									}
                  hover:shadow-orange-400/50 hover:scale-105
                  text-black dark:text-white
                `}
								style={{ transitionDelay: `${index * 150}ms` }}
							>
								{/* Orange glow on hover */}
								<div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-30 bg-gradient-to-tr from-orange-400 via-transparent to-orange-400 blur-xl"></div>

								<div className="w-full h-40 relative z-10">
									<img
										src={service.icon}
										alt={`${service.title} icon`}
										className="w-full h-full object-cover rounded-t-xl"
									/>
								</div>

								<CardHeader className="text-center pb-4 pt-6 relative z-10">
									<CardTitle className="text-xl font-bold">
										{service.title}
									</CardTitle>
								</CardHeader>

								<CardContent className="relative z-10">
									<p className="mb-4 leading-relaxed">{service.description}</p>
									<ul className="space-y-2">
										{service.features.map((feature, idx) => (
											<li key={idx} className="flex items-center text-sm">
												<div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
												{feature}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						);
					})}
				</div>

				<div className="text-center mt-12 relative z-10">
					<Link to="/services">
						<Button
							size="lg"
							className="bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-wide shadow-md"
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
