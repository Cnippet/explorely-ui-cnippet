import Hero from '@/components/(pages)/contact/Hero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import Form from '@/components/(pages)/contact/Form';
const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Form />
            </main>
            <Footer />
        </>
    )
}

export default page