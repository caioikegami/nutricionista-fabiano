import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Philosophy from '../components/Philosophy/Philosophy';
import Services from '../components/Services/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        // Se a URL tem #faq, scroll até lá
        if (location.hash === '#faq') {
            setTimeout(() => {
                const element = document.getElementById('faq');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location.hash]);

    return (
        <>
            <Hero />
            <Philosophy />
            <Services />
            <Testimonials />
            <FAQ />
            <CTA />
        </>
    );
};

export default Home;