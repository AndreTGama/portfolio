import React from 'react';
import Main from '../../components/Main';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Index';

export default function Home() {
    return (
        <Main>
            {/* <Header /> */}
            <About />
            <Projects />
        </Main>
    );
}
