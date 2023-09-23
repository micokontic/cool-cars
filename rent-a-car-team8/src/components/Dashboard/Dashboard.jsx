import "./Dashboard.css";
import { useState } from "react";
import DashboardComands from "../DashboardComands/DashboardComands";
import RetailerTable from "../RetailerTable/RetailerTable";
import AddUserForm from "../AddUserForm/AddUserForm";
import NumberOfCarsChart from "../NumberOfCarsChart/NumberOfCarsChart";
import ListOfUnapprovedCars from "../ListOfUnapprovedCars/ListOfUnapprovedCars";

function Dashboard() {
	const [selectedIndex, setSelectedIndex] = useState(1);

	const handleListItemClick = (index) => {
		setSelectedIndex(index);
	};

	const DashboardComponentsArray = [
		<RetailerTable key={1} />,
		<AddUserForm key={2} />,
		<ListOfUnapprovedCars key={3} />,
		<NumberOfCarsChart key={4} />,
	];

	return (
		<div className="dashboard-container">
			<DashboardComands
				selectedIndex={selectedIndex}
				setSelectedIndex={setSelectedIndex}
				handleListItemClick={handleListItemClick}
			></DashboardComands>

			<div className="dashboard-element-container py-8 bg-gray-900 mx-3">
				{DashboardComponentsArray.map((Component, i) => {
					if (i === selectedIndex) {
						return Component;
					}
				})}
			</div>
		</div>
	);
}

export default Dashboard;