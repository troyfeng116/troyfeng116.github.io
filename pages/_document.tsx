import React from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
    return (
        <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
