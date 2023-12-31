import { useState, useEffect } from "react";
import FilterCars from "../../components/FiterCars/FilterCars";
import SliderFilter from "../../components/SliderFilter/SliderFilter";
import CarCard from "../../components/CarCard/CarCard";
import "./ModelsPage.css";
import { CarServiceNew } from "../../service/beckCommunication";
import NoCarsToShow from "../../components/NoCarsToShow/NoCarsToShow";
import Loading from "../../components/Loading/Loading";

const { getCars } = CarServiceNew;

function ModelsPage({ superAdmin = false }) {
	const [sliderValue, setSliderValue] = useState([0, 100]);
	const [isLoading, setIsLoading] = useState(true);

	const [filter, setFilter] = useState({
		fuel_type: "Izaberi",
		transmission: "Izaberi",
		door_count: "Izaberi",
		car_body: "Izaberi",
	});
	const [cars, setCars] = useState([]);

	const createURL = () => {
		var url = "";
		url = url + "min_price=" + sliderValue[0] * 1000 + "&";
		url = url + "max_price=" + sliderValue[1] * 1000 + "&";
		if (filter.fuel_type != "Izaberi") {
			url = url + "fuel_type=" + filter.fuel_type + "&";
		}
		if (filter.transmission != "Izaberi") {
			url = url + "transmission=" + filter.transmission + "&";
		}
		if (filter.door_count != "Izaberi") {
			url = url + "door_count=" + filter.door_count + "&";
		}
		if (filter.car_body != "Izaberi") {
			url = url + "car_body=" + filter.car_body + "&";
		}

		return url;
	};

	const getCarsApi = async () => {
		try {
			const url = createURL();

			const result = await getCars(url);

			setCars(result.data.results);

			setTimeout(() => {
				setIsLoading(false);
			}, 1500);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getCarsApi();

		getCarsApi();
	}, []);

	const getCarsSubmit = () => {
		setIsLoading(true);
		getCarsApi();
	};

	return (
		<>
			<div className="models-page-container-main">
				<div className="models-page-container px-3 lg:px-5 lg:pt-5 pt-10">
					<div className="py-3 px-6 space-y-2 bg-gray-900 text-gray-100 align-to-start lg:mx-0 mx-3 mb-5 mt-6">
						<section className=" text-gray-100">
							<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
								<h2 className="text-xl font-semibold sm:text-2xl">
									Pronađite Vaše idealno vozilo
								</h2>
								<p className="mt-4 mb-3 text-gray-400">
									Postavite svoj opseg cijena za pretragu i karakteristike Vašeg
									traženog vozila.
								</p>
							</div>
						</section>
						<SliderFilter
							sliderValue={sliderValue}
							setSliderValue={setSliderValue}
						></SliderFilter>
						<FilterCars
							filter={filter}
							setFilter={setFilter}
							getCarsSubmit={getCarsSubmit}
						></FilterCars>
					</div>
				</div>

				<div className="models-page-container models-page-container-right px-3 lg:px-4 lg:pt-5 pt-10  ">
					<div className="p-8 space-y-2 bg-gray-900 text-gray-100 align-to-start lg:mx-0 mx-3 mb-5 mt-6 hight-must relative flex justify-center items-center">
						{isLoading ? (
							<div className="w-full h-full flex justify-center items-center">
								<Loading></Loading>
							</div>
						) : (
							<div className="mt-4">
								{cars.length > 0 ? (
									<>
										<div className="list-of-unapproved-cars grid grid-cols-6 gap-4">
											{cars.map((car, i) => (
												<div
													key={i}
													className="xl:col-span-2 lg:col-span-3 md:col-span-6 col-span-6"
												>
													<CarCard car={car} maxWidth={400}></CarCard>
												</div>
											))}
										</div>
									</>
								) : (
									<NoCarsToShow></NoCarsToShow>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default ModelsPage;
