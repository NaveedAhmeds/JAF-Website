import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon } from "lucide-react"; // or swap icons

export default function Navbar() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const location = useLocation();
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

		// Detect theme
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
			{/* Instant scroll bar glow */}
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					height: "4px",
					width: `${scrollProgress}%`,
					backgroundColor: "#ff6600",
					boxShadow: "0 0 10px #ff6600aa",
					zIndex: 9999,
					transition: "width 0.05s ease-out", // No delay, ultra responsive
				}}
			/>

			<nav
				className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 backdrop-blur-md shadow-md transition duration-300
					${theme === "dark" ? "bg-zinc-900/90 text-white" : "bg-white/70 text-gray-900"}
`}
			>
				<div className="text-2xl font-bold cursor-pointer select-none">
					JAF Logistics
				</div>

				<ul className="hidden md:flex gap-8">
					{navLinks.map(({ to, label }) => (
						<li key={to}>
							<Link
								to={to}
								className={`font-medium px-1 py-2 transition-colors duration-200 transform hover:scale-105 ${
									location.pathname === to
										? "text-orange-500 border-b-2 border-orange-500"
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

				{/* Theme toggle */}
				<button
					onClick={toggleTheme}
					className="ml-4 p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-orange-500 hover:text-white transition"
					aria-label="Toggle Theme"
				>
					{theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
				</button>
			</nav>
		</>
	);
}
