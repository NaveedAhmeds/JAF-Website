import { CountingNumber } from "./CountingNumber";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const StatsSection = () => {
	const stats = [
		{
			number: 5,
			suffix: "+",
			label: "Years of Experience",
			desc: "Serving corporate clients since 2009",
			icon: Clock,
			color: "text-blue-400",
		},
		{
			number: 50,
			suffix: "+",
			label: "Fleet Size",
			desc: "Modern vehicles including EVs",
			icon: TrendingUp,
			color: "text-green-400",
		},
		{
			number: 98,
			suffix: "%",
			label: "Client Satisfaction",
			desc: "Consistently high ratings",
			icon: Award,
			color: "text-yellow-400",
		},
		{
			number: 24,
			suffix: "/7",
			label: "Support Available",
			desc: "Round-the-clock assistance",
			icon: Users,
			color: "text-purple-400",
		},
	];

	return (
		<section
			className="py-16 bg-cover bg-center transition-colors duration-300"
			style={{ backgroundImage: "url('/Images/thisone.jpg')" }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-4xl lg:text-5xl font-extrabold text-orange-500 hover:text-orange-600 transition-colors duration-300 drop-shadow-sm">
						Trusted by Industry Leaders
					</h2>
					<p className="text-xl font-semibold text-indigo-100 hover:text-white transition-colors duration-300 drop-shadow">
						Numbers that speak for our commitment to excellence
					</p>
				</div>

				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					{stats.map((stat, idx) => {
						const IconComponent = stat.icon;
						return (
							<div
								key={idx}
								className="text-center rounded-xl p-6 cursor-pointer group bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg
                           hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-out
                           animate-[fade-in-down_0.5s_ease-out] delay-[calc(var(--idx)*0.1s)]"
								style={{ "--idx": idx } as React.CSSProperties}
							>
								<div className="flex justify-center mb-4">
									<div className="p-3 rounded-full bg-white/20 group-hover:scale-110 transition-transform duration-300">
										<IconComponent
											className={`h-8 w-8 ${stat.color} group-hover:animate-pulse`}
										/>
									</div>
								</div>
								<div className="text-4xl lg:text-5xl font-extrabold text-orange-400 mb-2 hover:text-orange-300 transition-colors duration-300">
									<CountingNumber end={stat.number} suffix={stat.suffix} />
								</div>
								<div className="text-lg font-bold text-white mb-1 hover:text-orange-100 transition-colors duration-300">
									{stat.label}
								</div>
								<div className="text-sm text-blue-100 hover:text-white transition-colors duration-300">
									{stat.desc}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default StatsSection;
