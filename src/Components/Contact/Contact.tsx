import './Contact.module.css'

import React from 'react'
import { StandardJustify, StandardLayout, StandardPadding } from 'Components/Styles'

import ContactCell from './ContactCell'
import { CONTACT_CELL_PROPS } from './ContactConstants'

export const Contact: React.FC = () => {
    const contactCells = CONTACT_CELL_PROPS.map((cellProps, idx) => {
        return <ContactCell key={idx} {...cellProps} />
    })

    return (
        <main className={`other-container ${StandardLayout.FlexRow} ${StandardJustify.Evenly} ${StandardPadding.Y120} ${StandardPadding.X36}`} style={{ flexWrap: 'wrap', minHeight: 500 }}>
            {contactCells}
        </main>
    )
}
