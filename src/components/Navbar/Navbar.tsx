import React, { useState } from 'react';
import { Options } from './Options/Options';
import {
    Div,
    Row,
    RowResponsive,
    Img,
    Links,
    ResponsiveNavBar,
} from './Navbar.style';
import { Logo } from '../Logo/Index';
import { Hamburger } from '../Icons/Hamburger/Hamburger';

export function Navbar(): JSX.Element {
    const [activeValue, setActiveValue] = useState('');

    function activeLink(event: React.MouseEvent<HTMLButtonElement>) {
        const a: HTMLButtonElement = event.currentTarget;
        setActiveValue(a.id);
    }

    return (
        <nav>
            <Div>
              <Row>
                <Logo/>
                <Options />
              </Row>
              <Row>
                <Logo/>
                <Hamburger />
              </Row>
              <ResponsiveNavBar active={false}>
                  <img />
                  <div>About</div>
                  <div>Projects</div>
                  <div>Blog</div>
                  <div>Contact</div>
              </ResponsiveNavBar>
            </Div>
        </nav>
    );
}
