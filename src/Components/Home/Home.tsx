import './Home.module.css'

import React from 'react'
import AgeCounter from 'Components/AgeCounter'
import AnimateOnScroll from 'Components/AnimateOnScroll'
import BorderGradient from 'Components/BorderGradient'
import Gallery from 'Components/Gallery'
import { StandardBackgrounds, StandardFlexChild, StandardFonts, StandardLayout, StandardMargin, StandardPadding, StandardTextAlign, StandardTextColors, StandardWidth } from 'Components/Styles'
import TextGradient from 'Components/TextGradient'
import WordTyper from 'Components/WordTyper'
import Link from 'next/link'

import { likeWords, meWords } from './HomeConstants'
import HomeSlide from './HomeSlide'

export const Home: React.FC = () => {
    const homeSlides = [
        <HomeSlide
            key={0}
            imageURL="/Media/Images/Math.jpg"
            title="Problem Solver"
            subtitle="I enjoy computer programming, mathematics, numbers, and collaboration."
            redirectText="Projects"
            href="/projects"
        />,
        <HomeSlide
            key={1}
            imageURL="/Media/Videos/OldCampus.mp4"
            title="Student"
            subtitle="Studying Computer Science & Mathematics and Philosophy at Yale University."
            redirectText="More about me"
            href="/about"
        />,
        <HomeSlide
            key={2}
            imageURL="/Media/Videos/PianoSamples.mp4"
            title="Performer"
            subtitle="Long-time classically trained pianist, musician, and performer."
            redirectText="Listen"
            href="/other"
        />,
        <HomeSlide key={3} imageURL="/Media/Videos/Tweener.mp4" title="Competitor" subtitle="Tennis player and (retired) swimmer." redirectText="More" href="/about" />,
        <HomeSlide key={4} imageURL="/Media/Images/leaning-back.jpg" title="That Guy." subtitle="Entertainer, Instigator, Aloofly" redirectText="More about me" href="/about" />,
    ]

    return (
        <div className={`home-container ${StandardPadding.Y90} ${StandardPadding.X72} ${StandardLayout.FlexColCenter}`}>
            <AnimateOnScroll>
                <section className={`home-bio-container ${StandardLayout.FlexCol}`} style={{ minHeight: 500 }}>
                    <BorderGradient borderSize={6} borderRadius="50%" fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
                        <div style={{ height: 259, width: 259 }}>
                            <img style={{ borderRadius: '50%', objectFit: 'cover' }} height={259} width={259} src="/Media/Images/troy-feng-pic-bw.png" alt="Troy Feng" />
                        </div>
                    </BorderGradient>

                    <div className={`${StandardLayout.FlexCol} ${StandardMargin.T30}`}>
                        <h2 className={`${StandardFonts.H1Text} ${StandardTextColors.Blue} ${StandardMargin.Y0}`}>
                            <TextGradient from="#d475d4" to="#fa9f55" direction="left">
                                Hello!
                            </TextGradient>
                        </h2>
                        <BorderGradient className={`${StandardMargin.T30}`} borderSize={4} fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
                            <div className={`home-bio-facts-container ${StandardLayout.FlexRow} ${StandardBackgrounds.Black} ${StandardPadding.Y12}`}>
                                <div className={`home-bio-text ${StandardFlexChild.Flex1} ${StandardTextAlign.Center} ${StandardFonts.SmallTextBold} ${StandardLayout.FlexCol}`}>
                                    <TextGradient className={`${StandardWidth.FitContent}`} from="#d475d4" to="#fa9f55">
                                        My name is Troy, and I am a
                                    </TextGradient>
                                    <span className={`home-counter-display ${StandardTextAlign.Center} ${StandardFonts.MediumTextAlt} ${StandardMargin.T6}`}>
                                        <WordTyper words={meWords} />
                                    </span>
                                </div>
                                <div className={`home-bio-text ${StandardFlexChild.Flex1} ${StandardTextAlign.Center} ${StandardFonts.SmallTextBold} ${StandardLayout.FlexCol}`}>
                                    <TextGradient from="#d475d4" to="#fa9f55">
                                        <span className={`${StandardWidth.FitContent}`}>I am</span>
                                    </TextGradient>
                                    <span className={`home-counter-display ${StandardTextAlign.Center} ${StandardMargin.Y6}`}>
                                        <AgeCounter />
                                    </span>
                                    <TextGradient from="#d475d4" to="#fa9f55">
                                        old
                                    </TextGradient>
                                </div>
                                <div className={`home-bio-text ${StandardFlexChild.Flex1} ${StandardTextAlign.Center} ${StandardFonts.SmallTextBold} ${StandardLayout.FlexCol}`}>
                                    <TextGradient from="#d475d4" to="#fa9f55">
                                        And I like
                                    </TextGradient>
                                    <span className={`home-counter-display ${StandardTextAlign.Center} ${StandardFonts.MediumTextAlt} ${StandardMargin.T6}`}>
                                        <WordTyper words={likeWords} />
                                    </span>
                                </div>
                            </div>
                        </BorderGradient>
                        <div className={`${StandardMargin.T30}`} style={{ maxWidth: 600 }}>
                            <TextGradient className={`${StandardWidth.FitContent}`} from="#d475d4" to="#fa9f55">
                                <div className={`${StandardFonts.MediumText} ${StandardTextAlign.Center}`}>
                                    Please&nbsp;
                                    <Link href="/contact">
                                        <a style={{ textDecoration: '#d475d4 underline' }}>get in touch</a>
                                    </Link>
                                    &nbsp;if you&apos;d like to chat, connect, or collaborate. I&apos;d love to meet you.
                                    <p className={`${StandardMargin.T30} ${StandardFonts.LargeText}`}>Cheers!</p>
                                </div>
                            </TextGradient>
                        </div>
                    </div>
                </section>
            </AnimateOnScroll>
            {/* <section className="home-gallery-container">
                <Gallery items={homeSlides} showCircles={true} arrowsInside={true} bigArrow={true} timeoutSeconds={16} startIndex={0} />
            </section> */}
        </div>
    )
}
