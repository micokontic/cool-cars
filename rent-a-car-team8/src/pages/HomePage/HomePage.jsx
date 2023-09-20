import CarsCarousel from "../../components/CarsCarousel/CarsCarousel";
import CarCard from "../../components/CarCard/CarCard";
import Hero from "../../components/Hero/Hero";
import Waves from "../../components/Waves/Waves";
import OurStats from "../../components/OurStats/OurStats";
import PriceDiscount from "../../components/PriceDiscount/PriceDiscount";
import "./HomePage.css";

function HomePage() {
	return (
		<>
			<Hero></Hero>
			<div className="home-page-container">
				<div>
					<CarsCarousel></CarsCarousel>
				</div>
				<div></div>
			</div>
			<Waves></Waves>
			<OurStats></OurStats>
			<PriceDiscount></PriceDiscount>
		</>
	);
}

export default HomePage;
