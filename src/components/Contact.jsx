import React, { useRef } from "react";
import "./contact.css"


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#myForm')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });

        e.target.reset
    };

    return (
        <div id="contact-page">
            <div>
                <h2>Service Areas</h2>
                <div id="description">
                    We proudly offer our expert painting services from Chicago to Milwaukee, ensuring top-quality interior and exterior painting, wallpaper removal, drywall repair, and power washing. Our team is dedicated to transforming homes and businesses across the region with precision and care, delivering stunning results that exceed expectations.
                </div>
                <div className="map-responsive">
                    <iframe id="google-maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d79296.96895675904!2d-87.85291071797579!3d42.38746333150451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1713382844457!5m2!1sen!2sus"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Responsive Google Map">
                    </iframe>
                </div>
            </div>
            <div className="contact-info" >
                <div>
                    <h2>Contact Us</h2>
                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" placeholder="Name" required={true}></input>
                        <input type="email" name="user_email" placeholder="Email" required={true}></input>
                        <input type="number" name="phone_number" placeholder="Phone Number" required={true}></input>
                        <textarea name="message" placeholder="Description" required={true} />
                        <input type="submit" value="Send"></input>
                    </form>
                </div>
                <div>
                    <p>
                        <strong>Phone Number: </strong>
                        <a id="telephone" href="tel:2244690328">(224)469-0328</a>
                    </p>
                    <p><strong>Email: </strong>BahenaEsteban57@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;