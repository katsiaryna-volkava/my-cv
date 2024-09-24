import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // We'll create this file for styling the header

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="logo">My Portfolio</h1>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">About Me</Link></li>
                        <li><Link to="/cv">Curriculum Vitae</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
