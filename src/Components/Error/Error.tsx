import './Error.module.css'

import React from 'react'
import { useRouter } from 'next/dist/client/router'

import HomeFlip from '../Home/HomeFlip'
import { StandardBackgrounds, StandardFonts, StandardTextColors } from '../Styles'

interface ErrorProps {
    statusCode: number
}

export const Error: React.FC<ErrorProps> = (props) => {
    const { statusCode } = props
    const router = useRouter()
    return (
        <main className="error-container">
            <HomeFlip />
            <h1 className={`error-title ${StandardFonts.H1TextAlt} ${StandardTextColors.Blue}`}>Oops!</h1>
            <p className={`error-text ${StandardFonts.MediumTextAlt} ${StandardTextColors.Purple}`}>This page does not exist. I have my secrets.</p>
            <div className={`error-button ${StandardBackgrounds.Purple}`} onClick={() => router.push('/')}>
                Return to home
            </div>
            <div className={`${StandardFonts.SmallText} ${StandardTextColors.Purple}`}>Error: {statusCode}</div>
        </main>
    )
}
