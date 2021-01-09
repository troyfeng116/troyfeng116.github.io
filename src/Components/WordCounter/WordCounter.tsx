import './WordCounter.module.css'

import React, { useEffect, useState } from 'react'

interface WordCounterProps {
    words: string[]
    timeout: number
}

export const WordCounter: React.FC<WordCounterProps> = (props) => {
    const { words, timeout } = props
    const [wordIndex, setWordIndex] = useState<number>(0)

    useEffect(() => {
        const timeOut = setTimeout(
            () => {
                setWordIndex((wordIndex + 1) % words.length)
            },
            timeout > 0 ? timeout : Math.random() * 2000 + 2500,
        )
        return () => clearTimeout(timeOut)
    }, [wordIndex])

    const myPadStart = (s: string, len: number, fill: string): string => {
        while (s.length < len) s = fill + s
        return s
    }

    return <div style={{ color: '#' + myPadStart(Math.floor(Math.random() * 16777215).toString(16), 6, '0') }}>{words[wordIndex]}</div>
}
