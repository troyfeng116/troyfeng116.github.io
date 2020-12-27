import './ContactAnimation.css'
import React, { ReactNode } from 'react'

interface ContactAnimationProps {
    children: ReactNode,
}

export const ContactAnimation: React.FC<ContactAnimationProps> = (props) => {
    const { children } = props

    return (
        <div className="contact-anim-container">
            <div className="contact-anim-box">
                <span className="contact-anim-side contact-anim-top" />
                <span className="contact-anim-side contact-anim-right" />
                <span className="contact-anim-side contact-anim-bottom" />
                <span className="contact-anim-side contact-anim-left" />
                <div className="contact-anim-content">
                    {children}
                </div>
            </div>
        </div>
    )
}
