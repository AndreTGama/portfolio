import React from 'react';
import * as Style from './Header.style';
import { FloatingColors } from '../Background/FloatingColors/FloatingColors';
import { SocialMedia } from '../Icons/SocialMedia/SocialMedia';
import { SocialLinks } from '../../assets/data/profile/SocialMedia'; 
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

export function Header(): JSX.Element {
    return (
        <FloatingColors>
            <Style.Box>
                <Style.Title>
                    <Style.BlockTitle />
                    <Style.TitleH>
                        André Toledo Gama
                        <Style.TileSpan/>
                    </Style.TitleH>
                </Style.Title>
                <Style.Role>
                    <Style.BlockRole />
                    <Style.RoleP>Back-end Developer</Style.RoleP>
                </Style.Role>
                <Style.Role>
                    <SocialMedia url={SocialLinks.instagram} iconName={faInstagram} />
                    <SocialMedia url={SocialLinks.linkedin} iconName={faLinkedin} />
                    <SocialMedia url={SocialLinks.github} iconName={faGithub} />          
                </Style.Role>
            </Style.Box>
        </FloatingColors>
    );
}
