import Star from '../../Icons/Star/Index'
import * as Style from './Fancy.style'

type Props = {
    name: string,
    link: string,
    stars: number,
    language: string[],
    image: string,
    description: string
}

export default function Index({ name, link, stars, language, image, description} : Props) {

    return (
        <Style.Container>
            <Style.Box>
                <div className="flip-box">
                    <div className="flip-box-front">
                        <Style.Inner>
                            <Style.Header>
                                <Style.Header>{name}</Style.Header>
                                <Star value={stars}/>
                            </Style.Header>
                            <Style.Img src={image} />
                            <Style.Paragraph>
                                {description}
                            </Style.Paragraph>
                            <Style.Footer>
                                <Style.Languages>
                                    {language.map((item, i) => {
                                        return <span>{`#${item}`}</span>
                                    })}
                                </Style.Languages>
                                <button> Ver mais</button>
                            </Style.Footer>
                        </Style.Inner>
                    </div>
                    <div className="flip-box-back">
                        <Style.Inner>
                            <Style.Header>
                                <Style.Header>{name}</Style.Header>
                                <Star value={stars}/>
                            </Style.Header>
                            <Style.Img src={image} />
                            <Style.Footer>
                                {language.map((item, i) => {
                                    return item;
                                })}
                                <button> Ver mais</button>
                            </Style.Footer>
                        </Style.Inner>
                    </div>
                </div>
            </Style.Box>
        </Style.Container>
    )
}