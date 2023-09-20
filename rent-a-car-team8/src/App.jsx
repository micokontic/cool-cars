import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./components/Navigation/Navigation";
import OurStats from "./components/OurStats/OurStats";
import PriceDiscount from "./components/PriceDiscount/PriceDiscount";
import Waves from "./components/Waves/Waves";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Navigation></Navigation>
			<HomePage></HomePage>
			<Waves></Waves>
			<OurStats></OurStats>

			<PriceDiscount></PriceDiscount>
			<Footer></Footer>
		</>
	);
}

export default App;
