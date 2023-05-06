import * as Style from './Index.style';

type Props = {
    className: string,
    id: string,
    placeholder: string,
    required: boolean,
    type: 'text' | 'email',
    value: string,
    setValue: any,
}

export default function Index(
    { 
        type,
        className,
        id,
        placeholder,
        required,
        value,
        setValue,
    } : Props ): JSX.Element {

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }

    return (
        <Style.Input 
            type={type}
            className={className}
            id={id}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={handleChange}
        />
    );
}
