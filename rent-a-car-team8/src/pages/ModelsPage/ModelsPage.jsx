import FilterCars from "../../components/FiterCars/FilterCars";
import SliderFilter from "../../components/SliderFilter/SliderFilter";
import "./ModelsPage.css";

function ModelsPage() {
	return (
		<div className="models-page-container  hight-must">
			<div className="p-8 space-y-2 bg-gray-900 text-gray-100 align-to-start lg:mx-0 mx-3 mb-5">
				<SliderFilter></SliderFilter>
				<FilterCars></FilterCars>
			</div>
		</div>
	);
}

export default ModelsPage;
