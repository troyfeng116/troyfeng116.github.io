import './Footer.css'

import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import TextMultiColor from '../TextMultiColor'

export const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <nav className="footer-left">
                <Link to="/" className="footer-logo-wrapper">
                    <header className="footer-logo">
                        <TextMultiColor text="TF" />
                    </header>
                </Link>
                <section className="footer-left-column">
                    <Link to="/home" className="footer-left-link-wrapper">
                        <div className="footer-left-link">Home</div>
                    </Link>
                    <Link to="/About" className="footer-left-link-wrapper">
                        <div className="footer-left-link">About</div>
                    </Link>
                    <Link to="/Projects" className="footer-left-link-wrapper">
                        <div className="footer-left-link">Projects</div>
                    </Link>
                </section>
                <section className="footer-left-column">
                    <Link to="/other" className="footer-left-link-wrapper">
                        <div className="footer-left-link">Other</div>
                    </Link>
                    <Link to="/contact" className="footer-left-link-wrapper">
                        <div className="footer-left-link">Contact</div>
                    </Link>
                </section>
            </nav>
            <nav className="footer-right">
                <a href="https://www.instagram.com/tro_yfeng/?hl=en" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare />
                </a>
                <a href="https://www.facebook.com/Tfunk116" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.linkedin.com/in/troy-feng/" className="footer-social-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </nav>
        </footer>
    )
}
