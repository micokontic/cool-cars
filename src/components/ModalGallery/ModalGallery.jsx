import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";

const ModalGallery = ({ gallery }) => {
	console.log(gallery);
	return (
		<Carousel showArrows={true}>
			{gallery.map((image, i) => {
				return (
					<div key={i}>
						<img
							src={import.meta.env.VITE_API_BASE_URL + image.image}
							alt="Slide 1"
						/>
					</div>
				);
			})}
		</Carousel>
	);
};

export default ModalGallery;
