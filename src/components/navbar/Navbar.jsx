import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'; 
import { Link } from 'react-router-dom';
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator, Button, Heading, View, Card } from "@aws-amplify/ui-react";


const Menu = () => (
    <>
    <p><Link to="/">Home</Link></p>
    <p><Link to="/portfolio">Portfolio</Link></p>
    <p><Link to="/projects">Projects</Link></p>
    <p><Link to="/blog">Blog</Link></p>
    <p><Link to="/contact">Contact</Link></p>
    </>
);

const Navbar = ({ signOut }) => {
    const el = React.useRef(null);
    const [toggleMenu, setToggleMenu] = useState(false); 

    return (
        <div className="gilbert__navbar">
            <div className="gilbert__navbar-links">
                <div className="gilbert__navbar-links_container">
                    <Menu />
                </div>
                <View className="App">
                    <Button onClick={signOut}>Sign Out</Button>
                </View>
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

export default withAuthenticator(Navbar); 