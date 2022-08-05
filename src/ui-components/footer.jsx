import logo from "../img/logo.svg";
import fb from "../img/brands/facebook-square.svg";
import ig from "../img/brands/instagram-square.svg";
import tw from "../img/brands/twitter-square.svg";
import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <img src={logo} alt="" />
                <span className="p">LaCulers</span>
            </div>
            <div className="link-list">
                <li>Home</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </div>
            <div className="socials">
                <img src={fb} alt="" />
                <img src={tw} alt="" />
                <img src={ig} alt="" />
            </div>
        </div>
    )
}

export default Footer;