import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const location = useLocation();

	// Theme state - default light
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		const onScroll = () => {
			const scrollY = window.scrollY;
			const scrollHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = (scrollY / scrollHeight) * 100;
			setScrollProgress(progress);
		};

		window.addEventListener("scroll", onScroll);

		// Load theme from localStorage or system preference
		const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
		if (savedTheme) setTheme(savedTheme);
		else {
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches;
			setTheme(prefersDark ? "dark" : "light");
		}

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	// Update body class and localStorage on theme change
	useEffect(() => {
		if (theme === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	const navLinks = [
		{ to: "/", label: "Home" },
		{ to: "/about", label: "About" },
		{ to: "/services", label: "Services" },
		{ to: "/contact", label: "Contact" },
	];

	return (
		<>
			{/* Scroll progress bar */}
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					height: "4px",
					width: `${scrollProgress}%`,
					backgroundColor: "#ff6600",
					zIndex: 9999,
					transition: "width 0.25s ease-out",
				}}
			/>

			<nav
				className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-3 z-50 shadow-md
        ${
					theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
				}`}
			>
				<div className="text-2xl font-bold cursor-pointer select-none">
					JAF Logistics
				</div>

				{/* Desktop Links */}
				<ul className="hidden md:flex gap-8">
					{navLinks.map(({ to, label }) => (
						<li key={to}>
							<Link
								to={to}
								className={`font-medium px-1 py-2 transition-colors duration-300 ${
									location.pathname === to
										? theme === "dark"
											? "text-orange-400 border-b-2 border-orange-400"
											: "text-orange-600 border-b-2 border-orange-600"
										: theme === "dark"
										? "text-gray-300 hover:text-orange-400"
										: "text-gray-700 hover:text-orange-500"
								}`}
							>
								{label}
							</Link>
						</li>
					))}
				</ul>

				{/* Dark mode toggle button */}
				<button
					onClick={toggleTheme}
					className="ml-4 px-3 py-1 rounded-md border border-gray-500 hover:bg-gray-700 hover:text-white transition"
					aria-label="Toggle Dark Mode"
				>
					{theme === "light" ? "Dark Mode" : "Light Mode"}
				</button>
			</nav>
		</>
	);
}
