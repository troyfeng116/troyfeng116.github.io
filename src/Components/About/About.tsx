import './About.module.css'

import React, { useState } from 'react'
import Button, { ButtonColor } from 'Components/Button'
import { StandardFlex, StandardFonts, StandardLayout, StandardMargin, StandardPadding } from 'Styles/Standard'
import { useTheme } from 'Styles/Theme/ThemeProvider'

import { EDUCATION_INFO, MORE_ABOUT_ME_ITEMS, WORK_EXPERIENCE } from './AboutConstants'
import AboutSection from './AboutSection'
import EducationCell from './EducationCell'
import ExperienceCell from './ExperienceCell'

export const About: React.FC = () => {
    const { isDarkMode } = useTheme()
    const [activeEducationIndex, setActiveEducationIndex] = useState<number>(0)
    const [activeMoreAboutMeIndex, setActiveMoreAboutMeIndex] = useState<number>(0)

    return (
        <main className={`about-container ${StandardPadding.X60} ${StandardPadding.Y60} ${StandardLayout.FlexCol}`}>
            <AboutSection title="Education">
                <div>
                    <div className={`${StandardLayout.FlexRowCenter} ${StandardMargin.B24}`} style={{ flexWrap: 'wrap' }}>
                        {EDUCATION_INFO.map(({ logoImgSrc, school }, idx) => {
                            return (
                                <Button
                                    key={idx}
                                    className={`${StandardFlex.Row} ${StandardMargin.X12} ${StandardMargin.Y6}`}
                                    style={{ padding: '3px 15px', border: activeEducationIndex === idx ? `4px solid ${isDarkMode ? '#5078f0' : '#eb3648'}` : undefined }}
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
                    <div className={`${StandardLayout.FlexRowCenter} ${StandardMargin.B24}`} style={{ flexWrap: 'wrap' }}>
                        {MORE_ABOUT_ME_ITEMS.map(({ icon }, idx) => {
                            return (
                                <Button
                                    key={idx}
                                    className={`${StandardFlex.Row} ${StandardMargin.X12} ${StandardMargin.Y6} ${StandardFonts.LargeText}`}
                                    style={{ border: activeMoreAboutMeIndex === idx ? `4px solid ${isDarkMode ? '#5078f0' : '#eb3648'}` : undefined }}
                                    color={ButtonColor.PinkOrange}
                                    onClick={() => setActiveMoreAboutMeIndex(idx)}
                                >
                                    {icon}
                                </Button>
                            )
                        })}
                    </div>
                    {MORE_ABOUT_ME_ITEMS[activeMoreAboutMeIndex].component}
                </div>
            </AboutSection>
        </main>
    )
}
