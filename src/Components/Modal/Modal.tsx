import './Modal.css'
import React, { ReactNode } from 'react'

interface ModalProps {
    children: ReactNode
    onClick?: () => void
}

const Modal = (props: ModalProps) => {
    const { children, onClick } = props

    return (
        <div className="modal-backdrop" onClick={onClick}>
            <div
                className='modal-content'
                onClick={(event) => {
                    event.stopPropagation()
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal
