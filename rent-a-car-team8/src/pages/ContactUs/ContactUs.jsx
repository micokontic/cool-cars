
import './ContactUs.css'
import CarPicture from './undraw_electric_car_b7hl.png'

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="text-container">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
          incidunt ex esse corporis eaque quam eos nulla quaerat nostrum
          harum, aliquam accusamus! Vero est sint iure, laudantium nam vel in.
        </p>
      </div>
      <div className="image-container">
      
        <img src={CarPicture} alt="Contact Us" />
      </div>
    </div>
  );
};

export default ContactUs;
