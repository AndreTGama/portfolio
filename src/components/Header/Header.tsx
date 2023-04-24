import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import * as Style from './Header.style';
import { SocialMedia } from '../Icons/SocialMedia/SocialMedia';
import { SocialLinks } from '../../assets/data/profile/SocialMedia'; 
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Header(): JSX.Element {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Eu sou:', 'Eu sou: André Toledo Gama', 'Eu sou: Back-end Developer'],
            typeSpeed: 0,
            backSpeed: 0,
            smartBackspace: true,
            loop: false
        });
    
        return () => {
          typed.destroy();
        };
      }, []);
    return (
        <Style.Container>
            <Style.Box>
                <Style.Title>
                    <Style.BlockTitle />
                    <Style.TitleH>
                        Bem-vindo
                        <Style.TileSpan/>
                    </Style.TitleH>
                </Style.Title>
                <Style.Role>
                    <Style.BlockRole />
                    <Style.RoleP ref={el} />
                </Style.Role>
                <Style.Role>
                    <SocialMedia url={SocialLinks.instagram} iconName={faInstagram} />
                    <SocialMedia url={SocialLinks.linkedin} iconName={faLinkedin} />
                    <SocialMedia url={SocialLinks.github} iconName={faGithub} />          
                </Style.Role>
            </Style.Box>
        </Style.Container>
    );
}
