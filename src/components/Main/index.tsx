import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

type Props = {
    children: JSX.Element | JSX.Element[]
}

const Main = ({ children } : Props) => {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  );
}

export default Main;