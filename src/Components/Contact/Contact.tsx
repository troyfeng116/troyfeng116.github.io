import './Contact.module.css'

import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'

import ContactAnimation from './ContactAnimation'

export const Contact: React.FC = () => {
    const icons = [<FaRegEnvelope key={0} />, <FaLinkedin key={1} />, <FaInstagram key={2} />, <FaGithub key={3} />, <FaFacebook key={4} />]
    const urls = [
        'mailto::troy.feng@yale.edu',
        'https://www.linkedin.com/in/troy-feng/',
        'https://www.instagram.com/tro_yfeng/?hl=en',
        'https://github.com/troyfeng116',
        'https://www.facebook.com/Tfunk116/',
    ]
    const titles = ['Email', 'LinkedIn', 'Instagram', 'GitHub', 'Facebook']

    const contactCells = icons.map((icon, index) => {
        return (
            <ContactAnimation key={index}>
                <section className="contact-cell">
                    <section className="contact-cell-content">
                        <div className="contact-icon-container" onClick={() => window.open(urls[index], '_blank')}>
                            {icon}
                        </div>
                        <div className="contact-link-container">
                            <a className="contact-link" href={urls[index]} target="_blank" rel="noopener noreferrer">
                                {titles[index]}
                            </a>
                        </div>
                    </section>
                </section>
            </ContactAnimation>
        )
    })

    return <article className="contact-info">{contactCells}</article>
}
