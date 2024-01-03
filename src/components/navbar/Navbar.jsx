import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'; 
import logo from '../../assets/logo.svg';
import './navbar.css'; 

const Navbar = () => {
    return (
        <div className="gpt3_navbar"> 
            <div className = "gtp3_navbar-links">
                <div className = "gpt3_navbar-links_logo">
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar; 