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
        <div className="site-container">
            <MenuBar />
            <Error statusCode={statusCode} />
            <Footer />
        </div>
    )
}

ErrorWrapper.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}
