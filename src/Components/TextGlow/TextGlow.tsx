import styles from './TextGlow.module.css'

import React from 'react'

interface TextGlowProps {
    text: string
    hover: boolean
}

export const TextGlow: React.FC<TextGlowProps> = (props) => {
    const { text, hover } = props
    return <span className={`${hover ? styles.text_glow_container_hover : styles.text_glow_container_constant}`}>{text}</span>
}
