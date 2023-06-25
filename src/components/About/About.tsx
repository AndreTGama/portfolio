import * as Style from './About.style'
import * as Global from '../../styles/global'
import * as Font from '../../styles/Fonts.style'
import Profile from '../../assets/img/profile/profile-main.webp'
import getAge from '../../Helpers/GetAge'
import ButtonAnchor from '../Button/Drop/Anchor/Index'
import { Colors } from '../../styles/Colors.style'
import CV from '../../assets/pdf/cv-andre-gama.pdf'

export default function About(): JSX.Element {
   
    return (
    <Global.ContainerCenter id='about'>
        <Style.ProfileImg src={Profile} alt='Imagem de perfil de André Toledo Gama' />
        <Style.Container>
            <Font.Title>Sobre Mim</Font.Title>
            <Font.Description>
                Me chamo André Toledo Gama, tenho {getAge('1994-10-08')} anos, sou formato em Engenharia da Computação e tenho uma grande paixão pela linguagem PHP, mesmo tendo uma grande paixão epla linguagem, sempre procuro aprender sobre novas tecnologias que estão no mercado. Atualmente atuo como desenvolvedor Back-End.
            </Font.Description>
            <ButtonAnchor 
                text={'Download CV'} 
                label={'Botão para fazer o download do meu curriculo'} 
                url={CV} 
                fontColor={'white'}
                borderColor={'#000'}
                backgroundColor={Colors.blue}
                download={true}
            />
        </Style.Container>
    </Global.ContainerCenter>

    );
}
