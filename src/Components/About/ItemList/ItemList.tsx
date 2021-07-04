import React from 'react'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardFlex, StandardFonts, StandardMargin, StandardWidth } from 'Styles/Standard'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

interface ItemListProps {
    label: string
    items: string[]
}

export const ItemList: React.FC<ItemListProps> = (props) => {
    const { label, items } = props

    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <div>
            <TextGradient
                className={`${StandardFonts.MediumTextBold} ${StandardWidth.FitContent}`}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                {label}
            </TextGradient>
            <div style={{ flexWrap: 'wrap' }} className={`${StandardFonts.SmallTextAltBold} ${StandardFlex.Row} ${StandardMargin.T6}`}>
                {items.map((award, idx) => {
                    return (
                        <TextGradient
                            key={idx}
                            className={`${StandardMargin.X6}`}
                            style={{ border: '2px solid #5078f0', borderRadius: 3, marginTop: 4, marginBottom: 4, padding: '2px 6px' }}
                            from={textGradientThemeMap[TextGradientColors.Pink]}
                            to={textGradientThemeMap[TextGradientColors.Orange]}
                        >
                            {award}
                        </TextGradient>
                    )
                })}
            </div>
        </div>
    )
}
