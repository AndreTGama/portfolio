import * as Style from './Index.style';
import * as Font from '../../styles/Fonts.style';
import Form from '../Forms/Contact/Index';
import MoreInformation from './MoreInformation/Index';
import Vertical from '../Divisor/Vertical/Index';

export default function Contact(): JSX.Element {
    return (
        <Style.Section id='contact'>
            <Font.Title>Contato</Font.Title>
            <Style.Row>
                <Form />
                <Style.Line>
                    <Vertical />
                </Style.Line>
                <MoreInformation />
            </Style.Row>
        </Style.Section>
    );
}
