import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element }) => {
	const { user } = useContext(UserContext);

	return user?.user_id ? (
		!user.is_superuser ? (
			<>{element}</>
		) : (
			<Navigate to="/login" />
		)
	) : (
		<Navigate to="/login" />
	);
};

export const PublicRoute = ({ element }) => {
	const { user } = useContext(UserContext);

	return <>{element}</>;
};

export const SuperAdminRoute = ({ element }) => {
	const { user } = useContext(UserContext);

	return user?.user_id ? (
		user.is_superuser ? (
			<>{element}</>
		) : (
			<Navigate to="/user" />
		)
	) : (
		<Navigate to="/login" />
	);
};
