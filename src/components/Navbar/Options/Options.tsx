import React, { useState } from 'react';
import {
    Links,
} from './Options.style';
import { Row } from '../../../styles/global'

export function Options(): JSX.Element {
    const [activeValue, setActiveValue] = useState('');

    function activeLink(event: React.MouseEvent<HTMLButtonElement>) {
        const a: HTMLButtonElement = event.currentTarget;
        setActiveValue(a.id);
    }

    return (
        <Row>
            <Links
                onClick={activeLink}
                id="a_about"
                active={activeValue === 'a_about'}
                href="#about"
            >
                About
            </Links>
            <Links
                onClick={activeLink}
                id="a_projects"
                active={activeValue === 'a_projects'}
                href="#projects"
            >
                Projects
            </Links>
            <Links
                onClick={activeLink}
                id="a_blog"
                active={activeValue === 'a_blog'}
                href="#blog"
            >
                Blog
            </Links>
            <Links
                onClick={activeLink}
                id="a_contact"
                active={activeValue === 'a_contact'}
                href="#contact"
            >
                Contact
            </Links>
        </Row>
    );
}
