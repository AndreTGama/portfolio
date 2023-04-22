import React from 'react';
import Main from '../../components/Main';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import ParticlesBackground from '../../components/Background/Particles/ParticlesBackground';

export default function Home() {
    return (
        <Main>
            <ParticlesBackground />
            <Header />
            <About />
        </Main>
    );
}
