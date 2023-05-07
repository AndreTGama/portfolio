import * as Style from './Index.style';

export default function HorizonCircle(): JSX.Element {
   
    return (
        <Style.Divisor className="or-spacer">
            <div className="mask"></div>
            <span><i>or</i></span>
        </Style.Divisor>
    );
}
