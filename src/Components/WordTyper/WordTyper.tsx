import './WordTyper.module.css'

import React, { useEffect, useState } from 'react'

import BlinkingCursor from './BlinkingCursor'

enum WordState {
    Spelling = 'Spelling',
    DoneSpelling = 'DoneSpelling',
    Deleting = 'Deleting',
    DoneDeleting = 'DoneDeleting',
}

interface WordTyperCounter {
    words: string[]
}

const myPadStart = (s: string, len: number, fill: string): string => {
    while (s.length < len) s = fill + s
    return s
}

const randomColor = () => myPadStart(Math.floor(Math.random() * 16777215).toString(16), 6, '0')

export const WordTyper: React.FC<WordTyperCounter> = (props) => {
    const { words } = props
    const [wordIndex, setWordIndex] = useState<number>(0)
    const [curWord, setCurWord] = useState<string>('')
    const [color, setColor] = useState<string>(randomColor())
    const [wordState, setWordState] = useState<WordState>(WordState.Spelling)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (wordState === WordState.Spelling) {
            if (curWord.length === words[wordIndex].length) {
                setWordState(WordState.DoneSpelling)
            } else {
                timeout = setTimeout(() => setCurWord(words[wordIndex].slice(0, curWord.length + 1)), 80)
            }
        } else if (wordState === WordState.DoneSpelling) {
            timeout = setTimeout(() => setWordState(WordState.Deleting), 3000)
        } else if (wordState === WordState.Deleting) {
            if (curWord.length === 0) {
                setWordState(WordState.DoneDeleting)
            } else {
                timeout = setTimeout(() => setCurWord(words[wordIndex].slice(0, curWord.length - 1)), 80)
            }
        } else if (wordState === WordState.DoneDeleting) {
            setWordIndex((wordIndex + 1) % words.length)
            setColor(randomColor())
            timeout = setTimeout(() => setWordState(WordState.Spelling), 1000)
        }
        return () => clearTimeout(timeout)
    }, [curWord, wordState])

    return (
        <div style={{ color: `#${color}` }}>
            {curWord}
            <BlinkingCursor />
        </div>
    )
}
