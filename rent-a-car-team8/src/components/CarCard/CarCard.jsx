import { useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal, Box } from "@mui/material";

const carData = [
  {
    id: 1,
    title: 'Škoda SUPERB',
    description: 'Nova Škoda SUPERB izgleda samouvjereno, moderno i dinamično.',
    image: 'https://bizrent.rs/wp-content/uploads/2023/05/Screenshot-2023-05-18-at-17.44.42.png',
    price: '300 €',
  },
  // Add more cars as needed
];

function CarCard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (car) => {
    setSelectedCar(car);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setModalOpen(false);
  };

  return (
    <>
      {carData.map((car) => (
        <Card
          key={car.id}
          sx={{ maxWidth: 345, margin: '3% auto' }}
          className="car-card-container-inner"
        >
          <CardMedia
            component="img"
            alt="car"
            height="140"
            image={car.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign="left">
              {car.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" textAlign="left">
              {car.description}
            </Typography>
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
              {car.price}
            </Typography>
            <Button onClick={() => openModal(car)}>View Details</Button>
          </CardContent>
        </Card>
      ))}

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedCar && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {selectedCar.title}
              </Typography>
              <img src={selectedCar.image} alt={selectedCar.title} />
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {selectedCar.description}
              </Typography>
              <Button onClick={closeModal}>Close</Button>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}

export default CarCard;
