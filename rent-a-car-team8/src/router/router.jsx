import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LogInPage/LogInPage";
import LostPage from "../pages/LostPage/LostPage";
import DashBoardPage from "../pages/DashBoardPage/DashBoardPage";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

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
			{
				path: "about",
				children: [
					{
						index: true,
						element: (
							<>
								<Navigation></Navigation>
								<h1>About page</h1>
								<Footer></Footer>
							</>
						),
						exact: true,
					},
					{ path: "team", element: <h1>Team page</h1> },
				],
			},
			// { path: "users/:id", element: <UsersPage /> },
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
		path: "dashboard",
		element: (
			<PublicRoute
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
			<PublicRoute
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
