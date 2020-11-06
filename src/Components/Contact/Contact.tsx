import './Contact.css'
import React from 'react'
import {
    FaRegEnvelope,
    FaLinkedin,
    FaInstagram,
    FaGithub,
    FaFacebook
} from 'react-icons/fa'

export const Contact = () => {
    const icons = [
        <FaRegEnvelope />,
        <FaLinkedin />,
        <FaInstagram />,
        <FaGithub />,
        <FaFacebook />,
    ]
    const urls = [
        "mailto::troy.feng@yale.edu",
        "https://www.linkedin.com/in/troy-feng/",
        "https://www.instagram.com/tro_yfeng/?hl=en",
        "https://github.com/troyfeng116",
        "https://www.facebook.com/Tfunk116/",
    ]
    const titles =[
        "Email",
        "LinkedIn",
        "Instagram",
        "GitHub",
        "Facebook",
    ]

    const contactCells = icons.map((icon, index) => {
        return (
            <section className="contact-cell">
                <div className="contact-icon-container">
                    {icon}
                </div>
                <div className="contact-link-container">
                    <a className="contact-link" href={urls[index]} target='_blank'>
                        {titles[index]}
                    </a>
                </div>
            </section>
        )
    })

    return (
        <article className="contact-info">
		    {contactCells}
        </article>
    )
}