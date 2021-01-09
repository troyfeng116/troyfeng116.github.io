import React from 'react'

import About from '../src/Components/About'
import Footer from '../src/Components/Footer'
import MenuBar from '../src/Components/MenuBar'

export default function HomeWrapper(): JSX.Element {
    return (
        <>
            <MenuBar />
            <About />
            <Footer />
        </>
    )
}
