import { useState, useEffect } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import validateInputCar from "../../service/validateInputCar";

import "./AddCarForm.css";

import { carServiceNew } from "../../service/beckCommunication";
const { addCar } = carServiceNew;

const testCar = {
	vehicle_make: "Mercedes",
	vehicle_model: "A Class",
	year_of_manufacturing: "2022",
	description: "Strava kola i to",
	fuel_type: "Dizel",
	transmission: "Automatik",
	door_count: "5",
	seat_number: "4",
	vehicle_price: "50000.00",
};

const MenuProps = {
	getContentAnchorEl: null,
	PaperProps: {
		style: {
			maxHeight: 200,
			width: 300,
		},
	},
};

function AddUserForm() {
	const [car, setCar] = useState({
		fuel_type: "",
		transmission: "",
		door_count: "",
		vehicle_price: "",
		vehicle_make: "",
		vehicle_model: "",
		description: "",
		seat_number: "",
		year_of_manufacturing: "2022",
	});

	const [errors, setErrors] = useState({});

	const addCarSubmit = () => {
		const addCarApi = async () => {
			try {
				console.log("evo ih");
				console.log(car);
				console.log(testCar);
				const result = await addCar(car);
				console.log(result.data);
			} catch (err) {
				console.log(err);
			}
		};

		setErrors(validateInputCar(car));
		console.log("stampam ovo");
		console.log(errors);
		if (Object.keys(errors).length === 0) {
			addCarApi();
		}
	};

	const handleChange = (e) => {
		console.log(e);
		console.log(e.target);
		const { name, value } = e.target;

		// Update the formData state using the id as the key and value as the new value
		setCar((prevCar) => ({
			...prevCar,
			[name]: value,
		}));
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (file && file.type === "image/jpeg") {
			// If the file is a JPEG image, set it in state
			setCar((prevRetailer) => ({
				...prevRetailer,
				["file"]: file,
			}));
		} else {
			// If the file is not a JPEG image, show an error message
			setErrors((prevErrors) => ({
				...prevErrors,
				["file"]: "Slika moze biti jedino JPEG",
			}));
			e.target.value = null; // Clear the file input
		}
	};

	return (
		<section className="p-2 text-gray-50 text-left" id="add-car-form">
			<SectionHeading
				heading={"Dodajte novi oglas automobila"}
				colorWhite={true}
			></SectionHeading>
			<form
				noValidate=""
				action=""
				className="container flex flex-col mx-auto space-y-12"
			>
				<fieldset className="grid grid-cols-4 gap-6 py-6 rounded-md shadow-sm bg-gray-900">
					<div className="space-y-2 col-span-full lg:col-span-1">
						<p className="font-medium text-lg">
							Ovdje možete dodati oglas automobila
						</p>
						<p className="text-base">
							Molimo Vas da provjerite unos prije potvrde unosa.
						</p>
					</div>
					<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="vehicle_make" className="text-sm">
								Proizvođač automobila
							</label>
							<input
								name="vehicle_make"
								value={car.vehicle_make}
								type="text"
								placeholder="Škoda"
								className={`w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 ${
									errors.vehicle_make && "ring  ring-red-500"
								}`}
								onChange={handleChange}
							/>
							{errors.vehicle_make ? (
								<p className="text-red-500 text-xs mt-1">
									{errors.vehicle_make}
								</p>
							) : (
								<p className="text-transparent text-xs mt-1">place for error</p>
							)}
						</div>

						<div className="col-span-full sm:col-span-3">
							<label htmlFor="vehicle_model" className="text-sm">
								Model automobila
							</label>
							<input
								value={car.vehicle_model}
								name="vehicle_model"
								type="text"
								placeholder="Fabia"
								className={`w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 ${
									errors.vehicle_model && "ring  ring-red-500"
								}`}
								onChange={handleChange}
							/>
							{errors.vehicle_model ? (
								<p className="text-red-500 text-xs mt-1">
									{errors.vehicle_model}
								</p>
							) : (
								<p className="text-transparent text-xs mt-1">place for error</p>
							)}
						</div>

						<div className="col-span-full sm:col-span-3">
							<label htmlFor="vehicle_price" className="text-sm">
								Cijena automobila[EUR]
							</label>
							<input
								min="0"
								max="1000000"
								name="vehicle_price"
								type="number"
								placeholder="Unesite cijenu automobila"
								className={`w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 ${
									errors.vehicle_price && "ring  ring-red-500"
								}`}
								onChange={handleChange}
								value={car.vehicle_price}
							/>
							{errors.vehicle_price ? (
								<p className="text-red-500 text-xs mt-1">
									{errors.vehicle_price}
								</p>
							) : (
								<p className="text-transparent text-xs mt-1">place for error</p>
							)}
						</div>
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="seat_number" className="text-sm">
								Broj sjedišta
							</label>
							<input
								name="seat_number"
								min="0"
								max="50"
								type="number"
								placeholder="Unesite broj sjedišta"
								className={`w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 ${
									errors.seat_numbers && "ring  ring-red-500"
								}`}
								onChange={handleChange}
								value={car.seat_number}
							/>
							{errors.seat_number ? (
								<p className="text-red-500 text-xs mt-1">
									{errors.seat_number}
								</p>
							) : (
								<p className="text-transparent text-xs mt-1">place for error</p>
							)}
						</div>

						<div className="col-span-full sm:col-span-3 lg:col-span-2">
							<FormControl fullWidth>
								<label htmlFor="fuel_type" className="text-sm">
									Gorivo
								</label>

								<Select
									labelId="fuel_type"
									id="fuel_type"
									name="fuel_type"
									value={car.fuel_type}
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
									value={car.transmission}
									label="Mjenjač"
									onChange={handleChange}
									sx={{
										color: "#212121",
										display: "block",
										backgroundColor: "#fff",
									}}
								>
									<MenuItem value={"Manual"}>Manual</MenuItem>
									<MenuItem value={"Automatik"}>Automatik</MenuItem>
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
									value={car.door_count}
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

						<div className="col-span-full">
							<label htmlFor="description" className="text-sm">
								Opis automobila
							</label>
							<input
								value={car.description}
								name="description"
								type="text"
								placeholder="Kratak opis automobila"
								className={`w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 ${
									errors.description && "ring  ring-red-500"
								}`}
								onChange={handleChange}
							/>
							{errors.description ? (
								<p className="text-red-500 text-xs mt-1">
									{errors.description}
								</p>
							) : (
								<p className="text-transparent text-xs mt-1">place for error</p>
							)}
						</div>

						<div className="col-span-full space-y-1 text-gray-100">
							<label htmlFor="files" className="text-sm">
								Dodajte sliku automobila
							</label>
							<div className="flex">
								<input
									type="file"
									name="files"
									id="files"
									onChange={handleFileChange}
									className="px-8 py-7 border-2 border-dashed rounded-md border-gray-700 text-gray-400 bg-cool-blue w-full"
								/>
								{errors.file ? (
									<p className="text-red-500 text-xs mt-1">{errors.file}</p>
								) : (
									<p className="text-transparent text-xs mt-1">
										place for error
									</p>
								)}
							</div>
						</div>
					</div>
					<div></div>
					<div className="flex justify-end space-x-4 col-span-full sm:col-span-3">
						<button
							onClick={addCarSubmit}
							type="button"
							className="px-8 py-3 border rounded-md bg-amber-400 text-gray-900 border-amber-400 font-semibold"
						>
							Dodaj novi oglas
						</button>
					</div>
				</fieldset>
			</form>
		</section>
	);
}

export default AddUserForm;
