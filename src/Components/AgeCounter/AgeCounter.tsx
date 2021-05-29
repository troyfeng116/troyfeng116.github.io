import './AgeCounter.module.css'

import React from 'react'
import { StandardFonts, StandardTextColors } from 'Components/Styles'

import { calculateAgeSeconds } from '../../Utils/calculateAgeSeconds'
import { useAgeCounter } from '../../Utils/useAgeCounter'

export const AgeCounter: React.FC = () => {
    const { years, months, days, hours, minutes, seconds } = useAgeCounter(calculateAgeSeconds())

    return (
        <div>
            <span className={`${StandardTextColors.Blue} ${StandardFonts.SmallTextAlt}`}>
                <span className={`${StandardFonts.MediumTextAlt} ${StandardTextColors.LightBlue}`}>{years}</span>y&nbsp;
            </span>
            <span className={`${StandardTextColors.Blue} ${StandardFonts.SmallTextAlt}`}>
                <span className={`${StandardFonts.MediumTextAlt} ${StandardTextColors.LightBlue}`}>{months}</span>m&nbsp;
            </span>
            <span className={`${StandardTextColors.Blue} ${StandardFonts.SmallTextAlt}`}>
                <span className={`${StandardFonts.MediumTextAlt} ${StandardTextColors.LightBlue}`}>{days}</span>d<br />
            </span>
            <span className={`${StandardTextColors.Blue} ${StandardFonts.SmallTextAlt}`}>
                <span className={`${StandardFonts.MediumTextAlt} ${StandardTextColors.LightBlue}`}>{hours}</span>h&nbsp;
            </span>
            <span className={`${StandardTextColors.Blue} ${StandardFonts.SmallTextAlt}`}>
                <span className={`${StandardFonts.MediumTextAlt} ${StandardTextColors.LightBlue}`}>{minutes}</span>min&nbsp;
            </span>
            <span className={`${StandardTextColors.Blue} ${StandardFonts.SmallTextAlt}`}>
                <span className={`${StandardFonts.MediumTextAlt} ${StandardTextColors.LightBlue}`}>{seconds}</span>s
            </span>
        </div>
    )
}
