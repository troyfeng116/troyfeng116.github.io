import React from 'react'
import TextGradient from 'Components/TextGradient'
import { StandardBorderRadii, StandardFonts, StandardLayout, StandardMargin } from 'Styles/Standard'

export const Tennis: React.FC = () => {
    return (
        <div>
            <TextGradient className={`${StandardMargin.B18}`} from="#d475d4" to="#fa9f55">
                <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>Tenista: Player & Fan</p>
            </TextGradient>
            <TextGradient className={`${StandardMargin.B12}`} from="#d475d4" to="#fa9f55">
                <p className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`} style={{ lineHeight: 1.5 }}>
                    I have been playing Tennis for over a decade, and I love getting out for a quick hit with friends to unwind. In my high school career, I received RIIL All-Division 1st and 2nd Team
                    honors in both singles and doubles and earned four varsity letters, serving as team captain senior year. My favorite shot is the tweener, which may now be a stronger shot than my
                    overhead since I go for tweeners whenever I&apos;m lobbed (see below).
                </p>
            </TextGradient>
            <TextGradient className={`${StandardMargin.B30}`} from="#d475d4" to="#fa9f55">
                <p className={`${StandardFonts.SmallTextAltBold} ${StandardMargin.Y0}`} style={{ lineHeight: 1.5 }}>
                    In addition, I am a huge fan of the ATP and WTA, and I follow the men&apos;s and women&apos;s world rankings and tournaments extremely closely. I am a huge Federer and Serena fan,
                    but I also love Rafa Nadal, Naomi Osaka, and Novak Djokovic, as well as a myriad of exciting young players.
                </p>
            </TextGradient>
            <div className={`${StandardLayout.FlexCol}`}>
                <video className={`${StandardBorderRadii.R12}`} style={{ border: '4px solid #5078f0', width: '85%' }} autoPlay muted loop>
                    <source src="/Media/Videos/Tweener.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
