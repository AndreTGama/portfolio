import * as Global from '../../styles/global';
import Bar from './BarComponent/Bar';
import { Stacks } from '../../assets/data/Stacks/Stacks'

export default function About(): JSX.Element {

    return (
        <>
            <Global.RowResponsive mediaMaxWidth={900} flexDirection={'column-reverse'}>
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
            </Global.RowResponsive> 
            <Global.RowResponsive mediaMaxWidth={900} flexDirection={'column-reverse'}>
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
            </Global.RowResponsive> 
        </>
    );
}
