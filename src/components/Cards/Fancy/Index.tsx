import Star from '../../Icons/Star/Index'
import * as Style from './Fancy.style'

export default function Index() {
  return (
    <>
        <Star />
        <Style.Container>
            <Style.Box>
                <div className="flip-box">
                    <div className="flip-box-front">
                        <Style.Inner>
                            <Style.Header>Custom Domains</Style.Header>
                            <Style.Paragraph>A short sentence describing this callout is.</Style.Paragraph>
                        </Style.Inner>
                    </div>
                    <div className="flip-box-back">
                        <Style.Inner>
                            <Style.Header>Custom Domains</Style.Header>
                            <Style.Paragraph>A short sentence describing this callout is.</Style.Paragraph>
                        </Style.Inner>
                    </div>
                </div>
            </Style.Box>
        </Style.Container>
    </>
  )
}