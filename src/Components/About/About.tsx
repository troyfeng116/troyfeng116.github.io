import './About.module.css'

import React from 'react'
import AgeCounter from 'Components/AgeCounter'
import BorderGradient from 'Components/BorderGradient'
import { likeWords, meWords } from 'Components/Home/HomeConstants'
import {
    StandardAlign,
    StandardBackgrounds,
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
import WordTyper from 'Components/WordTyper'

import AnimateOnScroll from '../AnimateOnScroll'

import { aboutButtons, aboutImgUrls, aboutTextArr, ACTIVITIES, COURSEWORK } from './AboutConstants'
import AboutSection from './AboutSection'

export const About: React.FC = () => {
    const aboutSections = aboutTextArr.map((text, index) => (
        <AnimateOnScroll key={index}>
            <AboutSection key={index} even={index % 2 === 0} text={text} imgUrls={aboutImgUrls[index]} moreInfoButton={aboutButtons[index]} />
        </AnimateOnScroll>
    ))

    if (false) return <div className="about-container">{aboutSections}</div>
    return (
        <main className={`about-container ${StandardPadding.X60} ${StandardPadding.Y60} ${StandardLayout.FlexCol}`}>
            <BorderGradient className={`${StandardMargin.B30} ${StandardWidth.Full}`} style={{ maxWidth: 900 }} borderSize={4} fromColor="#d475d4" toColor="#fa9f55" gradientAngle="120deg">
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
            </BorderGradient>

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
                <section className={`${StandardPadding.All18} ${StandardBackgrounds.Black}`}>
                    <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                        <h2 className={`${StandardFonts.LargeText} ${StandardMargin.Y0}`}>Experience</h2>
                    </TextGradient>

                    <TextGradient className={`${StandardMargin.B24}`} from="#d475d4" to="#fa9f55">
                        <div>
                            <p
                                style={{ border: '2px solid #5078f0', borderRadius: 3, padding: '0px 12px' }}
                                className={`${StandardFonts.MediumTextBold} ${StandardWidth.FitContent} ${StandardMargin.T0} ${StandardMargin.B6}`}
                            >
                                Research Assistant
                            </p>
                            <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0} ${StandardMargin.L12}`}>
                                <a href="https://yale-lily.github.io" rel="noreferrer" target="_blank" style={{ textDecoration: '#d475d4 underline' }}>
                                    Language and Information Learning at Yale (LILY)
                                </a>
                                &nbsp;&nbsp;|&nbsp;&nbsp;February 2021 - current
                            </p>
                            <div className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.T6} ${StandardMargin.L12}`}>
                                ‣ Conducted research experiments and testing under guidance of Prof. Dragomir Radev
                                <br />‣ Used Python (nltk, transformers, Jupyter, etc.) to consolidate text summarization models into single API
                                <br />‣ Designed and tested Python modules and documentation in codebase referenced in new NLP lab publications
                                <br />‣ Worked in project team in collaboration with Microsoft Research
                            </div>
                        </div>
                    </TextGradient>

                    <TextGradient className={`${StandardMargin.B24}`} from="#d475d4" to="#fa9f55">
                        <div>
                            <p
                                style={{ border: '2px solid #5078f0', borderRadius: 3, padding: '0px 12px' }}
                                className={`${StandardFonts.MediumTextBold} ${StandardWidth.FitContent} ${StandardMargin.T0} ${StandardMargin.B6}`}
                            >
                                Software Engineer Intern
                            </p>
                            <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0} ${StandardMargin.L12}`}>
                                <a href="https://eurekasurveys.com" rel="noreferrer" target="_blank" style={{ textDecoration: '#d475d4 underline' }}>
                                    Eureka Surveys
                                </a>
                                &nbsp;&nbsp;|&nbsp;&nbsp;August 2020 - current
                            </p>
                            <div className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.T6} ${StandardMargin.L12}`}>
                                ‣ Oversaw and led frontend web development in TypeScript, ReactJS, Next.js, Vercel, and Firebase
                                <br />‣ Built and launched end-to-end novel survey creation tool from the ground up with real-time data visualizations and NLP analysis, grew from 0 to hundreds of
                                researcher customers in three weeks
                                <br />‣ Researched and leveraged OpenAI&apos;s beta API of GPT-3 powered engines for powerful NLP-based survey quality control
                                <br />‣ Designed and implemented full-stack programmatic admin tools using Node.js + Firebase backend and React TypeScript + Next.js frontend
                            </div>
                            <div className={`${StandardMargin.T6}`}>
                                <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0} ${StandardMargin.L12}`}>
                                    Work sample:&nbsp;
                                    <a href="https://eurekasurveys.com" rel="noreferrer" target="_blank" style={{ textDecoration: '#d475d4 underline' }}>
                                        entire website
                                    </a>
                                    &nbsp;(I suggest logging in as a researcher to view our novel survey creation product)
                                </p>
                            </div>
                        </div>
                    </TextGradient>

                    <TextGradient className={`${StandardMargin.B24}`} from="#d475d4" to="#fa9f55">
                        <div>
                            <p
                                style={{ border: '2px solid #5078f0', borderRadius: 3, padding: '0px 12px' }}
                                className={`${StandardFonts.MediumTextBold} ${StandardWidth.FitContent} ${StandardMargin.T0} ${StandardMargin.B6}`}
                            >
                                Peer Tutor
                            </p>
                            <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0} ${StandardMargin.L12}`}>
                                Yale University Math Department&nbsp;&nbsp;|&nbsp;&nbsp;August 2020 - June 2021
                            </p>
                            <div className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.T6} ${StandardMargin.L12}`}>
                                ‣ Held open drop-in office hours twice a week for Yale&apos;s MATH 115 (Calculus of Functions of One Variable I) course
                                <br />‣ Led student discussions + collaboration and answered general questions about course material + problem sets for sessions of 5-25 students
                            </div>
                        </div>
                    </TextGradient>

                    <TextGradient className={`${StandardMargin.B24}`} from="#d475d4" to="#fa9f55">
                        <div>
                            <p
                                style={{ border: '2px solid #5078f0', borderRadius: 3, padding: '0px 12px' }}
                                className={`${StandardFonts.MediumTextBold} ${StandardWidth.FitContent} ${StandardMargin.T0} ${StandardMargin.B6}`}
                            >
                                Computer Science Instructor
                            </p>
                            <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0} ${StandardMargin.L12}`}>
                                <a href="https://junilearning.com/" rel="noreferrer" target="_blank" style={{ textDecoration: '#d475d4 underline' }}>
                                    Juni Learning
                                </a>
                                &nbsp;&nbsp;|&nbsp;&nbsp;August 2020 - April 2021
                            </p>
                            <div className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.T6} ${StandardMargin.L12}`}>
                                ‣ Tutored 8 kids ages 6-16 in weekly one-on-one remote learning sessions
                                <br />‣ Taught fundamental computer science concepts in JavaScript, Python, and Scratch, ranging in level from beginner to AP Computer Science A preparation
                            </div>
                        </div>
                    </TextGradient>
                </section>
            </BorderGradient>
        </main>
    )
}
