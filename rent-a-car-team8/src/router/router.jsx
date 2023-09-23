import Navigation from "../components/Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LogInPage/LogInPage";
import LostPage from "../pages/LostPage/LostPage";
import DashBoardPage from "../pages/DashBoardPage/DashBoardPage";

import { ProtectedRoute, PublicRoute } from "./Routes";

export const appRoutes = [
	{
		path: "/",
		exact: "true",
		element: <PublicRoute element={<HomePage />} />,
		children: [
			{
				index: true,
				element: <HomePage />,
				exact: true,
			},
			{
				path: "about",
				children: [
					{
						index: true,
						element: <h1>about page</h1>,
						exact: true,
					},
					{ path: "team", element: <h1>Team page</h1> },
				],
			},
			// { path: "users/:id", element: <UsersPage /> },
		],
	},
	{ path: "login", element: <PublicRoute element={<LoginPage />} /> },
	{ path: "dashboard", element: <PublicRoute element={<DashBoardPage />} /> },
	{
		path: "user",
		element: <PublicRoute element={<DashBoardPage superAdmin={false} />} />,
	},

	{ path: "*", element: <LostPage></LostPage> },
];
