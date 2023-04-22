import React from 'react';
import Main from '../../components/Main';
import { Header } from '../../components/Header/Header';
import { About } from '../../components/About/About';
import { Wave } from '../../components/Background/Wave/Wave';

export default function Home() {
    return (
        <Main>
            <Header />
            <About />
        </Main>
    );
}
