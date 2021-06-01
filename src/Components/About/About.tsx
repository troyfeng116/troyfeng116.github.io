import './About.module.css'

import React from 'react'
import AgeCounter from 'Components/AgeCounter'
import BorderGradient from 'Components/BorderGradient'
import { likeWords, meWords } from 'Components/Home/HomeConstants'
import { StandardBackgrounds, StandardFlex, StandardFlexChild, StandardFonts, StandardLayout, StandardMargin, StandardPadding, StandardTextAlign, StandardWidth } from 'Components/Styles'
import TextGradient from 'Components/TextGradient'
import WordTyper from 'Components/WordTyper'

import AnimateOnScroll from '../AnimateOnScroll'

import { aboutButtons, aboutImgUrls, aboutTextArr, ACTIVITIES, COURSEWORK, WORK_EXPERIENCE } from './AboutConstants'
import AboutSection from './AboutSection'
import ExperienceCell from './ExperienceCell'

export const About: React.FC = () => {
    const aboutSections = aboutTextArr.map((text, index) => (
        <AnimateOnScroll key={index}>
            <AboutSection key={index} even={index % 2 === 0} text={text} imgUrls={aboutImgUrls[index]} moreInfoButton={aboutButtons[index]} />
        </AnimateOnScroll>
    ))

    if (false) return <div className="about-container">{aboutSections}</div>
    return (
        <main className={`about-container ${StandardPadding.X60} ${StandardPadding.Y60} ${StandardLayout.FlexCol}`}>
            {/* <BorderGradient className={`${StandardMargin.B30} ${StandardWidth.Full}`} style={{ maxWidth: 900 }} borderSize={4} fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
                <div className={`about-bio-facts-container ${StandardLayout.FlexRow} ${StandardBackgrounds.Black} ${StandardPadding.All18}`}>
                    <div className={`about-bio-text ${StandardFlexChild.Flex1} ${StandardTextAlign.Center} ${StandardFonts.SmallTextBold} ${StandardLayout.FlexCol}`}>
                        <TextGradient className={`${StandardWidth.FitContent}`} from="#d475d4" to="#fa9f55">
                            My name is Troy, and I am a
                        </TextGradient>
                        <span className={`about-counter-display ${StandardTextAlign.Center} ${StandardFonts.MediumTextAlt} ${StandardMargin.T6}`}>
                            <WordTyper words={meWords} />
                        </span>
                    </div>
                    <div className={`about-bio-text ${StandardFlexChild.Flex1} ${StandardTextAlign.Center} ${StandardFonts.SmallTextBold} ${StandardLayout.FlexCol}`}>
                        <TextGradient from="#d475d4" to="#fa9f55">
                            <span className={`${StandardWidth.FitContent}`}>I am</span>
                        </TextGradient>
                        <span className={`about-counter-display ${StandardTextAlign.Center} ${StandardMargin.Y6}`}>
                            <AgeCounter />
                        </span>
                        <TextGradient from="#d475d4" to="#fa9f55">
                            old
                        </TextGradient>
                    </div>
                    <div className={`about-bio-text ${StandardFlexChild.Flex1} ${StandardTextAlign.Center} ${StandardFonts.SmallTextBold} ${StandardLayout.FlexCol}`}>
                        <TextGradient from="#d475d4" to="#fa9f55">
                            And I like
                        </TextGradient>
                        <span className={`about-counter-display ${StandardTextAlign.Center} ${StandardFonts.MediumTextAlt} ${StandardMargin.T6}`}>
                            <WordTyper words={likeWords} />
                        </span>
                    </div>
                </div>
            </BorderGradient> */}

            <BorderGradient className={`${StandardMargin.B30} ${StandardWidth.Full}`} style={{ maxWidth: 900 }} borderSize={4} fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
                <section className={`${StandardPadding.All18} ${StandardBackgrounds.Black}`}>
                    <TextGradient className={`${StandardMargin.B12}`} from="#d475d4" to="#fa9f55">
                        <h2 className={`${StandardFonts.LargeText} ${StandardMargin.Y0}`}>Education</h2>
                    </TextGradient>
                    <TextGradient className={`${StandardMargin.B12}`} from="#d475d4" to="#fa9f55">
                        <p style={{ lineHeight: 1.5 }} className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`}>
                            Yale University, 2019-2024&nbsp;&nbsp;|&nbsp;&nbsp;B.S. expected 2024, CS+MATH and PHIL (PSYC)&nbsp;&nbsp;|&nbsp;&nbsp;GPA 4.0
                        </p>
                    </TextGradient>
                    <TextGradient className={`${StandardMargin.B12}`} from="#d475d4" to="#fa9f55">
                        <p style={{ lineHeight: 1.5 }} className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`}>
                            I&apos;m a sophomore double majoring in Computer Science & Mathematics and Philosophy (concentration in psychology). I&apos;m interested in the various intersections
                            between engineering/tech and various topics in philosophy and psychology, such as AI, philosophy of math & science, logic & truth, social psych, and ethical engineering.
                            Originally class of 2023 (&apos;23 at heart), but took leave of absence following first year.
                        </p>
                    </TextGradient>
                    <TextGradient className={`${StandardMargin.B12}`} from="#d475d4" to="#fa9f55">
                        <div>
                            <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>Coursework:</p>
                            <div style={{ flexWrap: 'wrap' }} className={`${StandardFonts.SmallTextAltBold} ${StandardFlex.Row} ${StandardMargin.T6}`}>
                                {COURSEWORK.map((course, idx) => {
                                    return (
                                        <div key={idx} className={`${StandardMargin.X6}`} style={{ border: '2px solid #5078f0', borderRadius: 3, marginTop: 4, marginBottom: 4, padding: '2px 6px' }}>
                                            {course}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </TextGradient>
                    <TextGradient from="#d475d4" to="#fa9f55">
                        <div>
                            <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>Activities:</p>
                            <div style={{ flexWrap: 'wrap' }} className={`${StandardFonts.SmallTextAltBold} ${StandardFlex.Row} ${StandardMargin.T6}`}>
                                {ACTIVITIES.map((activity, idx) => {
                                    return (
                                        <div key={idx} className={`${StandardMargin.X6} ${StandardMargin.Y6}`} style={{ border: '2px solid #5078f0', borderRadius: 3, padding: '2px 6px' }}>
                                            {activity}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </TextGradient>
                </section>
            </BorderGradient>

            <BorderGradient className={`${StandardMargin.B30} ${StandardWidth.Full}`} style={{ maxWidth: 900 }} borderSize={4} fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
                <section className={`${StandardPadding.X18} ${StandardPadding.T18} ${StandardPadding.B24} ${StandardBackgrounds.Black}`}>
                    <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                        <h2 className={`${StandardFonts.LargeText} ${StandardMargin.Y0}`}>Experience</h2>
                    </TextGradient>

                    {WORK_EXPERIENCE.map((experienceProps, idx) => (
                        <div key={idx} className={idx === WORK_EXPERIENCE.length - 1 ? '' : StandardMargin.B24}>
                            <ExperienceCell {...experienceProps} />
                        </div>
                    ))}
                </section>
            </BorderGradient>

            <BorderGradient className={`${StandardMargin.B30} ${StandardWidth.Full}`} style={{ maxWidth: 900 }} borderSize={4} fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
                <section className={`${StandardPadding.X18} ${StandardPadding.T18} ${StandardPadding.B24} ${StandardBackgrounds.Black}`}>
                    <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                        <h2 className={`${StandardFonts.LargeText} ${StandardMargin.Y0}`}>More about me</h2>
                    </TextGradient>
                </section>
            </BorderGradient>
        </main>
    )
}
