function ProfileHead({ superAdmin = true }) {
	return (
		<div className="flex items-center p-2 space-x-4">
			<img
				src="https://source.unsplash.com/100x100/?portrait"
				alt=""
				className="w-12 h-12 rounded-full bg-gray-500"
			/>
			<div>
				<h2 className="text-lg font-semibold">Janko Petrović</h2>
				<span className="flex items-center space-x-1">
					<a
						rel="noopener noreferrer"
						href="#"
						className="text-s hover:underline text-gray-400"
					>
						{superAdmin ? "SuperAdmin" : "ŠkodaČačak CG"}
					</a>
				</span>
			</div>
		</div>
	);
}

export default ProfileHead;
