import './About.module.css'

import React, { useState } from 'react'
import Button, { ButtonColor } from 'Components/Button'
import { StandardFlex, StandardFonts, StandardLayout, StandardMargin, StandardPadding } from 'Components/Styles'
import TextGradient from 'Components/TextGradient'

import { EDUCATION_INFO, WORK_EXPERIENCE } from './AboutConstants'
import AboutSection from './AboutSection'
import EducationCell from './EducationCell'
import ExperienceCell from './ExperienceCell'
import ItemList from './ItemList'

export const About: React.FC = () => {
    const [activeEducationIndex, setActiveEducationIndex] = useState<number>(0)

    return (
        <main className={`about-container ${StandardPadding.X60} ${StandardPadding.Y60} ${StandardLayout.FlexCol}`}>
            <AboutSection title="Education">
                <div>
                    <div className={`${StandardLayout.FlexRow} ${StandardMargin.B24}`}>
                        {EDUCATION_INFO.map(({ logoImgSrc, school }, idx) => {
                            return (
                                <Button
                                    key={idx}
                                    className={`${StandardFlex.Row} ${StandardMargin.R18}`}
                                    style={{ padding: '3px 15px' }}
                                    color={ButtonColor.PinkOrange}
                                    onClick={() => setActiveEducationIndex(idx)}
                                >
                                    <img src={logoImgSrc} alt={school} width={40} height={40} style={{ objectFit: 'cover' }} />
                                </Button>
                            )
                        })}
                    </div>
                    <EducationCell {...EDUCATION_INFO[activeEducationIndex]} />
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
                </div>
            </AboutSection>
        </main>
    )
}
