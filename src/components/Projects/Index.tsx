import Fancy from '../Cards/Fancy/Index'
import * as Global from '../../styles/global'
import * as Style from './Index.style'
import * as Font from '../../styles/Fonts.style'
import { Projects } from '../../assets/data/Projects/Projects'
import { Colors } from '../../styles/Colors.style'
import ButtonAnchor from '../Button/Drop/Anchor/Index'

export default function Index(): JSX.Element {
   
    return (
        <Style.Section id='projects'>
            <Style.Container>
                <Font.Title>Projetos</Font.Title>
            </Style.Container>
            <Global.RowResponsive mediaMaxWidth={1015} flexDirection={'column'}>
                {Projects.map((item, i) => {
                    return <Fancy 
                        name={item.name}
                        link={item.link}
                        stars={item.star}
                        image={item.image}
                        description={item.description}
                        key={i}
                        language={item.languages}
                    />
                })}
            </Global.RowResponsive>
            <ButtonAnchor
                text={'Ver Mais'} 
                label={'Botão para redirecionar para o GitHub'} 
                url={'https://github.com/AndreTGama?tab=repositories'} 
                fontColor={'white'}
                borderColor={'#000'}
                backgroundColor={Colors.blue}
            />
        </Style.Section>
    );
}
