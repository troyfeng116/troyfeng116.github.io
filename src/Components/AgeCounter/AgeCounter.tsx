import './AgeCounter.css'
import React, { useEffect, useState } from 'react'
import { calculateAgeSeconds } from '../../Utils/calculateAgeSeconds'

export const AgeCounter = () => {
    const [seconds, setSeconds] = useState<number>(calculateAgeSeconds())

    useEffect(() => {
        const timeout = setTimeout(() => setSeconds(seconds + 1), 1000)
        return () => clearTimeout(timeout)
    }, [seconds])

    return (
        <div className="age-counter-container">
            {seconds}
        </div>
    )
}
