import React from 'react'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardFonts, StandardMargin, StandardWidth } from 'Styles/Standard'
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
            <TextGradient
                className={`${StandardFonts.LargeTextBold} ${StandardWidth.FitContent}`}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                {school}
            </TextGradient>
            <TextGradient
                className={`${StandardFonts.SmallTextBold} ${StandardWidth.FitContent}`}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                <span>
                    {timeAtSchool}&nbsp;&nbsp;|&nbsp;&nbsp;GPA {gpa}
                </span>
            </TextGradient>
            {degree !== undefined && (
                <TextGradient
                    className={`${StandardFonts.SmallTextBold} ${StandardWidth.FitContent}`}
                    from={textGradientThemeMap[TextGradientColors.Pink]}
                    to={textGradientThemeMap[TextGradientColors.Orange]}
                >
                    {degree}
                </TextGradient>
            )}
            {description !== undefined && (
                <TextGradient
                    className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.T18}`}
                    style={{ lineHeight: 1.5 }}
                    from={textGradientThemeMap[TextGradientColors.Pink]}
                    to={textGradientThemeMap[TextGradientColors.Orange]}
                >
                    {description}
                </TextGradient>
            )}
            <TextGradient className={`${StandardMargin.T18}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                <ItemList label="Coursework" items={coursework} />
            </TextGradient>
            <TextGradient className={`${StandardMargin.T18}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                <ItemList label="Activities" items={activities} />
            </TextGradient>
            {awards !== undefined && (
                <div className={`${StandardMargin.T18}`}>
                    <ItemList label="Awards" items={awards} />
                </div>
            )}
        </div>
    )
}
