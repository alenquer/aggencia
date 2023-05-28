/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#00aca3",
				secondary: "#009cc4",
				label: "#025290"
			},
			animation: {
				fly: "fly 6s linear infinite"
			},
			keyframes: {
				fly: {
					"0%": { transform: "translate(0, 0)" },
					"50%": { transform: "translate(0, 12px)" },
					"100%": { transform: "translate(0, 0)" }
				}
			}
		}
	},
	plugins: [
		// ...
		require("@tailwindcss/line-clamp")
	]
};
