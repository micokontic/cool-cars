export default function validateInputUser(values) {
	let errors = {};

	if (!values.username.trim()) {
		errors.username = "Potrebno je unijeti username";
	}
	if (!values.first_name.trim()) {
		errors.first_name = "Potrebno je unijeti ime korisnika";
	}
	if (!values.last_name.trim()) {
		errors.last_name = "Potrebno je unijeti prezime korisnika";
	}
	if (!values.position.trim()) {
		errors.position = "Potrebno je unijeti poziciju korisnika";
	}
	if (!values.email) {
		errors.email = "Potrebno je unijeti email korisnika";
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = "Email nije isparavan";
	}
	if (!values.password) {
		errors.password = "Potrebno je unijeti password";
	} else if (values.password.length < 6) {
		errors.password = "Password mora imati najmanje 6 karaktera";
	} else if (values.password2 !== values.password) {
		errors.password = "Passwordi se ne poklapaju";
	}

	if (!values.password2) {
		errors.password2 = "Potrebno je unijeti password";
	} else if (values.password2.length < 6) {
		errors.password2 = "Password mora imati najmanje 6 karaktera";
	} else if (values.password2 !== values.password) {
		errors.password2 = "Passwordi se ne poklapaju";
	}

	if (values.img == null) {
		errors.img = "Potrebno je dodati sliku";
	}

	return errors;
}
