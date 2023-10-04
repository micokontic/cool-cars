import "./ContactUs.css";
const ContactUs = () => {
	return (
		<div className="contact-us-container hight-must bg-cool-blue">
			<div className="contact-details">
				<h1>Contact Us</h1>
				<p>
					If you have any questions or need assistance, feel free to contact us:
				</p>
				<ul>
					<li>Email: info@yourrentacar.com</li>
					<li>Phone: +1 (123) 456-7890</li>
					<li>Address: 123 Main Street, City, Country</li>
				</ul>
			</div>

			<div className="contact-form">
				<h2>Send Us a Message</h2>
				<form>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" required />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" name="email" required />
					</div>
					<div className="form-group">
						<label htmlFor="message">Message</label>
						<textarea id="message" name="message" rows="4" required></textarea>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default ContactUs;
