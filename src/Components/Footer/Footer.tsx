import './Footer.module.css'

import React from 'react'
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import BorderGradient from 'Components/BorderGradient'
import TextGradient from 'Components/TextGradient'
import TextMultiColor from 'Components/TextMultiColor'
import Link from 'next/link'
import { StandardBackgrounds, StandardFlex, StandardFonts, StandardJustify, StandardLayout, StandardMargin, StandardPadding, StandardTextColors } from 'Styles/Standard'

export const Footer: React.FC = () => {
    return (
        <footer className={`footer-container ${StandardLayout.FlexRow} ${StandardJustify.Between} ${StandardMargin.TAuto}`}>
            <nav className={`footer-left ${StandardFlex.Row}`}>
                <BorderGradient className={`footer-logo ${StandardMargin.R18}`} borderSize={4} borderRadius="50%" fromColor="#d475d4" toColor="#5078f0" gradientAngle="45deg">
                    <Link href="/">
                        <a
                            className={`footer-link-clear-format ${StandardFonts.H1Text} ${StandardLayout.FlexRowCenter} ${StandardBackgrounds.Black} ${StandardPadding.All18}`}
                            style={{ width: 80, height: 80, borderRadius: '50%' }}
                        >
                            <TextMultiColor text="TF" />
                        </a>
                    </Link>
                </BorderGradient>
                <section className={`footer-left-col ${StandardFlex.Col}`}>
                    <Link href="/">
                        <a className={`footer-link-clear-format ${StandardFonts.LinkText} ${StandardMargin.B18}`}>
                            <TextGradient from="#d475d4" to="#5078f0">
                                Home
                            </TextGradient>
                        </a>
                    </Link>
                    <Link href="/about">
                        <a className={`footer-link-clear-format ${StandardFonts.LinkText} ${StandardMargin.B18}`}>
                            <TextGradient from="#d475d4" to="#5078f0">
                                About
                            </TextGradient>
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a className={`footer-link-clear-format ${StandardFonts.LinkText}`}>
                            <TextGradient from="#d475d4" to="#5078f0">
                                Projects
                            </TextGradient>
                        </a>
                    </Link>
                </section>
                <section className={`footer-left-col ${StandardFlex.Col}`}>
                    <Link href="/other">
                        <a className={`footer-link-clear-format ${StandardFonts.LinkText} ${StandardMargin.B18}`}>
                            <TextGradient from="#5078f0" to="#d475d4">
                                Other
                            </TextGradient>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className={`footer-link-clear-format ${StandardFonts.LinkText}`}>
                            <TextGradient from="#5078f0" to="#d475d4">
                                Contact
                            </TextGradient>
                        </a>
                    </Link>
                </section>
            </nav>
            <nav className={`footer-right ${StandardFlex.Row}`}>
                <a
                    href="https://www.instagram.com/tro_yfeng/?hl=en"
                    className={`footer-social-link ${StandardFlex.Row} ${StandardMargin.L30} ${StandardTextColors.Purple}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagramSquare />
                </a>
                <a
                    href="https://www.facebook.com/Tfunk116"
                    className={`footer-social-link ${StandardFlex.Row} ${StandardMargin.L30} ${StandardTextColors.LightBlue}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://www.github.com/troyfeng116/"
                    className={`footer-social-link ${StandardFlex.Row} ${StandardMargin.L30} ${StandardTextColors.Pink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/troy-feng/"
                    className={`footer-social-link ${StandardFlex.Row} ${StandardMargin.L30} ${StandardTextColors.Blue}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
            </nav>
        </footer>
    )
}
