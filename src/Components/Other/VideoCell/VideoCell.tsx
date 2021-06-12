import React from 'react'
import BorderGradient, { BorderGradientColors } from 'Components/BorderGradient'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardBackgrounds, StandardBorderRadii, StandardFlexChild, StandardFonts, StandardLayout, StandardPadding, StandardTextAlign, StandardWidth } from 'Styles/Standard'
import { useBackgroundThemeMap } from 'Styles/Theme/useBackgroundThemeMap'
import { useBorderGradientThemeMap } from 'Styles/Theme/useBorderGradientThemeMap'

export interface VideoCellProps {
    ytEmbedUrl: string
    label: string
}

export const VideoCell: React.FC<VideoCellProps> = (props) => {
    const { ytEmbedUrl, label } = props
    const backgroundThemeMap = useBackgroundThemeMap()
    const textGradientThemeMap = useBackgroundThemeMap()
    const borderGradientThemeMap = useBorderGradientThemeMap()

    return (
        <BorderGradient fromColor={borderGradientThemeMap[BorderGradientColors.Pink]} toColor={borderGradientThemeMap[BorderGradientColors.Orange]} borderRadius={12}>
            <div className={`${StandardLayout.FlexCol} ${StandardFlexChild.Flex1} ${backgroundThemeMap[StandardBackgrounds.Black]} ${StandardBorderRadii.R12} ${StandardWidth.Full}`}>
                <iframe
                    className={`${StandardBorderRadii.R12} ${StandardWidth.Full}`}
                    style={{ minHeight: 250, borderBottom: '4px solid #5078f0' }}
                    src={`https://www.youtube.com/embed/${ytEmbedUrl}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    color="white"
                    title={label}
                />
                <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                    <p className={`${StandardTextAlign.Center} ${StandardPadding.X24} ${StandardFonts.SmallTextAltBold}`}>{label}</p>
                </TextGradient>
            </div>
        </BorderGradient>
    )
}
