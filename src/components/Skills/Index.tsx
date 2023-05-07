import * as Style from './Index.style'
import Bar from '../../components/Progress/Bar/Index'
import Stacks from '../../components/Icons/Stacks/Stacks'

export default function Skills(): JSX.Element {
    return (
        <Style.Section id='skills'>
            <Style.Row>
                <Style.Container>
                    <Style.TitleOffice>Minhas competências</Style.TitleOffice>
                    <Style.Description>
                        Sou desenvolvedor back-end PHP com mais de 4 anos experiencia na área,
                        tenho conhecimento nos framewors Slim, Laravel e Twig.
                    </Style.Description>
                </Style.Container>
                <Bar />
            </Style.Row>
            <Stacks />
        </Style.Section>
    )
}
