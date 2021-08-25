import React from 'react'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardFonts, StandardLayout, StandardMargin, StandardWidth } from 'Styles/Standard'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

import { SWIMMING_TIMES } from '../AboutConstants'

export const Swimming: React.FC = () => {
    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <div>
            <TextGradient
                className={`${StandardMargin.B18} ${StandardFonts.MediumTextBold} ${StandardWidth.FitContent}`}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                Swim(am)er
            </TextGradient>
            <TextGradient
                className={`${StandardMargin.B12} ${StandardFonts.SmallTextAltBold}`}
                style={{ lineHeight: 1.5 }}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                For nine years, I raced as both a 5-year high school varsity swimmer and as a year-round USA Swimming club swimmer. While I don&apos;t always miss the 6-10 gruelling practices every
                week or waking up before the crack of dawn to dive into the freezing water, I met and trained with many of my closest friends through swimming. While my days as a formal competitive
                swimmer are likely over, I still often train in a local pool to loosen up.
            </TextGradient>
            <TextGradient
                className={`${StandardMargin.B30} ${StandardFonts.SmallTextAltBold}`}
                style={{ lineHeight: 1.5 }}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                In my high school career, I received RIIL All-Division and All-State honors and served as senior captain. At the club swimming level, I achieved multiple USA Swimming AAA time
                standards in both long and short course, qualified for the New England Senior Championships and the Southern Zone Sectional meets, and ended several seasons ranked in the New England
                top 30 age group rankings for multiple events.
            </TextGradient>
            <div className={`${StandardLayout.FlexCol}`}>
                <TextGradient
                    className={`${StandardFonts.MediumTextBold} ${StandardMargin.B12} ${StandardWidth.FitContent}`}
                    from={textGradientThemeMap[TextGradientColors.Pink]}
                    to={textGradientThemeMap[TextGradientColors.Orange]}
                >
                    Best Times
                </TextGradient>
                <table style={{ border: '1px solid #5078f0' }}>
                    <thead className={`${StandardFonts.SmallTextBold}`}>
                        <tr>
                            <th style={{ border: '1px solid #5078f0', padding: '3px 12px', textAlign: 'left' }}>
                                <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                                    Event
                                </TextGradient>
                            </th>
                            <th style={{ border: '1px solid #5078f0', padding: '3px 12px', textAlign: 'left' }}>
                                <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                                    SCY
                                </TextGradient>
                            </th>
                            <th style={{ border: '1px solid #5078f0', padding: '3px 12px', textAlign: 'left' }}>
                                <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                                    LCM
                                </TextGradient>
                            </th>
                        </tr>
                    </thead>
                    <tbody className={`${StandardFonts.SmallTextAltBold}`}>
                        {SWIMMING_TIMES.map((timeInfo, idx) => {
                            const { event, scyTime, lcmTime } = timeInfo
                            return (
                                <tr key={idx}>
                                    <td style={{ border: '1px solid #5078f0', padding: '3px 12px' }}>
                                        <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                                            {event}
                                        </TextGradient>
                                    </td>
                                    <td style={{ border: '1px solid #5078f0', padding: '3px 12px' }}>
                                        <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                                            {scyTime}
                                        </TextGradient>
                                    </td>
                                    <td style={{ border: '1px solid #5078f0', padding: '3px 12px' }}>
                                        <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                                            {lcmTime || '--:--.--'}
                                        </TextGradient>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
