import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

export const productSans = localFont({
	src: [
		{
			path: "../../public/fonts/Product-Sans-Regular.ttf",
			weight: "400",
			style: "normal"
		},
		{
			path: "../../public/fonts/Product-Sans-Bold.ttf",
			weight: "700",
			style: "bold"
		}
	],
	variable: "--font-product-sans"
});

export const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });
