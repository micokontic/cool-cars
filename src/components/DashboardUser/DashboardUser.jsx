import { useContext } from "react";
import { useState, useEffect } from "react";
import DashboardCommandsUser from "../DashboardCommandsUser/DashboardCommandsUser";
import RetailerTable from "../RetailerTable/RetailerTable";
import AddUserForm from "../AddUserForm/AddUserForm";
import NumberOfCarsChart from "../NumberOfCarsChart/NumberOfCarsChart";
import ListOfUnapprovedCars from "../ListOfUnapprovedCars/ListOfUnapprovedCars";
import AddCarForm from "../AddCarForm/AddCarForm";
import { UserContext } from "../../contexts/userContext";
import { CarServiceNew } from "../../service/beckCommunication";
const { getUser } = CarServiceNew;

function DashboardUser() {
	const [selectedIndex, setSelectedIndex] = useState(1);
	const [refresh, setRefresh] = useState(true);

	const { user } = useContext(UserContext);
	console.log("user je");
	console.log(user);
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
			console.log(result.data);
			setUserData(result.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		console.log("refresh sam");
		fetchData();
	}, [refresh]);

	const handleListItemClick = (index) => {
		setSelectedIndex(index);
	};

	const DashboardComponentsArray = [
		<AddCarForm key={0} setRefresh={setRefresh} refresh={refresh} />,
		<ListOfUnapprovedCars
			superAdmin={false}
			key={1}
			cars={userData.vehicles}
			deletePossible={true}
			setRefresh={setRefresh}
			refresh={refresh}
		/>,
		<NumberOfCarsChart key={2} />,
		<AddUserForm
			key={3}
			edit={true}
			profileData={userData.user}
			setRefresh={setRefresh}
			refresh={refresh}
		/>,
	];

	return (
		<div className="dashboard-container lg:mx-0 mx-3">
			<DashboardCommandsUser
				selectedIndex={selectedIndex}
				setSelectedIndex={setSelectedIndex}
				handleListItemClick={handleListItemClick}
				user={userData.user}
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
