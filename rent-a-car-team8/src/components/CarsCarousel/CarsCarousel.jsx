import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarCard from "../CarCard/CarCard";
import "./CarsCarousel.css";

function CarsCarousel() {
	return (
		<Carousel
			infiniteLoop={true}
			centerMode
			centerSlidePercentage={33}
			interval={2000}
			showIndicators={false}
			useKeyboardArrows={true}
			autoPlay={false}
			transitionTime={500}
			showThumbs={false}
			showStatus={false}
		>
			<div className="carausel-card-container">
				<CarCard></CarCard>
			</div>
			<div>
				<CarCard></CarCard>
			</div>
			<div>
				<CarCard></CarCard>
			</div>
			<div>
				<CarCard></CarCard>
			</div>
			<div>
				<CarCard></CarCard>
			</div>
			<div>
				<CarCard></CarCard>
			</div>
		</Carousel>
	);
}

export default CarsCarousel;
