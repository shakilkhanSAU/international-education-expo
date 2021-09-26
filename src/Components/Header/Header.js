import React from 'react';
import './Header.css';
import logo from './conference1.png'

const Header = () => {
    return (
        <div className="header">
            <img className="img-fluid" src={logo} alt="logo" />
            <h1>International Education Expo 2021</h1>
            <h4>Total Budget: 100 Milion US Dollars</h4>
            <nav>
                <a href="/home">Home</a>
                <a href="/schedule">Schedule</a>
                <a href="/human-rights">Human Rights</a>
            </nav>
        </div>
    );
};

export default Header;