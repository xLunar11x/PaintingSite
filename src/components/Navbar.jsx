import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {

    const logo = new URL(`../assets/IMG_9933.jpg`, import.meta.url).href

    return (
        <div id="navbar">
            <div className="image-container">
                <img id="logo" src={logo}></img>
            </div>
            <div id="links">
                <div>
                    <Link className="navbar-links" to="">Home</Link>
                </div>
                <div>
                    <Link className="navbar-links" to="/portfolio">Portfolio</Link>
                </div>
                <div>
                    <Link className="navbar-links" to="/services">Services</Link>
                </div>
                <div>
                    <Link className="navbar-links" to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;