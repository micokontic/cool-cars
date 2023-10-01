import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
	let numberString = value.toString();

	// Use a regular expression to add commas as thousands separators
	numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

	return numberString;
}

export default function SliderFilter() {
	const [value, setValue] = React.useState([5000, 100000]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Slider
				getAriaLabel={() => "Opseg cijena"}
				value={value}
				onChange={handleChange}
				valueLabelDisplay="auto"
				getAriaValueText={valuetext}
			/>
		</Box>
	);
}
