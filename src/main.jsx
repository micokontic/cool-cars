import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./contexts/UserContext";

import App from "./App.jsx";
import "./index.css";

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserProvider>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</UserProvider>
	</React.StrictMode>
);
