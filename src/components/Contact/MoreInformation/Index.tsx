import { SocialMedia } from '../../Icons/SocialMedia/SocialMedia';
import { SocialLinks } from '../../../assets/data/Profile/SocialMedia'; 
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Horizon from '../../Divisor/Horizon/Index';
import * as Style from './Index.style';

export default function MoreInformation(): JSX.Element {
   
    return (
        <Style.Column>
                <Style.Row>
                    <Style.Icons>
                        <a href="mailto:andre_gama789@hotmail.com?subject=Assunto do email&body=Conteúdo">
                                <FontAwesomeIcon 
                                    icon={faEnvelope} 
                                    size='2xl'
                                /> 
                            <Style.Span>
                                andre_gama789@hotmail.com
                            </Style.Span>
                        </a>
                    </Style.Icons>
                </Style.Row>
            <Style.Row>
                <Style.Icons>
                    <FontAwesomeIcon 
                        icon={faLocationDot} 
                        size='2xl' 
                    />
                </Style.Icons>
                <Style.Span>Guaratinguetá - SP</Style.Span>
            </Style.Row>
            <Horizon />
            <Style.SpanTittle>
                Você pode me encontrar
            </Style.SpanTittle>
            <Style.Row>
                <SocialMedia 
                    url={SocialLinks.instagram} 
                    label={'Instaram do André Gama'} 
                    iconName={faInstagram}
                />
                <SocialMedia 
                    url={SocialLinks.linkedin}
                    label={'Linkedin do André Gama'}
                    iconName={faLinkedin}
                />
                <SocialMedia 
                    url={SocialLinks.github}
                    label={'Github do André Gama'}
                    iconName={faGithub}
                /> 
            </Style.Row>
           
        </Style.Column>
    );
}
