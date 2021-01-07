import './Footer.module.css'

import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

import TextMultiColor from '../TextMultiColor'

export const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <nav className="footer-left">
                <Link href="/">
                    <header className="footer-logo footer-logo-wrapper">
                        <TextMultiColor text="TF" />
                    </header>
                </Link>
                <section className="footer-left-column">
                    <Link href="/home">
                        <div className="footer-left-link footer-left-link-wrapper">Home</div>
                    </Link>
                    <Link href="/About">
                        <div className="footer-left-link footer-left-link-wrapper">About</div>
                    </Link>
                    <Link href="/Projects">
                        <div className="footer-left-link footer-left-link-wrapper">Projects</div>
                    </Link>
                </section>
                <section className="footer-left-column">
                    <Link href="/other">
                        <div className="footer-left-link footer-left-link-wrapper">Other</div>
                    </Link>
                    <Link href="/contact">
                        <div className="footer-left-link footer-left-link-wrapper">Contact</div>
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
