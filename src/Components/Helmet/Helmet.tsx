import React from 'react'
import Head from 'next/head'

export const Helmet: React.FC = () => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico?v=2" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Troy Feng - personal website" />
            <title>Troy Feng</title>
        </Head>
    )
}
