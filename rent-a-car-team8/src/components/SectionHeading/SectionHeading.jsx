function SectionHeading({ heading, text = "", colorWhite = "" }) {
	return (
		<section
			className={`py-1  ${colorWhite ? "text-gray-400" : "text-gray-900"}`}
		>
			<div className="container flex flex-col justify-center p-2 mx-auto space-y-8 mt-7 px-7 md:py-4 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row border-b-4 border-dotted">
				<div className="flex flex-col space-y-4 text-center lg:text-left">
					<h1 className="text-5xl font-bold leadi">{heading}</h1>
					<p className="text-lg">{text}</p>
				</div>
			</div>
		</section>
	);
}

export default SectionHeading;
