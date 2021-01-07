import './TextGlow.module.css'

import React from 'react'

interface TextGlowProps {
    text: string
    hover: boolean
}

export const TextGlow: React.FC<TextGlowProps> = (props) => {
    const { text, hover } = props
    return <span className={`${hover ? 'text-glow-container-hover' : 'text-glow-container-constant'}`}>{text}</span>
}
