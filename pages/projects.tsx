import React from 'react'
import { GetStaticProps } from 'next'

import Footer from '../src/Components/Footer'
import MenuBar from '../src/Components/MenuBar'
import Projects from '../src/Components/Projects'

export default function HomeWrapper(): JSX.Element {
    return (
        <div className="site-container">
            <MenuBar />
            <Projects />
            <Footer />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return { props: {} }
}
