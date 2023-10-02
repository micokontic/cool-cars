import { axiosInstance } from "./api";
import toast, { Toaster } from "react-hot-toast";

const requestObjectMessage = {
	loading: "Loading",
	success: "Success",
	error: "Error",
};

class carService {
	getCars = async (url) => await axiosInstance.get("cars" + url);
	getNewCars = async () => await axiosInstance.get("/cars/newest");
	getToken = async (body) =>
		await toast.promise(
			axiosInstance.post("api/token/", body),
			requestObjectMessage
		);
	getCheapestCar = async () => await axiosInstance.get("cars/cheapest");
	addRetailer = async (body) =>
		await toast.promise(
			axiosInstance.post("/admin/users/create/", body, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}),
			requestObjectMessage
		);

	getUsers = async () =>
		await axiosInstance.get("admin/users", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
	getUser = async (id) =>
		await axiosInstance.get(`admin/user/${id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
	addCar = async (body) =>
		await toast.promise(
			axiosInstance.post("/cars/create", body, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}),
			requestObjectMessage
		);
	patchCar = async (body, id) =>
		await toast.promise(
			axiosInstance.patch(`car/${id}/`, body, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}),
			requestObjectMessage
		);
}

export const carServiceNew = new carService();
