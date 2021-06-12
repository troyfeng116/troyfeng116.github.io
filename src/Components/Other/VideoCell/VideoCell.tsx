import React from 'react'
import BorderGradient from 'Components/BorderGradient'
import TextGradient from 'Components/TextGradient'
import { StandardBackgrounds, StandardBorderRadii, StandardFlexChild, StandardFonts, StandardLayout, StandardPadding, StandardTextAlign, StandardWidth } from 'Styles/Standard'

export interface VideoCellProps {
    ytEmbedUrl: string
    label: string
}

export const VideoCell: React.FC<VideoCellProps> = (props) => {
    const { ytEmbedUrl, label } = props

    return (
        <BorderGradient borderRadius={12}>
            <div className={`${StandardLayout.FlexCol} ${StandardFlexChild.Flex1} ${StandardBackgrounds.Black} ${StandardBorderRadii.R12} ${StandardWidth.Full}`}>
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
                <TextGradient from="#d475d4" to="#fa9f55">
                    <p className={`${StandardTextAlign.Center} ${StandardPadding.X24} ${StandardFonts.SmallTextAltBold}`}>{label}</p>
                </TextGradient>
            </div>
        </BorderGradient>
    )
}
