import SectionHeading from "../SectionHeading/SectionHeading";
import CarCard from "../CarCard/CarCard";

function ListOfUnaprovedCars() {
	return (
		<div className="container p-2 mx-auto sm:p-4 text-gray-100 bg-gray-900">
			<SectionHeading
				heading={"Lista neodobrenih oglasa"}
				colorWhite={true}
			></SectionHeading>
			<div className="mt-4">
				<div className="list-of-unapproved-cars grid grid-cols-3 gap-4">
					<div className="col-span-1">
						<CarCard unApproved={true}></CarCard>
					</div>
					<div className="col-span-1">
						<CarCard unApproved={true}></CarCard>
					</div>
					<div className="col-span-1">
						<CarCard unApproved={true}></CarCard>
					</div>
					<div className="col-span-1">
						<CarCard unApproved={true}></CarCard>
					</div>
					<div className="col-span-1">
						<CarCard unApproved={true}></CarCard>
					</div>
					<div className="col-span-1">
						<CarCard unApproved={true}></CarCard>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListOfUnaprovedCars;
