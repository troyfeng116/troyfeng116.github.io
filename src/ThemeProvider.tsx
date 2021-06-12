import React, { useContext } from 'react'
import { useState } from 'react'

export interface UserContext {
    isDarkMode: boolean
    toggleDarkMode: () => void
}

const initialContext: UserContext = {
    isDarkMode: true,
    toggleDarkMode: () => false,
}

const themeContext = React.createContext<UserContext>(initialContext)

interface ThemeProviderProps {
    children: React.ReactChild
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
    const { children } = props
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

    return <themeContext.Provider value={{ isDarkMode: isDarkMode, toggleDarkMode: () => setIsDarkMode((prevState) => !prevState) }}>{children}</themeContext.Provider>
}

export const useTheme = (): UserContext => {
    return useContext<UserContext>(themeContext)
}
