import "./CarData.css";
import CarDoor from "../../assets/icons/car-door.svg";
import GasStation from "../../assets/icons/gas-station.svg";
import Typography from "@mui/material/Typography";
import Transmission from "../../assets/icons/manual-transmission.svg";
import Seat from "../../assets/icons/seat.svg";

function CarData() {
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
							4
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
							Dizel
						</Typography>
					</div>
				</div>
			</div>
			{/* right data */}
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
							5
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
							DSG
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CarData;
