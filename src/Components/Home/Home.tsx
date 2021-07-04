import './Home.module.css'

import React from 'react'
import AgeCounter from 'Components/AgeCounter'
import AnimateOnScroll from 'Components/AnimateOnScroll'
import BorderGradient, { BorderGradientColors } from 'Components/BorderGradient'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import WordTyper from 'Components/WordTyper'
import Link from 'next/link'
import { StandardBackgrounds, StandardFlexChild, StandardFonts, StandardLayout, StandardMargin, StandardPadding, StandardTextAlign, StandardWidth } from 'Styles/Standard'
import { useTheme } from 'Styles/Theme/ThemeProvider'
import { useBackgroundThemeMap } from 'Styles/Theme/useBackgroundThemeMap'
import { useBorderGradientThemeMap } from 'Styles/Theme/useBorderGradientThemeMap'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

import { LIKE_WORDS, ME_WORDS } from './HomeConstants'

export const Home: React.FC = () => {
    const { isDarkMode } = useTheme()
    const backgroundThemeMap = useBackgroundThemeMap()
    const textGradientThemeMap = useTextGradientThemeMap()
    const borderGradientThemeMap = useBorderGradientThemeMap()

    return (
        <div className={`home-container ${StandardPadding.Y120} ${StandardPadding.X72} ${StandardLayout.FlexColCenter}`}>
            <AnimateOnScroll>
                <section className={`home-bio-container ${StandardLayout.FlexCol}`} style={{ minHeight: 500 }}>
                    <BorderGradient
                        borderSize={6}
                        borderRadius="50%"
                        fromColor={borderGradientThemeMap[BorderGradientColors.Pink]}
                        toColor={borderGradientThemeMap[BorderGradientColors.Orange]}
                        gradientAngle="120deg"
                    >
                        <div style={{ height: 259, width: 259 }}>
                            <img style={{ borderRadius: '50%', objectFit: 'cover' }} height={259} width={259} src="/Media/Images/troy-feng-pic-bw.png" alt="Troy Feng" />
                        </div>
                    </BorderGradient>

                    <div className={`${StandardLayout.FlexCol} ${StandardMargin.T30}`}>
                        <h2 className={`${StandardFonts.H1Text} ${StandardMargin.Y0}`}>
                            <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]} direction="left">
                                Hello!
                            </TextGradient>
                        </h2>
                        <BorderGradient
                            className={`${StandardMargin.T30}`}
                            borderSize={4}
                            fromColor={borderGradientThemeMap[BorderGradientColors.Pink]}
                            toColor={borderGradientThemeMap[BorderGradientColors.Orange]}
                            gradientAngle="120deg"
                        >
                            <div className={`home-bio-facts-container ${StandardLayout.FlexRow} ${backgroundThemeMap[StandardBackgrounds.Black]} ${StandardPadding.Y12}`}>
                                <div className={`home-bio-text ${StandardFlexChild.Flex1} ${StandardTextAlign.Center} ${StandardFonts.SmallTextBold} ${StandardLayout.FlexCol}`}>
                                    <TextGradient className={`${StandardWidth.FitContent}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                                        My name is Troy. I am a
                                    </TextGradient>
                                    <span className={`home-counter-display ${StandardTextAlign.Center} ${StandardFonts.MediumTextAlt} ${StandardMargin.T6}`}>
                                        <WordTyper words={ME_WORDS} />
                                    </span>
                                </div>
                                {/* <div className={`home-bio-text ${StandardFlexChild.Flex1} ${StandardTextAlign.Center} ${StandardFonts.SmallTextBold} ${StandardLayout.FlexCol}`}>
                                    <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                                        <span className={`${StandardWidth.FitContent}`}>I am</span>
                                    </TextGradient>
                                    <span className={`home-counter-display ${StandardTextAlign.Center} ${StandardMargin.Y6}`}>
                                        <AgeCounter />
                                    </span>
                                    <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                                        old
                                    </TextGradient>
                                </div> */}
                                <div className={`home-bio-text ${StandardFlexChild.Flex1} ${StandardTextAlign.Center} ${StandardFonts.SmallTextBold} ${StandardLayout.FlexCol}`}>
                                    <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                                        And I like
                                    </TextGradient>
                                    <span className={`home-counter-display ${StandardTextAlign.Center} ${StandardFonts.MediumTextAlt} ${StandardMargin.T6}`}>
                                        <WordTyper words={LIKE_WORDS} />
                                    </span>
                                </div>
                            </div>
                        </BorderGradient>
                        <div className={`${StandardMargin.T30} ${StandardLayout.FlexCol} ${StandardTextAlign.Center}`} style={{ maxWidth: 475 }}>
                            <TextGradient className={`${StandardFonts.MediumTextBold}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                                <>
                                    Please&nbsp;
                                    <Link href="/contact">
                                        <a style={{ textDecoration: `${isDarkMode ? '#d475d4' : '#5078f0'} underline` }}>get in touch</a>
                                    </Link>
                                    &nbsp;if you&apos;d like to chat, connect, or collaborate.
                                </>
                            </TextGradient>
                            <TextGradient
                                className={`${StandardFonts.LargeTextBold} ${StandardMargin.T30}`}
                                from={textGradientThemeMap[TextGradientColors.Pink]}
                                to={textGradientThemeMap[TextGradientColors.Orange]}
                            >
                                Cheers!
                            </TextGradient>
                        </div>
                    </div>
                </section>
            </AnimateOnScroll>
        </div>
    )
}
