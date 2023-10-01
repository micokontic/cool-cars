import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";

function valuetext(value) {
	let numberString = (value * 1000).toString();

	// Use a regular expression to add commas as thousands separators
	numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " €";
	console.log(numberString);
	return numberString;
}

const minDistance = 5;

export default function SliderFilter({ setSliderValue, sliderValue }) {
	const handleChange = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (newValue[1] - newValue[0] < minDistance) {
			if (activeThumb === 0) {
				const clamped = Math.min(newValue[0], 100 - minDistance);
				setSliderValue([clamped, clamped + minDistance]);
			} else {
				const clamped = Math.max(newValue[1], minDistance);
				setSliderValue([clamped - minDistance, clamped]);
			}
		} else {
			setSliderValue(newValue);
		}
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Typography id="input-slider" gutterBottom>
				Opseg cijena za pretragu
			</Typography>
			<Slider
				aria-label="Always visible"
				getAriaLabel={() => "Opseg cijena"}
				value={sliderValue}
				onChange={handleChange}
				valueLabelDisplay="on"
				valueLabelFormat={valuetext}
				disableSwap
			/>
		</Box>
	);
}
