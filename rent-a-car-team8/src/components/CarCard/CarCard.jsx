import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardData from "../CarData/CarData";

function CarCard() {
	return (
		<Card
			sx={{ maxWidth: 345, margin: "3% auto" }}
			className="car-card-container-inner"
		>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				image="https://bizrent.rs/wp-content/uploads/2023/05/Screenshot-2023-05-18-at-17.44.42.png"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" textAlign="left">
					Škoda SUPERB
				</Typography>
				<div className="line"></div>
				<Typography variant="body1" color="text.secondary" textAlign="left">
					Nova Škoda SUPERB izgleda samouvjereno, moderno i dinamično.
				</Typography>
				<CardData></CardData>
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
					300 €
				</Typography>
			</CardContent>
		</Card>
	);
}

export default CarCard;
