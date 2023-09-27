import { axiosInstance } from "./api";

class carService {
	getCars = async () => await axiosInstance.get("cars");
	getToken = async (body) => await axiosInstance.post("api/token/", body);
	getCheapestCar = async () => await axiosInstance.get("cheapest-car");
	getUsers = async () =>
		await axiosInstance.get("admin/users", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
}

export const carServiceNew = new carService();
