import { axiosInstance } from "./api";

class carService {
	getCars = async () => await axiosInstance.get("cars");
	getToken = async (body) => await axiosInstance.post("api/token/", body);
}

export const carServiceNew = new carService();
