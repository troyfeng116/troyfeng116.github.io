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

export enum SiteTheme {
    Dark = 'Dark',
    Light = 'Light',
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
    const { children } = props
    const [theme, setTheme] = useState<SiteTheme>(SiteTheme.Light)
    const [componentDidMount, setComponentDidMount] = useState<boolean>(false)

    useEffect(() => {
        const themeInStorage = window.localStorage.getItem('theme')
        if (themeInStorage !== null) {
            setTheme(themeInStorage === SiteTheme.Dark ? SiteTheme.Dark : SiteTheme.Light)
        } else {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme(SiteTheme.Dark)
            } else setTheme(SiteTheme.Light)
        }

        const timeout = setTimeout(() => {
            document.body.style.transition = '0.23s color ease, 0.23s background-color ease'
        }, 1000)

        setComponentDidMount(true)

        return () => clearTimeout(timeout)
    }, [])

    useEffect(() => {
        if (theme === SiteTheme.Dark) {
            window.localStorage.setItem('theme', SiteTheme.Dark)
            document.body.style.backgroundColor = 'rgb(0, 0, 0)'
            document.body.style.color = 'rgb(212, 117, 212)'
        } else {
            window.localStorage.setItem('theme', SiteTheme.Light)
            document.body.style.backgroundColor = 'rgb(255, 255, 255)'
            document.body.style.color = 'rgb(20, 40, 120)'
        }
    }, [theme])

    if (!componentDidMount) {
        return <div />
    }

    return (
        <themeContext.Provider
            value={{
                isDarkMode: theme === SiteTheme.Dark,
                toggleDarkMode: () => {
                    setTheme((prevState) => (prevState === SiteTheme.Dark ? SiteTheme.Light : SiteTheme.Dark))
                },
            }}
        >
            {children}
        </themeContext.Provider>
    )
}

export const useTheme = (): UserContext => {
    return useContext<UserContext>(themeContext)
}
