import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ClientsSection from "@/components/ClientsSection";

const Index = () => {
	return (
		<div className="pt-16 cursor-custom">
			<HeroSection />
			<ServicesSection />
			<StatsSection />
			<ClientsSection />

			{/* CTA Section */}
			<section className="bg-black text-white py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-4 hover:text-orange-300 transition-colors duration-300">
						Ready to Experience Reliable Transportation?
					</h2>
					<p className="text-xl mb-8 text-blue-100 hover:text-white transition-colors duration-300">
						Join hundreds of satisfied corporate clients who trust JAF Logistics
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link to="/contact">
							<Button
								size="lg"
								className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
							>
								Get Your Quote Today
							</Button>
						</Link>
						<Link to="/contact">
							<Button
								size="lg"
								variant="outline"
								className="text-black border-white bg-white hover:bg-gray-100 hover:text-black hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
							>
								Contact Us
							</Button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Index;
