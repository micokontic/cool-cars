import deleteIcon from "../../assets/icons/delete-retailer.svg";

function RetailerInTable() {
	return (
		<tbody className="border-b bg-gray-900 border-gray-700">
			<tr>
				<td className="px-3 text-2xl font-medium text-gray-400">
					<img
						src="https://source.unsplash.com/100x100/?portrait"
						alt=""
						className="w-12 h-12 rounded-full bg-gray-500"
					/>
				</td>
				<td className="px-3 py-2">
					<div className="flex items-center p-2 space-x-4">
						<div>
							<h2 className="text-lg font-semibold">Janko Petrović</h2>
						</div>
					</div>
				</td>
				<td className="px-3 py-2">
					<span>Volkswagen retail Crna Gora</span>
				</td>
				<td className="px-3 py-2">
					<p>alex@bridges.com</p>
				</td>
				<td className="px-3 py-2 text-center">
					<p>34</p>
				</td>

				<td className="">
					<button
						type="button"
						title="Obriši prodavca"
						className="p-1 rounded-lg text-gray-600 hover:bg-gray-300"
					>
						<img src={deleteIcon} alt="delete retailer" />
					</button>
				</td>
			</tr>
		</tbody>
	);
}

export default RetailerInTable;
