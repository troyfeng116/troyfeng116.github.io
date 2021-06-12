import React from 'react'
import Collapsible from 'Components/Collapsible'
import TextGradient from 'Components/TextGradient'
import { StandardFlex, StandardFonts, StandardMargin, StandardPadding, StandardTextColors, StandardWidth } from 'Styles/Standard'

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
        <TextGradient from="#d475d4" to="#fa9f55">
            <Collapsible
                label={
                    <div className={`${StandardPadding.Y12}`}>
                        <p className={`${StandardFonts.MediumTextBold} ${StandardWidth.FitContent} ${StandardMargin.T0} ${StandardMargin.B0}`}>{title}</p>
                        <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0}`}>
                            {companyHref !== undefined ? (
                                <a href={companyHref} rel="noreferrer" target="_blank" style={{ textDecoration: '#d475d4 underline' }}>
                                    {company}
                                </a>
                            ) : (
                                company
                            )}
                            &nbsp;&nbsp;|&nbsp;&nbsp;{timeAtPosition}
                        </p>
                    </div>
                }
                containerClassName={`${StandardPadding.X18}`}
                containerStyle={{ border: '2px solid #5078f0', borderRadius: 6 }}
                chevronClassName={`${StandardTextColors.Orange}`}
                isOnlyChevronClickable={false}
            >
                <div className={`${StandardFonts.SmallTextAltBold} ${StandardPadding.B18} ${StandardPadding.L12} ${StandardPadding.R24}`}>
                    <div className={`${StandardFonts.SmallTextAltBold}`}>
                        {description.map((desc, idx) => {
                            return (
                                <div key={idx} className={`${StandardFlex.Row} ${idx === description.length - 1 ? '' : StandardMargin.B6}`}>
                                    <span>‣</span>
                                    <p className={`${StandardMargin.Y0} ${StandardMargin.L6}`}>{desc}</p>
                                </div>
                            )
                        })}
                    </div>
                    {workSampleLabel !== undefined && workSampleHref !== undefined && (
                        <div className={`${StandardMargin.T12}`}>
                            <p className={`${StandardMargin.Y0}`}>
                                Work sample:&nbsp;
                                <a href={workSampleHref} rel="noreferrer" target="_blank" style={{ textDecoration: '#d475d4 underline' }}>
                                    {workSampleLabel}
                                </a>
                                {workSampleNote !== undefined && <span>&nbsp;{workSampleNote}</span>}
                            </p>
                        </div>
                    )}
                </div>
            </Collapsible>
        </TextGradient>
    )
}
