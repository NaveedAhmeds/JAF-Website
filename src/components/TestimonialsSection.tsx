import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
	const testimonials = [
		{
			text: "JAF Logistics has been our trusted partner for employee transportation for over 3 years. Their reliability and professionalism are unmatched.",
			author: "Rajesh Kumar",
			position: "HR Director",
			company: "Tech Innovators Pvt Ltd",
		},
		{
			text: "During the monsoon crisis last year, JAF's crisis management team ensured our employees reached safely. Their dedication is commendable.",
			author: "Priya Sharma",
			position: "Operations Manager",
			company: "Global Solutions Inc",
		},
		{
			text: "The fleet management services have significantly reduced our transportation costs while improving service quality. Highly recommended!",
			author: "Amit Patel",
			position: "CFO",
			company: "Manufacturing Excellence Ltd",
		},
	];

	return (
		<section className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						What Our <span className="text-orange-500">Clients Say</span>
					</h2>
					<p className="text-xl text-gray-600">
						Trusted by leading corporations across Hyderabad
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							<CardContent className="p-8">
								<div className="text-4xl text-orange-500 mb-4">"</div>
								<p className="text-gray-700 mb-6 leading-relaxed italic">
									{testimonial.text}
								</p>
								<div className="border-t pt-4">
									<div className="font-semibold text-gray-900">
										{testimonial.author}
									</div>
									<div className="text-sm text-gray-600">
										{testimonial.position}
									</div>
									<div className="text-sm text-orange-500 font-medium">
										{testimonial.company}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
