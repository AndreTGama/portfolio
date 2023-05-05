import Fancy from '../Cards/Fancy/Index';
import * as Global from '../../styles/global';
import * as Style from './Index.style';
import { Projects } from '../../assets/data/Projects/Projects'

export default function Index(): JSX.Element {
   
    return (
        <Style.Container id='projects'>
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
        </Style.Container>
    );
}
