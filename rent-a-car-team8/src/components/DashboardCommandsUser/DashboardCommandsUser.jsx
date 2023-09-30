import { useContext } from "react";
import ProfileHead from "../ProfileHead/ProfileHead";
import AddCarIcon from "../jsxIcons/CommandIcons/AddCarIcon";
import CarListIcon from "../jsxIcons/CommandIcons/CarListIcon";
import StatisticIcon from "../jsxIcons/CommandIcons/StatisticIcon";
import LogOutIcon from "../jsxIcons/CommandIcons/LogOutIcon";
import SettingsIcon from "../jsxIcons/CommandIcons/SettingsIcon";
import { UserContext } from "../../contexts/userContext";

function DashboardCommandsUser({
	selectedIndex,
	handleListItemClick,
	setSelectedIndex,
}) {
	const { handleUserLogout } = useContext(UserContext);
	return (
		<div className=" p-4 space-y-2  w-full lg:w-80 bg-gray-900 text-gray-100 align-to-start lg:mx-0 mx-3 mb-5">
			<ProfileHead superAdmin={false}></ProfileHead>
			<div className=" divide-y divide-gray-700">
				<ul className="pt-2 pb-4 space-y-1 text-lg	">
					<li
						onClick={() => handleListItemClick(0)}
						className={` ${
							selectedIndex === 0
								? "bg-cool-blue text-gray-50"
								: "'hover:bg-gray-200 hover:text-gray-800'"
						}`}
					>
						<a
							rel="noopener noreferrer"
							href="#"
							className="flex items-center p-2 space-x-3 rounded-md"
						>
							<AddCarIcon></AddCarIcon>
							<span>Dodaj novi oglas</span>
						</a>
					</li>
					<li
						onClick={() => handleListItemClick(1)}
						className={` ${
							selectedIndex === 1
								? "bg-cool-blue text-gray-50"
								: "'hover:bg-gray-200 hover:text-gray-800'"
						}`}
					>
						<a
							rel="noopener noreferrer"
							href="#"
							className="flex items-center p-2 space-x-3 rounded-md"
						>
							<CarListIcon></CarListIcon>
							<span>Pregled svih automobila</span>
						</a>
					</li>

					<li
						onClick={() => handleListItemClick(2)}
						className={` ${
							selectedIndex === 2
								? "bg-cool-blue text-gray-50"
								: "'hover:bg-gray-200 hover:text-gray-800'"
						}`}
					>
						<a
							rel="noopener noreferrer"
							href="#"
							className="flex items-center p-2 space-x-3 rounded-md"
						>
							<StatisticIcon></StatisticIcon>
							<span>Statistika</span>
						</a>
					</li>
				</ul>
				<ul className="pt-4 pb-2 space-y-1 text-lg">
					<li
						onClick={() => handleListItemClick(4)}
						className={` ${
							selectedIndex === 4
								? "bg-cool-blue text-gray-50"
								: "'hover:bg-gray-200 hover:text-gray-800'"
						}`}
					>
						<a
							rel="noopener noreferrer"
							href="#"
							className="flex items-center p-2 space-x-3 rounded-md"
						>
							<SettingsIcon></SettingsIcon>
							<span>Podešavanja</span>
						</a>
					</li>
					<li
						onClick={() => {
							handleListItemClick(5);
							handleUserLogout();
						}}
						className={` ${
							selectedIndex === 5
								? "bg-cool-blue text-gray-50"
								: "'hover:bg-gray-200 hover:text-gray-800'"
						}`}
					>
						<a
							rel="noopener noreferrer"
							href="#"
							className="flex items-center p-2 space-x-3 rounded-md"
						>
							<LogOutIcon></LogOutIcon>
							<span>Logout</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default DashboardCommandsUser;
