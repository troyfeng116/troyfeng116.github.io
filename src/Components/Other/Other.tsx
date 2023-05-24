import styles from './Other.module.css'

import React from 'react'
import BorderGradient, { BorderGradientColors } from 'Components/BorderGradient'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardBackgrounds, StandardFlex, StandardFonts, StandardMargin, StandardPadding, StandardTextAlign, StandardWidth } from 'Styles/Standard'
import { useBackgroundThemeMap } from 'Styles/Theme/useBackgroundThemeMap'
import { useBorderGradientThemeMap } from 'Styles/Theme/useBorderGradientThemeMap'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

import AudioCell from './AudioCell'
import { AUDIO_PROPS, MUSIC_VIDEO_PROPS } from './OtherConstants'
import VideoCell from './VideoCell'

export const Other: React.FC = () => {
    const backgroundThemeMap = useBackgroundThemeMap()
    const textGradientThemeMap = useTextGradientThemeMap()
    const borderGradientThemeMap = useBorderGradientThemeMap()

    const videoCells = MUSIC_VIDEO_PROPS.map((videoProps, idx) => {
        return <VideoCell {...videoProps} key={idx} />
    })

    const audioBoard = AUDIO_PROPS.map((audioProps, idx) => {
        return <AudioCell {...audioProps} key={idx} />
    })

    return (
        <div className={`${styles.other_container} ${StandardPadding.Y90} ${StandardPadding.X48}`}>
            <BorderGradient fromColor={borderGradientThemeMap[BorderGradientColors.Pink]} toColor={borderGradientThemeMap[BorderGradientColors.Orange]} gradientAngle="90deg" borderSize={4}>
                <section className={`${styles.other_section} ${StandardFlex.Col} ${StandardPadding.X72} ${StandardPadding.B72} ${backgroundThemeMap[StandardBackgrounds.Black]}`}>
                    <h3
                        className={`
                            ${styles.other_section_title}
                            ${StandardPadding.X72} ${StandardMargin.Y0} ${StandardTextAlign.Center} ${StandardMargin.XAuto}
                            ${StandardFonts.H1Text} ${backgroundThemeMap[StandardBackgrounds.Black]} ${StandardWidth.FitContent}
                        `}
                        style={{ transform: 'translateY(-50%)' }}
                    >
                        <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                            Musician, Pianist, Performer.
                        </TextGradient>
                    </h3>
                    <section className={`${styles.other_section_grid} ${StandardMargin.T18}`}>{videoCells}</section>
                    <section className={`${styles.other_section_audio_grid} ${StandardMargin.T48}`}>{audioBoard}</section>
                </section>
            </BorderGradient>
        </div>
    )
}
