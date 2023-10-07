import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarCard from "../CarCard/CarCard";
import Loading from "../../components/Loading/Loading";
import "./CarsCarousel.css";
import { useState, useEffect } from "react";
import { CarServiceNew } from "../../service/beckCommunication";
const { getNewCars } = CarServiceNew;

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
	const [isLoading, setIsLoading] = useState(true);
	const [tenCars, setTenCars] = useState([]);
	const [centerSlidePercentage, setCenterSlidePercentage] = useState(33);

	useEffect(() => {
		function handleResize() {
			// Adjust centerSlidePercentage based on screen width
			const screenWidth = window.innerWidth;
			if (screenWidth > 1400) {
				setCenterSlidePercentage(33);
			} else if (screenWidth > 1000) {
				setCenterSlidePercentage(50);
			} else if (screenWidth > 800) {
				setCenterSlidePercentage(100);
			} else {
				setCenterSlidePercentage(100);
			}
		}

		// Add an event listener to handle window resizing
		window.addEventListener("resize", handleResize);

		// Call handleResize initially to set the initial value
		handleResize();

		const fetchData = async () => {
			try {
				const result = await getNewCars();
				var shortArray = result.data;
				setTenCars(shortArray);

				setIsLoading(false);
			} catch (err) {
				console.log(err);
				setIsLoading(false);
				setTenCars([car, car, car, car, car]);
			}
		};

		fetchData();

		// Cleanup the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return isLoading ? (
		<Loading></Loading>
	) : (
		<Carousel
			infiniteLoop={true}
			centerMode
			centerSlidePercentage={centerSlidePercentage}
			interval={2000}
			showIndicators={false}
			useKeyboardArrows={true}
			// Ovo ispod zamijeniti
			autoPlay={true}
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
		</Carousel>
	);
}

export default CarsCarousel;
