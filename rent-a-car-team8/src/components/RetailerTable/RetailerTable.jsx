import { useEffect, useState } from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import RetailerInTable from "../RetailerInTable/RetailerInTable";
import { carServiceNew } from "../../service/beckCommunication";
const { getUsers } = carServiceNew;

function RetailerTable() {
	const [allRetailers, setAllRetailers] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getUsers();
				console.log(result);
				console.log(result.data);
				setAllRetailers(result.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="container p-2 mx-auto sm:p-4 text-gray-100 bg-gray-900">
			<SectionHeading
				heading={"Lista prodavaca"}
				colorWhite={true}
			></SectionHeading>
			<div className="overflow-x-auto mt-4">
				<table className="w-full p-6 text-body  text-left whitespace-nowrap">
					<colgroup>
						<col className="w-5"></col>

						<col></col>
						<col></col>
						<col></col>
						<col></col>
						<col className="w-5"></col>
					</colgroup>
					<thead>
						<tr className="bg-gray-700">
							<th className="p-3">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</th>
							<th className="p-3">Ime i prezime</th>
							<th className="p-3">Pozicija</th>
							<th className="p-3">Email</th>
							<th className="p-3 text-center">Broj automobila</th>

							<th className="p-3 px-4">
								<span className="sr-only"></span>
							</th>
						</tr>
					</thead>
					{allRetailers.map((retailer, i) => {
						return (
							<RetailerInTable key={i} retailer={retailer}></RetailerInTable>
						);
					})}
				</table>
			</div>
		</div>
	);
}

export default RetailerTable;
