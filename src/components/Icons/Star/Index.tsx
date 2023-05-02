import * as Style from './Index.style'

export default function Index(): JSX.Element {

    return (
        // <Style.Star>
        //     <Style.Rating width={50}>
        //         <Style.Span>&#x2605;</Style.Span>
        //     </Style.Rating>
        // </Style.Star>
        <div className="star">
            <div className="rating">
                <span>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span>
            </div>
        </div>
    );
}
