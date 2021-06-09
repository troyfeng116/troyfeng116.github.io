import React from 'react'
import { StandardFonts, StandardMargin } from 'Components/Styles'
import TextGradient from 'Components/TextGradient'

import ItemList from '../ItemList'

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
                    <p className={`${StandardFonts.LargeTextBold} ${StandardMargin.Y0}`}>{school}</p>
                    <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0}`}>
                        {timeAtSchool}&nbsp;&nbsp;|&nbsp;&nbsp;GPA {gpa}
                    </p>
                    {degree !== undefined && <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0}`}>{degree}</p>}
                </div>
            </TextGradient>
            <TextGradient className={`${StandardMargin.T18}`} from="#d475d4" to="#fa9f55">
                <p className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`} style={{ lineHeight: 1.5 }}>
                    {description}
                </p>
            </TextGradient>
            <TextGradient className={`${StandardMargin.T18}`} from="#d475d4" to="#fa9f55">
                <ItemList label="Coursework" items={coursework} />
            </TextGradient>
            <TextGradient className={`${StandardMargin.T18}`} from="#d475d4" to="#fa9f55">
                <ItemList label="Activities" items={activities} />
            </TextGradient>
            {awards !== undefined && (
                <TextGradient className={`${StandardMargin.T18}`} from="#d475d4" to="#fa9f55">
                    <ItemList label="Awards" items={awards} />
                </TextGradient>
            )}
        </div>
    )
}
