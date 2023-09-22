import CarsCarousel from "../../components/CarsCarousel/CarsCarousel";
import CarCard from "../../components/CarCard/CarCard";
import Hero from "../../components/Hero/Hero";
import Waves from "../../components/Waves/Waves";
import OurStats from "../../components/OurStats/OurStats";
import PriceDiscount from "../../components/PriceDiscount/PriceDiscount";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./HomePage.css";

function HomePage() {
	return (
		<>
			<Hero></Hero>
			<div className="home-page-card-container">
				<div>
					<SectionHeading
						heading={"Naši najprodavaniji automobili"}
						text={
							" Subscribe to my weekly newsletter to find out about the latest and greatest news about just about everything!"
						}
					></SectionHeading>
					<CarsCarousel></CarsCarousel>
				</div>
				<div>
					<CarCard></CarCard>
				</div>
			</div>
			<Waves></Waves>
			<OurStats></OurStats>
			<PriceDiscount></PriceDiscount>
		</>
	);
}

export default HomePage;
