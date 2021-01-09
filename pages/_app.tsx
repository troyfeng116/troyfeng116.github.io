import '../src/App.css'

import React from 'react'

import Helmet from '../src/Components/Helmet'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Helmet />
            <Component {...pageProps} />
        </>
    )
}
