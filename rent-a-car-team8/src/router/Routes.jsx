import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element }) => {
	const { user } = useContext(UserContext);

	return user?.user_id ? <>{element}</> : <Navigate to="/login" />;
};

export const PublicRoute = ({ element }) => {
	const { user } = useContext(UserContext);

	return <>{element}</>;
};
