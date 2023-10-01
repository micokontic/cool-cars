import { useState, useEffect } from "react";
import FilterCars from "../../components/FiterCars/FilterCars";
import SliderFilter from "../../components/SliderFilter/SliderFilter";
import CarCard from "../../components/CarCard/CarCard";
import "./ModelsPage.css";
import { carServiceNew } from "../../service/beckCommunication";
const { getCars } = carServiceNew;

function ModelsPage({ superAdmin = false }) {
	const [sliderValue, setSliderValue] = useState([5, 100]);
	const [filter, setFilter] = useState({
		fuel_type: "Izaberi",
		transmission: "Izaberi",
		door_count: "Izaberi",
	});
	const [cars, setCars] = useState([]);

	const createURL = () => {
		var url = "";
		url = url + "?min_price=" + sliderValue[0] * 1000 + "&";
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

		return url;
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = createURL();
				console.log(url);
				const result = await getCars(url);
				setCars(result.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	const getCarsSubmit = () => {
		const getCarsApi = async () => {
			try {
				const url = createURL();
				console.log(url);
				const result = await getCars(url);
				console.log(result.data);
				setCars(result.data);
			} catch (err) {
				console.log(err);
			}
		};

		getCarsApi();
	};

	return (
		<>
			<div className="models-page-container px-3 lg:px-10 lg:pt-5 pt-10">
				<div className="p-8 space-y-2 bg-gray-900 text-gray-100 align-to-start lg:mx-0 mx-3 mb-5 mt-6">
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
			<div className="models-page-container px-3 lg:px-10 lg:pt-1">
				<div className="p-8 space-y-2 bg-gray-900 text-gray-100 align-to-start lg:mx-0 mx-3 mb-5">
					<div className="mt-4">
						<div className="list-of-unapproved-cars grid grid-cols-6 gap-4">
							{cars.map((car, i) => {
								return (
									<div
										key={i}
										className="lg:col-span-2 md:col-span-3 col-span-6"
									>
										<CarCard car={car} maxWidth={450}></CarCard>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ModelsPage;
