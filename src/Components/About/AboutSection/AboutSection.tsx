import React from 'react'
import AnimateOnScroll from 'Components/AnimateOnScroll'
import BorderGradient from 'Components/BorderGradient'
import { StandardBackgrounds, StandardMargin, StandardPadding, StandardWidth } from 'Components/Styles'

interface AboutSectionProps {
    children: React.ReactChild
    className?: string
}

export const AboutSection: React.FC<AboutSectionProps> = (props) => {
    const { children } = props

    return (
        <AnimateOnScroll>
            <BorderGradient className={`${StandardMargin.B60} ${StandardWidth.Full}`} style={{ maxWidth: 900 }} borderSize={4} fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
                <section className={`${StandardPadding.All18} ${StandardBackgrounds.Black}`}>{children}</section>
            </BorderGradient>
        </AnimateOnScroll>
    )
}
