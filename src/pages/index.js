import React, { useState } from 'react';
import HeroSection from '../components/Hero'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import InfoSection from '../components/InfoSection';
import Services from '../components/services'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Footer from '../components/Footer';
function Home() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection{...homeObjOne} />
            <InfoSection{...homeObjTwo} />
            <Services />
            <InfoSection{...homeObjThree} />
            <Footer />


        </>
    )
};

export default Home;

