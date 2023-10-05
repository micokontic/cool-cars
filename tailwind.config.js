/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
import formsPlugin from "@tailwindcss/forms";

export default withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"cool-yellow": "#FFCA28",
				"cool-blue": "#1f2937",
			},
		},
	},
	extend: {
		// Extend the existing classes with custom classes
		scale: {
			103: "1.03",
		},
	},
	plugins: [formsPlugin],
	darkMode: "class",
});
