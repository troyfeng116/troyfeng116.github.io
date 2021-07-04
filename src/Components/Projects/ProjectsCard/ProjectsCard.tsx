import './ProjectsCard.module.css'

import React from 'react'
import { FaGithub } from 'react-icons/fa'
import BorderGradient, { BorderGradientColors } from 'Components/BorderGradient'
import Gallery from 'Components/Gallery'
import TextGradient, { TextGradientColors } from 'Components/TextGradient'
import {
    StandardBackgrounds,
    StandardBorderRadii,
    StandardFlex,
    StandardFlexChild,
    StandardFonts,
    StandardJustify,
    StandardLayout,
    StandardMargin,
    StandardPadding,
    StandardPosition,
    StandardTextColors,
    StandardWidth,
} from 'Styles/Standard'
import { useTheme } from 'Styles/Theme/ThemeProvider'
import { useBackgroundThemeMap } from 'Styles/Theme/useBackgroundThemeMap'
import { useBorderGradientThemeMap } from 'Styles/Theme/useBorderGradientThemeMap'
import { useTextColorTheme } from 'Styles/Theme/useTextColorTheme'
import { useTextGradientThemeMap } from 'Styles/Theme/useTextGradientThemeMap'

interface ProjectsCardProps {
    url: string
    title: string
    projectImgs: string[]
    subtext: string
    ghLink: string
    isActive: boolean
    handleCardClicked: () => void
    handleCardMouseEnter: () => void
    handleCardMouseLeave: () => void
    handleImgClicked: (imgSrc: string) => void
}

export const ProjectsCard: React.FC<ProjectsCardProps> = (props) => {
    const { url, title, projectImgs, subtext, ghLink, isActive, handleCardClicked, handleCardMouseEnter, handleCardMouseLeave, handleImgClicked } = props
    const backgroundThemeMap = useBackgroundThemeMap()
    const textGradientThemeMap = useTextGradientThemeMap()
    const borderGradientThemeMap = useBorderGradientThemeMap()
    const textColorThemeMap = useTextColorTheme()
    const { isDarkMode } = useTheme()

    return (
        <BorderGradient
            className={`projects-card ${isDarkMode ? 'projects-card-dark' : 'projects-card-light'} ${isActive ? 'projects-card-active' : ''} ${StandardPosition.Relative} ${StandardBorderRadii.R12}`}
            borderRadius={12}
            borderSize={6}
            fromColor={borderGradientThemeMap[BorderGradientColors.Pink]}
            toColor={borderGradientThemeMap[BorderGradientColors.Orange]}
            gradientAngle="120deg"
            onClick={() => handleCardClicked()}
            onMouseEnter={() => handleCardMouseEnter()}
            onMouseLeave={() => handleCardMouseLeave()}
        >
            <section
                className={`
                    projects-card-content
                    ${StandardFlexChild.Flex1} ${StandardFlex.Col} ${StandardJustify.Center}
                    ${StandardPadding.Y24} ${StandardPadding.X30} ${StandardBorderRadii.R12}
                    ${backgroundThemeMap[StandardBackgrounds.Black]}
                `}
            >
                <section className={`${StandardFlex.Col}`}>
                    <TextGradient
                        className={`${StandardMargin.B18} ${StandardWidth.FitContent}`}
                        from={textGradientThemeMap[TextGradientColors.Pink]}
                        to={textGradientThemeMap[TextGradientColors.Orange]}
                    >
                        <a className={`projects-card-title ${StandardFonts.LargeTextBold}`} href={url} target="_blank" rel="noopener noreferrer">
                            {title}
                        </a>
                    </TextGradient>
                    <div className={`projects-card-image-container ${StandardMargin.B18} ${StandardFlex.Col} ${StandardFlexChild.AlignCenter}`}>
                        {projectImgs.length > 1 ? (
                            <Gallery
                                items={projectImgs.map((imgSrc) => (
                                    <img
                                        key={imgSrc}
                                        src={imgSrc}
                                        className={`projects-card-image ${StandardBorderRadii.R6}`}
                                        style={{ border: `1px solid ${isDarkMode ? '#fa9f55' : '#5078f0'}` }}
                                        onClick={() => handleImgClicked(imgSrc)}
                                        alt="Troy Feng - project sample unavailable"
                                    />
                                ))}
                                maxHeight={300}
                                showCircles={false}
                                arrowsInside={true}
                                timeoutSeconds={Math.random() * 5 + 8}
                            />
                        ) : (
                            <img
                                src={projectImgs[0]}
                                className={`projects-card-image ${StandardBorderRadii.R6}`}
                                style={{ border: `1px solid ${isDarkMode ? '#fa9f55' : '#5078f0'}` }}
                                onClick={() => handleImgClicked(projectImgs[0])}
                                alt="Troy Feng - project sample unavailable"
                            />
                        )}
                    </div>
                    <TextGradient
                        className={`${StandardFonts.SmallTextBold} ${StandardMargin.B18}`}
                        from={textGradientThemeMap[TextGradientColors.Pink]}
                        to={textGradientThemeMap[TextGradientColors.Orange]}
                    >
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {subtext}
                        </a>
                    </TextGradient>
                    <TextGradient
                        className={`${StandardFonts.SmallTextBold} ${StandardWidth.FitContent}`}
                        from={textGradientThemeMap[TextGradientColors.Pink]}
                        to={textGradientThemeMap[TextGradientColors.Orange]}
                    >
                        <a className={`${StandardLayout.FlexRow}`} href={ghLink} target="_blank" rel="noopener noreferrer">
                            <FaGithub className={`${StandardMargin.R6} ${textColorThemeMap[StandardTextColors.Pink]}`} /> GitHub
                        </a>
                    </TextGradient>
                </section>
            </section>
        </BorderGradient>
    )
}
