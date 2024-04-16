import Hero from '@/components/(pages)/about/Hero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Team from '@/components/(pages)/about/Team'
import Timeline from '@/components/(pages)/about/Timeline'
import Newsletter from '@/components/Newsletter';

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Timeline />
                <Team />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default page