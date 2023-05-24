import styles from './Footer.module.css'

import React from 'react'
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import BorderGradient, { BorderGradientColors } from 'Components/BorderGradient'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import TextMultiColor from 'Components/TextMultiColor'
import Link from 'next/link'
import { StandardBackgrounds, StandardFlex, StandardFonts, StandardJustify, StandardLayout, StandardMargin, StandardPadding, StandardTextColors } from 'Styles/Standard'
import { useBackgroundThemeMap } from 'Styles/Theme/useBackgroundThemeMap'
import { useBorderGradientThemeMap } from 'Styles/Theme/useBorderGradientThemeMap'
import { useTextColorTheme } from 'Styles/Theme/useTextColorTheme'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

export const Footer: React.FC = () => {
    const backgroundThemeMap = useBackgroundThemeMap()
    const textGradientThemeMap = useTextGradientThemeMap()
    const borderGradientThemeMap = useBorderGradientThemeMap()
    const textColorThemeMap = useTextColorTheme()

    return (
        <footer className={`${styles.footer_container} ${StandardLayout.FlexRow} ${StandardJustify.Between} ${StandardMargin.TAuto}`}>
            <nav className={`${styles.footer_left} ${StandardFlex.Row}`}>
                <BorderGradient
                    className={`${styles.footer_logo} ${StandardMargin.R18}`}
                    borderSize={4}
                    borderRadius="50%"
                    fromColor={borderGradientThemeMap[BorderGradientColors.Pink]}
                    toColor={borderGradientThemeMap[BorderGradientColors.Blue]}
                    gradientAngle="45deg"
                >
                    <Link
                        href="/"
                        className={`
                            ${styles.footer_link_clear_format}
                            ${StandardFonts.H1Text} ${StandardLayout.FlexRowCenter} ${backgroundThemeMap[StandardBackgrounds.Black]} ${StandardPadding.All18}
                        `}
                        style={{ width: 80, height: 80, borderRadius: '50%' }}
                    >
                        <TextMultiColor text="TF" />
                    </Link>
                </BorderGradient>
                <section className={`${styles.footer_left_col} ${StandardFlex.Col}`}>
                    <Link href="/" className={`${styles.footer_link_clear_format} ${StandardFonts.LinkText} ${StandardMargin.B18}`}>
                        <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Blue]}>
                            Home
                        </TextGradient>
                    </Link>
                    <Link href="/about" className={`${styles.footer_link_clear_format} ${StandardFonts.LinkText} ${StandardMargin.B18}`}>
                        <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Blue]}>
                            About
                        </TextGradient>
                    </Link>
                    <Link href="/projects" className={`${styles.footer_link_clear_format} ${StandardFonts.LinkText}`}>
                        <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Blue]}>
                            Projects
                        </TextGradient>
                    </Link>
                </section>
                <section className={`${styles.footer_left_col} ${StandardFlex.Col}`}>
                    <Link href="/other" className={`${styles.footer_link_clear_format} ${StandardFonts.LinkText} ${StandardMargin.B18}`}>
                        <TextGradient from={textGradientThemeMap[TextGradientColors.Blue]} to={textGradientThemeMap[TextGradientColors.Pink]}>
                            Other
                        </TextGradient>
                    </Link>
                    <Link href="/contact" className={`${styles.footer_link_clear_format} ${StandardFonts.LinkText}`}>
                        <TextGradient from={textGradientThemeMap[TextGradientColors.Blue]} to={textGradientThemeMap[TextGradientColors.Pink]}>
                            Contact
                        </TextGradient>
                    </Link>
                </section>
            </nav>
            <nav className={`${styles.footer_right} ${StandardFlex.Row}`}>
                <a
                    href="https://www.instagram.com/tro_yfeng/?hl=en"
                    className={`${styles.footer_social_link} ${StandardFlex.Row} ${StandardMargin.L30} ${textColorThemeMap[StandardTextColors.Purple]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagramSquare />
                </a>
                <a
                    href="https://www.facebook.com/Tfunk116"
                    className={`${styles.footer_social_link} ${StandardFlex.Row} ${StandardMargin.L30} ${textColorThemeMap[StandardTextColors.LightBlue]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaFacebook />
                </a>
                <a
                    href="https://www.github.com/troyfeng116/"
                    className={`${styles.footer_social_link} ${StandardFlex.Row} ${StandardMargin.L30} ${textColorThemeMap[StandardTextColors.Pink]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/troy-feng/"
                    className={`${styles.footer_social_link} ${StandardFlex.Row} ${StandardMargin.L30} ${textColorThemeMap[StandardTextColors.Blue]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
            </nav>
        </footer>
    )
}
