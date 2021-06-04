import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'

import { ContactCellProps } from './ContactCell'

export const CONTACT_CELL_PROPS: ContactCellProps[] = [
    { icon: <FaRegEnvelope />, href: 'mailto::troy.feng@yale.edu', title: 'Email' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/troy-feng/', title: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/tro_yfeng/?hl=en', title: 'Instagram' },
    { icon: <FaGithub />, href: 'https://github.com/troyfeng116', title: 'GitHub' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/Tfunk116/', title: 'Facebook' },
]
