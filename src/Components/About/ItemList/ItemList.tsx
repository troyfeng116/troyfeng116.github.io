import React from 'react'
import { StandardFlex, StandardFonts, StandardMargin } from 'Components/Styles'

interface ItemListProps {
    label: string
    items: string[]
}

export const ItemList: React.FC<ItemListProps> = (props) => {
    const { label, items } = props
    return (
        <div>
            <p className={`${StandardFonts.MediumTextBold} ${StandardMargin.Y0}`}>{label}</p>
            <div style={{ flexWrap: 'wrap' }} className={`${StandardFonts.SmallTextAltBold} ${StandardFlex.Row} ${StandardMargin.T6}`}>
                {items.map((award, idx) => {
                    return (
                        <div key={idx} className={`${StandardMargin.X6}`} style={{ border: '2px solid #5078f0', borderRadius: 3, marginTop: 4, marginBottom: 4, padding: '2px 6px' }}>
                            {award}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
