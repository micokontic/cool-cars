import CarsCarousel from "../../components/CarsCarousel/CarsCarousel";
import CarCard from "../../components/CarCard/CarCard";
import Hero from "../../components/Hero/Hero";
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
		</>
	);
}

export default HomePage;
