// 		seat_number: "3",

export default function validateInputCar(values) {
	let errors = {};

	if (!values.vehicle_make.trim()) {
		errors.vehicle_make = "Vehicle make required";
	}
	if (!values.vehicle_model.trim()) {
		errors.vehicle_model = "Vehicle model required";
	}
	if (!values.description.trim()) {
		errors.description = "Description required";
	}
	if (!values.vehicle_price.trim()) {
		errors.vehicle_price = "Price required";
	}
	if (!values.seat_number.trim()) {
		errors.seat_number = "Seat number required";
	} else if (values.seat_number < 0 || values.seat_number > 100) {
		errors.seat_number = "Seat number must be positive number lower then 100";
	}

	return errors;
}
