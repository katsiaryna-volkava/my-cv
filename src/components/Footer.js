import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/volkava-katsiaryna/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" size="2x" style={{color: '#0077B5'}}/>
                </a>
                <a href="https://github.com/katsiaryna-volkava" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon" size="2x" style={{color: '#333'}}/>
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Katsiaryna Volkava. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
