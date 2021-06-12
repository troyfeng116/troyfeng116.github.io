import '../src/Styles/Standard/globals.css'
import '../src/Styles/Standard/index.css'
import '../src/Styles/Standard/spacing.css'
import '../src/Styles/Standard/standardFlex.css'

import React from 'react'
import { AppProps } from 'next/app'

import Helmet from '../src/Components/Helmet'
import { ThemeProvider } from '../src/Styles/Theme/ThemeProvider'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Helmet />
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
