import './Footer.module.css'

import React from 'react'
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { StandardAlign, StandardFlex, StandardFonts, StandardLayout, StandardMargin, StandardTextColors } from 'Components/Styles'
import TextGradient from 'Components/TextGradient'
import Link from 'next/link'

import TextMultiColor from '../TextMultiColor'

export const Footer: React.FC = () => {
    return (
        <footer className={`footer-container ${StandardLayout.FlexRow} ${StandardMargin.TAuto}`}>
            <nav className={`footer-left ${StandardFlex.Row}`}>
                <Link href="/">
                    <header className="footer-logo footer-link-clear-format">
                        <TextMultiColor text="TF" />
                    </header>
                </Link>
                <section className={`footer-left-col ${StandardFlex.Col}`}>
                    <Link href="/">
                        <a className={`footer-left-link footer-link-clear-format ${StandardFonts.SmallTextBold} ${StandardMargin.B18}`}>
                            <TextGradient from="#d475d4" to="#5078f0">
                                Home
                            </TextGradient>
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className={`footer-left-link footer-link-clear-format ${StandardFonts.SmallTextBold} ${StandardMargin.B18}`}>
                            <TextGradient from="#d475d4" to="#5078f0">
                                About
                            </TextGradient>
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className={`footer-left-link footer-link-clear-format ${StandardFonts.SmallTextBold}`}>
                            <TextGradient from="#d475d4" to="#5078f0">
                                Projects
                            </TextGradient>
                        </a>
                    </Link>
                </section>
                <section className={`footer-left-col ${StandardFlex.Col}`}>
                    <Link href="/other">
                        <a className={`footer-left-link footer-link-clear-format ${StandardFonts.SmallTextBold} ${StandardMargin.B18}`}>
                            <TextGradient from="#5078f0" to="#d475d4">
                                Other
                            </TextGradient>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className={`footer-left-link footer-link-clear-format ${StandardFonts.SmallTextBold}`}>
                            <TextGradient from="#5078f0" to="#d475d4">
                                Contact
                            </TextGradient>
                        </a>
                    </Link>
                </section>
            </nav>
            <nav className="footer-right">
                <a href="https://www.instagram.com/tro_yfeng/?hl=en" className={`footer-social-link ${StandardTextColors.Purple}`} target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare />
                </a>
                <a href="https://www.facebook.com/Tfunk116" className={`footer-social-link ${StandardTextColors.LightBlue}`} target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.github.com/troyfeng116/" className={`footer-social-link ${StandardTextColors.Pink}`} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/troy-feng/" className={`footer-social-link ${StandardTextColors.Blue}`} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </nav>
        </footer>
    )
}
