import React, { useState } from 'react';
import Logo from '../../assets/img/logo.png';
import { Nav, Row, Img, Links } from './Navbar.style';

export function Navbar() : JSX.Element {
  const [activeValue, setActiveValue] = useState('');
  
  function activeLink(event: React.MouseEvent<HTMLButtonElement>){
    const a: HTMLButtonElement = event.currentTarget;
    setActiveValue(a.id);
  };

  return (
    <Nav className="">
      <Row>
        <Img src={Logo} alt="React Logo" />
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
      <div>
        <img />
        <div>
          <ul>
            <li>
              About
            </li>
            <li>
              Projects
            </li>
            <li>
              Blog
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}