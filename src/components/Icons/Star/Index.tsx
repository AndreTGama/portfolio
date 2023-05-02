import * as Style from './Index.style'

type Props = {
    value: number
}
export default function Index({ value } : Props): JSX.Element {

    return (
        <Style.Div>
            <span title={`${value}`}>&#x2605;</span>
        </Style.Div>
    );
}
