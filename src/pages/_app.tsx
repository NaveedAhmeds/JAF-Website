// pages/_app.tsx
import { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css"; // adjust path if different

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// Remove 'dark' class to force light mode on initial load
		document.documentElement.classList.remove("dark");
	}, []);

	return <Component {...pageProps} />;
}
