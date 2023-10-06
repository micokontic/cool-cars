import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LogInPage/LogInPage";
import LostPage from "../pages/LostPage/LostPage";
import DashBoardPage from "../pages/DashBoardPage/DashBoardPage";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ModelsPage from "../pages/ModelsPage/ModelsPage";

import { ProtectedRoute, PublicRoute, SuperAdminRoute } from "./Routes";
import { Login } from "@mui/icons-material";

export const appRoutes = [
	{
		path: "/",
		exact: "true",
		element: (
			<>
				<Layout>
					<HomePage />
				</Layout>
			</>
		),
	},
	{
		path: "login",
		element: (
			<PublicRoute
				element={
					<>
						<Layout>
							<LoginPage></LoginPage>
						</Layout>
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
						<Layout>
							<AboutUsPage></AboutUsPage>
						</Layout>
					</>
				}
			/>
		),
	},
	{
		path: "dashboard",
		element: (
			<SuperAdminRoute
				element={
					<>
						<Layout>
							<DashBoardPage></DashBoardPage>
						</Layout>
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
						<Layout>
							<DashBoardPage superAdmin={false} />
						</Layout>
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
						<Layout>
							<ContactUs></ContactUs>
						</Layout>
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
						<Layout>
							<ModelsPage></ModelsPage>
						</Layout>
					</>
				}
			/>
		),
	},

	{
		path: "*",
		element: (
			<>
				<Layout>
					<LostPage />
				</Layout>
			</>
		),
	},
];
