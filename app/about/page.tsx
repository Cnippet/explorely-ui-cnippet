import Hero from '@/components/(pages)/about/Hero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Team from '@/components/(pages)/about/Team'

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Team />
            </main>
            <Footer />
        </>
    )
}

export default page