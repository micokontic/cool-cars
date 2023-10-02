import { axiosInstance } from "./api";
import toast, { Toaster } from "react-hot-toast";

const requestObjectMessage = {
	loading: "Loading",
	success: "Success",
	error: "Er",
};

class carService {
	getCars = async (url) => await axiosInstance.get("cars" + url);
	getToken = async (body) =>
		await toast.promise(
			axiosInstance.post("api/token/", body),
			requestObjectMessage
		);
	getCheapestCar = async () => await axiosInstance.get("cheapest-car");
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
	getCarsOfUser = async () =>
		await axiosInstance.get("user/1", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
	addCar = async () =>
		await toast.promise(
			axiosInstance.post("/cars/create", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}),
			requestObjectMessage
		);
}

export const carServiceNew = new carService();
