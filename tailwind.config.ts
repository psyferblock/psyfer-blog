/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config:Config  = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],

	daisyui: {
		themes: [
			{
				lightTheme: {
					primary: "#54deea",
					secondary: "#e5a46b",
					accent: "#57e5e3",
					neutral: "#252937",
					"base-100": "#ffffff",
					info: "#79a7f1",
					success: "#3fd5be",
					warning: "#fbd365",
					error: "#e74132",
          body: {
            "background-color": "#e3e6e6",
          },
				},
			},
		],
	},
	plugins: [require("daisyui")],
};

export default config