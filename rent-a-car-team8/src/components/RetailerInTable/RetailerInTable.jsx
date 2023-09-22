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
					<span>Administrative Services Manager</span>
				</td>
				<td className="px-3 py-2">
					<p>alex@bridges.com</p>
				</td>
				<td className="px-3 py-2 text-center">
					<p>34</p>
				</td>

				<td className="px-3 py-2">
					<button
						type="button"
						title="Open details"
						className="p-1 rounded-full text-gray-600 hover:bg-gray-700 focus:bg-gray-700"
					>
						<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
							<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
						</svg>
					</button>
				</td>
			</tr>
		</tbody>
	);
}

export default RetailerInTable;
