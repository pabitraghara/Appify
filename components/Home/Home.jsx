import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Feature from './Feature/Feature';
import Testimonials from './Testimonoals/Testimonials';
import Plans from './Plans/Plans';
import Explore from './Explore/Explore';
import Footer from './Footer/Footer';

export default function Home() {

    return (
        <div className='overflow-hidden'>
            <Hero/>
            <About/>
            <Feature/>
            <Testimonials/>
            <Plans/>
            <Explore/>
            <Footer/>
        </div>
    );
}
