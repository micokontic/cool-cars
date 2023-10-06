import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./router/router";
import { Toaster } from "react-hot-toast";

function App() {
	const router = createBrowserRouter(appRoutes);
	return (
		<>
			<RouterProvider router={router} />
			<Toaster></Toaster>
		</>
	);
}

export default App;
