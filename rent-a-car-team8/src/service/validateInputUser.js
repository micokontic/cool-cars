export default function validateInputUser(values) {
	let errors = {};

	if (!values.username.trim()) {
		errors.username = "Username required";
	}
	if (!values.first_name.trim()) {
		errors.first_name = "Username required";
	}
	if (!values.last_name.trim()) {
		errors.last_name = "Lastname required";
	}
	if (!values.position.trim()) {
		errors.position = "Position required";
	}
	if (!values.email) {
		errors.email = "Email required";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email address is invalid";
	}
	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 6) {
		errors.password = "Password needs to be 6 characters or more";
	} else if (values.password2 !== values.password) {
		errors.password = "Passwords do not match";
	}

	if (!values.password2) {
		errors.password2 = "Password is required";
	} else if (values.password2.length < 6) {
		errors.password2 = "Password needs to be 6 characters or more";
	} else if (values.password2 !== values.password) {
		errors.password2 = "Passwords do not match";
	}

	if (!errors.file && values.file) {
		errors.file = "Morate dodati Vašu sliku";
	}

	return errors;
}
