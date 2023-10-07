import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL_BACK,
	timeout: 5000,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Credentials": true,
		"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT,PATCH",
		"Access-Control-Allow-Headers": "*",
		"X-Requested-With": "XMLHttpRequest",
	},
});

axiosInstance.interceptors.request.use(
	(request) => {
		// console.log('Starting Request', JSON.stringify(request, null, 2));
		return request;
	},
	(error) => {
		console.error("Request Error:", error);

		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {
		// console.log('Response:', JSON.stringify(response, null, 2));
		return response;
	},
	(error) => {
		console.error("Response Error:", error);
		return Promise.reject(error);
	}
);
