import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./router/router";
import Navigation from "./components/Navigation/Navigation";

import Footer from "./components/Footer/Footer";

function App() {
	const router = createBrowserRouter(appRoutes);
	return (
		<>
			<Navigation></Navigation>
			<RouterProvider router={router} />

			<Footer></Footer>
		</>
	);
}

export default App;
