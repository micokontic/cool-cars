import Dashboard from "../../components/Dashboard/Dashboard";
import DashboardUser from "../../components/DashboardUser/DashboardUser";
import "./DashBoardPage.css";

function DashBoardPage({ superAdmin = true }) {
	if (superAdmin) {
		return <Dashboard superAdmin={superAdmin}></Dashboard>;
	} else {
		return <DashboardUser></DashboardUser>;
	}
}

export default DashBoardPage;
