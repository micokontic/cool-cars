import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function FilterCars({ setFilter, filter, getCarsSubmit }) {
	const handleChange = (e) => {
		console.log(e);
		console.log(e.target);
		const { name, value } = e.target;

		// Update the formData state using the id as the key and value as the new value
		setFilter((prevCar) => ({
			...prevCar,
			[name]: value,
		}));
	};

	return (
		<fieldset className="grid grid-cols-12 gap-6 py-6 rounded-md shadow-sm bg-gray-900">
			<div className="col-span-full sm:col-span-6 lg:col-span-3">
				<FormControl fullWidth>
					<label htmlFor="fuel_type" className="text-sm">
						Gorivo
					</label>

					<Select
						labelId="fuel_type"
						id="fuel_type"
						name="fuel_type"
						value={filter.fuel_type}
						label="Gorivo"
						onChange={handleChange}
						sx={{
							color: "#212121",
							display: "block",
							backgroundColor: "#fff",
						}}
					>
						<MenuItem value="Izaberi">
							<em>Izaberi</em>
						</MenuItem>
						<MenuItem value={"Dizel"}>Dizel</MenuItem>
						<MenuItem value={"Benzin"}>Benzin</MenuItem>
						<MenuItem value={"Električno"}>Električno</MenuItem>
						<MenuItem value={"Hibrid"}>Hibrid</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className="col-span-full sm:col-span-6 lg:col-span-3">
				<FormControl fullWidth>
					<label htmlFor="transmission" className="text-sm">
						Mjenjač
					</label>
					<Select
						labelId="transmission"
						id="transmission"
						name="transmission"
						value={filter.transmission}
						label="Mjenjač"
						onChange={handleChange}
						sx={{
							color: "#212121",
							display: "block",
							backgroundColor: "#fff",
						}}
					>
						<MenuItem value="Izaberi">
							<em>Izaberi</em>
						</MenuItem>
						<MenuItem value={"Manual"}>Manual</MenuItem>
						<MenuItem value={"Automatik"}>Automatik</MenuItem>
						<MenuItem value={"DSG"}>DSG</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className="col-span-full sm:col-span-6 lg:col-span-3">
				<FormControl fullWidth>
					<label htmlFor="door_count" className="text-sm">
						Broj vrata
					</label>
					<Select
						labelId="door_count"
						id="door_count"
						name="door_count"
						value={filter.door_count}
						label="Broj vrata"
						onChange={handleChange}
						sx={{
							color: "#212121",
							display: "block",
							backgroundColor: "#fff",
						}}
					>
						<MenuItem value="Izaberi">
							<em>Izaberi</em>
						</MenuItem>
						<MenuItem value={"2"}>2</MenuItem>
						<MenuItem value={"3"}>3</MenuItem>
						<MenuItem value={"4"}>4</MenuItem>
						<MenuItem value={"5"}>5</MenuItem>
					</Select>
				</FormControl>
			</div>
			<div className="col-span-full sm:col-span-6 lg:col-span-3">
				<FormControl fullWidth>
					<label htmlFor="car_body" className="text-sm">
						Karoserija
					</label>
					<Select
						labelId="car_body"
						id="car_body"
						name="car_body"
						value={filter.car_body}
						label="Karoserija"
						onChange={handleChange}
						sx={{
							color: "#212121",
							display: "block",
							backgroundColor: "#fff",
						}}
					>
						<MenuItem value="Izaberi">
							<em>Izaberi</em>
						</MenuItem>
						<MenuItem value={"Limuzina"}>Limuzina</MenuItem>
						<MenuItem value={"Karavan"}>Karavan</MenuItem>
						<MenuItem value={"Kupe"}>Kupe</MenuItem>
						<MenuItem value={"Kabriolet"}>Kabriolet</MenuItem>
						<MenuItem value={"SUV"}>SUV</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className="col-span-full  flex flex-col">
				<label
					htmlFor="door_count"
					className="text-sm"
					style={{ color: "rgb(33,33,33)", display: "block" }}
				>
					dsadsad
				</label>
				<button
					onClick={getCarsSubmit}
					type="button"
					className="px-8 py-4 border rounded-md bg-amber-400 text-gray-900 border-amber-400 font-semibold text-lg"
				>
					Pronađi svoj automobil
				</button>
			</div>
		</fieldset>
	);
}

export default FilterCars;
