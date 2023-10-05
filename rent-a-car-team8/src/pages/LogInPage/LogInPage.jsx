import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import "./LogInPage.css";
import { carServiceNew } from "../../service/beckCommunication";
const { getToken } = carServiceNew;

import validateLogIn from "../../utils/validateLogIn";

function LogInPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { handleUserLogin, user } = useContext(UserContext);
	const navigate = useNavigate();

	const [errors, setErrors] = useState({});

	const handleInputChange = (event, setState) => {
		const {
			target: { value },
		} = event;

		setState(value);
	};

	useEffect(() => {
		if (user) {
			if (user.is_superuser) {
				navigate("/dashboard");
			} else {
				navigate("/user");
			}
		}
	}, [user]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const body = JSON.stringify({ username, password });
			setErrors(validateLogIn({ username, password }));
			setTimeout(async () => {
				if (Object.keys(errors).length === 0) {
					console.log("pozivam server");
					const response = await getToken(body);
					handleUserLogin(response.data.access);
				}
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="log-in-form-container hight-must center bg-cool-blue">
			<div className="log-in-form-inner-container mx-4">
				<div className="w-full max-w-md p-4 py-9 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
					<h2 className="mb-3 text-3xl font-semibold text-center">
						Login to your account
					</h2>
					{/* <p className="text-sm text-center text-gray-400">
						Dont have account?
						<a
							href="#"
							rel="noopener noreferrer"
							className="focus:underline hover:underline"
						>
							Sign up here
						</a>
					</p> */}
					{/* <div className="my-6 space-y-4">
						<button
							aria-label="Login with Google"
							type="button"
							className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri border-gray-400 focus:ri"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 32 32"
								className="w-5 h-5 fill-current"
							>
								<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
							</svg>
							<p>Login with Google</p>
						</button>
					</div> */}
					{/* <div className="flex items-center w-full my-4">
						<hr className="w-full text-gray-400"></hr>
						<p className="px-3 text-gray-400">OR</p>
						<hr className="w-full text-gray-400"></hr>
					</div> */}
					<form
						noValidate=""
						action=""
						className="space-y-8"
						onSubmit={handleSubmit}
					>
						<div className="space-y-4">
							<div className="space-y-2">
								<label htmlFor="username" className="text-sm flex flex-start">
									Username
								</label>
								<input
									type="username"
									name="username"
									id="username"
									placeholder="username"
									className={`w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-amber-400 ${
										errors.username && "ring  ring-red-500"
									}`}
									value={username}
									onChange={(event) => handleInputChange(event, setUsername)}
								/>
								{errors.username ? (
									<p className="text-red-500 text-xs mt-1">{errors.username}</p>
								) : (
									<p className="text-transparent text-xs mt-1">
										place for error
									</p>
								)}
							</div>
							<div className="space-y-2">
								<div className="flex justify-between">
									<label htmlFor="password" className="text-sm">
										Password
									</label>
									<a
										rel="noopener noreferrer"
										href="#"
										className="text-xs hover:underline text-gray-400"
									>
										Forgot password?
									</a>
								</div>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="*****"
									className={`w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-amber-400 ${
										errors.password && "ring  ring-red-500"
									}`}
									value={password}
									onChange={(event) => handleInputChange(event, setPassword)}
								/>
								{errors.password ? (
									<p className="text-red-500 text-xs mt-1">{errors.password}</p>
								) : (
									<p className="text-transparent text-xs mt-1">
										place for error
									</p>
								)}
							</div>
						</div>
						<button
							type="submit"
							className="w-full px-8 py-3 font-semibold rounded-md bg-amber-400 text-gray-900"
						>
							Sign in
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default LogInPage;
