import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Colors } from '../../../styles/Colors.style';
import * as Style from './Index.style';
import ButtonGeneric from '../../Button/Drop/Generic/Index';
import Input from '../../Inputs/Text/Index';
import TextArea from '../../Inputs/TextArea/Index';


export default function Header(): JSX.Element {
    const [ name, setName ]   = useState('');
    const [ email, setEmail ] = useState('');
    const [ text, setText ]   = useState('');

    const sendEmail = (e : any) => {
        e.preventDefault();

        emailjs.send('service_hb3kgki','template_btmfgjd',{
            name,
            email,
            text,
        }, 'exze7w6EGzvD7WqXH')
        .then((result) => {
            console.log(result.text);
            clearInputs();
            Swal.fire({
                text: 'E-mail enviado com sucesso',
                icon: 'success',
                confirmButtonText: 'Fechar',
                confirmButtonColor: Colors.blue,
            });
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                text: 'E-mail enviado com sucesso',
                icon: 'warning',
                confirmButtonText: 'Fechar',
                confirmButtonColor: Colors.blue,
            });
        });
    };

    const clearInputs = () => {
        setName('')
        setEmail('')
        setText('')
    }

    return (
        <Style.Container>
            <Style.Form onSubmit={sendEmail}>
                <Input
                    type={'text'} 
                    className={''}
                    id={'name'}
                    placeholder={'Nome'}
                    required={true}
                    value={name}
                    setValue={setName}
                />
                <Input
                    type={'email'} 
                    className={''}
                    id={'email'}
                    placeholder={'E-mail'}
                    required={true}
                    value={email}
                    setValue={setEmail}
                />
                <TextArea  
                    className={''}
                    id={'subject'}
                    placeholder={'Assunto'}
                    required={true}
                    value={text}
                    setValue={setText}
                />
                <ButtonGeneric 
                    text={'Enviar'}
                    label={'Botão para enviar o formulário'}
                    type={'submit'}
                    fontColor={'white'}
                    borderColor={'#000'}
                    backgroundColor={Colors.blue}
                /> 
            </Style.Form>
        </Style.Container>
    );
}
