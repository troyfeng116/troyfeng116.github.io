import { useEffect, useState } from 'react'
import { TextGradientColors } from 'Components/TextGradient'

import { useTheme } from './ThemeProvider'

type TextGradientThemeMap = { [key in TextGradientColors]: TextGradientColors }

const DARK_TEXT_GRADIENT_THEME_MAP: TextGradientThemeMap = {
    '#d475d4': TextGradientColors.Pink,
    '#fa9f55': TextGradientColors.Orange,
    '#5078f0': TextGradientColors.Blue,
    '#eb3648': TextGradientColors.Red,
    '#142878': TextGradientColors.DarkBlue,
}

const LIGHT_TEXT_GRADIENT_THEME_MAP: TextGradientThemeMap = {
    '#d475d4': TextGradientColors.Blue,
    '#fa9f55': TextGradientColors.Red,
    '#5078f0': TextGradientColors.DarkBlue,
    '#eb3648': TextGradientColors.Red,
    '#142878': TextGradientColors.DarkBlue,
}

export const useTextGradientThemeMap = (): TextGradientThemeMap => {
    const { isDarkMode } = useTheme()
    const [textGradientThemeMap, setTextGradientThemeMap] = useState<TextGradientThemeMap>(isDarkMode ? DARK_TEXT_GRADIENT_THEME_MAP : LIGHT_TEXT_GRADIENT_THEME_MAP)

    useEffect(() => {
        setTextGradientThemeMap(isDarkMode ? DARK_TEXT_GRADIENT_THEME_MAP : LIGHT_TEXT_GRADIENT_THEME_MAP)
    }, [isDarkMode])

    return textGradientThemeMap
}
