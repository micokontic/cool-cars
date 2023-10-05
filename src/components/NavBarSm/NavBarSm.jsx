import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function NavBarSm({ activeButton, setActiveButton, handleCloseNavMenu }) {
	return (
		<>
			<NavLink to="/cars">
				<Button
					onClick={() => {
						setActiveButton(0);
						handleCloseNavMenu();
					}}
					sx={{
						my: 2,
						color: "#424242",
						display: "block",
						padding: "0",
						paddingBottom: "2px",
						margin: "5px 10px",
						borderBottom: activeButton == 1 ? "solid 3px #424242" : "none",
						borderRadius: "0px",
					}}
				>
					<Typography
						variant="body1"
						style={{ fontWeight: "bold", letterSpacing: "0.1rem" }}
					>
						MODELI
					</Typography>
				</Button>
			</NavLink>
			<NavLink to="/about">
				<Button
					onClick={() => {
						setActiveButton(1);
						handleCloseNavMenu();
					}}
					sx={{
						my: 2,
						color: "#424242",
						display: "block",
						padding: "0",
						paddingBottom: "2px",
						margin: "5px 10px",
						borderBottom: activeButton == 2 ? "solid 3px #424242" : "none",
						borderRadius: "0px",
					}}
				>
					<Typography
						variant="body1"
						style={{ fontWeight: "bold", letterSpacing: "0.1rem" }}
					>
						O NAMA
					</Typography>
				</Button>
			</NavLink>
			<NavLink to="/contact">
				<Button
					onClick={() => {
						setActiveButton(2);
						handleCloseNavMenu();
					}}
					sx={{
						my: 2,
						color: "#424242",
						display: "block",
						padding: "0",
						paddingBottom: "2px",
						margin: "5px 10px",
						borderBottom: activeButton == 3 ? "solid 3px #424242" : "none",
						borderRadius: "0px",
					}}
				>
					<Typography
						variant="body1"
						style={{ fontWeight: "bold", letterSpacing: "0.1rem" }}
					>
						KONTAKT
					</Typography>
				</Button>
			</NavLink>

			<Button
				onClick={() => {
					setActiveButton(3);
					handleCloseNavMenu();
				}}
				sx={{
					my: 2,
					color: "#424242",
					display: "block",
					padding: "0",
					paddingBottom: "2px",
					margin: "5px 10px",
					borderBottom: activeButton == 4 ? "solid 3px #424242" : "none",
					borderRadius: "0px",
				}}
			>
				<Typography
					variant="body1"
					style={{ fontWeight: "bold", letterSpacing: "0.1rem" }}
				>
					ULOGUJTE SE
				</Typography>
			</Button>
		</>
	);
}

export default NavBarSm;
