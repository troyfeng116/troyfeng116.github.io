import './Contact.module.css'

import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import { Clickable, StandardFonts, StandardJustify, StandardLayout, StandardPadding, StandardTextColors } from 'Components/Styles'
import TextGradient from 'Components/TextGradient'

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
                <section className={`contact-cell ${StandardLayout.FlexColCenter} ${Clickable}`} style={{ width: 150, height: 150 }}>
                    <section className={`${StandardLayout.FlexColCenter} ${StandardTextColors.Pink}`}>
                        <div style={{ fontSize: 60 }} onClick={() => window.open(urls[index], '_blank')}>
                            {icon}
                        </div>
                        <TextGradient from="#d475d4" to="#fa9f55">
                            <a
                                className={`${StandardTextColors.Orange} ${StandardFonts.MediumTextBold}`}
                                style={{ textDecoration: 'none' }}
                                href={urls[index]}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {titles[index]}
                            </a>
                        </TextGradient>
                    </section>
                </section>
            </ContactAnimation>
        )
    })

    return (
        <main className={`other-container ${StandardLayout.FlexRow} ${StandardJustify.Evenly} ${StandardPadding.Y120} ${StandardPadding.X36}`} style={{ flexWrap: 'wrap', minHeight: 500 }}>
            {contactCells}
        </main>
    )
}
