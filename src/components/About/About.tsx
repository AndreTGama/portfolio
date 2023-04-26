import React from 'react';
import * as Style from './About.style';
import * as Global from '../../styles/global';
import Profile from '../../assets/img/profile/profile-main.png';
import Bar from '../../components/Progress/Bar';
import Stacks from '../../components/Icons/Stacks/Stacks';

export default function About(): JSX.Element {
    return (
        <Global.ContainerCenter id='about'>
            <Style.ProfileImg src={Profile} alt='Imagem de perfil de André Toledo Gama' />
            <Style.Container>
                <Style.TitleName>Andre Toledo Gama</Style.TitleName>
                <Style.TitleOffice>Back-end Developer</Style.TitleOffice>
                <Style.Description>
                    Sou desenvolvedor back-end PHP com mais de 4 anos experiencia na área,
                    tenho conhecimento nos framewors Slim, Laravel e Twig.
                </Style.Description>
                <Style.Description>
                    Na área já desenvolvi micro-services com a finalidade de consultar as vendas que 
                    foram feitas na plataforma Eduzz e salvar na base de dados para serem exportados 
                    para o Power Bi, também atuei nos desenvolvimentos de sistemas de gerenciamentos, 
                    um deles foi o gerenciamento de toda a das escolas públicas de Cruzerio - SP
                </Style.Description>
                <Bar />
                <Stacks />
            </Style.Container>
        </Global.ContainerCenter>
    );
}
