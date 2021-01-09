import '../src/App.css'

import React from 'react'
import { AppProps } from 'next/app'

import Helmet from '../src/Components/Helmet'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <Helmet />
            <Component {...pageProps} />
        </>
    )
}
