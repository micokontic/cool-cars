import { axiosInstance } from "./api";

class carService {
	getCars = async (url) => await axiosInstance.get("cars" + url);
	getToken = async (body) => await axiosInstance.post("api/token/", body);
	getCheapestCar = async () => await axiosInstance.get("cheapest-car");
	addRetailer = async (body) =>
		await axiosInstance.post("/admin/users/create/", body, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});

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
		await axiosInstance.post("/cars/create", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
}

export const carServiceNew = new carService();
