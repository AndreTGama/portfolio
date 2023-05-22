import React, { useState } from 'react';
import { Links, RowCollumn } from './Options.style';

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
        <RowCollumn>
            <Links
                onClick={(event : React.MouseEvent<HTMLButtonElement>)=> activeLink(event)}
                id='a_about'
                active={activeSection === 'a_about'}
                href='#about'
            >
                Sobre Mim
            </Links>
            <Links
                onClick={(event : React.MouseEvent<HTMLButtonElement>)=> activeLink(event)}
                id='a_skills'
                active={activeSection === 'a_skills'}
                href='#skills'
            >
                Minhas competências
            </Links>
            <Links
                onClick={(event : React.MouseEvent<HTMLButtonElement>)=> activeLink(event)}
                id='a_blog'
                active={activeSection === 'a_projects'}
                href='#projects'
            >
                Projetos
            </Links>
            <Links
                onClick={(event : React.MouseEvent<HTMLButtonElement>)=> activeLink(event)}
                id='a_contact'
                active={activeSection === 'a_contact'}
                href='#contact'
            >
                Contato
            </Links>
        </RowCollumn>
    );
}
