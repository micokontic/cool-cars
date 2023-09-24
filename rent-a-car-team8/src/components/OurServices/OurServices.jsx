function OurServices() {
	return (
		<section className="bg-cool-blue text-gray-100">
			<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
				<div>
					<h2 className="text-3xl font-bold tracki text-center sm:text-5xl text-gray-50">
						Naša kompanija nudi širok spektar drugih usluga
					</h2>
					<p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-400">
						Vaša destinacija za sve što vam je potrebno za vaš automobil.
					</p>
				</div>
				<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
					<div>
						<div className="mt-12 space-y-12">
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center w-12 h-12 rounded-md bg-amber-400 text-gray-900">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											className="w-7 h-7"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											></path>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-2xl font-medium leadi text-gray-50 text-left">
										Servis i održavanje vozila
									</h4>
									<p className="mt-2 text-lg text-gray-400 text-left">
										Naš tim stručnjaka je tu da vam pruži pouzdan servis i
										redovno održavanje vašeg automobila. Bez obzira na vaše
										potrebe, mi smo tu da vam pomognemo.
									</p>
								</div>
							</div>
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center w-12 h-12 rounded-md bg-amber-400 text-gray-900">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											className="w-7 h-7"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											></path>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-2xl font-medium leadi text-gray-50 text-left">
										Postprodajne usluge
									</h4>
									<p className="mt-2 text-lg text-gray-400 text-left">
										Nakon kupovine vašeg automobila, nudimo širok spektar
										postprodajnih usluga kako biste osigurali da vaše iskustvo
										vožnje bude besprekorno. Naša podrška vam je uvek na
										raspolaganju.
									</p>
								</div>
							</div>
							<div className="flex">
								<div className="flex-shrink-0">
									<div className="flex items-center justify-center w-12 h-12 rounded-md bg-amber-400 text-gray-900">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											className="w-7 h-7"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											></path>
										</svg>
									</div>
								</div>
								<div className="ml-4">
									<h4 className="text-2xl font-medium leadi text-gray-50 text-left">
										Tehnički pregled
									</h4>
									<p className="mt-2 text-lg text-gray-400 text-left">
										Osiguravamo sveobuhvatne tehničke preglede kako bismo vam
										pomogli da ostanete u skladu sa svim regulativama i
										osigurali sigurnost vašeg vozila. Vaša bezbednost nam je
										prioritet.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div aria-hidden="true" className="mt-10 lg:mt-0">
						<img
							src="https://www.peninsulaautoclinic.com.au/wp-content/uploads/2022/04/What-Does-A-Full-Service-Include-On-A-Car.png"
							alt=""
							className="mx-auto rounded-lg shadow-lg bg-gray-500"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default OurServices;
