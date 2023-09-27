import { useState, useEffect } from "react";
import CarsCarousel from "../../components/CarsCarousel/CarsCarousel";
import CarCard from "../../components/CarCard/CarCard";
import Hero from "../../components/Hero/Hero";
import Waves from "../../components/Waves/Waves";
import OurStats from "../../components/OurStats/OurStats";
import PriceDiscount from "../../components/PriceDiscount/PriceDiscount";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import OurServices from "../../components/OurServices/OurServices";
import { carServiceNew } from "../../service/beckCommunication";

import "./HomePage.css";
const { getCheapestCar } = carServiceNew;

function HomePage() {
	const [cheapestCar, setCheapestCar] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getCheapestCar();
				console.log(result);
				console.log(result.data);
				setCheapestCar(result.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Hero></Hero>
			<div className="home-page-card-container">
				<div className="left inline-element">
					<SectionHeading
						heading={"Naši najprodavaniji automobili"}
						text={
							" Top 10 najprodavanijih automobila u našoj ponudi! U našem nastojanju da vam ponudimo najbolje vozne opcije, pažljivo smo izabrali ove automobile koji su se izdvojili u svojoj klasi."
						}
					></SectionHeading>
					<CarsCarousel></CarsCarousel>
				</div>
				<div className="cheapest inline-element">
					<SectionHeading heading={"Najjeftinije u ponudi"}></SectionHeading>
					<CarCard car={cheapestCar}></CarCard>
				</div>
			</div>
			<Waves></Waves>
			<OurStats></OurStats>
			<PriceDiscount></PriceDiscount>
			<OurServices></OurServices>
		</>
	);
}

export default HomePage;
