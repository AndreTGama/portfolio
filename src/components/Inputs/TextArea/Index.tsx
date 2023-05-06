import { ChangeEvent } from 'react';
import * as Style from './Index.style';

type Props = {
    className?: string,
    id?: string,
    placeholder: string,
    required: boolean,
    value: string,
    setValue: any,
}

export default function Index(   
    { 
        className,
        id,
        placeholder,
        required,
        value,
        setValue
    } : Props ): JSX.Element {
   
    function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setValue(event.target.value);
    }

    return (
        <Style.Textarea 
            className={className}
            id={id}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={(event) => handleChange(event)}
        />
    );
}
