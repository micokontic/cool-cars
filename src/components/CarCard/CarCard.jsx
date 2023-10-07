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
import YouTubeVideo from "../../components/YouTubeVideo/YouTubeVideo";
import "./Modal.css";
import "./CarCard.css";
import ModalGallery from "../../components/ModalGallery/ModalGallery";
const { patchCar, deleteCar, getCarGallary } = CarServiceNew;

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
	const [gallery, setGallery] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getCarGallary(car.id);
				console.log(result.data);
				setGallery(result.data);
			} catch (err) {
				console.log(err);
			}
		};

		if (isModalOpen) {
			fetchData();
		}
	}, [isModalOpen]);

	function hasWWW(str) {
		return str.indexOf("https") !== -1;
	}

	const patchCarApi = async (status) => {
		try {
			const result = await patchCar(status, car.id);

			setRefresh(!refresh);
		} catch (err) {
			console.log(err);
		}
	};

	const patchCarSubmit = (status) => {
		patchCarApi(status);
	};

	const deleteCarApi = async () => {
		try {
			const result = await deleteCar(car.id);

			setRefresh(!refresh);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteCarSubmit = () => {
		deleteCarApi();
	};

	const openModal = () => {
		setModalOpen(true);
	};

	const closeModal = () => {
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
					onClick={(e) => {
						if (!e.target.classList.contains("button-class-name")) {
							openModal(car);
						}
					}}
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
							{car.vehicle_price + " €"}
						</Typography>
					</CardContent>
				</Card>

				<Modal
					open={isModalOpen}
					onClose={() => {
						setModalOpen(false);
					}}
					sx={{ overflow: "scroll" }}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box
						sx={{
							position: "relative",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							width: "80%",
							bgcolor: "background.paper",
							boxShadow: 24,
							p: 4,
							border: "2px solid #000",
							borderRadius: "8px",
						}}
						className="youtube-box"
					>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							textAlign="left"
						>
							{car.vehicle_make} {car.vehicle_model}
						</Typography>
						<div className="line line-modal"></div>
						<Button
							onClick={closeModal}
							style={{
								position: "absolute",
								top: "10px",
								right: "10px",
								backgroundColor: "transparent",
								color: "#000",
								cursor: "pointer",
							}}
						>
							Close
						</Button>
						<YouTubeVideo url={car.video_url}></YouTubeVideo>
						<div className="modal-container-inner">
							<div
								style={{
									flexBasis: "calc(50% - 10px)",
									display: "flex",
									flexDirection: "column",
								}}
							>
								<Typography
									variant="body1"
									color="text.secondary"
									textAlign="left"
									sx={{
										fontSize: "1.5rem",
										marginTop: "0.5rem",
									}}
								>
									{car.description}
								</Typography>

								<CardData car={car}></CardData>

								<Typography
									variant="body1"
									textAlign="left"
									sx={{
										fontWeight: 700,
										marginBottom: "0.5rem",
										fontSize: "1.5rem",
									}}
									className="font-semibold m3 pt-3"
								>
									<span className="font-normal">Karoserija: </span>
									{car.car_body ? car.car_body : "SUV4x4"}
								</Typography>
								<Typography
									variant="body1"
									textAlign="left"
									sx={{
										fontWeight: 700,
										marginBottom: "0.5rem",
										fontSize: "1.5rem",
									}}
									className="font-semibold m3 pt-3"
								>
									<span className="font-normal">Godina proizvodnje: </span>
									{car.year_of_manufacturing
										? car.year_of_manufacturing
										: "2022"}
								</Typography>

								<Typography
									variant="body1"
									textAlign="left"
									sx={{
										fontWeight: 700,
										marginBottom: "0.5rem",
										fontSize: "1.5rem",
									}}
									className="font-semibold m3 mt-9 pt-3"
								>
									<span>Cijena već od: </span>
									<span className="font-normal text-5xl font-semibold">
										{car.vehicle_price ? car.vehicle_price + " €" : "20000 €"}
									</span>
								</Typography>
							</div>
							<div className="modal-media-container">
								<ModalGallery gallery={gallery}></ModalGallery>
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
