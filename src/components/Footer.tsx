const Footer = () => {
	return (
		<footer className="bg-white dark:bg-black text-gray-700 dark:text-gray-400 py-6 select-none border-t border-gray-200 dark:border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				{/* Logo */}
				<div className="text-2xl font-bold mb-2 cursor-default select-none">
					JAF <span className="text-orange-500">Logistic</span>
				</div>
				{/* Commitment to Quality */}
				<p className="text-lg font-semibold text-gray-600 dark:text-gray-300 tracking-wide italic">
					<span className="text-orange-500">Commitment</span> to Quality
				</p>
			</div>

			{/* Copyright with Easter Egg */}
			<div
				className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-4 text-center cursor-pointer select-none"
				onClick={() => window.open("https://github.com/NaveedAhmeds", "_blank")}
				title="Click me"
			>
				<p>
					&copy; 2024 JAF Logistic. All rights reserved. | Reliable Corporate
					Transportation Since 2009
				</p>
			</div>
		</footer>
	);
};

export default Footer;
