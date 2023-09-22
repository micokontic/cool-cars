import "./Dashboard.css";
import DashboardComands from "../DashboardComands/DashboardComands";
import RetailerTable from "../RetailerTable/RetailerTable";

function Dashboard() {
	return (
		<div className="dashboard-container">
			<DashboardComands></DashboardComands>

			<div className="dashboard-element-container bg-gray-900 mx-3">
				<RetailerTable></RetailerTable>
			</div>
		</div>
	);
}

export default Dashboard;
