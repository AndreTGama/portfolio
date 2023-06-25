import Star from '../../Icons/Star/Index'
import ButtonAnchor from '../../Button/Drop/Anchor/Index'
import * as Style from './Fancy.style'
import { Colors } from '../../../styles/Colors.style'

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
                        <Style.InnerFront>
                            <Style.Header>
                                <Style.Header>{name}</Style.Header>
                                <Star value={stars}/>
                            </Style.Header>
                            <center>
                                <Style.Img src={image} alt={name}/>
                            </center>
                            <Style.Paragraph>
                                {description}
                            </Style.Paragraph>
                        </Style.InnerFront>
                    </div>
                    <div className="flip-box-back">
                        <Style.InnerBack>
                            <Style.Header>
                                <Style.Header>{name}</Style.Header>
                                <Star value={stars}/>
                            </Style.Header>
                            <center>
                                <Style.Img src={image} alt={name}/>
                            </center>
                            <Style.Footer>
                                <Style.Languages>
                                    {language.map((item) => {
                                        return <span>{`#${item}`}</span>
                                    })}
                                </Style.Languages>
                                <ButtonAnchor 
                                    text='Saiba Mais'
                                    label='Botão para redirecionar ao GitHub do projeto'
                                    url={link}
                                    fontColor={'white'}
                                    borderColor={'white'}
                                    backgroundColor={Colors.blue}
                                />
                            </Style.Footer>
                        </Style.InnerBack>
                    </div>
                </div>
            </Style.Box>
        </Style.Container>
    )
}