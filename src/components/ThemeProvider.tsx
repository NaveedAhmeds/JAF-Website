import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: Theme;
	storageKey?: string;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
	theme: "system",
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
	children,
	defaultTheme = "light", // Set light as default
	storageKey = "vite-ui-theme",
	...props
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	const [isMounted, setIsMounted] = useState(false); // To prevent SSR mismatch

	useEffect(() => {
		const root = window.document.documentElement;
		const storedTheme = localStorage.getItem(storageKey) as Theme | null;

		const resolvedTheme =
			storedTheme ||
			(defaultTheme === "system"
				? window.matchMedia("(prefers-color-scheme: dark)").matches
					? "dark"
					: "light"
				: defaultTheme);

		root.classList.remove("light", "dark");
		root.classList.add(resolvedTheme);
		setTheme(resolvedTheme);
		setIsMounted(true);
	}, [defaultTheme, storageKey]);

	const value = {
		theme,
		setTheme: (newTheme: Theme) => {
			const root = window.document.documentElement;
			localStorage.setItem(storageKey, newTheme);
			root.classList.remove("light", "dark");
			if (newTheme === "system") {
				const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
					.matches
					? "dark"
					: "light";
				root.classList.add(systemTheme);
				setTheme("system");
			} else {
				root.classList.add(newTheme);
				setTheme(newTheme);
			}
		},
	};

	if (!isMounted) return null; // Prevents flashing wrong theme

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);
	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
