import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="col-span-1 md:col-span-2">
						<div className="text-2xl font-bold mb-4">
							JAF <span className="text-orange-500">Logistics</span>
						</div>
						<p className="text-gray-300 mb-4">
							Premier Travel and Logistics company serving the corporate sector
							with end-to-end transportation solutions since 2020.
						</p>
						<div className="flex space-x-4">
							<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
								<span className="text-xs font-bold">f</span>
							</div>
							<div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
								<span className="text-xs font-bold">t</span>
							</div>
							<div className="w-8 h-8 bg-blue-800 rounded flex items-center justify-center cursor-pointer hover:bg-blue-900 transition-colors">
								<span className="text-xs font-bold">in</span>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link
									to="/"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="text-gray-300 hover:text-white transition-colors"
								>
									About Us
								</Link>
							</li>
							<li>
								<Link
									to="/services"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									to="/fleet"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Fleet
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Info</h3>
						<div className="space-y-2 text-gray-300">
							<p>📞 +91 98765 43210</p>
							<p>📧 info@jaflogistics.com</p>
							<p>📍 Mumbai, Maharashtra, India</p>
							<p className="text-sm mt-4">24/7 Support Available</p>
						</div>
					</div>
				</div>

				<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
					<p>
						&copy; 2024 JAF Logistics. All rights reserved. | Reliable Corporate
						Transportation Since 2009
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
