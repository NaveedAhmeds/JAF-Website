"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
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
import { motion, AnimatePresence } from "framer-motion";

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
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		company: "",
		service: "",
		message: "",
	});

	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [showSuccess, setShowSuccess] = useState(false);

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value.replace(/\D/g, "");
		if (val.length <= 10) {
			setFormData({ ...formData, phone: val });
		}
	};

	const validate = () => {
		const newErrors: { [key: string]: string } = {};

		if (!formData.firstName.trim())
			newErrors.firstName = "First name can't ghost us.";
		if (!formData.lastName.trim())
			newErrors.lastName = "Last name is kinda important.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
			newErrors.email = "Email looking sus, fix it.";
		if (formData.phone.length !== 10)
			newErrors.phone = "Phone needs 10 digits, no more no less.";
		if (!formData.service) newErrors.service = "Pick a service, don’t be shy.";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validate()) return;

		emailjs
			.send(
				"service_h24s848",
				"template_6kgn3hh",
				formData,
				"c8fK0-Jt3ErnkFJz-"
			)
			.then(() => {
				setShowSuccess(true);
				setTimeout(() => setShowSuccess(false), 4000);
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					company: "",
					service: "",
					message: "",
				});
				setErrors({});
			})
			.catch((err) => {
				console.error("FAILED...", err);
				alert("Oops! Something went wrong. Try again later.");
			});
	};

	return (
		<div className="pt-16 bg-white dark:bg-black text-gray-900 dark:text-white bg-dotted-light relative">
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
				.dark section.py-20 label {
					color: #fff !important;
				}
				.dark section.py-20 input::placeholder,
				.dark section.py-20 textarea::placeholder {
					color: #bbb !important;
				}

				@keyframes shake {
					0%,
					100% {
						transform: translateX(0);
					}
					20%,
					60% {
						transform: translateX(-5px);
					}
					40%,
					80% {
						transform: translateX(5px);
					}
				}
				.animate-shake {
					animation: shake 0.3s ease-in-out;
				}
			`}</style>

			{/* Success Toast */}
			<AnimatePresence>
				{showSuccess && (
					<motion.div
						initial={{ y: -50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -50, opacity: 0 }}
						className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
					>
						message sent!
					</motion.div>
				)}
			</AnimatePresence>

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
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<form
							onSubmit={handleSubmit}
							noValidate
							className="border-0 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.15)] transition-shadow duration-300"
						>
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
								{[
									{ id: "firstName", label: "First Name *" },
									{ id: "lastName", label: "Last Name *" },
									{ id: "email", label: "Email *", type: "email" },
									{ id: "phone", label: "Phone Number *", type: "tel" },
									{ id: "company", label: "Company Name *" },
								].map(({ id, label, type }) => {
									const hasError = !!errors[id];
									if (id === "phone") {
										return (
											<div className="space-y-1" key={id}>
												<Label
													htmlFor={id}
													className={hasError ? "text-red-500" : undefined}
												>
													{label}
												</Label>
												<Input
													id={id}
													name={id}
													type="tel"
													placeholder="Enter your phone number"
													required
													className={`bg-white dark:bg-zinc-900 dark:border-gray-700 dark:text-white ${
														hasError ? "border-red-500" : ""
													}`}
													value={formData.phone}
													onChange={handlePhoneChange}
													maxLength={10}
													inputMode="numeric"
													pattern="[0-9]{10}"
													title="Please enter exactly 10 digits."
													aria-invalid={hasError}
													aria-describedby={`${id}-error`}
												/>
												{hasError && (
													<p
														id={`${id}-error`}
														className="text-sm text-red-500 animate-shake"
													>
														{errors[id]}
													</p>
												)}
											</div>
										);
									}
									return (
										<div className="space-y-1" key={id}>
											<Label
												htmlFor={id}
												className={hasError ? "text-red-500" : undefined}
											>
												{label}
											</Label>
											<Input
												id={id}
												name={id}
												type={type || "text"}
												placeholder={`Enter your ${label
													.toLowerCase()
													.replace(" *", "")}`}
												required
												className={`bg-white dark:bg-zinc-900 dark:border-gray-700 dark:text-white ${
													hasError ? "border-red-500" : ""
												}`}
												value={formData[id as keyof typeof formData]}
												onChange={(e) =>
													setFormData({ ...formData, [id]: e.target.value })
												}
												aria-invalid={hasError}
												aria-describedby={`${id}-error`}
											/>
											{hasError && (
												<p
													id={`${id}-error`}
													className="text-sm text-red-500 animate-shake"
												>
													{errors[id]}
												</p>
											)}
										</div>
									);
								})}

								<div className="space-y-1">
									<Label
										htmlFor="service"
										className={errors.service ? "text-red-500" : undefined}
									>
										Service Required *
									</Label>
									<Select
										onValueChange={(value) =>
											setFormData({ ...formData, service: value })
										}
										value={formData.service}
										name="service"
										required
										aria-invalid={!!errors.service}
										aria-describedby="service-error"
									>
										<SelectTrigger
											className={`bg-white dark:bg-zinc-900 dark:border-gray-700 dark:text-white ${
												errors.service ? "border-red-500" : ""
											}`}
										>
											<SelectValue placeholder="Select service type" />
										</SelectTrigger>
										<SelectContent className="bg-white dark:bg-zinc-900 dark:text-white">
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
									{errors.service && (
										<p
											id="service-error"
											className="text-sm text-red-500 animate-shake"
										>
											{errors.service}
										</p>
									)}
								</div>

								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea
										id="message"
										name="message"
										placeholder="Provide details about your specific requirements, including your preferred date and time for the meeting..."
										rows={4}
										className="bg-white dark:bg-zinc-900 dark:border-gray-700 dark:text-white"
										value={formData.message}
										onChange={(e) =>
											setFormData({ ...formData, message: e.target.value })
										}
									/>
								</div>

								<Button
									className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-400/70"
									type="submit"
								>
									Send Inquiry
								</Button>

								<p className="text-sm text-gray-500 dark:text-gray-400 text-center">
									* Required fields. We respect your privacy and will never
									share your information.
								</p>
							</CardContent>
						</form>

						<div className="space-y-8">
							<div>
								<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
									Get in Touch
								</h2>
								<div className="grid grid-cols-1 gap-6">
									{contactInfo.map((info, index) => (
										<Card
											key={index}
											className="border-0 bg-white dark:bg-zinc-900 shadow-md hover:shadow-lg transition duration-300 rounded-xl"
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

							<Card className="border-0 shadow-lg bg-red-50 dark:bg-red-900 border-l-4 border-red-500 rounded-xl">
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
								<a
									href="https://maps.google.com/?q=Zehra+Towers,+8-1-43/A/66,+Shaikpet+Rd,+Hyderabad"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
								>
									View on Google Maps
								</a>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
