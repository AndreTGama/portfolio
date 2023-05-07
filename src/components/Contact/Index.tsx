import * as Global from '../../styles/global';
import Form from '../Forms/Contact/Index';
import MoreInformation from './MoreInformation/Index';
import Vertical from '../Divisor/Vertical/Index';
import Horizon from '../Divisor/Horizon/Index';

export default function Header(): JSX.Element {
   
    return (
        <>
                    <Horizon />

                <Global.RowResponsive mediaMaxWidth={740} flexDirection={'column'}>
            <Form />
            <Vertical />
            <MoreInformation />
        </Global.RowResponsive>
        </>

    );
}
