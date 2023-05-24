import styles from './Error.module.css'

import React from 'react'
import BorderGradient, { BorderGradientColors } from 'Components/BorderGradient'
import Button, { ButtonColor, ButtonSize } from 'Components/Button'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardFonts, StandardLayout, StandardMargin, StandardPadding, StandardTextAlign } from 'Styles/Standard'
import { useBorderGradientThemeMap } from 'Styles/Theme/useBorderGradientThemeMap'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

interface ErrorProps {
    statusCode: number
}

export const Error: React.FC<ErrorProps> = (props) => {
    const { statusCode } = props
    const textGradientThemeMap = useTextGradientThemeMap()
    const borderGradientThemeMap = useBorderGradientThemeMap()

    return (
        <main className={`${styles.error_container} ${StandardLayout.FlexColCenter}  ${StandardPadding.Y90} ${StandardPadding.X72}`}>
            <BorderGradient
                borderSize={6}
                borderRadius="50%"
                fromColor={borderGradientThemeMap[BorderGradientColors.Pink]}
                toColor={borderGradientThemeMap[BorderGradientColors.Orange]}
                gradientAngle="120deg"
            >
                <div style={{ height: 259, width: 259 }}>
                    <img style={{ borderRadius: '50%', objectFit: 'cover' }} height={259} width={259} src="/Media/Images/troy-feng-pic-bw.png" alt="Troy Feng" />
                </div>
            </BorderGradient>
            <TextGradient className={`${StandardMargin.T30}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]} direction="left">
                <h1 className={`${StandardFonts.H1TextAlt} ${StandardMargin.Y0}`}>Oops!</h1>
            </TextGradient>
            <TextGradient className={`${StandardMargin.T18}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]} direction="left">
                <p className={`${StandardFonts.MediumTextAltBold} ${StandardMargin.Y0} ${StandardTextAlign.Center}`}>This page does not exist. I have my secrets.</p>
            </TextGradient>
            <Button className={`${StandardMargin.T18}`} color={ButtonColor.PinkOrange} size={ButtonSize.Medium} href="/">
                Return to home
            </Button>
            <TextGradient className={`${StandardMargin.T60}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]} direction="left">
                <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0}`}>Error: {statusCode}</p>
            </TextGradient>
        </main>
    )
}
