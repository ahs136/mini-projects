import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src="/images/head-shot.png" alt="Ali Siddiqui" className="header-image" />
            <h1 className="header-name">Ali Siddiqui</h1>
            <h3 className="header-title">Electrical Engineering Student</h3>
            <div className="header-buttons">
                <a href="mailto:ahs136@pitt.edu" className="email-button">
                    <i className="fas fa-envelope"></i> Email
                </a>
                <a href="https://www.linkedin.com/in/ali-siddiqui-601ab0325/" className="linkedin-button" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
        </header>
    );
}

export default Header; 