import { useState, useEffect } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import CarCard from "../CarCard/CarCard";

function ListOfUnaprovedCars({ superAdmin = true, cars, refreshUser }) {
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
					{cars.map((car, i) => {
						if (car.status == "pending" && superAdmin) {
							return (
								<div key={i} className="lg:col-span-2 md:col-span-3 col-span-6">
									{superAdmin == true ? (
										<CarCard
											unApproved={true}
											car={car}
											maxWidth={400}
											refreshUser={refreshUser}
										></CarCard>
									) : (
										<CarCard car={car}></CarCard>
									)}
								</div>
							);
						} else if (!superAdmin) {
							return (
								<div key={i} className="lg:col-span-2 md:col-span-3 col-span-6">
									{superAdmin == true ? (
										<CarCard
											unApproved={true}
											car={car}
											maxWidth={400}
										></CarCard>
									) : (
										<CarCard car={car}></CarCard>
									)}
								</div>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
}

export default ListOfUnaprovedCars;
