import React from 'react'
import Button, { ButtonColor, ButtonSize } from 'Components/Button'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardFonts, StandardLayout, StandardMargin, StandardWidth } from 'Styles/Standard'
import { useTheme } from 'Styles/Theme/ThemeProvider'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

import ItemList from '../ItemList'

export const Music: React.FC = () => {
    const { isDarkMode } = useTheme()
    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <div>
            <TextGradient
                className={`${StandardMargin.B18} ${StandardFonts.MediumTextBold} ${StandardWidth.FitContent}`}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                Musician: Pianist & Performer
            </TextGradient>
            <TextGradient
                className={`${StandardMargin.B18} ${StandardFonts.SmallTextAltBold}`}
                style={{ lineHeight: 1.5 }}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                I am a long-time pianist, and I have been playing and performing for 14 years. While I am primarily a classically trained soloist, I have several years of experience performing with
                chamber groups, as an orchestra soloist, and in jazz ensembles as a pianist and vibrophonist (drummer on rare occasion). Some of my favorite piano solo repertoire includes the Chopin
                Ballades and Scherzos, Liszt&apos;s La Campanella, and the Köln concert.
            </TextGradient>
            <ItemList
                label="Awards"
                items={[
                    'URI Piano Extravaganza!: 2nd Prize (2018)',
                    'URI Piano Extravaganza!: 3rd Prize (2017)',
                    'URI Piano Extravaganza!: 1st Prize (2014, 2016)',
                    'RI Philharmonic Concerto & Aria Competition: Winner (2015, 2017)',
                    'RIMEA Solo & Ensemble Competition: Superior rating + Honors recital invitee',
                ]}
            />
            <div className={`${StandardLayout.FlexCol} ${StandardMargin.T30}`}>
                <Button color={isDarkMode ? ButtonColor.PinkOrange : ButtonColor.DarkBlueBlue} size={ButtonSize.Medium} href="/other">
                    Listen here
                </Button>
            </div>
        </div>
    )
}
