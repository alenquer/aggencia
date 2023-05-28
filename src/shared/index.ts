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
