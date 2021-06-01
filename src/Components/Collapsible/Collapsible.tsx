import React, { useEffect, useRef, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

import { Clickable, StandardFlex, StandardJustify, StandardLayout, StandardOverflow } from '../Styles'

interface CollapsibleProps {
    children: React.ReactChild
    label: React.ReactNode
    containerClassName?: string
    containerStyle?: React.CSSProperties
    chevronClassName?: string
    chevronStyle?: React.CSSProperties
    isOnlyChevronClickable?: boolean
}

export const Collapsible: React.FC<CollapsibleProps> = (props) => {
    const { children, label, containerClassName = '', containerStyle, chevronClassName = '', chevronStyle, isOnlyChevronClickable = true } = props
    const [maxHeight, setMaxHeight] = useState<number>(0)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (dropdownRef.current) {
            setMaxHeight(dropdownRef.current.scrollHeight)
        }
    }, [dropdownRef.current?.scrollHeight])

    return (
        <div className={`${containerClassName}`} style={{ ...containerStyle }}>
            <div
                className={`${isOnlyChevronClickable ? undefined : Clickable} ${StandardLayout.FlexRow} ${StandardJustify.Between}`}
                onClick={isOnlyChevronClickable ? undefined : () => setIsOpen(!isOpen)}
            >
                {label}
                <div
                    className={`${isOnlyChevronClickable ? Clickable : undefined} ${StandardFlex.Row} ${chevronClassName}`}
                    style={{ ...chevronStyle }}
                    onClick={isOnlyChevronClickable ? () => setIsOpen(!isOpen) : undefined}
                >
                    <FaChevronDown style={{ transform: isOpen ? 'rotate(180deg)' : undefined, transition: '0.2s transform linear' }} />
                </div>
            </div>
            <div ref={dropdownRef} className={`${StandardOverflow.Hidden}`} style={{ maxHeight: isOpen ? maxHeight : 0, transition: '0.35s max-height linear' }}>
                {children}
            </div>
        </div>
    )
}
