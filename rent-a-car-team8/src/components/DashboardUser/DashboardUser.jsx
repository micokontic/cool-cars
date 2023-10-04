import { useContext } from "react";
import { useState, useEffect } from "react";
import DashboardCommandsUser from "../DashboardCommandsUser/DashboardCommandsUser";
import RetailerTable from "../RetailerTable/RetailerTable";
import AddUserForm from "../AddUserForm/AddUserForm";
import NumberOfCarsChart from "../NumberOfCarsChart/NumberOfCarsChart";
import ListOfUnapprovedCars from "../ListOfUnapprovedCars/ListOfUnapprovedCars";
import AddCarForm from "../AddCarForm/AddCarForm";
import { UserContext } from "../../contexts/userContext";
import { carServiceNew } from "../../service/beckCommunication";
const { getUser } = carServiceNew;

function DashboardUser() {
	const [selectedIndex, setSelectedIndex] = useState(1);
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

	const handleListItemClick = (index) => {
		setSelectedIndex(index);
	};

	const refreshUser = async () => {
		try {
			const result = await getUser(user.user_id);
			console.log("refreshovao sam");
			console.log(result.data);
			setUserData(result.data);
		} catch (err) {
			console.log(err);
		}
	};

	const DashboardComponentsArray = [
		<AddCarForm key={0} refreshUser={refreshUser} />,
		<ListOfUnapprovedCars
			superAdmin={false}
			key={1}
			cars={userData.vehicles}
			deletePossible={true}
		/>,
		<NumberOfCarsChart key={2} />,
		<AddUserForm key={3} edit={true} profileData={userData.user} />,
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
