import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink, Outlet } from "react-router-dom";

function NavBarMd({ activeButton, setActiveButton }) {
	return (
		<>
			<NavLink to="/users">
				<Button
					onClick={() => {
						setActiveButton(0);
					}}
					sx={{
						my: 2,
						color: "#424242",
						display: "block",
						padding: "0",
						paddingBottom: "2px",
						margin: "5px 10px",
						borderBottom: activeButton == 0 ? "solid 3px #424242" : "none",
						borderRadius: "0px",
					}}
				>
					<Typography
						variant="body1"
						style={{ fontWeight: "bold", letterSpacing: "0.1rem" }}
					>
						NEW CARS
					</Typography>
				</Button>
			</NavLink>

			<Button
				onClick={() => {
					setActiveButton(1);
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
					ABOUT US
				</Typography>
			</Button>

			<Button
				onClick={() => {
					setActiveButton(2);
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
					CONTACT US
				</Typography>
			</Button>

			<NavLink to="/login">
				<Button
					onClick={() => {
						setActiveButton(3);
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
						LOG IN
					</Typography>
				</Button>
			</NavLink>
		</>
	);
}

export default NavBarMd;
