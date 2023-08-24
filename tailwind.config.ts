/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"accent-color": "#015871",
				"main-gray": "rgba(56, 56, 56, 0.869)",
				"white-main": "#ffff",
				yellow: "rgb(252, 237, 31)",
				
			},
			keyframes: {
				rotate: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
			},
			animation: {
				rotate: "rotate 5s linear infinite",
			},
		},
	},
	plugins: [],
};
