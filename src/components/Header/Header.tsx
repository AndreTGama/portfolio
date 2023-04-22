import React from 'react';
import * as Style from './Header.style';
import { SocialMedia } from '../Icons/SocialMedia/SocialMedia';
import { SocialLinks } from '../../assets/data/profile/SocialMedia'; 
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Header(): JSX.Element {
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
                    <Style.RoleP>Eu sou André Gama Back-end Developer</Style.RoleP>
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
