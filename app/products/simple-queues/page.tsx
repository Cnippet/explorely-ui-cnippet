import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import M1 from '@/components/(pages)/products/Main';
import Related from '@/components/(pages)/products/Related';
const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <M1 />
                <Related/>
            </main>
            <Footer />
        </>
    )
}

export default page