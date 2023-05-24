import styles from './Modal.module.css'

import React, { ReactNode } from 'react'

interface ModalProps {
    children: ReactNode
    onClick?: () => void
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { children, onClick } = props

    return (
        <div className={styles.modal_backdrop} onClick={onClick}>
            <div
                className={styles.modal_content}
                onClick={(event) => {
                    event.stopPropagation()
                }}
            >
                {children}
            </div>
        </div>
    )
}
