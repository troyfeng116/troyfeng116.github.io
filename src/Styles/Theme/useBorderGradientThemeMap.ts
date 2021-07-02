import { useEffect, useState } from 'react'
import { BorderGradientColors } from 'Components/BorderGradient'

import { useTheme } from './ThemeProvider'

type BorderGradientThemeMap = { [key in BorderGradientColors]: BorderGradientColors }

const DARK_BORDER_GRADIENT_THEME_MAP: BorderGradientThemeMap = {
    '#d475d4': BorderGradientColors.Pink,
    '#fa9f55': BorderGradientColors.Orange,
    '#5078f0': BorderGradientColors.Blue,
    '#eb3648': BorderGradientColors.Red,
    '#142878': BorderGradientColors.DarkBlue,
}

const LIGHT_BORDER_GRADIENT_THEME_MAP: BorderGradientThemeMap = {
    '#d475d4': BorderGradientColors.Blue,
    '#fa9f55': BorderGradientColors.Red,
    '#5078f0': BorderGradientColors.DarkBlue,
    '#eb3648': BorderGradientColors.Red,
    '#142878': BorderGradientColors.DarkBlue,
}

export const useBorderGradientThemeMap = (): BorderGradientThemeMap => {
    const { isDarkMode } = useTheme()
    const [borderGradientThemeMap, setBorderGradientThemeMap] = useState<BorderGradientThemeMap>(isDarkMode ? DARK_BORDER_GRADIENT_THEME_MAP : LIGHT_BORDER_GRADIENT_THEME_MAP)

    useEffect(() => {
        setBorderGradientThemeMap(isDarkMode ? DARK_BORDER_GRADIENT_THEME_MAP : LIGHT_BORDER_GRADIENT_THEME_MAP)
    }, [isDarkMode])

    return borderGradientThemeMap
}
