import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function FilterCars() {
	const [carFilters, setCarFilters] = useState({
		fuel_type: "Dizel",
		transmission: "DSG",
		door_count: "4",
		price: "10000",
		vehicle_make: "Skoda",
		vehicle_model: "Fabia",
		description: "Fin auto za male pare",
		seat_number: "3",
	});

	const handleChange = (e) => {
		console.log(e);
		console.log(e.target);
		const { name, value } = e.target;

		// Update the formData state using the id as the key and value as the new value
		setCarFilters((prevCar) => ({
			...prevCar,
			[name]: value,
		}));
	};

	return (
		<fieldset className="grid grid-cols-6 gap-6 py-6 rounded-md shadow-sm bg-gray-900">
			<div className="col-span-full sm:col-span-3 lg:col-span-2">
				<FormControl fullWidth>
					<label htmlFor="fuel_type" className="text-sm">
						Gorivo
					</label>

					<Select
						labelId="fuel_type"
						id="fuel_type"
						name="fuel_type"
						value={carFilters.fuel_type}
						label="Gorivo"
						onChange={handleChange}
						sx={{
							color: "#212121",
							display: "block",
							backgroundColor: "#fff",
						}}
					>
						<MenuItem value={"Dizel"}>Dizel</MenuItem>
						<MenuItem value={"Benzin"}>Benzin</MenuItem>
						<MenuItem value={"Električni"}>Električni</MenuItem>
						<MenuItem value={"Hibrid"}>Hibrid</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className="col-span-full sm:col-span-3 lg:col-span-2">
				<FormControl fullWidth>
					<label htmlFor="transmission" className="text-sm">
						Mjenjač
					</label>
					<Select
						labelId="transmission"
						id="transmission"
						name="transmission"
						value={carFilters.transmission}
						label="Mjenjač"
						onChange={handleChange}
						sx={{
							color: "#212121",
							display: "block",
							backgroundColor: "#fff",
						}}
					>
						<MenuItem value={"Manuelni"}>Manuelni</MenuItem>
						<MenuItem value={"Automatski"}>Automatski</MenuItem>
						<MenuItem value={"DSG"}>DSG</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className="col-span-full sm:col-span-3 lg:col-span-2">
				<FormControl fullWidth>
					<label htmlFor="door_count" className="text-sm">
						Broj vrata
					</label>
					<Select
						labelId="door_count"
						id="door_count"
						name="door_count"
						value={carFilters.door_count}
						label="Broj vrata"
						onChange={handleChange}
						sx={{
							color: "#212121",
							display: "block",
							backgroundColor: "#fff",
						}}
					>
						<MenuItem value={"2"}>2</MenuItem>
						<MenuItem value={"3"}>3</MenuItem>
						<MenuItem value={"4"}>4</MenuItem>
						<MenuItem value={"5"}>5</MenuItem>
					</Select>
				</FormControl>
			</div>
		</fieldset>
	);
}

export default FilterCars;
