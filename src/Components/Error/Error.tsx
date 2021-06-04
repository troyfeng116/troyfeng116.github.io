import './Error.module.css'

import React from 'react'
import BorderGradient from 'Components/BorderGradient'
import Button, { ButtonColor, ButtonSize } from 'Components/Button'
import { StandardFonts, StandardLayout, StandardMargin, StandardPadding, StandardTextAlign } from 'Components/Styles'
import TextGradient from 'Components/TextGradient'

interface ErrorProps {
    statusCode: number
}

export const Error: React.FC<ErrorProps> = (props) => {
    const { statusCode } = props

    return (
        <main className={`error-container ${StandardLayout.FlexColCenter}  ${StandardPadding.Y90} ${StandardPadding.X72}`}>
            <BorderGradient borderSize={6} borderRadius="50%" fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
                <div style={{ height: 259, width: 259 }}>
                    <img style={{ borderRadius: '50%', objectFit: 'cover' }} height={259} width={259} src="/Media/Images/troy-feng-pic-bw.png" alt="Troy Feng" />
                </div>
            </BorderGradient>
            <TextGradient className={`${StandardMargin.T30}`} from="#d475d4" to="#fa9f55" direction="left">
                <h1 className={`${StandardFonts.H1TextAlt} ${StandardMargin.Y0}`}>Oops!</h1>
            </TextGradient>
            <TextGradient className={`${StandardMargin.T18}`} from="#d475d4" to="#fa9f55" direction="left">
                <p className={`${StandardFonts.MediumTextAltBold} ${StandardMargin.Y0} ${StandardTextAlign.Center}`}>This page does not exist. I have my secrets.</p>
            </TextGradient>
            <Button className={`${StandardMargin.T18}`} color={ButtonColor.PinkOrange} size={ButtonSize.Medium} href="/">
                Return to home
            </Button>
            <TextGradient className={`${StandardMargin.T60}`} from="#d475d4" to="#fa9f55" direction="left">
                <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0}`}>Error: {statusCode}</p>
            </TextGradient>
        </main>
    )
}
