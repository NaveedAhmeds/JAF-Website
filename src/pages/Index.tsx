import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
	return (
		<div className="pt-16 cursor-custom">
			<HeroSection />
			<ServicesSection />
			<StatsSection />

			{/* CTA Section */}
			<section className="bg-white dark:bg-black text-black dark:text-white py-16 transition-colors duration-500">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold mb-4 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 cursor-default">
						Ready to Experience Reliable Transportation?
					</h2>
					<p className="text-xl mb-8 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 cursor-default">
						Join hundreds of satisfied corporate clients who trust JAF Logistic
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link to="/contact">
							<Button
								size="lg"
								className="bg-orange-500 hover:bg-orange-600 dark:hover:bg-orange-400 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl text-white"
							>
								Get Your Quote Today
							</Button>
						</Link>
						<Link to="/contact">
							<Button
								size="lg"
								variant="outline"
								className="text-orange-500 border-orange-500 bg-white dark:bg-transparent dark:text-orange-400 dark:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-600 hover:text-orange-600 dark:hover:text-white hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
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
