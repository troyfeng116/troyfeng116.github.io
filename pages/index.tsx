import React from 'react'
import { GetStaticProps } from 'next'

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

export const getStaticProps: GetStaticProps = async () => {
    return { props: {} }
}
