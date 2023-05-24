import React from 'react'
import ItemList from 'Components/About/ItemList'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardFonts, StandardMargin, StandardWidth } from 'Styles/Standard'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

export interface WhoAmIProps {
    paragraphs: string[]
    skills: string[]
}

export const WhoAmI: React.FC<WhoAmIProps> = (props) => {
    const { paragraphs, skills } = props

    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <div>
            <TextGradient
                className={`${StandardFonts.SmallTextAltBold} ${StandardWidth.FitContent} ${StandardMargin.B18}`}
                style={{ lineHeight: 1.5 }}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                <p className={`${StandardFonts.MediumTextBold}`}>~ $ whoami</p>
            </TextGradient>
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
            <TextGradient className={`${StandardMargin.T18}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                <ItemList label="Skills" items={skills} />
            </TextGradient>
        </div>
    )
}
