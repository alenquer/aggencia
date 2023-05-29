import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/keen-slider@latest/keen-slider.min.css"
				/>
			</Head>
			<body>
				<Script src="https://cdn.jsdelivr.net/npm/keen-slider@latest/keen-slider.js" />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
