import React from 'react'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import { StandardBorderRadii, StandardFonts, StandardLayout, StandardMargin, StandardWidth } from 'Styles/Standard'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

export const Tennis: React.FC = () => {
    const textGradientThemeMap = useTextGradientThemeMap()

    return (
        <div>
            <TextGradient
                className={`${StandardMargin.B18} ${StandardFonts.MediumTextBold} ${StandardWidth.FitContent}`}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                Tenista: Player & Fan
            </TextGradient>
            <TextGradient
                className={`${StandardMargin.B12} ${StandardFonts.SmallTextAltBold}`}
                style={{ lineHeight: 1.5 }}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                I&apos;ve been playing tennis for over a decade, and I love getting out for a quick hit with friends to unwind. In my high school career, I received RIIL All-Division 1st and 2nd Team
                honors in both singles and doubles and earned four varsity letters, serving as team captain senior year. My favorite shot is the tweener, which may now be a stronger shot than my
                overhead since I go for tweeners whenever I&apos;m lobbed.
            </TextGradient>
            <TextGradient
                className={`${StandardMargin.B30} ${StandardFonts.SmallTextAltBold}`}
                style={{ lineHeight: 1.5 }}
                from={textGradientThemeMap[TextGradientColors.Pink]}
                to={textGradientThemeMap[TextGradientColors.Orange]}
            >
                In addition, I am a huge fan of the ATP and WTA, and I follow the men&apos;s and women&apos;s world rankings and tournaments extremely closely. I&apos;m a huge Federer and Serena fan.
            </TextGradient>
            <div className={`${StandardLayout.FlexCol}`}>
                <video className={`${StandardBorderRadii.R12}`} style={{ border: '4px solid #5078f0', width: '85%' }} autoPlay muted loop>
                    <source src="/Media/Videos/Tweener.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
