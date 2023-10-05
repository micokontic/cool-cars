import "./OurStats.css";

function OurStats() {
	return (
		<section className="p-6 pt-0 bg-cool-blue text-gray-100 pull-down">
			<div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
				<div className="flex flex-col justify-start m-2 lg:m-6">
					<p className="text-4xl font-bold leadi lg:text-6xl">500+</p>
					<p className="text-sm sm:text-base">Klijenata</p>
				</div>
				<div className="flex flex-col justify-start m-2 lg:m-6">
					<p className="text-4xl font-bold leadi lg:text-6xl">89K</p>
					<p className="text-sm sm:text-base">Pratioca na društvenim mrežama</p>
				</div>
				<div className="flex flex-col justify-start m-2 lg:m-6">
					<p className="text-4xl font-bold leadi lg:text-6xl">30000+</p>
					<p className="text-sm sm:text-base">Prodatih automobila</p>
				</div>
				<div className="flex flex-col justify-start m-2 lg:m-6">
					<p className="text-4xl font-bold leadi lg:text-6xl">128</p>
					<p className="text-sm sm:text-base">Zaposlenih</p>
				</div>
				<div className="flex flex-col justify-start m-2 lg:m-6">
					<p className="text-4xl font-bold leadi lg:text-6xl">15</p>
					<p className="text-sm sm:text-base">Godina iskustva</p>
				</div>
				<div className="flex flex-col justify-start m-2 lg:m-6">
					<p className="text-4xl font-bold leadi lg:text-6xl">12</p>
					<p className="text-sm sm:text-base">Prodajnih mjesta</p>
				</div>
			</div>
		</section>
	);
}

export default OurStats;
