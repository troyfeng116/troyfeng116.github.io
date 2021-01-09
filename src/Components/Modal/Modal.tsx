import './Modal.module.css'

import React, { ReactNode } from 'react'

interface ModalProps {
    children: ReactNode
    onClick?: () => void
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { children, onClick } = props

    return (
        <div className="modal-backdrop" onClick={onClick}>
            <div
                className="modal-content"
                onClick={(event) => {
                    event.stopPropagation()
                }}
            >
                {children}
            </div>
        </div>
    )
}
