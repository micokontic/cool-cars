import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardData from "../CarData/CarData";
import ApproveTick from "./ApproveTick";
import Button from "@mui/material/Button";
import DisapproveTick from "./DisapproveTick";
import DeleteCar from "./DeleteCar";
import { Modal, Box } from "@mui/material";
import { CarServiceNew } from "../../service/beckCommunication";
import './Modal.css'
import "./CarCard.css";
const { patchCar, deleteCar } = CarServiceNew;

function CarCard({
	unApproved = false,
	maxWidth = 345,
	deletePossible = false,
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
		seat_number: "4",
		car_body: "Limuzina",
	},
	setRefresh = () => {
		console.log("dummy");
	},
	refresh,
}) {
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedCar, setSelectedCar] = useState(null);
	const [galleryImages, setGalleryImages] = useState([]);

	function hasWWW(str) {
		return str.indexOf("https") !== -1;
	}

	const patchCarApi = async (status) => {
		try {
			const result = await patchCar(status, car.id);
			console.log(result.data);
			setRefresh(!refresh);
		} catch (err) {
			console.log(err);
		}
	};

	const patchCarSubmit = (status) => {
		console.log("patchujem");

		patchCarApi(status);
	};

	const deleteCarApi = async () => {
		try {
			const result = await deleteCar(car.id);
			console.log(result.data);
			setRefresh(!refresh);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteCarSubmit = () => {
		console.log("brisem");

		deleteCarApi();
	};

	
  

	const openModal = () => {
		setModalOpen(true);
	};

    

  

	const closeModal = () => {
		setSelectedCar(null);
		setModalOpen(false);
	};

	{
		return (
			<>
				<Card
					sx={{
						maxWidth: { maxWidth },
						margin: "3% auto",
					}}
					className="car-card-container-inner"
					onClick={() => openModal(car)}
				>
					{unApproved ? (
						<div className="relative">
							<div className="absolute top-3 right-3">
								{deletePossible ? (
									<DeleteCar deleteCarSubmit={deleteCarSubmit}></DeleteCar>
								) : (
									<>
										<ApproveTick patchCarSubmit={patchCarSubmit}></ApproveTick>
										<DisapproveTick
											patchCarSubmit={patchCarSubmit}
										></DisapproveTick>
									</>
								)}
							</div>
						</div>
					) : (
						<div className="relative">
							<div className="absolute top-3 right-3">
								{deletePossible ? (
									<DeleteCar deleteCarSubmit={deleteCarSubmit}></DeleteCar>
								) : (
									<></>
								)}
							</div>
						</div>
					)}
					<CardMedia
						component="img"
						alt="green iguana"
						height="140"
						image={
							car.image == null
								? "https://bizrent.rs/wp-content/uploads/2023/05/Screenshot-2023-05-18-at-17.44.42.png"
								: hasWWW(car.image)
								? car.image
								: import.meta.env.VITE_API_BASE_URL + car.image
						}
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							textAlign="left"
						>
							{car.vehicle_make} {car.vehicle_model}
						</Typography>
						<div className="line"></div>
						<Typography
							variant="body1"
							textAlign="left"
							sx={{ fontWeight: 700, marginBottom: "0.5rem" }}
						>
							{car.car_body ? car.car_body : "SUV4x4"}
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
							<Typography
								variant="body1"
								color="text.secondary"
								textAlign="inline"
							>
								Već od
							</Typography>
							{car.vehicle_price}
						</Typography>
					</CardContent>
				</Card>
				
				<Modal
  open={isModalOpen}
  onClose={() => {
	setModalOpen(false);
	setGalleryImages([]); // Clear gallery images when modal is closed
  }}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  
>
  <Box
    sx={{
      position: "relative",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
 border: "2px solid #000",
    borderRadius: "8px",
    }}
  >
    <Typography  id="modal-modal-title"
    variant="h6"
    component="h2"
    style={{
      
      
      padding: "4px",}} >
      {car.vehicle_make} {car.vehicle_model} 
    </Typography>
	<Button onClick={closeModal}
	style={{
        position: "absolute",
        top: "10px", 
        right: "10px", 
        backgroundColor: "transparent", 
        color: "#000",
        cursor: "pointer",
      }} >Close</Button>
    <img
      src={
        car.image
          ? hasWWW(car.image)
            ? car.image
            : `${import.meta.env.VITE_API_BASE_URL}${car.image}`
          : "https://bizrent.rs/wp-content/uploads/2023/05/Screenshot-2023-05-18-at-17.44.42.png"
      }
      alt={`${car.vehicle_make} ${car.vehicle_model}`}
    />
   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
  <div style={{ flexBasis: 'calc(50% - 10px)', display: 'flex', flexDirection: 'column' }}>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {car.description}
    </Typography>
    <Typography>
      Year of Manufacturing: {car.year_of_manufacturing}
    </Typography>
  </div>
  <div style={{ flexBasis: 'calc(50% - 10px)', display: 'flex', flexDirection: 'column' }}>
    <Typography>Transmission: {car.transmission}</Typography>
    <Typography>Fuel Type: {car.fuel_type}</Typography>
    <Typography>Number of Doors: {car.door_count}</Typography>
    <Typography>Body: {car.car_body}</Typography>
    <Typography>Price: {car.vehicle_price}</Typography>
    <Typography>Owners: {car.owner}</Typography>
  </div>
</div>

    {/* Add more data fields as needed */}
    
  </Box>
</Modal>

			</>
		);
	}
}

export default CarCard;
