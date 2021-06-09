import './AboutSection.module.css'

import React from 'react'
import AnimateOnScroll from 'Components/AnimateOnScroll'
import BorderGradient from 'Components/BorderGradient'
import { StandardBackgrounds, StandardFonts, StandardMargin, StandardPadding, StandardTextAlign, StandardWidth } from 'Components/Styles'
import TextGradient from 'Components/TextGradient'

interface AboutSectionProps {
    children: React.ReactChild
    title: string
    className?: string
}

export const AboutSection: React.FC<AboutSectionProps> = (props) => {
    const { children, title } = props

    return (
        <AnimateOnScroll>
            <BorderGradient className={`${StandardMargin.B90} ${StandardWidth.Full}`} style={{ maxWidth: 900 }} borderSize={4} fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
                <section className={`${StandardBackgrounds.Black}`}>
                    <h3
                        className={`about-section-title ${StandardPadding.X30} ${StandardMargin.Y0} ${StandardFonts.H1Text} ${StandardBackgrounds.Black} ${StandardTextAlign.Center} ${StandardWidth.FitContent} ${StandardMargin.XAuto}`}
                        style={{ whiteSpace: 'nowrap', transform: 'translateY(-50%)' }}
                    >
                        <TextGradient from="#d475d4" to="#fa9f55">
                            {title}
                        </TextGradient>
                    </h3>
                    <section className={`${StandardPadding.X18} ${StandardPadding.B36}`}>{children}</section>
                </section>
            </BorderGradient>
        </AnimateOnScroll>
    )
}
