import React, { useEffect, useState } from 'react'

import { randomInt } from '../../Utils/randomInt'

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

const randomBrightColor = (): string => {
    const BRIGHT = 55
    const rgb = [0, 0, 0]
    const randomIdx = randomInt(0, 2)
    const randomChunk = randomInt(0, BRIGHT)
    const randomColor = randomInt(0, 1) === 0 ? randomChunk : 255 - randomChunk
    rgb[randomIdx] = randomColor
    for (let i = 0; i < rgb.length; i++) {
        if (i === randomIdx) continue
        rgb[i] = randomColor > 122 ? randomInt(0, BRIGHT) : randomInt(255 - BRIGHT, 255)
    }
    return `rgb(${rgb.join(', ')})`
}

export const WordTyper: React.FC<WordTyperCounter> = (props) => {
    const { words } = props
    const [wordIndex, setWordIndex] = useState<number>(0)
    const [curWord, setCurWord] = useState<string>('')
    const [color, setColor] = useState<string>(randomBrightColor())
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
            setColor(randomBrightColor())
            timeout = setTimeout(() => setWordState(WordState.Spelling), 1000)
        }

        return () => clearTimeout(timeout)
    }, [curWord, wordState])

    return (
        <div style={{ color: `${color}` }}>
            {curWord}
            <BlinkingCursor />
        </div>
    )
}
