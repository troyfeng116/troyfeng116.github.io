import React from 'react'
import BorderGradient, { BorderGradientColors } from 'Components/BorderGradient'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardBackgrounds, StandardBorderRadii, StandardFlexChild, StandardFonts, StandardLayout, StandardPadding, StandardTextAlign, StandardWidth } from 'Styles/Standard'
import { useBackgroundThemeMap } from 'Styles/Theme/useBackgroundThemeMap'
import { useBorderGradientThemeMap } from 'Styles/Theme/useBorderGradientThemeMap'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

export interface VideoCellProps {
    ytEmbedUrl: string
    label: string
}

export const VideoCell: React.FC<VideoCellProps> = (props) => {
    const { ytEmbedUrl, label } = props
    const backgroundThemeMap = useBackgroundThemeMap()
    const textGradientThemeMap = useTextGradientThemeMap()
    const borderGradientThemeMap = useBorderGradientThemeMap()

    return (
        <BorderGradient fromColor={borderGradientThemeMap[BorderGradientColors.Pink]} toColor={borderGradientThemeMap[BorderGradientColors.Orange]} borderRadius={12}>
            <div className={`${StandardLayout.FlexCol} ${StandardFlexChild.Flex1} ${backgroundThemeMap[StandardBackgrounds.Black]} ${StandardBorderRadii.R12} ${StandardWidth.Full}`}>
                <iframe
                    className={`${StandardBorderRadii.R12} ${StandardWidth.Full}`}
                    style={{ minHeight: 250, borderBottom: `4px solid ${borderGradientThemeMap[BorderGradientColors.Pink]}` }}
                    src={`https://www.youtube.com/embed/${ytEmbedUrl}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    color="white"
                    title={label}
                />
                <TextGradient
                    className={`${StandardTextAlign.Center} ${StandardPadding.All18} ${StandardFonts.SmallTextAltBold}`}
                    from={textGradientThemeMap[TextGradientColors.Pink]}
                    to={textGradientThemeMap[TextGradientColors.Orange]}
                >
                    {label}
                </TextGradient>
            </div>
        </BorderGradient>
    )
}
