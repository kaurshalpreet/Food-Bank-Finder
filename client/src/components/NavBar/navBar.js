import React from 'react';
import Btn from '../Btn/Btn';
import './navBar.css';

function NavBar() {
    return (
    <nav className="navbar navbar-expand-lg navbar">
    <a className="navbar-brand" href="/">
        Food Bank Finder
    </a>
    <Btn>
        Sign In
    </Btn>
    </nav>
    );
};

export default NavBar;