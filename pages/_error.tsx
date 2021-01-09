import React from 'react'
import { NextPageContext } from 'next'

import Error from '../src/Components/Error'
import Footer from '../src/Components/Footer'
import MenuBar from '../src/Components/MenuBar'

interface ErrorWrapperProps {
    statusCode: number
}

export default function ErrorWrapper({ statusCode }: ErrorWrapperProps): JSX.Element {
    return (
        <>
            <MenuBar />
            <Error statusCode={statusCode} />
            <Footer />
        </>
    )
}

ErrorWrapper.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}
