/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"accent-color": "#015871",
				"white-main": "#ffff",
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
