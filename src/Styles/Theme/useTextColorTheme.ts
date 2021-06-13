import { useEffect, useState } from 'react'
import { StandardTextColors } from 'Styles/Standard'

import { useTheme } from './ThemeProvider'

type TextColorThemeMap = { [key in StandardTextColors]: StandardTextColors }

const DARK_TEXT_COLOR_THEME_MAP: TextColorThemeMap = {
    'std-text-color-black': StandardTextColors.Black,
    'std-text-colors-purple': StandardTextColors.Purple,
    'std-text-colors-blue': StandardTextColors.Blue,
    'std-text-colors-dark-blue': StandardTextColors.DarkBlue,
    'std-text-colors-light-blue': StandardTextColors.LightBlue,
    'std-text-colors-white': StandardTextColors.White,
    'std-text-colors-pink': StandardTextColors.Pink,
    'std-text-colors-orange': StandardTextColors.Orange,
    'std-text-colors-red': StandardTextColors.Red,
}

const LIGHT_TEXT_COLOR_THEME_MAP: TextColorThemeMap = {
    'std-text-color-black': StandardTextColors.White,
    'std-text-colors-purple': StandardTextColors.Purple,
    'std-text-colors-blue': StandardTextColors.DarkBlue,
    'std-text-colors-dark-blue': StandardTextColors.LightBlue,
    'std-text-colors-light-blue': StandardTextColors.DarkBlue,
    'std-text-colors-white': StandardTextColors.Black,
    'std-text-colors-pink': StandardTextColors.Blue,
    'std-text-colors-orange': StandardTextColors.Red,
    'std-text-colors-red': StandardTextColors.Red,
}

export const useTextColorTheme = (): TextColorThemeMap => {
    const { isDarkMode } = useTheme()
    const [textColorThemeMap, setTextColorThemeMap] = useState<TextColorThemeMap>(isDarkMode ? DARK_TEXT_COLOR_THEME_MAP : LIGHT_TEXT_COLOR_THEME_MAP)

    useEffect(() => {
        setTextColorThemeMap(isDarkMode ? DARK_TEXT_COLOR_THEME_MAP : LIGHT_TEXT_COLOR_THEME_MAP)
    }, [isDarkMode])

    return textColorThemeMap
}
