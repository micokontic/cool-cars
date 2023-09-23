import SectionHeading from "../SectionHeading/SectionHeading";
import CarCard from "../CarCard/CarCard";

function ListOfUnaprovedCars({ superAdmin = true }) {
	return (
		<div className="container p-2 mx-auto sm:p-4 text-gray-100 bg-gray-900">
			<SectionHeading
				heading={
					superAdmin == true ? "Lista neodobrenih oglasa" : "Svi vaši oglasi"
				}
				colorWhite={true}
			></SectionHeading>
			<div className="mt-4">
				<div className="list-of-unapproved-cars grid grid-cols-6 gap-4">
					<div className="lg:col-span-2 md:col-span-3 col-span-6">
						{superAdmin == true ? (
							<CarCard unApproved={true}></CarCard>
						) : (
							<CarCard></CarCard>
						)}
					</div>
					<div className="lg:col-span-2 md:col-span-3 col-span-6">
						{superAdmin == true ? (
							<CarCard unApproved={true}></CarCard>
						) : (
							<CarCard></CarCard>
						)}
					</div>
					<div className="lg:col-span-2 md:col-span-3 col-span-6">
						{superAdmin == true ? (
							<CarCard unApproved={true}></CarCard>
						) : (
							<CarCard></CarCard>
						)}
					</div>
					<div className="lg:col-span-2 md:col-span-3 col-span-6">
						{superAdmin == true ? (
							<CarCard unApproved={true}></CarCard>
						) : (
							<CarCard></CarCard>
						)}
					</div>
					<div className="lg:col-span-2 md:col-span-3 col-span-6">
						{superAdmin == true ? (
							<CarCard unApproved={true}></CarCard>
						) : (
							<CarCard></CarCard>
						)}
					</div>
					<div className="lg:col-span-2 md:col-span-3 col-span-6">
						{superAdmin == true ? (
							<CarCard unApproved={true}></CarCard>
						) : (
							<CarCard></CarCard>
						)}
					</div>
					<div className="lg:col-span-2 md:col-span-3 col-span-6">
						{superAdmin === true ? (
							<CarCard unApproved={true}></CarCard>
						) : (
							<CarCard></CarCard>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListOfUnaprovedCars;
