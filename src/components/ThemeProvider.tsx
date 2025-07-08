import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light"; // Only allow light mode now

type ThemeProviderProps = {
	children: React.ReactNode;
};

type ThemeProviderState = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
	theme: "light",
	setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>("light");

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove("dark");
		root.classList.add("light");
	}, []); // Run only once on mount

	const value = {
		theme,
		setTheme: () => {}, // Disable changing theme
	};

	return (
		<ThemeProviderContext.Provider value={value}>
			{children}
		</ThemeProviderContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext);
	if (!context) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
};
