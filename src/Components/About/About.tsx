import './About.module.css'

import React, { useState } from 'react'
import Button, { ButtonColor } from 'Components/Button'
import { StandardFlex, StandardFonts, StandardLayout, StandardMargin, StandardPadding } from 'Styles/Standard'
import { useTheme } from 'Styles/Theme/ThemeProvider'

import { EDUCATION_INFO, MORE_ABOUT_ME_ITEMS, WHO_AM_I_INFO, WORK_EXPERIENCE } from './AboutConstants'
import AboutSection from './AboutSection'
import EducationCell from './EducationCell'
import ExperienceCell from './ExperienceCell'
import WhoAmI from './WhoAmI'

export const About: React.FC = () => {
    const { isDarkMode } = useTheme()
    const [activeEducationIndex, setActiveEducationIndex] = useState<number>(0)
    const [activeMoreAboutMeIndex, setActiveMoreAboutMeIndex] = useState<number>(0)

    return (
        <main className={`about-container ${StandardPadding.X60} ${StandardPadding.Y90} ${StandardLayout.FlexCol}`}>
            <AboutSection title="whoami">
                <WhoAmI {...WHO_AM_I_INFO} />
            </AboutSection>

            <AboutSection title="Education">
                <div className={`${StandardLayout.FlexRowCenter} ${StandardMargin.B24}`} style={{ flexWrap: 'wrap' }}>
                    {EDUCATION_INFO.map(({ logoImgSrc, school }, idx) => {
                        return (
                            <Button
                                key={idx}
                                className={`${StandardFlex.Row} ${StandardMargin.X12} ${StandardMargin.Y6}`}
                                style={{ border: activeEducationIndex === idx ? `4px solid ${isDarkMode ? '#5078f0' : '#142878'}` : undefined }}
                                color={isDarkMode ? ButtonColor.PinkOrange : ButtonColor.DarkBlueBlue}
                                onClick={() => setActiveEducationIndex(idx)}
                            >
                                <img src={logoImgSrc} alt={school} width={30} height={30} style={{ objectFit: 'cover', border: isDarkMode ? '1px solid #d475d4' : '1px solid #5078f0' }} />
                            </Button>
                        )
                    })}
                </div>
                <EducationCell {...EDUCATION_INFO[activeEducationIndex]} />
            </AboutSection>

            <AboutSection title="Experience">
                {WORK_EXPERIENCE.map((experienceProps, idx) => (
                    <div key={idx} className={idx === WORK_EXPERIENCE.length - 1 ? '' : StandardMargin.B24}>
                        <ExperienceCell {...experienceProps} />
                    </div>
                ))}
            </AboutSection>

            <AboutSection title="More about me">
                <div className={`${StandardLayout.FlexRowCenter} ${StandardMargin.B24}`} style={{ flexWrap: 'wrap' }}>
                    {MORE_ABOUT_ME_ITEMS.map(({ icon }, idx) => {
                        return (
                            <Button
                                key={idx}
                                className={`${StandardFlex.Row} ${StandardMargin.X12} ${StandardMargin.Y6} ${StandardFonts.LargeText}`}
                                style={{ border: activeMoreAboutMeIndex === idx ? `4px solid ${isDarkMode ? '#5078f0' : '#142878'}` : undefined }}
                                color={isDarkMode ? ButtonColor.PinkOrange : ButtonColor.DarkBlueBlue}
                                onClick={() => setActiveMoreAboutMeIndex(idx)}
                            >
                                {icon}
                            </Button>
                        )
                    })}
                </div>
                {MORE_ABOUT_ME_ITEMS[activeMoreAboutMeIndex].component}
            </AboutSection>
        </main>
    )
}
