import * as Style from './Index.style'

type Props = {
    text: string,
    label: string,
    url?: string
    fontColor: string,
    borderColor: string,
    backgroundColor: string,
    download?: boolean,
}
export default function ButtonAnchor({ 
  text, 
  label, 
  url, 
  fontColor, 
  borderColor, 
  backgroundColor, 
  download 
} : Props) {
  return (
    <Style.Button
      target='_blank'
      rel='noreferrer'
      href={url}
      aria-label={label}
      fontColor={fontColor}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      download={download}
    >
      {text}
    </Style.Button>
  );
}