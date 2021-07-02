import React from 'react'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardFonts, StandardMargin } from 'Styles/Standard'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

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
    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <div>
            <TextGradient from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                <div>
                    <p className={`${StandardFonts.LargeTextBold} ${StandardMargin.Y0}`}>{school}</p>
                    <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0}`}>
                        {timeAtSchool}&nbsp;&nbsp;|&nbsp;&nbsp;GPA {gpa}
                    </p>
                    {degree !== undefined && <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0}`}>{degree}</p>}
                </div>
            </TextGradient>
            <TextGradient className={`${StandardMargin.T18}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                <p className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`} style={{ lineHeight: 1.5 }}>
                    {description}
                </p>
            </TextGradient>
            <TextGradient className={`${StandardMargin.T18}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                <ItemList label="Coursework" items={coursework} />
            </TextGradient>
            <TextGradient className={`${StandardMargin.T18}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                <ItemList label="Activities" items={activities} />
            </TextGradient>
            {awards !== undefined && (
                <TextGradient className={`${StandardMargin.T18}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                    <ItemList label="Awards" items={awards} />
                </TextGradient>
            )}
        </div>
    )
}
