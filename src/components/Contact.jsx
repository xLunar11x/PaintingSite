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
            <h2>Contact Me</h2>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" placeholder="Name" required={true}></input>
                <input type="email" name="user_email" placeholder="Email" required={true}></input>
                <input type="number" name="phone_number" placeholder="Phone Number" required={true}></input>
                <textarea name="message" placeholder="Description" required={true} />
                <input type="submit" value="Send"></input>
            </form>
            <div>
                <h2>Service Areas</h2>
            </div>
            <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d79296.96895675904!2d-87.85291071797579!3d42.38746333150451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1713382844457!5m2!1sen!2sus"
                    width="800" height="600"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Responsive Google Map">
                </iframe>
            </div>
        </div>
    )
}

export default Contact;