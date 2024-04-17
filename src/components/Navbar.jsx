import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {

    return (
        <div id="navbar">
            <h1>Esteban Painting</h1>
            <div id="links">
                <div>
                    <Link to="">Home</Link>
                </div>
                <div>
                    <Link to="/portfolio">Portfolio</Link>
                </div>
                <div>
                    <Link to="/about">About</Link>
                </div>
                <div>
                    <Link to="/services">Services</Link>
                </div>
                <div>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;