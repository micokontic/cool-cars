import { useContext } from "react";
import { useState } from "react";
import DashboardCommandsUser from "../DashboardCommandsUser/DashboardCommandsUser";
import RetailerTable from "../RetailerTable/RetailerTable";
import AddUserForm from "../AddUserForm/AddUserForm";
import NumberOfCarsChart from "../NumberOfCarsChart/NumberOfCarsChart";
import ListOfUnapprovedCars from "../ListOfUnapprovedCars/ListOfUnapprovedCars";
import AddCarForm from "../AddCarForm/AddCarForm";

function DashboardUser() {
	const [selectedIndex, setSelectedIndex] = useState(1);

	const handleListItemClick = (index) => {
		setSelectedIndex(index);
	};

	const DashboardComponentsArray = [
		<AddCarForm key={1} />,
		<ListOfUnapprovedCars superAdmin={false} key={2} />,
		<NumberOfCarsChart key={3} />,
	];

	return (
		<div className="dashboard-container">
			<DashboardCommandsUser
				selectedIndex={selectedIndex}
				setSelectedIndex={setSelectedIndex}
				handleListItemClick={handleListItemClick}
			></DashboardCommandsUser>

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

export default DashboardUser;
