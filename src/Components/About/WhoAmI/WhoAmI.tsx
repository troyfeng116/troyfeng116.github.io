import React from 'react'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardFonts, StandardMargin } from 'Styles/Standard'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

export interface WhoAmIProps {
    paragraphs: string[]
}

export const WhoAmI: React.FC<WhoAmIProps> = (props) => {
    const { paragraphs } = props

    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <div>
            <p className={`${StandardMargin.B18} ${StandardFonts.MediumTextBold}`}>~ $ whoami</p>
            {paragraphs.map((para, idx) => (
                <TextGradient
                    key={idx}
                    className={`${StandardFonts.SmallTextAltBold} ${idx === paragraphs.length - 1 ? StandardMargin.B0 : StandardMargin.B18}`}
                    style={{ lineHeight: 1.5 }}
                    from={textGradientThemeMap[TextGradientColors.Pink]}
                    to={textGradientThemeMap[TextGradientColors.Orange]}
                >
                    {para}
                </TextGradient>
            ))}
        </div>
    )
}
