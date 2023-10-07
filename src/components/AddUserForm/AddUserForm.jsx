import { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { CarServiceNew } from "../../service/beckCommunication";
import validateInputUser from "../../utils/validateInputUser";

const { addRetailer, patchUser } = CarServiceNew;

function AddUserForm({
	edit = false,
	profileData = {
		username: "",
		email: "",
		first_name: "",
		last_name: "",
		password: "",
		position: "",
	},
	setRefresh = () => {},
	refresh,
}) {
	const [retailer, setRetailer] = useState(profileData);

	const [errors, setErrors] = useState({});

	const addRetailerApi = async () => {
		try {
			if (edit) {
				console.log(retailer);
				console.log(profileData.id);
				const result = await patchUser(retailer, profileData.id);
				console.log(result.data);
			} else {
				const result = await addRetailer(retailer);
				console.log(result.data);
			}

			setRefresh(!refresh);
		} catch (error) {
			console.log(error);
		}
	};

	const addRetailerSubmit = () => {
		const validationErrors = validateInputUser(retailer);
		setErrors(validationErrors);
		console.log("stampam ovo");
		console.log(errors);
		setTimeout(() => {
			if (Object.keys(errors).length === 0) {
				console.log("pozivam server");

				addRetailerApi();
			}
		}, 2000);
	};

	const handleChange = (e) => {
		const { id, value } = e.target;

		// Update the formData state using the id as the key and value as the new value
		setRetailer((prevRetailer) => ({
			...prevRetailer,
			[id]: value,
		}));
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];

		if (file && file.type === "image/jpeg") {
			// If the file is a JPEG image, set it in state
			setRetailer((prevRetailer) => ({
				...prevRetailer,
				["img"]: file,
			}));
		} else {
			// If the file is not a JPEG image, show an error message
			setErrors((prevErrors) => ({
				...prevErrors,
				["img"]: "Slika moze biti jedino JPEG",
			}));
			e.target.value = null; // Clear the file input
		}
	};

	return (
		<section className="p-2 text-gray-50 text-left">
			<SectionHeading
				heading={edit ? "Izmijenite Vaše podatke" : "Dodajte novog prodavca"}
				colorWhite={true}
			></SectionHeading>
			<form
				noValidate=""
				action=""
				className="container flex flex-col mx-auto space-y-12"
				encType="multipart/form-data"
			>
				<fieldset className="grid grid-cols-4 gap-6 py-6 rounded-md shadow-sm bg-gray-900">
					<div className="space-y-2 col-span-full lg:col-span-1">
						{edit ? (
							<>
								<p className="font-medium text-lg">Promijenite Vaše podatke</p>
								<p className="text-base">
									Ovdje možete promijeniti podatke o Vašem nalogu.
								</p>
							</>
						) : (
							<>
								<p className="font-medium text-lg">Dodajte novog prodavca</p>
								<p className="text-base">
									Moguće je dodati samo unaprijed provjerene prodavce!
								</p>
							</>
						)}
					</div>
					<div className="grid grid-cols-6 gap-y-0 gap-x-6 col-span-full lg:col-span-3">
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="first_name" className="text-sm">
								First name
							</label>
							<input
								value={retailer.first_name}
								id="first_name"
								type="text"
								placeholder="First name"
								className={`w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 ${
									errors.first_name && "ring  ring-red-500"
								}`}
								onChange={handleChange}
							/>
							{errors.first_name ? (
								<p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
							) : (
								<p className="text-transparent text-xs mt-1">place for error</p>
							)}
						</div>
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="last_name" className="text-sm">
								Last name
							</label>
							<input
								value={retailer.last_name}
								id="last_name"
								type="text"
								placeholder="Last name"
								className={`w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 ${
									errors.last_name && "ring  ring-red-500"
								}`}
								onChange={handleChange}
							/>
							{errors.last_name ? (
								<p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
							) : (
								<p className="text-transparent text-xs mt-1">place for error</p>
							)}
						</div>

						<div className="col-span-full sm:col-span-3">
							<label htmlFor="email" className="text-sm">
								Email
							</label>
							<input
								id="email"
								type="email"
								placeholder="Email"
								value={retailer.email}
								className={`w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 ${
									errors.email && "ring  ring-red-500"
								}`}
								onChange={handleChange}
							/>
							{errors.email ? (
								<p className="text-red-500 text-xs mt-1">{errors.email}</p>
							) : (
								<p className="text-transparent text-xs mt-1">place for error</p>
							)}
						</div>

						<div className="col-span-full sm:col-span-3">
							<label htmlFor="position" className="text-sm">
								Pozicija
							</label>
							<input
								id="position"
								type="text"
								value={retailer.position}
								placeholder="Pozicija zaposlenog"
								className={`w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 ${
									errors.position && "ring  ring-red-500"
								}`}
								onChange={handleChange}
							/>
							{errors.position ? (
								<p className="text-red-500 text-xs mt-1">{errors.position}</p>
							) : (
								<p className="text-transparent text-xs mt-1">place for error</p>
							)}
						</div>

						<div className="col-span-full sm:col-span-3">
							<label htmlFor="password" className="text-sm">
								Password
							</label>
							<input
								id="password"
								type="password"
								placeholder="Password"
								className={`w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 ${
									errors.password && "ring  ring-red-500"
								}`}
								onChange={handleChange}
							/>
							{errors.password ? (
								<p className="text-red-500 text-xs mt-1">{errors.password}</p>
							) : (
								<p className="text-transparent text-xs mt-1">place for error</p>
							)}
						</div>

						<div className="col-span-full sm:col-span-3">
							<label htmlFor="password2" className="text-sm">
								Ponovite password
							</label>
							<input
								id="password2"
								type="password"
								placeholder="Ponovite password"
								className={`w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 ${
									errors.password2 && "ring  ring-red-500"
								}`}
								onChange={handleChange}
							/>
							{errors.password2 ? (
								<p className="text-red-500 text-xs mt-1">{errors.password2}</p>
							) : (
								<p className="text-transparent text-xs mt-1">place for error</p>
							)}
						</div>

						<div className="col-span-full sm:col-span-3">
							<label htmlFor="username" className="text-sm">
								Username
							</label>
							<input
								id="username"
								type="text"
								value={retailer.username}
								placeholder="Username"
								className={`w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900 ${
									errors.username && `ring  ring-red-500`
								}`}
								onChange={handleChange}
							/>
							{errors.username ? (
								<p className="text-red-500 text-xs mt-1">{errors.username}</p>
							) : (
								<p className="text-transparent text-xs mt-1">place for error</p>
							)}
						</div>

						<div className="col-span-full space-y-1 text-gray-100">
							<label htmlFor="file" className="text-sm">
								Dodajte sliku prodavca
							</label>
							<div className="flex flex-col">
								<input
									type="file"
									name="file"
									id="file"
									onChange={handleFileChange}
									className={`px-8 py-7 border-2 border-dashed rounded-md border-gray-700 text-gray-400 bg-cool-blue w-full ${
										errors.img && `border-red-500`
									}`}
								/>
								{errors.img ? (
									<p className="text-red-500 text-xs mt-1 block">
										{errors.img}
									</p>
								) : (
									<p className="text-transparent text-xs mt-1 block">
										place for error
									</p>
								)}
							</div>
						</div>
					</div>
					<div></div>
					<div className="flex justify-end space-x-4 col-span-full sm:col-span-3">
						<button
							onClick={addRetailerSubmit}
							type="button"
							className="px-8 py-3 border rounded-md bg-amber-400 text-gray-900 border-amber-400 font-semibold"
						>
							{edit ? "Promijeni podatke" : "Dodaj prodavca"}
						</button>
					</div>
				</fieldset>
			</form>
		</section>
	);
}

export default AddUserForm;
