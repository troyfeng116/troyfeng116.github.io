import React from 'react'
import { GetStaticProps } from 'next'

import Footer from '../src/Components/Footer'
import MenuBar from '../src/Components/MenuBar'
import Other from '../src/Components/Other'

export default function HomeWrapper(): JSX.Element {
    return (
        <>
            <MenuBar />
            <Other />
            <Footer />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return { props: {} }
}
