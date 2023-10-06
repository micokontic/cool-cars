import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
	return (
		<div>
			<Navigation />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
