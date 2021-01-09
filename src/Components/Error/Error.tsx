import './Error.module.css'

import React from 'react'

interface ErrorProps {
    statusCode: number
}

export const Error: React.FC<ErrorProps> = (props) => {
    const { statusCode } = props
    return (
        <main className="error-container">
            <h1>Oops!</h1>
            <div>Error: {statusCode}</div>
            <div>This page does not exist. I have my secrets.</div>
        </main>
    )
}
