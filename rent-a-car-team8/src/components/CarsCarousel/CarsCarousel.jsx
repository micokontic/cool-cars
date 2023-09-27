import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarCard from "../CarCard/CarCard";
import "./CarsCarousel.css";
import { useState, useEffect } from "react";
import { carServiceNew } from "../../service/beckCommunication";
const { getCars } = carServiceNew;

const car = {
	description: "Brza i pouzdana DUM",
	door_count: 5,
	fuel_type: "Dizel",
	id: 2,
	owner: 1,
	transmission: "Automatik",
	vehicle_make: "Skoda DUM",
	vehicle_model: "Fabia",
	vehicle_price: "40000.00",
	year_of_manufacturing: 2023,
};
function CarsCarousel() {
	const [tenCars, setTenCars] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getCars();
				console.log(result);
				console.log(result.data);
				var shortArray = result.data.slice(0, 5);
				setTenCars(shortArray);
				console.log(shortArray);
			} catch (err) {
				console.log(err);
				setTenCars([car, car, car, car, car]);
			}
		};

		fetchData();
	}, []);

	return (
		<Carousel
			infiniteLoop={true}
			centerMode
			centerSlidePercentage={33}
			interval={2000}
			showIndicators={false}
			useKeyboardArrows={true}
			// Ovo ispod zamijeniti
			autoPlay={false}
			transitionTime={500}
			showThumbs={false}
			showStatus={false}
		>
			{tenCars.map((car, i) => {
				return (
					<div key={i} className="carausel-card-container">
						<CarCard car={car}></CarCard>
					</div>
				);
			})}

			{/* {tenCars.map((car, i) => {
				return (
					<div key={i} className="carausel-card-container">
						<CarCard car={car}></CarCard>
					</div>
				);
			})} */}
		</Carousel>
	);
}

export default CarsCarousel;
