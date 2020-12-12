import './TextMultiColor.css'
import React from 'react'

interface TextMultiColorProps {
    text: string
}

const TextMultiColor: React.FC<TextMultiColorProps> = (props) => {
    const { text } = props
    return <span className="text-multi-color-container">{text}</span>
}

export default TextMultiColor
