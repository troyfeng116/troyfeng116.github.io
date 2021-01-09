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
                        <a className="footer-left-link footer-left-link-wrapper">Home</a>
                    </Link>
                    <Link href="/About">
                        <a className="footer-left-link footer-left-link-wrapper">About</a>
                    </Link>
                    <Link href="/Projects">
                        <a className="footer-left-link footer-left-link-wrapper">Projects</a>
                    </Link>
                </section>
                <section className="footer-left-column">
                    <Link href="/other">
                        <a className="footer-left-link footer-left-link-wrapper">Other</a>
                    </Link>
                    <Link href="/contact">
                        <a className="footer-left-link footer-left-link-wrapper">Contact</a>
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
