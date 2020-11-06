import './Footer.css'
import React, { useEffect, useState } from 'react'
import { FaInstagramSquare, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const colorArr = [
    "rgb(0,120,255)",
    "rgb(0,0,255)",
    "rgb(120,0,255)",
    "rgb(255,0,255)",
    "rgb(255,0,120)",
    "rgb(255,0,0)",
    "rgb(255,120,0)",
    "rgb(255,255,0)",
    "rgb(120,255,0)",
    "rgb(0,255,0)",
    "rgb(0,255,120)",
    "rgb(0,255,255)"
]

export const Footer = () => {
    const [color, setColor] = useState<number>(0)
    const numColors = colorArr.length

    useEffect(() => {
        const timeout = setTimeout(() => {
            setColor((color+1) % numColors)
        }, 1500)
        return () => clearTimeout(timeout)
    }, [color])

    return (
        <footer className='footer-container'>
            <nav className='footer-left'>
                <header className='footer-logo' style={{color: colorArr[color]}}>
                    TF
                </header>
                <section className='footer-left-column'>
                    <Link to='/home' className='footer-left-link-wrapper'>
                        <a className='footer-left-link'>
                            Home
                        </a>
                    </Link>
                    <Link to='/About' className='footer-left-link-wrapper'>
                        <a className='footer-left-link'>
                            About
                        </a>
                    </Link>
                    <Link to='/Projects' className='footer-left-link-wrapper'>
                        <a className='footer-left-link'>
                            Projects
                        </a>
                    </Link>
                </section>
                <section className='footer-left-column'>
                    <Link to='/other' className='footer-left-link-wrapper'>
                        <a className='footer-left-link'>
                            Other
                        </a>
                    </Link>
                    <Link to='/contact' className='footer-left-link-wrapper'>
                        <a className='footer-left-link'>
                            Contact
                        </a>
                    </Link>
                </section>
            </nav>
            <nav className='footer-right'>
                <a 
                    href='https://www.instagram.com/tro_yfeng/?hl=en'
                    className='footer-social-link'
                    target='_blank'
                >
                    <FaInstagramSquare />
                </a>
                <a
                    href='https://www.facebook.com/Tfunk116'
                    className='footer-social-link'
                    target='_blank'
                >
                    <FaFacebook />
                </a>
                <a
                    href='https://www.linkedin.com/in/troy-feng/'
                    className='footer-social-link'
                    target='_blank'
                >
                    <FaLinkedin />
                </a>
            </nav>
            
        </footer>
    )
}
