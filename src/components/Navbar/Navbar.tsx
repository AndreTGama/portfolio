import { useState } from 'react';
import { Options } from './Options/Options';
import { Logo } from '../Logo/Index';
import { Hamburger } from '../Icons/Hamburger/Hamburger';
import * as Style from './Navbar.style';

export function Navbar(): JSX.Element {
  const [activeHamburger, setActiveHamburger] = useState(false);

  return (
    <Style.Nav>
      <Style.RowLargeScreen>
        <Logo/>
        <Options active={activeHamburger} setActive={setActiveHamburger}/>
      </Style.RowLargeScreen>
      <Style.RowSmallScreen>
        <Logo/>
        <Hamburger active={activeHamburger} setActive={setActiveHamburger}/>
      </Style.RowSmallScreen>
      <Style.ResponsiveNavBar active={activeHamburger}>
        <Options active={activeHamburger} setActive={setActiveHamburger} />
      </Style.ResponsiveNavBar>
    </Style.Nav>
  );
}
