import * as Global from '../../styles/global';
import * as Style from './Index.style';
import Form from '../Forms/Contact/Index';
import MoreInformation from './MoreInformation/Index';
import Vertical from '../Divisor/Vertical/Index';

export default function Contact(): JSX.Element {
    return (
        <Global.RowResponsive mediaMaxWidth={740} flexDirection={'column'}>
            <Form />
            <Style.Line>
                <Vertical />
            </Style.Line>
            <MoreInformation />
        </Global.RowResponsive>
    );
}
