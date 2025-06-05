import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://github.com/ahs136" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/ali.siddiqui_/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009310433131" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer; 