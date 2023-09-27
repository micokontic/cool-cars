import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import MUIcon from "../jsxIcons/MUIcon/MUIcon";

const pages = ["NEW CARS", "ABOUT US", "CONTACT", "LOG IN"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [activeButton, setActiveButton] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static" sx={{ color: "#424242", background: "#FFCA28" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<MUIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							ml: 3,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: "800",
							letterSpacing: ".1rem",
							color: "inherit",
							textDecoration: "none",
							fontSize: "2.4rem",
						}}
					>
						COOL CARS
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							<div className="bg-cool-yellow">
								{pages.map((page, i) => (
									<Button
										key={page}
										onClick={() => {
											setActiveButton(i);
											handleCloseNavMenu();
										}}
										sx={{
											my: 2,
											color: "#424242",
											display: "block",
											padding: "0",
											paddingBottom: "2px",
											margin: "5px 10px",
											borderBottom:
												activeButton == i ? "solid 3px #424242" : "none",
											borderRadius: "0px",
										}}
									>
										<Typography
											variant="body1"
											style={{ fontWeight: "bold", letterSpacing: "0.1rem" }}
										>
											{page}
										</Typography>
									</Button>
								))}
							</div>
						</Menu>
					</Box>

					{/* odje se nesto ponavlja  */}
					<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						LOGO
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
							marginRight: "2rem",
						}}
					>
						{pages.map((page, i) => (
							<Button
								key={page}
								onClick={() => {
									setActiveButton(i);
								}}
								sx={{
									my: 2,
									color: "#424242",
									display: "block",
									padding: "0",
									paddingBottom: "2px",
									margin: "5px 10px",
									borderBottom:
										activeButton == i ? "solid 3px #424242" : "none",
									borderRadius: "0px",
								}}
							>
								<Typography
									variant="body1"
									style={{ fontWeight: "bold", letterSpacing: "0.1rem" }}
								>
									{page}
								</Typography>
							</Button>
						))}
					</Box>

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
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
