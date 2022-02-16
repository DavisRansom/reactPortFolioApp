import React from 'react';
import logo from './Logo.png';
import Nav from './Nav.js'


function Header() {
return <header>
        <a href="/">
        <img src={logo} alt="Logo" /> 
        </a>
        <Nav />
 </header> 
}

export default Header;
