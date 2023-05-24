import { useEffect, useState } from 'react'
import { BorderGradientColors } from 'Components/BorderGradient'

import { useTheme } from './ThemeProvider'

type BorderGradientThemeMap = { [key in BorderGradientColors]: BorderGradientColors }

/*
export enum BorderGradientColors {
    Pink = '#d475d4',
    Orange = '#fa9f55',
    Blue = '#5078f0',
    Red = '#eb3648',
    DarkBlue = '#142878',
    Green = '#22a872', // rgb(0, 252, 126)
}
*/

const DARK_BORDER_GRADIENT_THEME_MAP: BorderGradientThemeMap = {
    '#d475d4': BorderGradientColors.Pink,
    '#fa9f55': BorderGradientColors.Orange,
    '#5078f0': BorderGradientColors.Blue,
    '#eb3648': BorderGradientColors.Red,
    '#142878': BorderGradientColors.DarkBlue,
    '#22a872': BorderGradientColors.Green,
}

const LIGHT_BORDER_GRADIENT_THEME_MAP: BorderGradientThemeMap = {
    '#d475d4': BorderGradientColors.Blue,
    '#fa9f55': BorderGradientColors.Green,
    '#5078f0': BorderGradientColors.Green,
    '#eb3648': BorderGradientColors.Red,
    '#142878': BorderGradientColors.DarkBlue,
    '#22a872': BorderGradientColors.Green,
}

export const useBorderGradientThemeMap = (): BorderGradientThemeMap => {
    const { isDarkMode } = useTheme()
    const [borderGradientThemeMap, setBorderGradientThemeMap] = useState<BorderGradientThemeMap>(isDarkMode ? DARK_BORDER_GRADIENT_THEME_MAP : LIGHT_BORDER_GRADIENT_THEME_MAP)

    useEffect(() => {
        setBorderGradientThemeMap(isDarkMode ? DARK_BORDER_GRADIENT_THEME_MAP : LIGHT_BORDER_GRADIENT_THEME_MAP)
    }, [isDarkMode])

    return borderGradientThemeMap
}
