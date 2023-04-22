import React from 'react';
import * as Style from './About.style';
import * as Global from '../../styles/global'
export function About(): JSX.Element {
    return (
        <>
            <Global.Row>
            <div></div>
                <div>
                    <h1>Andre Toledo Gama</h1>
                    <h2>Back-end Developer</h2>
                    <h3>
                        Sou desenvolvedor back-end PHP com mais de 4 anos experiencia na área,
                        tenho conhecimento nos framewors Slim, Laravel e Twig.<br/>
                        Na área já desenvolvi micro-services com a finalidade de consultar as vendas que 
                        foram feitas na plataforma Eduzz e salvar na base de dados para serem exportados 
                        para o Power Bi, também atuei nos desenvolvimentos de sistemas de gerenciamentos, 
                        um deles foi o gerenciamento de toda a das escolas públicas de Cruzerio - SP
                    </h3>
                </div>
            </Global.Row>
        </>
    );
}
