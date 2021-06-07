import React from 'react'
import { StandardFlex, StandardFonts, StandardMargin } from 'Components/Styles'
import TextGradient from 'Components/TextGradient'

export interface EducationCellProps {
    logoImgSrc: string
    school: string
    timeAtSchool: string
    degree?: string
    gpa: string
    description?: string
    coursework: string[]
    awards?: string[]
    activities: string[]
}

export const EducationCell: React.FC<EducationCellProps> = (props) => {
    const { school, timeAtSchool, degree, gpa, description, coursework, activities, awards } = props

    return (
        <div>
            <TextGradient from="#d475d4" to="#fa9f55">
                <div>
                    <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.T0} ${StandardMargin.B6}`}>
                        {school}, {timeAtSchool}
                    </p>
                    <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0}`}>
                        {degree !== undefined && <span>{degree}&nbsp;&nbsp;|&nbsp;&nbsp;</span>}GPA {gpa}
                    </p>
                </div>
            </TextGradient>
            <TextGradient className={`${StandardMargin.T18}`} from="#d475d4" to="#fa9f55">
                <p className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`} style={{ lineHeight: 1.5 }}>
                    {description}
                </p>
            </TextGradient>
            <TextGradient className={`${StandardMargin.T12}`} from="#d475d4" to="#fa9f55">
                <div>
                    <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>Coursework</p>
                    <div style={{ flexWrap: 'wrap' }} className={`${StandardFonts.SmallTextAltBold} ${StandardFlex.Row} ${StandardMargin.T6}`}>
                        {coursework.map((course, idx) => {
                            return (
                                <div key={idx} className={`${StandardMargin.X6}`} style={{ border: '2px solid #5078f0', borderRadius: 3, marginTop: 4, marginBottom: 4, padding: '2px 6px' }}>
                                    {course}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </TextGradient>
            <TextGradient className={`${StandardMargin.T12}`} from="#d475d4" to="#fa9f55">
                <div>
                    <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>Activities</p>
                    <div style={{ flexWrap: 'wrap' }} className={`${StandardFonts.SmallTextAltBold} ${StandardFlex.Row} ${StandardMargin.T6}`}>
                        {activities.map((activity, idx) => {
                            return (
                                <div key={idx} className={`${StandardMargin.X6} ${StandardMargin.Y6}`} style={{ border: '2px solid #5078f0', borderRadius: 3, padding: '2px 6px' }}>
                                    {activity}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </TextGradient>
            {awards !== undefined && (
                <TextGradient className={`${StandardMargin.T12}`} from="#d475d4" to="#fa9f55">
                    <div>
                        <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>Awards</p>
                        <div style={{ flexWrap: 'wrap' }} className={`${StandardFonts.SmallTextAltBold} ${StandardFlex.Row} ${StandardMargin.T6}`}>
                            {awards.map((activity, idx) => {
                                return (
                                    <div key={idx} className={`${StandardMargin.X6} ${StandardMargin.Y6}`} style={{ border: '2px solid #5078f0', borderRadius: 3, padding: '2px 6px' }}>
                                        {activity}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </TextGradient>
            )}
        </div>
    )
}
