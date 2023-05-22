import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialMedia } from '../../Icons/SocialMedia/SocialMedia'
import { SocialLinks } from '../../../assets/data/Profile/Social'
import Horizon from '../../Divisor/Horizon/Index'
import * as Style from './Index.style'

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
                    <a 
                        href='https://www.google.com/maps/place/Guaratinguet%C3%A1,+State+of+S%C3%A3o+Paulo/@-22.7922256,-45.2736927,12z/data=!3m1!4b1!4m6!3m5!1s0x94ccc43d2f182b09:0x4ff95ebd5d4a29a7!8m2!3d-22.8036913!4d-45.1859219!16s%2Fg%2F11bc5zbbydo'
                        target='_blank'
                    >
                        <FontAwesomeIcon 
                            icon={faLocationDot} 
                            size='2xl' 
                        />
                        <Style.Span>Guaratinguetá - SP</Style.Span>
                    </a>
                </Style.Icons>
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
