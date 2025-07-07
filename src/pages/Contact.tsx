"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

const fadeFlip = {
	hidden: { opacity: 0, rotateX: -90 },
	visible: {
		opacity: 1,
		rotateX: 0,
		transition: { duration: 0.4, ease: "easeOut" },
	},
};

const contactInfo = [
	{
		title: "Phone",
		details: ["+91 89786 33600"],
		icon: "📞",
	},
	{
		title: "Email",
		details: ["info@jaflogistic.in"],
		icon: "📧",
	},
	{
		title: "Address",
		details: [
			"Zehra Towers, 8-1-43/A/66, Shaikpet Rd,",
			"opp. HP Petrol Pump, Sathya Colony,",
			"Qutub Shahi Tombs, Hyderabad,",
			"Telangana 500008, India",
		],
		icon: "📍",
	},
	{
		title: "Working Hours",
		details: ["24/7 Operations", "Emergency Support Available"],
		icon: "🕒",
	},
];

const Contact = () => {
	const [service, setService] = useState("");

	return (
		<div className="pt-16 bg-white dark:bg-black text-gray-900 dark:text-white bg-dotted-light">
			<style jsx global>{`
				.bg-dotted-light {
					background-image: radial-gradient(
						circle,
						rgba(0, 0, 0, 0.05) 1px,
						transparent 1px
					);
					background-size: 20px 20px;
				}
				.dark .bg-dotted-light {
					background-image: radial-gradient(
						circle,
						rgba(255, 255, 255, 0.15) 1px,
						transparent 1px
					);
				}
			`}</style>

			{/* Hero Section */}
			<section className="bg-transparent py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.h1
						className="text-4xl lg:text-5xl font-bold mb-6"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeFlip}
					>
						Contact <span className="text-orange-500">Us</span>
					</motion.h1>
					<motion.p
						className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeFlip}
						transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
					>
						Ready to transform your corporate transportation? Get in touch with
						our team for personalized solutions and competitive quotes.
					</motion.p>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="py-20 bg-white dark:bg-black">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<Card className="border-0 shadow-lg">
							<CardHeader>
								<CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
									Get Your Quote
								</CardTitle>
								<p className="text-gray-600 dark:text-gray-300">
									Fill out the form below and we'll get back to you within 24
									hours.
								</p>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="firstName">First Name *</Label>
										<Input
											id="firstName"
											placeholder="Enter your first name"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="lastName">Last Name *</Label>
										<Input
											id="lastName"
											placeholder="Enter your last name"
											required
										/>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="email">Email *</Label>
									<Input
										id="email"
										type="email"
										placeholder="Enter your email address"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="phone">Phone Number *</Label>
									<Input
										id="phone"
										type="tel"
										placeholder="Enter your phone number"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="company">Company Name *</Label>
									<Input
										id="company"
										placeholder="Enter your company name"
										required
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="service">Service Required *</Label>
									<Select
										onValueChange={(value) => setService(value)}
										value={service}
									>
										<SelectTrigger>
											<SelectValue placeholder="Select service type" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="employee-transport">
												Employee Transportation
											</SelectItem>
											<SelectItem value="car-rentals">Car Rentals</SelectItem>
											<SelectItem value="long-term-rentals">
												Long Term Rentals
											</SelectItem>
											<SelectItem value="event-transport">
												Event Transport
											</SelectItem>
											<SelectItem value="airport-transfers">
												Airport Transfers
											</SelectItem>
											<SelectItem value="fleet-management">
												Fleet Management
											</SelectItem>
											<SelectItem value="multiple">
												Multiple Services
											</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea
										id="message"
										placeholder="Tell us about your specific requirements..."
										rows={4}
									/>
								</div>

								<Button
									className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3"
									type="submit"
								>
									Send Inquiry
								</Button>

								<p className="text-sm text-gray-500 dark:text-gray-400 text-center">
									* Required fields. We respect your privacy and will never
									share your information.
								</p>
							</CardContent>
						</Card>

						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
									Get in Touch
								</h2>
								<div className="grid grid-cols-1 gap-6">
									{contactInfo.map((info, index) => (
										<Card
											key={index}
											className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
										>
											<CardContent className="p-6">
												<div className="flex items-start">
													<div className="text-2xl mr-4">{info.icon}</div>
													<div>
														<h3 className="font-semibold text-gray-900 dark:text-white mb-2">
															{info.title}
														</h3>
														{info.details.map((detail, idx) => (
															<p
																key={idx}
																className="text-gray-600 dark:text-gray-300"
															>
																{detail}
															</p>
														))}
													</div>
												</div>
											</CardContent>
										</Card>
									))}
								</div>
							</div>

							{/* Emergency Contact */}
							<Card className="border-0 shadow-lg bg-red-50 dark:bg-red-900 border-l-4 border-l-red-500">
								<CardContent className="p-6">
									<h3 className="font-bold text-red-900 dark:text-red-400 mb-2 flex items-center">
										🚨 Emergency Support
									</h3>
									<p className="text-red-800 dark:text-red-300 mb-2">
										24/7 Crisis Management Hotline
									</p>
									<p className="font-semibold text-red-900 dark:text-red-200">
										+91 89786 33600
									</p>
									<p className="text-sm text-red-700 dark:text-red-400 mt-2">
										For urgent transportation issues, breakdowns, or emergencies
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Office Location */}
			<section className="py-20 bg-white dark:bg-black">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
							Our <span className="text-orange-500">Location</span>
						</h2>
						<p className="text-xl text-gray-600 dark:text-gray-300">
							Serving Hyderabad and surrounding areas with local expertise
						</p>
					</div>

					<div className="flex justify-center">
						<Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md">
							<CardContent className="p-8">
								<div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
									<span className="text-2xl">🏢</span>
								</div>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
									Hyderabad Office
								</h3>
								<div className="text-gray-600 dark:text-gray-300 mb-4 space-y-1">
									<p>Zehra Towers, 8-1-43/A/66</p>
									<p>Shaikpet Rd, opp. HP Petrol Pump</p>
									<p>Sathya Colony, Qutub Shahi Tombs</p>
									<p>Hyderabad, Telangana 500008</p>
									<p>India</p>
								</div>
								<p className="text-orange-500 font-semibold">+91 89786 33600</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="py-20 bg-gray-50 dark:bg-zinc-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
							Find Us
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							Hyderabad, Telangana
						</p>
					</div>

					<div className="rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700 shadow-lg max-w-5xl mx-auto h-96">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.330280137995!2d78.3977447!3d17.4004688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9775fa33e0db%3A0xafe8a49c9ea40d94!2sJAF%20logistic!5e0!3m2!1sen!2sin!4v1688532912867!5m2!1sen!2sin"
							width="100%"
							height="100%"
							loading="lazy"
							allowFullScreen
							referrerPolicy="no-referrer-when-downgrade"
							title="JAF Logistics Location"
							style={{ border: 0 }}
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
