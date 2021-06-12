import React from 'react'
import Button, { ButtonColor, ButtonSize } from 'Components/Button'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardFonts, StandardLayout, StandardMargin } from 'Styles/Standard'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

import ItemList from '../ItemList'

export const Music: React.FC = () => {
    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <div>
            <TextGradient className={`${StandardMargin.B18}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>Musician: Pianist & Performer</p>
            </TextGradient>
            <TextGradient className={`${StandardMargin.B18}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                <p className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`} style={{ lineHeight: 1.5 }}>
                    I am a long-time pianist, and I have been playing and performing for 14 years. While I am primarily a classically trained soloist, I have several years of experience performing
                    with chamber groups, as an orchestra soloist, and in jazz ensembles as a pianist and vibrophonist. Some of my favorite piano solo repertoire include the Chopin Ballades and
                    Scherzos, Liszt&apos;s La Campanella, and the Köln concert.
                </p>
            </TextGradient>
            <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
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
            </TextGradient>
            <div className={`${StandardLayout.FlexCol} ${StandardMargin.T30}`}>
                <Button color={ButtonColor.PinkOrange} size={ButtonSize.Medium} href="/other">
                    Listen here
                </Button>
            </div>
        </div>
    )
}
