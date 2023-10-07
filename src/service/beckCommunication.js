import { axiosInstance } from "./api";
import toast from "react-hot-toast";

const requestObjectMessage = {
	loading: "Loading",
	success: "Success",
	error: "Error",
};

class CarService {
	getCars = async (url) =>
		await axiosInstance.get("cars/?status=approved&" + url);
	getNewCars = async () => await axiosInstance.get("/cars/?newest=true");
	getToken = async (body) =>
		await toast.promise(
			axiosInstance.post("api/token/", body),
			requestObjectMessage
		);
	getCheapestCar = async () => await axiosInstance.get("cars/?cheapest=true");
	addRetailer = async (body) =>
		await toast.promise(
			axiosInstance.post("users/", body, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
					"content-type": "multipart/form-data",
				},
			}),
			requestObjectMessage
		);

	getUsers = async () =>
		await axiosInstance.get("users/", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
	getUser = async (id) =>
		await axiosInstance.get(`users/${id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
	deleteCar = async (id) =>
		await toast.promise(
			axiosInstance.delete(`/cars/${id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}),
			requestObjectMessage
		);
	deleteUser = async (id) =>
		await toast.promise(
			axiosInstance.delete(`users/${id}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}),
			requestObjectMessage
		);

	patchUser = async (body, id) =>
		await toast.promise(
			axiosInstance.patch(`users/${id}/`, body, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
					"content-type": "multipart/form-data",
				},
			}),
			requestObjectMessage
		);
	addCar = async (body) =>
		await toast.promise(
			axiosInstance.post("/cars/", body, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
					"content-type": "multipart/form-data",
				},
			}),
			requestObjectMessage
		);
	patchCar = async (body, id) =>
		await toast.promise(
			axiosInstance.patch(`cars/${id}/`, body, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
					"content-type": "multipart/form-data",
				},
			}),
			requestObjectMessage
		);
	getCarGallary = async (id) =>
		await toast.promise(
			axiosInstance.get(`/cars/${id}/gallery`),
			requestObjectMessage
		);
}

export const CarServiceNew = new CarService();
