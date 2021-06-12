import React from 'react'
import TextGradient from 'Components/TextGradient'
import { StandardFonts, StandardLayout, StandardMargin, StandardWidth } from 'Styles/Standard'

import { SWIMMING_TIMES } from '../AboutConstants'

export const Swimming: React.FC = () => {
    return (
        <div>
            <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>Swimmer (Swammer)</p>
            </TextGradient>
            <TextGradient className={`${StandardMargin.B12}`} from="#d475d4" to="#fa9f55">
                <p className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`} style={{ lineHeight: 1.5 }}>
                    For nine years, I raced as both a 5-year high school varsity swimmer and as a year-round USA Swimming club swimmer. While I don&apos;t always miss the 6-10 gruelling practices
                    every week or waking up before the crack of dawn to dive into the freezing water, I met and trained with many of my closest friends through swimming. While my days as a formal
                    competitive swimmer are likely over, I still often train in a local pool to loosen up.
                </p>
            </TextGradient>
            <TextGradient className={`${StandardMargin.B30}`} from="#d475d4" to="#fa9f55">
                <p className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`} style={{ lineHeight: 1.5 }}>
                    In my high school career, I received RIIL All-Division and All-State honors and served as senior captain. At the club swimming level, I achieved multiple USA Swimming AAA time
                    standards in both long and short course, qualified for the New England Senior Championships and the Southern Zone Sectional meets, and ended several seasons ranked in the New
                    England top 30 age group rankings for multiple events.
                </p>
            </TextGradient>
            <div className={`${StandardLayout.FlexCol}`}>
                <TextGradient from="#d475d4" to="#fa9f55" className={`${StandardWidth.FitContent}`}>
                    <div className={`${StandardLayout.FlexCol}`}>
                        <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.T0} ${StandardMargin.B12}`}>Best Times</p>
                        <table style={{ border: '1px solid #5078f0' }}>
                            <thead className={`${StandardFonts.SmallTextBold}`}>
                                <th style={{ border: '1px solid #5078f0', padding: '3px 12px', textAlign: 'left' }}>Event</th>
                                <th style={{ border: '1px solid #5078f0', padding: '3px 12px', textAlign: 'left' }}>SCY</th>
                                <th style={{ border: '1px solid #5078f0', padding: '3px 12px', textAlign: 'left' }}>LCM</th>
                            </thead>
                            {SWIMMING_TIMES.map((timeInfo, idx) => {
                                const { event, scyTime, lcmTime } = timeInfo
                                return (
                                    <tr key={idx}>
                                        <td className={`${StandardFonts.SmallTextAltBold}`} style={{ border: '1px solid #5078f0', padding: '3px 12px' }}>
                                            {event}
                                        </td>
                                        <td className={`${StandardFonts.SmallTextAltBold}`} style={{ border: '1px solid #5078f0', padding: '3px 12px' }}>
                                            {scyTime}
                                        </td>
                                        <td className={`${StandardFonts.SmallTextAltBold}`} style={{ border: '1px solid #5078f0', padding: '3px 12px' }}>
                                            {lcmTime || '--:--.--'}
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                </TextGradient>
            </div>
        </div>
    )
}
