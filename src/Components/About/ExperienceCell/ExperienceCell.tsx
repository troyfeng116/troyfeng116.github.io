import React from 'react'
import Collapsible from 'Components/Collapsible'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardFlex, StandardFonts, StandardMargin, StandardPadding, StandardTextColors, StandardWidth } from 'Styles/Standard'
import { useTextColorTheme } from 'Styles/Theme/useTextColorTheme'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

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
    const textGradientThemeMap = useTextGradientThemeMap()
    const textColorThemeMap = useTextColorTheme()

    return (
        <Collapsible
            label={
                <div className={`${StandardPadding.Y12}`}>
                    <TextGradient className={`${StandardWidth.FitContent}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                        <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.T0} ${StandardMargin.B0}`}>{title}</p>
                    </TextGradient>
                    <TextGradient className={`${StandardWidth.FitContent}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
                        <p className={`${StandardFonts.SmallTextBold} ${StandardMargin.Y0}`}>
                            {companyHref !== undefined ? (
                                <a href={companyHref} rel="noreferrer" target="_blank" style={{ textDecoration: `${textGradientThemeMap[TextGradientColors.Pink]} underline` }}>
                                    {company}
                                </a>
                            ) : (
                                company
                            )}
                            &nbsp;&nbsp;|&nbsp;&nbsp;{timeAtPosition}
                        </p>
                    </TextGradient>
                </div>
            }
            containerClassName={`${StandardPadding.X18}`}
            containerStyle={{ border: '2px solid #5078f0', borderRadius: 6 }}
            chevronClassName={`${textColorThemeMap[StandardTextColors.Orange]}`}
            isOnlyChevronClickable={false}
        >
            <TextGradient className={`${StandardWidth.FitContent}`} from={textGradientThemeMap[TextGradientColors.Pink]} to={textGradientThemeMap[TextGradientColors.Orange]}>
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
            </TextGradient>
        </Collapsible>
    )
}
