import './ContactAnimation.css'
import React, { ReactNode } from 'react'

interface ContactAnimationProps {
    children: ReactNode,
}

const ContactAnimation = (props: ContactAnimationProps) => {
    const { children } = props
    return (
        <div className='animation2-container'>
            <div className='animation2-box'>
                <span className='animation2-side animation2-top' />
                <span className='animation2-side animation2-right' />
                <span className='animation2-side animation2-bottom' />
                <span className='animation2-side animation2-left' />
                <div className='animation2-content'>
                    {children}
                </div>

            </div>
        </div>
    )
}

export default ContactAnimation