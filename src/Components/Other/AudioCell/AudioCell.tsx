import React from 'react'
import BorderGradient, { BorderGradientColors } from 'Components/BorderGradient'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardBackgrounds, StandardBorderRadii, StandardFlexChild, StandardFonts, StandardLayout, StandardMargin, StandardPadding, StandardTextAlign } from 'Styles/Standard'
import { useBackgroundThemeMap } from 'Styles/Theme/useBackgroundThemeMap'
import { useBorderGradientThemeMap } from 'Styles/Theme/useBorderGradientThemeMap'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

export interface AudioCellProps {
    mp3Src: string
    label: string
}

export const AudioCell: React.FC<AudioCellProps> = (props) => {
    const { mp3Src, label } = props
    const backgroundThemeMap = useBackgroundThemeMap()
    const textGradientThemeMap = useTextGradientThemeMap()
    const borderGradientThemeMap = useBorderGradientThemeMap()

    return (
        <BorderGradient fromColor={borderGradientThemeMap[BorderGradientColors.Pink]} toColor={borderGradientThemeMap[BorderGradientColors.Orange]} borderRadius={12}>
            <div
                className={`
                    ${StandardLayout.FlexCol} ${StandardFlexChild.Flex1}
                    ${StandardPadding.All18}
                    ${backgroundThemeMap[StandardBackgrounds.Black]} ${StandardBorderRadii.R12}
                `}
            >
                <audio controls>
                    <source src={mp3Src} type="audio/mp3" />
                </audio>
                <TextGradient
                    className={`${StandardTextAlign.Center} ${StandardPadding.X18} ${StandardMargin.T18} ${StandardFonts.SmallTextAltBold}`}
                    from={textGradientThemeMap[TextGradientColors.Pink]}
                    to={textGradientThemeMap[TextGradientColors.Orange]}
                >
                    {label}
                </TextGradient>
            </div>
        </BorderGradient>
    )
}
