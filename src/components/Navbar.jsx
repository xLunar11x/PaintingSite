import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log(isOpen)
        setIsOpen(!isOpen);
    };

    const logo = new URL(`../assets/IMG_9933.jpg`, import.meta.url).href;

    return (
        <div id="navbar">
            <div className="image-container">
                <img id="logo" src={logo} alt="A&S Company Logo"></img>
            </div>
            <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                <FaBars />
            </div>
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <div className="nav-item">
                    <Link className="navbar-links" to="/" onClick={toggleMenu}>Home</Link>
                </div>
                <div className="nav-item">
                    <Link className="navbar-links" to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
                </div>
                <div className="nav-item">
                    <Link className="navbar-links" to="/services" onClick={toggleMenu}>Services</Link>
                </div>
                <div className="nav-item">
                    <Link className="navbar-links" to="/contact" onClick={toggleMenu}>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;