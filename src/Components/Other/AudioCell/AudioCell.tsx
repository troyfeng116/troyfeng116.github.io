import React from 'react'
import BorderGradient from 'Components/BorderGradient'
import { StandardBackgrounds, StandardBorderRadii, StandardFonts, StandardLayout, StandardPadding, StandardTextAlign } from 'Components/Styles'
import TextGradient from 'Components/TextGradient'

export interface AudioCellProps {
    mp3Src: string
    label: string
}

export const AudioCell: React.FC<AudioCellProps> = (props) => {
    const { mp3Src, label } = props
    return (
        <BorderGradient borderRadius={12}>
            <div className={`${StandardLayout.FlexCol} ${StandardPadding.T18} ${StandardPadding.X36} ${StandardBackgrounds.Black} ${StandardBorderRadii.R12}`}>
                <audio controls>
                    <source src={mp3Src} type="audio/mp3" />
                </audio>
                <TextGradient from="#d475d4" to="#fa9f55">
                    <p className={`${StandardTextAlign.Center} ${StandardPadding.X24} ${StandardFonts.SmallTextAltBold}`}>{label}</p>
                </TextGradient>
            </div>
        </BorderGradient>
    )
}
