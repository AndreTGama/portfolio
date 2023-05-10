import * as Style from './About.style'
import * as Global from '../../styles/global'
import Profile from '../../assets/img/profile/profile-main.png'
import getAge from '../../Helpers/GetAge'
import ButtonAnchor from '../Button/Drop/Anchor/Index'
import { Colors } from '../../styles/Colors.style'

export default function About(): JSX.Element {
   
    return (
    <Global.ContainerCenter id='about'>
        <Style.ProfileImg src={Profile} alt='Imagem de perfil de André Toledo Gama' />
        <Style.Container>
            <Style.TitleName>Sobre Mim</Style.TitleName>
            <Style.Description>
                Me chamo André Toledo Gama, tenho {getAge('1994-10-08')} anos, formação academicia em Engenharia da computação e tenho uma grande paixão pela linguagem PHP e atuo como desenvolvedor Back-End, mesmo tendo uma grande paixão epla linguagem, sempre procuro aprender sobre novas tecnologias que estão no mercado.
            </Style.Description>
            <ButtonAnchor 
                text={'Download CV'} 
                label={'Botão para fazer o download do meu curriculo'} 
                url={'teste'} 
                fontColor={'white'}
                borderColor={'#000'}
                backgroundColor={Colors.blue}
            />
        </Style.Container>
    </Global.ContainerCenter>

    );
}
