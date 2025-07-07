import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Hook to detect when an element enters the viewport
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

const HeroSection = () => {
	const bgRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!bgRef.current) return;
			const scrollY = window.scrollY;
			bgRef.current.style.transform = `translateY(${
				scrollY * 0.3
			}px) scale(1.05)`;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const [leftRef, leftVisible] = useInView({ threshold: 0.3 });
	const [rightRef, rightVisible] = useInView({ threshold: 0.3 });
	const rightCardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!rightCardRef.current) return;
		const rect = rightCardRef.current.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * 8;
		const rotateY = ((x - centerX) / centerX) * -8;

		rightCardRef.current.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
		rightCardRef.current.style.transition = "transform 0.1s ease-out";
	};

	const handleMouseLeave = () => {
		if (!rightCardRef.current) return;
		rightCardRef.current.style.transform =
			"perspective(600px) rotateX(0) rotateY(0) scale(1)";
		rightCardRef.current.style.transition = "transform 0.3s ease-out";
	};

	return (
		<section
			className="relative text-white py-20 lg:py-32 overflow-hidden"
			style={{ minHeight: "75vh" }}
			aria-label="Hero section with parallax background and call to action"
		>
			{/* Parallax background image */}
			<img
				ref={bgRef}
				src="/Images/Hero1.webp"
				alt="JAF Logistics Background"
				className="absolute inset-0 w-full h-full object-cover -z-20 will-change-transform"
				style={{ transition: "transform 0.2s ease-out" }}
			/>

			{/* Top fade for navbar contrast */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 -z-10 pointer-events-none" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
					{/* Left column */}
					<div
						ref={leftRef}
						className={`transition-all duration-700 ease-out ${
							leftVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 -translate-x-16"
						}`}
					>
						<h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight hover:text-orange-300 transition-colors duration-500">
							Reliable Corporate{" "}
							<span className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
								Transportation
							</span>
							,<br />
							Powered by Experience
						</h1>
						<p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed hover:text-white transition-colors duration-300">
							20+ years of trusted service delivering end-to-end logistics
							solutions to Tech companies across Hyderabad.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link to="/contact">
								<Button
									size="lg"
									className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
								>
									Get Your Quote
								</Button>
							</Link>
							<Link to="/services">
								<Button
									size="lg"
									variant="outline"
									className="text-black bg-white border-white hover:bg-gray-100 hover:text-black font-semibold px-8 py-4 text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
								>
									Explore Services
								</Button>
							</Link>
						</div>
					</div>

					{/* Right card */}
					<div
						ref={rightRef}
						className={`transition-all duration-700 ease-out ${
							rightVisible
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-16"
						}`}
					>
						<div
							ref={rightCardRef}
							onMouseMove={handleMouseMove}
							onMouseLeave={handleMouseLeave}
							className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-lg"
						>
							<h3 className="text-2xl font-bold mb-6 hover:text-orange-300 transition-colors duration-300">
								Why Choose JAF Logistics?
							</h3>
							<div className="space-y-4">
								{[
									"24/7 Crisis Management Support",
									"Low Attrition, High Reliability",
									"Eco-Friendly Electric Fleet",
									"Strict Compliance & Training",
								].map((text, i) => (
									<div
										key={i}
										className="flex items-center hover:translate-x-2 transition-transform duration-300"
									>
										<div className="w-3 h-3 bg-orange-500 rounded-full mr-4 hover:scale-125 transition-transform duration-300"></div>
										<span className="text-lg hover:text-orange-200 transition-colors duration-300">
											{text}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Down arrow bounce */}
			<div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
				aria-label="Scroll down"
			>
				<svg
					className="w-10 h-10 text-orange-400"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					viewBox="0 0 24 24"
				>
					<path d="M12 5v14m0 0l-7-7m7 7l7-7"></path>
				</svg>
			</div>
		</section>
	);
};

export default HeroSection;
