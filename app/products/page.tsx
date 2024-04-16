import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Hero from '@/components/(pages)/products/Hero'
import All from '@/components/(pages)/products/All'
const pages = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <All />
            </main>
            <Footer />
        </>
    )
}

export default pages