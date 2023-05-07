import * as Style from './Index.style'
import Bar from './Component/Bar';
import { Stacks } from '../../../assets/data/Stacks/Stacks'

export default function Index(): JSX.Element {

    return (
        <Style.Container>
            <Style.Row>
                { Stacks.map((item, i) =>
                    {
                        if(i <= 1) 
                            return <Bar
                                key={i}
                                title={item.title}
                                color={item.color}
                                percentage={item.percentage}
                                information={item.information}
                            />
                        return null
                    })
                }
            </Style.Row> 
            <Style.Row>
                { Stacks.map((item, i) => {
                    if(i >= 2 && i <= 3)
                        return <Bar
                            key={i}
                            title={item.title}
                            color={item.color}
                            percentage={item.percentage}
                            information={item.information}
                        />
                    return null
                })}
            </Style.Row> 
        </Style.Container>
    );
}
