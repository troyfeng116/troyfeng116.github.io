import './AboutSection.module.css'

import React from 'react'
import AnimateOnScroll from 'Components/AnimateOnScroll'
import BorderGradient from 'Components/BorderGradient'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardBackgrounds, StandardFonts, StandardMargin, StandardPadding, StandardTextAlign, StandardWidth } from 'Styles/Standard'
import { useBackgroundThemeMap } from 'Styles/Theme/useBackgroundThemeMap'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

interface AboutSectionProps {
    children: React.ReactChild
    title: string
    className?: string
}

export const AboutSection: React.FC<AboutSectionProps> = (props) => {
    const { children, title } = props
    const backgroundThemeMap = useBackgroundThemeMap()
    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <AnimateOnScroll>
            <BorderGradient className={`${StandardMargin.B90} ${StandardWidth.Full}`} style={{ maxWidth: 900 }} borderSize={4} fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
                <section className={`${backgroundThemeMap[StandardBackgrounds.Black]}`}>
                    <h3
                        className={`
                            about-section-title
                            ${StandardPadding.X30} ${StandardMargin.Y0} ${StandardWidth.FitContent} ${StandardMargin.XAuto}
                            ${StandardFonts.H1Text} ${backgroundThemeMap[StandardBackgrounds.Black]} ${StandardTextAlign.Center}
                        `}
                        style={{ whiteSpace: 'nowrap', transform: 'translateY(-50%)' }}
                    >
                        <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                            {title}
                        </TextGradient>
                    </h3>
                    <section className={`${StandardPadding.X18} ${StandardPadding.B36}`}>{children}</section>
                </section>
            </BorderGradient>
        </AnimateOnScroll>
    )
}
