import Navigation from "../components/Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LogInPage/LogInPage";

import { ProtectedRoute, PublicRoute } from "./Routes";

export const appRoutes = [
	{
		path: "/",
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
			{ path: "*", element: <h1>404 Not found</h1> },
		],
	},
	{ path: "login", element: <PublicRoute element={<LoginPage />} /> },
];
