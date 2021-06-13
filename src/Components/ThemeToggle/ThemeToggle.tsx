import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Clickable, StandardBackgrounds, StandardLayout, StandardPosition, StandardTextColors } from 'Styles/Standard'
import { useTheme } from 'Styles/Theme/ThemeProvider'

interface ThemeToggleProps {
    height?: number
    className?: string
    style?: React.CSSProperties
}

export const ThemeToggle: React.FC<ThemeToggleProps> = (props) => {
    const { height = 30, className = '', style } = props
    const { isDarkMode, toggleDarkMode } = useTheme()

    const toggleWidth = height * 2
    const ballWidth = height - 6

    return (
        <button
            className={`${className} ${StandardPosition.Relative} ${Clickable} ${isDarkMode ? StandardBackgrounds.Purple : StandardBackgrounds.Blue}`}
            style={{ ...style, height: height, width: toggleWidth, borderRadius: height / 2, border: 'none' }}
            onClick={() => toggleDarkMode()}
        >
            <div
                className={`${StandardPosition.Absolute} ${StandardBackgrounds.White}`}
                style={{ height: ballWidth, width: ballWidth, borderRadius: ballWidth / 2, top: 3, left: isDarkMode ? toggleWidth - 3 - ballWidth : 3, transition: '0.1s left ease' }}
            ></div>
            {isDarkMode && (
                <div
                    className={`${StandardPosition.Absolute} ${StandardLayout.FlexRow} ${StandardTextColors.Pink}`}
                    style={{ left: 8, top: '50%', transform: 'translateY(-50%)', color: 'rgb(255, 255, 0)', fontSize: height * 0.5 }}
                >
                    <FaMoon />
                </div>
            )}
            {!isDarkMode && (
                <div
                    className={`${StandardPosition.Absolute} ${StandardLayout.FlexRow}`}
                    style={{ right: 8, top: '50%', transform: 'translateY(-50%)', color: 'rgb(255, 255, 0)', fontSize: height * 0.5 }}
                >
                    <FaSun />
                </div>
            )}
        </button>
    )
}
