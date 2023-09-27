import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardData from "../CarData/CarData";
import ApproveTick from "./ApproveTick";
import DisapproveTick from "./DisapproveTick";

function CarCard({
	unApproved = false,
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
		<Card
			sx={{
				maxWidth: 345,
				margin: "3% auto",
			}}
			className="car-card-container-inner"
		>
			{unApproved ? (
				<div className="relative">
					<div className="absolute top-3 right-3">
						<ApproveTick></ApproveTick>
						<DisapproveTick></DisapproveTick>
					</div>
				</div>
			) : (
				""
			)}
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				image="https://bizrent.rs/wp-content/uploads/2023/05/Screenshot-2023-05-18-at-17.44.42.png"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" textAlign="left">
					{car.vehicle_make} {car.vehicle_model}
				</Typography>
				<div className="line"></div>
				<Typography
					variant="body1"
					textAlign="left"
					sx={{ fontWeight: 700, marginBottom: "0.5rem" }}
				>
					Auto ČačakPodgorica
				</Typography>
				<Typography variant="body1" color="text.secondary" textAlign="left">
					{car.description}
				</Typography>
				<CardData car={car}></CardData>
				<Typography
					gutterBottom
					variant="h4"
					component="div"
					textAlign="right"
					mt={3}
					mr={1}
					letterSpacing={1}
					fontWeight={600}
				>
					<Typography variant="body1" color="text.secondary" textAlign="inline">
						Već od
					</Typography>
					{car.vehicle_price}
				</Typography>
			</CardContent>
		</Card>
	);
}

export default CarCard;
