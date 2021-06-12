import React from 'react'
import BorderGradient from 'Components/BorderGradient'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardBackgrounds, StandardBorderRadii, StandardFlexChild, StandardFonts, StandardLayout, StandardPadding, StandardTextAlign } from 'Styles/Standard'
import { useBackgroundThemeMap } from 'Styles/Theme/useBackgroundThemeMap'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

export interface AudioCellProps {
    mp3Src: string
    label: string
}

export const AudioCell: React.FC<AudioCellProps> = (props) => {
    const { mp3Src, label } = props
    const backgroundThemeMap = useBackgroundThemeMap()
    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <BorderGradient borderRadius={12}>
            <div
                className={`
                    ${StandardLayout.FlexCol} ${StandardFlexChild.Flex1}
                    ${StandardPadding.T18} ${StandardPadding.X36}
                    ${backgroundThemeMap[StandardBackgrounds.Black]} ${StandardBorderRadii.R12}
                `}
            >
                <audio controls>
                    <source src={mp3Src} type="audio/mp3" />
                </audio>
                <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                    <p className={`${StandardTextAlign.Center} ${StandardPadding.X24} ${StandardFonts.SmallTextAltBold}`}>{label}</p>
                </TextGradient>
            </div>
        </BorderGradient>
    )
}
