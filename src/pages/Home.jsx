import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import Philosophy from '../components/Philosophy/Philosophy';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';

const Home = () => {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <Philosophy />
            <Services />
            <Testimonials/>
            <FAQ />
            <CTA />
        </>
    );
};

export default Home;