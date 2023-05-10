import * as Style from './Index.style'
import Bar from '../../components/Progress/Bar/Index'
import Stacks from '../../components/Icons/Stacks/Stacks'
import getAge from '../../Helpers/GetAge'

export default function Skills(): JSX.Element {
    return (
        <Style.Section id='skills'>
            <Style.Row>
                <Style.Container>
                    <Style.TitleOffice>Minhas competências</Style.TitleOffice>
                    <Style.Description>
                        Sou desenvolvedor back-end PHP com mais de {getAge('2019-01-11')} anos de experiencia na área,
                        tenho conhecimento nos frameworks Slim, Laravel e Twig. Também participei de projetos em React.js, React Native, Node.js e Next.js. Atualmente venho estudando o framework Flutter 
                    </Style.Description>
                    <Style.Description>
                        Na área já desenvolvi micro-services com a finalidade de consultar as vendas que 
                        foram feitas na plataforma Eduzz e salvar na base de dados para serem exportados 
                        para o Power Bi, também atuei nos desenvolvimentos de sistemas de gerenciamentos, 
                        um deles foi o gerenciamento de toda a das escolas públicas de Cruzerio - SP
                    </Style.Description>
                </Style.Container>
                <Bar />
            </Style.Row>
            <Stacks />
        </Style.Section>
    )
}
