import styles from './TextMultiColor.module.css'

import React from 'react'

interface TextMultiColorProps {
    text: string
}

export const TextMultiColor: React.FC<TextMultiColorProps> = (props) => {
    const { text } = props
    return <span className={styles.text_multi_color_container}>{text}</span>
}
