export default function validateLogIn(values) {
	let errors = {};

	if (!values.username.trim()) {
		errors.username = "Potrebno je unijeti username";
	}
	if (!values.password) {
		errors.password = "Potrebno je unijeti password";
	} else if (values.password.length < 6) {
		errors.password = "Password mora imati najmanje 6 karaktera";
	}

	return errors;
}
