import React from 'react'

import Footer from '../src/Components/Footer'
import MenuBar from '../src/Components/MenuBar'
import Projects from '../src/Components/Projects'

export default function HomeWrapper(): JSX.Element {
    return (
        <>
            <MenuBar />
            <Projects />
            <Footer />
        </>
    )
}
