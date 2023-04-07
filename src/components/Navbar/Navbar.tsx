import React, { useState } from 'react';
import { Options } from './Options/Options';
import {
    Div,
    RowLargeScreen,
    RowSmallScreen,
    ResponsiveNavBar,
} from './Navbar.style';
import { Logo } from '../Logo/Index';
import { Hamburger } from '../Icons/Hamburger/Hamburger';

export function Navbar(): JSX.Element {
    const [activeHamburger, setActiveHamburger] = useState(false);
  
    return (
        <nav>
            <Div>
              <RowLargeScreen>
                <Logo/>
                <Options active={activeHamburger} setActive={setActiveHamburger}/>
              </RowLargeScreen>
              <RowSmallScreen>
                <Logo/>
                <Hamburger active={activeHamburger} setActive={setActiveHamburger}/>
              </RowSmallScreen>
              <ResponsiveNavBar active={activeHamburger}>
                <Options active={activeHamburger} setActive={setActiveHamburger} />
              </ResponsiveNavBar>
            </Div>
        </nav>
    );
}
