import deleteIcon from "../../assets/icons/delete-retailer.svg";
import profileImageBlank from "../../assets/profileImageBlank.png";
import { carServiceNew } from "../../service/beckCommunication";
const { deleteUser } = carServiceNew;
function RetailerInTable({ retailer, setRefresh, refresh }) {
	const deleteUserSubmit = () => {
		console.log("brisem");
		const deleteUserApi = async () => {
			try {
				const result = await deleteUser(retailer.id);
				console.log(result.data);
				setRefresh(!refresh);
			} catch (err) {
				console.log(err);
			}
		};
		deleteUserApi();
	};

	return (
		<tbody className="border-b bg-gray-900 border-gray-700">
			<tr>
				<td className="px-3 text-2xl font-medium text-gray-400">
					<img
						src={retailer.img == null ? profileImageBlank : retailer.img}
						alt=""
						className="w-12 h-12 rounded-full bg-gray-500"
					/>
				</td>
				<td className="px-3 py-2">
					<div className="flex items-center p-2 space-x-4">
						<div>
							<h2 className="text-lg font-semibold">
								{retailer.first_name} {retailer.last_name}
							</h2>
						</div>
					</div>
				</td>
				<td className="px-3 py-2">
					<span>{retailer.username}</span>
				</td>
				<td className="px-3 py-2">
					<span>Mali menadzer</span>
				</td>
				<td className="px-3 py-2">
					<p>{retailer.email}</p>
				</td>
				<td className="px-3 py-2 text-center">
					<p>34</p>
				</td>

				<td className="">
					<button
						type="button"
						title="Obriši prodavca"
						className="p-1 rounded-lg text-gray-600 hover:bg-gray-300"
						onClick={() => {
							deleteUserSubmit();
						}}
					>
						<img src={deleteIcon} alt="delete retailer" />
					</button>
				</td>
			</tr>
		</tbody>
	);
}

export default RetailerInTable;
