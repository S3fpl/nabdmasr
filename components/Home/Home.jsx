import React from 'react'
import Hero from './Hero/Hero'
import Stats from './Stats/Stats'
import Feature from './Feature/Feature'
import Devices from './Devices/Devices'
import About from './About/About'
import Download from './Download/Download'

const Home = () => {
    return (
        <main>
            <div className='md:my-0 my-24' />
            <Hero />
            <Stats />
            <div className='my-28' />
            <Feature />
            <div className='my-28 bg-transparent' />
            <Devices />
            <div className='my-28' />
            <About />
            <div className='my-28' />
            <Download />
            <div className='my-28' />
        </main>
    )
}

export default Home