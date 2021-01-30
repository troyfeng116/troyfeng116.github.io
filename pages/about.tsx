import React from 'react'
import { GetStaticProps } from 'next'

import About from '../src/Components/About'
import Footer from '../src/Components/Footer'
import MenuBar from '../src/Components/MenuBar'

export default function HomeWrapper(): JSX.Element {
    return (
        <div className="site-container">
            <MenuBar />
            <About />
            <Footer />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return { props: {} }
}
