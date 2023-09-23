import SectionHeading from "../SectionHeading/SectionHeading";

function AddUserForm() {
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
							<label htmlFor="firstname" className="text-sm">
								First name
							</label>
							<input
								id="firstname"
								type="text"
								placeholder="First name"
								className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
							/>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="lastname" className="text-sm">
								Last name
							</label>
							<input
								id="lastname"
								type="text"
								placeholder="Last name"
								className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
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
							/>
						</div>
						<div className="col-span-full sm:col-span-3">
							<label htmlFor="company" className="text-sm">
								Kompanija prodavca
							</label>
							<input
								id="company"
								type="text"
								placeholder="Kompanija"
								className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900"
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
									className="px-8 py-7 border-2 border-dashed rounded-md border-gray-700 text-gray-400 bg-gray-800 w-full"
								/>
							</div>
						</div>
					</div>
					<div></div>
					<div className="flex justify-end space-x-4 col-span-full sm:col-span-3">
						<button
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
