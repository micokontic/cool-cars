const isProtected = false;
export const ProtectedRoute = ({ element }) => {
	// const { user } = useContext(UserContext);

	// return !isProtected ? <>{element}</> : <Navigate to="/login" />;
	return element;
};

export const PublicRoute = ({ element }) => {
	// const { user } = useContext(UserContext);

	// return !isProtected ? <Navigate to="/" /> : <>{element}</>;
	return element;
};
