// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Prevent flash of dark mode */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function () {
								try {
									const theme = localStorage.getItem("theme");
									const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
									if (theme === "dark" || (!theme && prefersDark)) {
										document.documentElement.classList.add("dark");
									} else {
										document.documentElement.classList.remove("dark");
									}
								} catch (_) {}
							})();
						`,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
