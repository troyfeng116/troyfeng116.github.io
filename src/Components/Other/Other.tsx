import './Other.module.css'

import React from 'react'
import BorderGradient from 'Components/BorderGradient'
import TextGradient from 'Components/TextGradient'
import { StandardBackgrounds, StandardFlex, StandardFonts, StandardMargin, StandardPadding, StandardTextAlign, StandardWidth } from 'Styles/Standard'

import AudioCell from './AudioCell'
import { AUDIO_PROPS, MUSIC_VIDEO_PROPS } from './OtherConstants'
import VideoCell from './VideoCell'

export const Other: React.FC = () => {
    const videoCells = MUSIC_VIDEO_PROPS.map((videoProps, idx) => {
        return <VideoCell {...videoProps} key={idx} />
    })

    const audioBoard = AUDIO_PROPS.map((audioProps, idx) => {
        return <AudioCell {...audioProps} key={idx} />
    })

    return (
        <div className={`other-container ${StandardPadding.Y60} ${StandardPadding.X48}`}>
            <BorderGradient fromColor="#d475d4" toColor="#fa9f55" borderSize={4}>
                <section className={`other-section ${StandardFlex.Col} ${StandardPadding.X72} ${StandardPadding.B72} ${StandardBackgrounds.Black}`}>
                    <h3
                        className={`other-section-title ${StandardPadding.X72} ${StandardMargin.Y0} ${StandardFonts.H1Text} ${StandardBackgrounds.Black} ${StandardTextAlign.Center} ${StandardWidth.FitContent} ${StandardMargin.XAuto}`}
                        style={{ whiteSpace: 'nowrap', transform: 'translateY(-50%)' }}
                    >
                        <TextGradient from="#d475d4" to="#fa9f55">
                            Musician, Pianist, Performer.
                        </TextGradient>
                    </h3>
                    <section className={`other-section-grid ${StandardMargin.T18}`}>{videoCells}</section>
                    <section className={`other-section-audio-grid ${StandardMargin.T48}`}>{audioBoard}</section>
                </section>
            </BorderGradient>
        </div>
    )
}
