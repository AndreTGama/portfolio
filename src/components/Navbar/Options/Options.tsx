import React, { useState } from 'react';
import { Links } from './Options.style';
import { Row } from '../../../styles/global';

export function Options({
    active,
    setActive,
}: {
    active: boolean;
    setActive: (value: boolean) => void;
}): JSX.Element {
    const [activeSection, setActiveSection] = useState('');

    function activeLink(event: React.MouseEvent<HTMLButtonElement>) {
        const a: HTMLButtonElement = event.currentTarget;
        setActiveSection(a.id);
        setActive(!active);
    }

    return (
        <Row>
            <Links
                onClick={activeLink}
                id="a_about"
                active={activeSection === 'a_about'}
                href="#about"
            >
                About
            </Links>
            <Links
                onClick={activeLink}
                id="a_projects"
                active={activeSection === 'a_projects'}
                href="#projects"
            >
                Projects
            </Links>
            <Links
                onClick={activeLink}
                id="a_blog"
                active={activeSection === 'a_blog'}
                href="#blog"
            >
                Blog
            </Links>
            <Links
                onClick={activeLink}
                id="a_contact"
                active={activeSection === 'a_contact'}
                href="#contact"
            >
                Contact
            </Links>
        </Row>
    );
}
