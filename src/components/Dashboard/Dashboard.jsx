import { useState, useContext, useEffect } from "react";
import DashboardCommands from "../DashboardCommands/DashboardCommands";
import RetailerTable from "../RetailerTable/RetailerTable";
import AddUserForm from "../AddUserForm/AddUserForm";
import NumberOfCarsChart from "../NumberOfCarsChart/NumberOfCarsChart";
import ListOfUnapprovedCars from "../ListOfUnapprovedCars/ListOfUnapprovedCars";
import { UserContext } from "../../contexts/userContext";
import { CarServiceNew } from "../../service/beckCommunication";
const { getUser } = CarServiceNew;

function Dashboard() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [refresh, setRefresh] = useState(true);

	const { user } = useContext(UserContext);
	const [userData, setUserData] = useState({
		user: {
			first_name: "",
			last_name: "",
			username: "",
		},
		vehicles: [],
	});

	const fetchData = async () => {
		try {
			const result = await getUser(user.user_id);

			setUserData(result.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		fetchData();
	}, [refresh]);

	const refreshUser = async () => {
		try {
			const result = await getUser(user.user_id);

			setUserData(result.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleListItemClick = (index) => {
		setSelectedIndex(index);
	};

	const DashboardComponentsArray = [
		<RetailerTable key={0} />,
		<AddUserForm key={1} setRefresh={setRefresh} refresh={refresh} />,
		<ListOfUnapprovedCars
			key={2}
			cars={userData.vehicles}
			refreshUser={refreshUser}
			setRefresh={setRefresh}
			refresh={refresh}
		/>,
		<NumberOfCarsChart key={3} />,
		<AddUserForm
			key={4}
			edit={true}
			profileData={userData.user}
			setRefresh={setRefresh}
			refresh={refresh}
		/>,
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
