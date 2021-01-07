import React from 'react'

import Footer from '../src/Components/Footer'
import Home from '../src/Components/Home'
import MenuBar from '../src/Components/MenuBar'

export default function HomeWrapper(): JSX.Element {
    return (
        <>
            <MenuBar />
            <Home />
            <Footer />
        </>
    )
}
