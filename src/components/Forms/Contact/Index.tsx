import ButtonGeneric from '../../Button/Drop/Generic/Index';
import * as Style from './Index.style';

export default function Header(): JSX.Element {
   
    return (
        <Style.Container>
            <Style.Form>
                <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required />
                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
                <textarea className="form-control" placeholder="MESSAGE" name="message" required></textarea>
                <ButtonGeneric 
                    text={'Enviar'}
                    label={'Botão para enviar o formulário'}
                    type={'submit'}
                    fontColor={'white'}
                    borderColor={'black'}
                    backgroundColor={'rgb(137, 67, 217)'}
                /> 
            </Style.Form>
        </Style.Container>
    );
}
