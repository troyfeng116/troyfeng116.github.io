import './Error.module.css'

import React from 'react'
import { useRouter } from 'next/dist/client/router'

import HomeFlip from '../Home/HomeFlip'

interface ErrorProps {
    statusCode: number
}

export const Error: React.FC<ErrorProps> = (props) => {
    const { statusCode } = props
    const router = useRouter()
    return (
        <main className="error-container">
            <HomeFlip />
            <h1 className="error-title">Oops!</h1>
            <p className="error-text">This page does not exist. I have my secrets.</p>
            <div className="error-button" onClick={() => router.push('/')}>
                Return to home
            </div>
            <div>Error: {statusCode}</div>
        </main>
    )
}
