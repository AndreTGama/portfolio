import ButtonGeneric from '../../Button/Drop/Generic/Index';
import * as Style from './Index.style';
import Input from '../../Inputs/Text/Index';
import TextArea from '../../Inputs/TextArea/Index';
import { useState } from 'react';

export default function Header(): JSX.Element {
    const [ name, setName ]   = useState('');
    const [ email, setEmail ] = useState('');
    const [ text, setText ]   = useState('');
    
    return (
        <Style.Container>
            <Style.Form>
                <Input
                    type={'text'} 
                    className={'className'}
                    id={'id'}
                    placeholder={'placeholder'}
                    required={true}
                    value={name}
                    setValue={setName}
                />
                <Input
                    type={'email'} 
                    className={'className'}
                    id={'id'}
                    placeholder={'placeholder'}
                    required={true}
                    value={email}
                    setValue={setEmail}
                />
                <TextArea  
                    className={'className'}
                    id={'id'}
                    placeholder={'Text'}
                    required={true}
                    value={text}
                    setValue={setText}
                />
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
