import { axiosInstance } from "./api";

class carService {
	getCars = async () => await axiosInstance.get("cars");
	getToken = async () => await axiosInstance.post("api/token/");
}

export const carServiceNew = new carService();
