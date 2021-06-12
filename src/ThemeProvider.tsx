import React, { useContext, useEffect } from 'react'
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

    useEffect(() => {
        if (document.body) {
            document.body.style.backgroundColor = isDarkMode ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)'
            document.body.style.color = isDarkMode ? 'rgb(212, 117, 212)' : 'rgb(20, 40, 120)'
        }
    }, [isDarkMode])

    return <themeContext.Provider value={{ isDarkMode: isDarkMode, toggleDarkMode: () => setIsDarkMode((prevState) => !prevState) }}>{children}</themeContext.Provider>
}

export const useTheme = (): UserContext => {
    return useContext<UserContext>(themeContext)
}
