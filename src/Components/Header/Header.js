import React from 'react';
import './Header.css';
import logo from './conference1.png'

const Header = () => {
    return (
        <div className="header">
            <img className="img-fluid" src={logo} alt="logo" />
            <h1 className="heading">International Education Expo 2021</h1>
            <p className="header-message fw-bold"><small>Invite World Class Teacher for Upcomming Education Conference</small></p>
            <p className="fs-4">Total Budget: <span className="fw-bold">100 Milion US Dollars</span></p>
            <nav>
                <a href="/home">Home</a>
                <a href="/schedule">Schedule</a>
                <a href="/human-rights">Human Rights</a>
                <a href="/conferences">Conference</a>
            </nav>
        </div>
    );
};

export default Header;