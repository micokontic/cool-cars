import { useState, useContext, useEffect } from "react";
import DashboardCommands from "../DashboardCommands/DashboardCommands";
import RetailerTable from "../RetailerTable/RetailerTable";
import AddUserForm from "../AddUserForm/AddUserForm";
import NumberOfCarsChart from "../NumberOfCarsChart/NumberOfCarsChart";
import ListOfUnapprovedCars from "../ListOfUnapprovedCars/ListOfUnapprovedCars";
import { UserContext } from "../../contexts/userContext";
import { carServiceNew } from "../../service/beckCommunication";
const { getUser } = carServiceNew;

function Dashboard() {
	const [selectedIndex, setSelectedIndex] = useState(1);

	const { user } = useContext(UserContext);
	const [userData, setUserData] = useState({
		user: {
			first_name: "",
			last_name: "",
			username: "",
		},
		vehicles: [],
	});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getUser(user.user_id);
				console.log(result.data);
				setUserData(result.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	const refreshUser = async () => {
		try {
			const result = await getUser(user.user_id);
			console.log(result.data);
			setUserData(result.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleListItemClick = (index) => {
		setSelectedIndex(index);
	};

	const DashboardComponentsArray = [
		<RetailerTable key={1} />,
		<AddUserForm key={2} />,
		<ListOfUnapprovedCars
			key={3}
			cars={userData.vehicles}
			refreshUser={refreshUser}
		/>,
		<NumberOfCarsChart key={4} />,
	];

	return (
		<div className="dashboard-container hight-must">
			<DashboardCommands
				selectedIndex={selectedIndex}
				setSelectedIndex={setSelectedIndex}
				handleListItemClick={handleListItemClick}
				user={userData.user}
			></DashboardCommands>

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
