import "./ContactUs.css";
const ContactUs = () => {
	return (
		<div className="contact-us-container hight-must bg-cool-blue">
			<div className="contact-details">
				<h1>Kontakt</h1>
				<p>
					Ako imate pitanja ili Vam treba pomoć u odabiru automobila,
					kontaktirajte nas:
				</p>
				<ul>
					<li>Email: info@yourrentacar.com</li>
					<li>Telefon: +382-(0)68007007</li>
					<li>Adresa: Hercegovacka, Podgorica, Crna Gora</li>
				</ul>
			</div>

			<div className="contact-form">
				<h2>Pošaljite nam poruku</h2>
				<form>
					<div className="form-group">
						<label htmlFor="name">Ime i prezime</label>
						<input type="text" id="name" name="name" required />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" required />
					</div>
					<div className="form-group">
						<label htmlFor="message">Poruka</label>
						<textarea id="message" name="message" rows="4" required></textarea>
					</div>
					<button type="submit">Pošalji</button>
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
