import React from 'react';
import Logo from '../../assets/img/logo.png';
import { Nav, Row, Img, Links } from './Navbar.style';

export function Navbar() {
  return (
    <Nav className="">
      <Row>
        <Img src={Logo} alt="React Logo" />
        <Row>
          <Links href='#about'>
            About
          </Links>
          <Links href='#projects'>
            Projects
          </Links>
          <Links href='./blog'>
            Blog
          </Links>
          <Links href='#contact'>
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