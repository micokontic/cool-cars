import React from "react";

function NoCarsToShow() {
	return (
		<div className="log-in-form-container bg-gray-900">
			<div className="log-in-form-inner-container mx-4">
				<section className="flex items-center h-full p-16  text-gray-100 bg-opacity-100 bg-gray-900">
					<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
						<div className="max-w-md text-center">
							<h2 className="mb-8 font-extrabold text-9xl text-gray-600">
								<span className="sr-only">Hmmm</span>
							</h2>
							<p className="text-2xl font-semibold md:text-3xl">
								Ne postoje automobili koji odgovaraju ovoj pretrazi!
							</p>
							<p className="mt-4 mb-8 text-gray-400">
								Molimo Vas probajte sa nekim drugim filtrom
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default NoCarsToShow;
