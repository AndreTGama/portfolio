import * as Style from './Index.style'

type Props = {
    text: string,
    label: string,
    url?: string
    fontColor: string,
    borderColor: string,
    backgroundColor: string
}
export function Index({ text, label, url, fontColor, borderColor, backgroundColor } : Props) {
  return (
    <Style.Button
        target='_blank'
        rel='noreferrer'
        href={url}
        aria-label={label}
        fontColor={fontColor}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
    >
        {text}
    </Style.Button>
  );
}