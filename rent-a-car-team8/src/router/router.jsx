import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LogInPage/LogInPage";
import LostPage from "../pages/LostPage/LostPage";
import DashBoardPage from "../pages/DashBoardPage/DashBoardPage";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ModelsPage from "../pages/ModelsPage/ModelsPage";

import { ProtectedRoute, PublicRoute } from "./Routes";
import { Login } from "@mui/icons-material";

export const appRoutes = [
	{
		path: "/",
		exact: "true",
		element: (
			<>
				<Navigation></Navigation>
				<HomePage />
				<Footer></Footer>
			</>
		),
		children: [
			{
				index: true,
				element: (
					<>
						<Navigation></Navigation>
						<HomePage />
						<Footer></Footer>
					</>
				),
				exact: true,
			},
		],
	},
	{
		path: "login",
		element: (
			<PublicRoute
				element={
					<>
						<Navigation></Navigation>
						<LoginPage></LoginPage>
						<Footer></Footer>
					</>
				}
			/>
		),
	},
	{
		path: "about",
		element: (
			<PublicRoute
				element={
					<>
						<Navigation></Navigation>
						<AboutUsPage></AboutUsPage>
						<Footer></Footer>
					</>
				}
			/>
		),
	},
	{
		path: "dashboard",
		element: (
			<ProtectedRoute
				element={
					<>
						<Navigation></Navigation>
						<DashBoardPage></DashBoardPage>
						<Footer></Footer>
					</>
				}
			/>
		),
	},
	{
		path: "user",
		element: (
			<ProtectedRoute
				element={
					<>
						<Navigation></Navigation>
						<DashBoardPage superAdmin={false} />
						<Footer></Footer>
					</>
				}
			/>
		),
	},
	{
		path: "contact",
		element: (
			<PublicRoute
				element={
					<>
						<Navigation></Navigation>
						<ContactUs></ContactUs>
						<Footer></Footer>
					</>
				}
			/>
		),
	},
	{
		path: "cars",
		element: (
			<PublicRoute
				element={
					<>
						<Navigation></Navigation>
						<ModelsPage></ModelsPage>
						<Footer></Footer>
					</>
				}
			/>
		),
	},

	{
		path: "*",
		element: (
			<>
				<Navigation></Navigation>
				<LostPage />
				<Footer></Footer>
			</>
		),
	},
];
