import Fancy from '../Cards/Fancy/Index';
import * as Global from '../../styles/global';
import { Projects } from '../../assets/data/Projects/Projects'

export default function Index(): JSX.Element {
   
    return (
        <Global.Container id='projects'>
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
        </Global.Container>
    );
}
