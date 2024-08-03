import React, { useRef } from "react";
import './home.css'

const Home = () => {

    const form = useRef();
    const InteriorHome = new URL(`../assets/InteriorHome.jpg`, import.meta.url).href
    const ExteriorHome = new URL(`../assets/ExteriorHome.jpg`, import.meta.url).href
    
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
        <div>
            <div>
                <h2>About Us</h2>
                <p>At Professional Home Painters, we specialize in providing top-quality residential painting services. Our team of experienced and
                    skilled painters is dedicated to delivering exceptional results, ensuring your home looks beautiful and inviting. We use high-quality
                    paints and materials to guarantee a long-lasting finish that you'll love.</p>
            </div>
            <div>
                <h2>Our Services</h2>
                <ul>
                    <div>

                    <img className="serviceimages" src={InteriorHome}></img>
                        <strong>Interior Painting:</strong> Refresh your living spaces with our meticulous interior painting services.
                    </div>
                    <div>
                    <img className="serviceimages" src={ExteriorHome}></img>
                        <strong>Exterior Painting:</strong> Enhance your home's curb appeal with a fresh exterior paint job.
                    </div>
                    <div>
                    <img className="serviceimages" src={ExteriorHome}></img>
                        <strong>Drywall Repair</strong> Professional drywall repair services for residential and commercial properties.
                    </div>
                </ul>
            </div>
            <div id="contact-info">
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
                    <h2>Contact Information</h2>
                    <p>
                        <strong>Phone Number: </strong>
                        <a id="telephone" href="tel:2244690328">(224)469-0328</a>
                    </p>
                    <p><strong>Email: </strong>BahenaEsteban57@gmail.com</p>
                </div>
            </div>
            <div id="choice">
                <h2>Why Choose Us?</h2>
                <ul>
                    <li><strong>Experienced Professionals:</strong> Our painters are trained and experienced, ensuring high-quality workmanship.</li>
                    <li><strong>Quality Materials:</strong> We use premium paints and materials for a durable and stunning finish.</li>
                    <li><strong>Customer Satisfaction:</strong> We prioritize your satisfaction and work hard to exceed your expectations.</li>
                    <li><strong>Competitive Pricing:</strong> Get top-notch painting services at affordable rates.</li>
                </ul>
            </div>

        </div>
    )
}

export default Home;