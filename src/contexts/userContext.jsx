import { createContext, useState } from "react";
import jwtDecode from "jwt-decode";

export const UserContext = createContext(null);
import { Navigate } from "react-router-dom";

const { Provider } = UserContext;

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(
		localStorage.getItem("token")
			? jwtDecode(localStorage.getItem("token"))
			: null
	);

	const handleUserLogin = (token) => {
		const userObject = jwtDecode(token);
		setUser(userObject);
		localStorage.setItem("token", token);
	};

	const handleUserLogout = () => {
		localStorage.removeItem("token");
		setUser(null);
		<Navigate to="/" />;
	};

	return (
		<Provider value={{ user, handleUserLogin, handleUserLogout }}>
			{children}
		</Provider>
	);
};
