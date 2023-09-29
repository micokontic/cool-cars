import { useState, useEffect } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { carServiceNew } from "../../service/beckCommunication";
const { addRetailer } = carServiceNew;

function AddUserForm() {
	const [retailer, setRetailer] = useState({
		username: "",
		email: "",
		first_name: "",
		last_name: "",
		password: "",
	});

	const addRetailerSubmit = () => {
		const addRetailerApi = async () => {
			try {
				const result = await addRetailer(retailer);
				console.log(result.data);
			} catch (err) {
				console.log(err);
			}
		};

		addRetailerApi();
	};

	const handleChange = (e) => {
		const { id, value } = e.target;

		// Update the formData state using the id as the key and value as the new value
		setRetailer((prevRetailer) => ({
			...prevRetailer,
			[id]: value,
		}));
	};

	return (
		<section className="p-2 text-gray-50 text-left">
			<SectionHeading
				heading={"Dodajte novog prodavca"}
				colorWhite={true}
			></SectionHeading>
			<form
				noValidate=""
				action=""
				className="container flex flex-col mx-auto space-y-12"
			>
				<fieldset className="grid grid-cols-4 gap-6 py-6 rounded-md shadow-sm bg-gray-900">
					<div className="space-y-2 col-span-full lg:col-span-1">
						<p className="font-medium text-lg">Dodajte novog prodavca</p>
						<p className="text-base">
							Moguće je dodati samo unaprijed provjerene prodavce!
						</p>
					</div>
					<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="first_name" className="text-sm">
								First name
							</label>
							<input
								id="first_name"
								type="text"
								placeholder="First name"
								className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
								onChange={handleChange}
							/>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="last_name" className="text-sm">
								Last name
							</label>
							<input
								id="last_name"
								type="text"
								placeholder="Last name"
								className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
								onChange={handleChange}
							/>
						</div>

						<div className="col-span-full sm:col-span-3">
							<label htmlFor="email" className="text-sm">
								Email
							</label>
							<input
								id="email"
								type="email"
								placeholder="Email"
								className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
								onChange={handleChange}
							/>
						</div>

						<div className="col-span-full sm:col-span-3">
							<label htmlFor="position" className="text-sm">
								Pozicija
							</label>
							<input
								id="position"
								type="text"
								placeholder="Pozicija zaposlenog"
								className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
								onChange={handleChange}
							/>
						</div>

						<div className="col-span-full sm:col-span-3">
							<label htmlFor="password" className="text-sm">
								Password
							</label>
							<input
								id="password"
								type="password"
								placeholder="Password"
								className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
								onChange={handleChange}
							/>
						</div>

						<div className="col-span-full sm:col-span-3">
							<label htmlFor="password" className="text-sm">
								Ponovite password
							</label>
							<input
								id="password"
								type="password"
								placeholder="Ponovite password"
								className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
								onChange={handleChange}
							/>
						</div>

						<div className="col-span-full sm:col-span-3">
							<label htmlFor="username" className="text-sm">
								Username
							</label>
							<input
								id="username"
								type="text"
								placeholder="Username"
								className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
								onChange={handleChange}
							/>
						</div>

						<div className="col-span-full space-y-1 text-gray-100">
							<label htmlFor="files" className="text-sm">
								Dodajte sliku prodavca
							</label>
							<div className="flex">
								<input
									type="file"
									name="files"
									id="files"
									className="px-8 py-7 border-2 border-dashed rounded-md border-gray-700 text-gray-400 bg-cool-blue w-full"
								/>
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
							Dodaj prodavca
						</button>
					</div>
				</fieldset>
			</form>
		</section>
	);
}

export default AddUserForm;
