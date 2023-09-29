import CarHero from "../../assets/SingleCarHero.png";
import { NavLink } from "react-router-dom";

function Hero() {
	return (
		<section className="bg-cool-blue text-gray-100">
			<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
				<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
					<h1 className="text-5xl font-bold leadi sm:text-6xl">
						Pronađite
						<span className="text-amber-400"> svoj </span> novi automobil
					</h1>
					<p className="mt-6 mb-8 text-lg sm:mb-12">
						Naši automobili su najbolji i nećemo{" "}
						<span className="text-amber-400"> Vas </span> prevariti
					</p>
					<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
						<NavLink to="/cars">
							<a
								rel="noopener noreferrer"
								href="#"
								className="px-8 py-3 text-lg font-semibold rounded bg-amber-400 text-gray-900"
							>
								Naša ponuda
							</a>
						</NavLink>
						<NavLink to="/contact">
							<a
								rel="noopener noreferrer"
								href="#"
								className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 border-2 sm:mt-3"
							>
								Kontakt
							</a>
						</NavLink>
					</div>
				</div>
				<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
					<img
						src={CarHero}
						alt=""
						className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
