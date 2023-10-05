import profileImageBlank from "../../assets/profileImageBlank.png";

function ProfileHead({ superAdmin = true, user }) {
	return (
		<div className="flex items-center p-2 space-x-4">
			<img
				src={
					user.img == null
						? profileImageBlank
						: import.meta.env.VITE_API_BASE_URL + user.img
				}
				alt=""
				className="w-12 h-12 rounded-full bg-gray-500"
			/>
			<div>
				<h2 className="text-lg font-semibold">
					{user.first_name} {user.last_name}
				</h2>
				<span className="flex items-center space-x-1">
					<a
						rel="noopener noreferrer"
						href="#"
						className="text-s hover:underline text-gray-400"
					>
						{user.username}
					</a>
				</span>
			</div>
		</div>
	);
}

export default ProfileHead;
