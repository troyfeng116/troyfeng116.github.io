import './Footer.css'
import React from 'react'
import { FaInstagramSquare, FaFacebook, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    return (
        <footer className='footer-container'>
            <header className='footer-left'>
                Troy Feng
            </header>
            <nav className='footer-right'>
                <a 
                    href='https://www.instagram.com/tro_yfeng/?hl=en'
                    className='footer-link'
                    target='_blank'
                >
                    <FaInstagramSquare />
                </a>
                <a
                    href='https://www.facebook.com/Tfunk116'
                    className='footer-link'
                    target='_blank'
                >
                    <FaFacebook />
                </a>
                <a
                    href='https://www.linkedin.com/in/troy-feng/'
                    className='footer-link'
                    target='_blank'
                >
                    <FaLinkedin />
                </a>
            </nav>
            
        </footer>
    )
}
