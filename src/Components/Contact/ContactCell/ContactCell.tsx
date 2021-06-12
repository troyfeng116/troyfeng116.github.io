import './ContactCell.module.css'

import React from 'react'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { Clickable, StandardBorderRadii, StandardFonts, StandardLayout, StandardTextColors } from 'Styles/Standard'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

export interface ContactCellProps {
    icon: JSX.Element
    href: string
    title: string
}

export const ContactCell: React.FC<ContactCellProps> = (props) => {
    const { icon, href, title } = props
    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <section className={`contact-cell ${StandardBorderRadii.R12} ${StandardLayout.FlexColCenter} ${Clickable}`} style={{ width: 150, height: 150 }}>
            <section className={`${StandardLayout.FlexColCenter} ${StandardTextColors.Pink}`}>
                <div style={{ fontSize: 60 }} onClick={() => window.open(href, '_blank')}>
                    {icon}
                </div>
                <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                    <a className={`${StandardTextColors.Orange} ${StandardFonts.MediumTextBold}`} style={{ textDecoration: 'none' }} href={href} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </TextGradient>
            </section>
        </section>
    )
}
