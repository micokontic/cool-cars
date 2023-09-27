import { useContext } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink, Outlet } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { UserContext } from "../../contexts/userContext";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

function NavBarMd({ activeButton, setActiveButton, handleOpenUserMenu }) {
	const { user, handleUserLogout } = useContext(UserContext);

	return (
		<>
			<NavLink to="/cars">
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
			<NavLink to="/about">
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
			</NavLink>
			<NavLink to="/contact">
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
			</NavLink>

			{user ? (
				<>
					<NavLink to="/" activeClassName="">
						<Box
							onClick={() => {
								handleUserLogout();
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
								LOG OUT
							</Typography>
						</Box>
					</NavLink>

					<NavLink to="/dashboard">
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Avatar of user">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar
										alt="Remy Sharp"
										src="https://source.unsplash.com/100x100/?portrait"
									/>
								</IconButton>
							</Tooltip>
						</Box>
					</NavLink>
				</>
			) : (
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
			)}
		</>
	);
}

export default NavBarMd;
