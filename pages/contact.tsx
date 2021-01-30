import React from 'react'
import { GetStaticProps } from 'next'

import Contact from '../src/Components/Contact'
import Footer from '../src/Components/Footer'
import MenuBar from '../src/Components/MenuBar'

export default function HomeWrapper(): JSX.Element {
    return (
        <div className="site-container">
            <MenuBar />
            <Contact />
            <Footer />
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return { props: {} }
}
