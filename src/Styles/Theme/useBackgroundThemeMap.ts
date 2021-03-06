import { useEffect, useState } from 'react'
import { StandardBackgrounds } from 'Styles/Standard'

import { useTheme } from './ThemeProvider'

type BackgroundThemeMap = { [key in StandardBackgrounds]: StandardBackgrounds }

const DARK_BACKGROUND_THEME_MAP: BackgroundThemeMap = {
    'std-bg-colors-purple': StandardBackgrounds.Purple,
    'std-bg-colors-light-blue': StandardBackgrounds.LightBlue,
    'std-bg-colors-blue': StandardBackgrounds.Blue,
    'std-bg-colors-black': StandardBackgrounds.Black,
    'std-bg-colors-white': StandardBackgrounds.White,
    'std-bg-colors-orange': StandardBackgrounds.Orange,
    'std-bg-colors-pink': StandardBackgrounds.Pink,
    'std-bg-colors-pink-orange-gradient': StandardBackgrounds.PinkOrangeGradient,
    'std-bg-colors-blue-red-gradient': StandardBackgrounds.BlueRedGradient,
}

const LIGHT_BACKGROUND_THEME_MAP: BackgroundThemeMap = {
    'std-bg-colors-purple': StandardBackgrounds.Purple,
    'std-bg-colors-light-blue': StandardBackgrounds.LightBlue,
    'std-bg-colors-blue': StandardBackgrounds.Blue,
    'std-bg-colors-black': StandardBackgrounds.White,
    'std-bg-colors-white': StandardBackgrounds.Black,
    'std-bg-colors-orange': StandardBackgrounds.Orange,
    'std-bg-colors-pink': StandardBackgrounds.Pink,
    'std-bg-colors-pink-orange-gradient': StandardBackgrounds.BlueRedGradient,
    'std-bg-colors-blue-red-gradient': StandardBackgrounds.BlueRedGradient,
}

export const useBackgroundThemeMap = (): BackgroundThemeMap => {
    const { isDarkMode } = useTheme()
    const [backgroundThemeMap, setBackgroundThemeMap] = useState<BackgroundThemeMap>(isDarkMode ? DARK_BACKGROUND_THEME_MAP : LIGHT_BACKGROUND_THEME_MAP)

    useEffect(() => {
        setBackgroundThemeMap(isDarkMode ? DARK_BACKGROUND_THEME_MAP : LIGHT_BACKGROUND_THEME_MAP)
    }, [isDarkMode])

    return backgroundThemeMap
}
