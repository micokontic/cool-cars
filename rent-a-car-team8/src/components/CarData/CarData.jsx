import "./CarData.css";
import CarDoor from "../../assets/icons/car-door.svg";
import GasStation from "../../assets/icons/gas-station.svg";
import Typography from "@mui/material/Typography";
import Transmission from "../../assets/icons/manual-transmission.svg";
import Seat from "../../assets/icons/seat.svg";

function CarData({
	car = {
		description: "Brza i pouzdana",
		door_count: 5,
		fuel_type: "Dizel",
		id: 2,
		owner: 1,
		transmission: "Automatik",
		vehicle_make: "Skoda",
		vehicle_model: "Fabia",
		vehicle_price: "40000.00",
		year_of_manufacturing: 2023,
	},
}) {
	return (
		<div className="car-data">
			{/* left data */}
			<div>
				<div className="detail">
					<div className="icon">
						<img src={CarDoor} alt="Car door" />
					</div>
					<div className="text">
						<Typography
							variant="h5"
							color="text.secondary"
							textAlign="left"
							ml={2}
						>
							{car.door_count}
						</Typography>
					</div>
				</div>

				<div className="detail">
					<div className="icon">
						<img src={GasStation} alt="Car door" />
					</div>
					<div className="text">
						<Typography
							variant="h5"
							color="text.secondary"
							textAlign="left"
							ml={2}
						>
							{car.fuel_type}
						</Typography>
					</div>
				</div>
			</div>

			<div>
				<div className="detail">
					<div className="icon">
						<img src={Seat} alt="Car door" />
					</div>
					<div className="text">
						<Typography
							variant="h5"
							color="text.secondary"
							textAlign="left"
							ml={2}
						>
							{car.door_count}
						</Typography>
					</div>
				</div>

				<div className="detail">
					<div className="icon">
						<img src={Transmission} alt="Car door" />
					</div>
					<div className="text">
						<Typography
							variant="h5"
							color="text.secondary"
							textAlign="left"
							ml={2}
						>
							{car.transmission}
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CarData;
