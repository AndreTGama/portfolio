import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import ParticlesBackground from '../Background/Particles/ParticlesBackground'
import * as Style from './Header.style';
import { SocialMedia } from '../Icons/SocialMedia/SocialMedia'
import { SocialLinks } from '../../assets/data/Profile/Social'

export default function Header(): JSX.Element {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Eu sou:', 'Eu sou: André Toledo Gama', 'Eu sou: Back-end Developer'],
            typeSpeed: 0,
            backSpeed: 0,
            startDelay: 4000,
            smartBackspace: true,
            loop: false
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <Style.Section>
            <ParticlesBackground />
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
                        <SocialMedia url={SocialLinks.instagram} label={'Instaram do André Gama'} iconName={faInstagram} />
                        <SocialMedia url={SocialLinks.linkedin}  label={'Linkedin do André Gama'} iconName={faLinkedin} />
                        <SocialMedia url={SocialLinks.github}  label={'Github do André Gama'} iconName={faGithub} />          
                    </Style.Role>
                </Style.Box>
            </Style.Container>   
        </Style.Section>
    );
}
