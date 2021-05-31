import React from 'react'

import { StandardFlex, StandardFonts, StandardMargin, StandardWidth } from '../../Styles'
import TextGradient from '../../TextGradient'

export interface ExperienceCellProps {
    title: string
    company: string
    companyHref?: string
    timeAtPosition: string
    description: string[]
    workSampleHref?: string
    workSampleLabel?: string
    workSampleNote?: string
}

export const ExperienceCell: React.FC<ExperienceCellProps> = (props) => {
    const { title, company, companyHref, timeAtPosition, description, workSampleLabel, workSampleHref, workSampleNote } = props
    return (
        <TextGradient className={`${StandardMargin.B24}`} from="#d475d4" to="#fa9f55">
            <div>
                <p className={`${StandardFonts.MediumTextBold} ${StandardWidth.FitContent} ${StandardMargin.T0} ${StandardMargin.B0}`}>{title}</p>
                <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0} ${StandardMargin.L12}`}>
                    {companyHref !== undefined ? (
                        <a href={companyHref} rel="noreferrer" target="_blank" style={{ textDecoration: '#d475d4 underline' }}>
                            {company}
                        </a>
                    ) : (
                        company
                    )}
                    &nbsp;&nbsp;|&nbsp;&nbsp;{timeAtPosition}
                </p>
                <div className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.T6} ${StandardMargin.L12}`}>
                    {description.map((description, idx) => {
                        return (
                            <div key={idx} className={`${StandardFlex.Row}`}>
                                <span>‣</span>
                                <p className={`${StandardMargin.Y0} ${StandardMargin.L6}`}>{description}</p>
                            </div>
                        )
                    })}
                </div>
                {workSampleLabel !== undefined && workSampleHref !== undefined && (
                    <div className={`${StandardMargin.T6}`}>
                        <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0} ${StandardMargin.L12}`}>
                            Work sample:&nbsp;
                            <a href={workSampleHref} rel="noreferrer" target="_blank" style={{ textDecoration: '#d475d4 underline' }}>
                                {workSampleLabel}
                            </a>
                            {workSampleNote !== undefined && <span className={`${StandardFonts.SmallTextAltBold}`}>&nbsp;{workSampleNote}</span>}
                        </p>
                    </div>
                )}
            </div>
        </TextGradient>
    )
}
