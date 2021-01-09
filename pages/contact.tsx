import React from 'react'
import { GetStaticProps } from 'next'

import Contact from '../src/Components/Contact'
import Footer from '../src/Components/Footer'
import MenuBar from '../src/Components/MenuBar'

export default function HomeWrapper(): JSX.Element {
    return (
        <>
            <MenuBar />
            <Contact />
            <Footer />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return { props: {} }
}
