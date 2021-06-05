import './About.module.css'

import React from 'react'
import { StandardFlex, StandardFonts, StandardLayout, StandardMargin, StandardPadding } from 'Components/Styles'
import TextGradient from 'Components/TextGradient'

import { ACTIVITIES, COURSEWORK, WORK_EXPERIENCE } from './AboutConstants'
import AboutSection from './AboutSection'
import ExperienceCell from './ExperienceCell'

export const About: React.FC = () => {
    return (
        <main className={`about-container ${StandardPadding.X60} ${StandardPadding.Y60} ${StandardLayout.FlexCol}`}>
            <AboutSection title="Education">
                <div>
                    <TextGradient className={`${StandardMargin.B12}`} from="#d475d4" to="#fa9f55">
                        <div>
                            <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.T0} ${StandardMargin.B6}`}>Yale University, 2019-2024</p>
                            <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0}`}>B.S. expected 2024, CS+MATH and PHIL (PSYC)&nbsp;&nbsp;|&nbsp;&nbsp;GPA 4.0</p>
                        </div>
                    </TextGradient>
                    <TextGradient className={`${StandardMargin.B12}`} from="#d475d4" to="#fa9f55">
                        <p className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`} style={{ lineHeight: 1.5 }}>
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
                </div>
            </AboutSection>

            <AboutSection title="Experience">
                <div>
                    {WORK_EXPERIENCE.map((experienceProps, idx) => (
                        <div key={idx} className={idx === WORK_EXPERIENCE.length - 1 ? '' : StandardMargin.B24}>
                            <ExperienceCell {...experienceProps} />
                        </div>
                    ))}
                </div>
            </AboutSection>

            <AboutSection title="More about me">
                <div>
                    <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                        <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>Musician: Pianist & Performer</p>
                    </TextGradient>
                    <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                        <p className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`} style={{ lineHeight: 1.5 }}>
                            I am a pianist, and I have been playing and performing for 14 years. While I am primarily a classically trained soloist, I have several years of experience performing with
                            chamber groups, as an orchestra soloist, and in jazz ensembles as a pianist and vibrophonist. Some of my favorite piano solo repertoire include the Chopin Ballades and
                            Scherzos, Liszt&apos;s La Campanella, and the Köln concert.
                        </p>
                    </TextGradient>
                    <TextGradient className={`${StandardMargin.B12}`} from="#d475d4" to="#fa9f55">
                        <div>
                            <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>Awards</p>
                            <div style={{ flexWrap: 'wrap' }} className={`${StandardFonts.SmallTextAltBold} ${StandardFlex.Row} ${StandardMargin.T6}`}>
                                {[
                                    'URI Piano Extravaganza!: 2nd Prize (2018)',
                                    'URI Piano Extravaganza!: 3rd Prize (2017)',
                                    'URI Piano Extravaganza!: 1st Prize (2014, 2016)',
                                    'RI Philharmonic Concerto & Aria Competition: Winner (2015, 2017)',
                                    'RIMEA Solo & Ensemble Competition: Superior rating + Honors recital invitee',
                                ].map((award, idx) => {
                                    return (
                                        <div key={idx} className={`${StandardMargin.X6}`} style={{ border: '2px solid #5078f0', borderRadius: 3, marginTop: 4, marginBottom: 4, padding: '2px 6px' }}>
                                            {award}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </TextGradient>
                </div>
            </AboutSection>
        </main>
    )
}
