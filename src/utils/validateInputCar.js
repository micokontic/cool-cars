export default function validateInputCar(values) {
	let errors = {};

	if (!values.vehicle_make.trim()) {
		errors.vehicle_make = "Potrebno je navesti proizvođača automobila";
	}
	if (!values.vehicle_model.trim()) {
		errors.vehicle_model = "Potrebno je navesti model automobila";
	}
	if (!values.description.trim()) {
		errors.description = "Potrebno je navesti opis automobila";
	}
	if (!values.vehicle_price.trim()) {
		errors.vehicle_price = "Potrebno je navesti cijenu automobila";
	}
	if (!values.seat_number.trim()) {
		errors.seat_number = "Potrebno je navesti broj sjedišta automobila";
	} else if (values.seat_number < 0 || values.seat_number > 100) {
		errors.seat_number = "Broj sjedišta automobila mora biti pozitivan broj";
	}

	if (values.image == null) {
		errors.image = "Potrebno je dodati sliku";
	}

	return errors;
}
