import React, { useState } from 'react';
import Logo from '../../assets/img/logo.png';
import { Nav, Row, RowResponsive, Img, Links, ResponsiveNavBar } from './Navbar.style';

export function Navbar() : JSX.Element {
  const [activeValue, setActiveValue] = useState('');
  
  function activeLink(event: React.MouseEvent<HTMLButtonElement>){
    const a: HTMLButtonElement = event.currentTarget;
    setActiveValue(a.id);
  };

  return (
    <Nav className="">
      <Row>
        <p>Logo</p>
        <Row>
          <Links 
            onClick={activeLink} 
            id="a_about" 
            active={activeValue === 'a_about'} 
            href='#about'
          >
            About
          </Links>
          <Links 
            onClick={activeLink} 
            id="a_projects" 
            active={activeValue === 'a_projects'} 
            href='#projects'
          >
            Projects
          </Links>
          <Links 
            onClick={activeLink}
            id="a_blog"  
            active={activeValue === 'a_blog'} 
            href='#blog'
          >
            Blog
          </Links>
          <Links 
            onClick={activeLink}
            id="a_contact"  
            active={activeValue === 'a_contact'} 
            href='#contact'
          >
            Contact
          </Links>
        </Row>
      </Row>
      <RowResponsive>
        <p>Logo</p>
        <Row>
          <Links 
            onClick={activeLink} 
            id="a_about" 
            active={activeValue === 'a_about'} 
            href='#about'
          >
            About
          </Links>
          <Links 
            onClick={activeLink} 
            id="a_projects" 
            active={activeValue === 'a_projects'} 
            href='#projects'
          >
            Projects
          </Links>
          <Links 
            onClick={activeLink}
            id="a_blog"  
            active={activeValue === 'a_blog'} 
            href='#blog'
          >
            Blog
          </Links>
          <Links 
            onClick={activeLink}
            id="a_contact"  
            active={activeValue === 'a_contact'} 
            href='#contact'
          >
            Contact
          </Links>
        </Row>
      </RowResponsive>
      <ResponsiveNavBar active={false}>
        <img />
        <div>
          About
        </div>
        <div>
          Projects
        </div>
        <div>
          Blog
        </div>
        <div>
          Contact
        </div>
      </ResponsiveNavBar>
    </Nav>
  );
}