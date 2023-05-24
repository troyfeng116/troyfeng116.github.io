import styles from './BlinkingCursor.module.css'

import React from 'react'

export const BlinkingCursor: React.FC = () => {
    return <span className={styles.blinking_cursor}>|</span>
}
