import './Other.module.css'

import React from 'react'
import BorderGradient from 'Components/BorderGradient'
import {
    StandardBackgrounds,
    StandardBorderRadii,
    StandardFlex,
    StandardFlexChild,
    StandardFonts,
    StandardLayout,
    StandardMargin,
    StandardPadding,
    StandardTextAlign,
    StandardWidth,
} from 'Components/Styles'
import TextGradient from 'Components/TextGradient'

export const Other: React.FC = () => {
    // MUSIC
    const videoURLs = ['w2ldAb6jKMk', 'fHjkQ3vkRQI', '-HbkyJ1RVDA', 'LrvYGi9WWcc', 'ALKK-PzimYI', '-IeaY9Xci4k']
    const videoTitles = [
        'Chopin Scherzo No. 3 in C# minor, Op. 39',
        'Shostakovich Piano Concerto No. 2 in F major, Op. 102',
        'Chopin Étude No. 1 in A-flat major, Op. 25',
        'Scriabin Etude Op. 5 in C# minor, Op. 42',
        'Chopin Scherzo No. 4 in E major, Op. 54',
        'Rachmaninoff Etude-Tableaux No. 5 in E-flat minor, Op. 39',
    ]
    const videoBoard = videoURLs.map((url, i) => {
        return (
            <BorderGradient key={i} borderRadius={12}>
                <div className={`${StandardLayout.FlexCol} ${StandardFlexChild.Flex1} ${StandardBackgrounds.Black} ${StandardBorderRadii.R12} ${StandardWidth.Full}`}>
                    <iframe
                        className={`${StandardBorderRadii.R12} ${StandardWidth.Full}`}
                        style={{ minHeight: 250, borderBottom: '4px solid #5078f0' }}
                        src={`https://www.youtube.com/embed/${url}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        color="white"
                        title={videoTitles[i]}
                    />
                    <TextGradient from="#d475d4" to="#fa9f55">
                        <p className={`other-section-label ${StandardTextAlign.Center} ${StandardPadding.X36} ${StandardFonts.SmallTextAltBold}`}>{videoTitles[i]}</p>
                    </TextGradient>
                </div>
            </BorderGradient>
        )
    })

    const audioURLs = [
        'Media/Videos/stravinsky-trio.mp3',
        'Media/Videos/grande-polonaise.mp3',
        'Media/Videos/Dumka.mp3',
        'Media/Videos/BachPF.mp3',
        'Media/Videos/ItalianConcertoMvt1.mp3',
        'Media/Videos/BeethovenSonataAudio.mp3',
    ]
    const audioTitles = [
        "Stravinsky L'Histoire du Soldat, violin + clarinet + piano trio",
        'Chopin Grande Polonaise Brillante in E-flat major, Op. 22',
        'Tchaikovsky Dumka in C minor, Op. 53',
        'Bach Prelude and Fugue No. 10 in E minor, BWV 855',
        'Bach Italian Concerto, BWV 971, 1st movement',
        'Beethoven Sonata No. 3 in C major, Op. 2',
    ]
    const audioBoard = audioURLs.map((url, index) => {
        return (
            <BorderGradient key={index} borderRadius={12}>
                <div className={`${StandardLayout.FlexCol} ${StandardPadding.T18} ${StandardPadding.X36} ${StandardBackgrounds.Black} ${StandardBorderRadii.R12}`}>
                    <audio controls>
                        <source src={url} type="audio/mp3" />
                    </audio>
                    <TextGradient from="#d475d4" to="#fa9f55">
                        <p className={`other-section-label ${StandardTextAlign.Center} ${StandardPadding.X36} ${StandardFonts.SmallTextAltBold}`}>{audioTitles[index]}</p>
                    </TextGradient>
                </div>
            </BorderGradient>
        )
    })
    // TENNIS

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
                    <section className={`other-section-grid ${StandardMargin.T18}`}>{videoBoard}</section>
                    <section className={`other-section-audio-grid ${StandardMargin.T48}`}>{audioBoard}</section>
                </section>
            </BorderGradient>
        </div>
    )
}
