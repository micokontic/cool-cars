/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";
import formsPlugin from "@tailwindcss/forms";

export default withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"cool-yellow": "#ffca28", // Replace with your desired color code
			},
		},
	},
	plugins: [formsPlugin],
	darkMode: "class",
});
