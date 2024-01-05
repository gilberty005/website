import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css'; 
import Typed from 'typed.js';

const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#portfolio">Portfolio</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#blog">Blog</a></p>
    <p><a href="#contact">Contact</a></p>
    </>
);

const Navbar = () => {
    const el = React.useRef(null);
    const [toggleMenu, setToggleMenu] = useState(false); 

    return (
        <div className="gilbert__navbar">
            <div className="gilbert__navbar-links_logo">
                <p></p>
            </div>
            <div className="gilbert__navbar-links">
                <div className="gilbert__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="gilbert__navbar_menu">
            {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
                <div className="gilbert__navbar-menu_container scale-up-center">
                    <div className="gilbert__navbar-menu_container-links"> 
                        <Menu />
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};

export default Navbar; 