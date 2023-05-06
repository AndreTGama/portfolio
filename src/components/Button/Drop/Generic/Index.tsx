import * as Style from './Index.style'

type Props = {
  text: string,
  label: string,
  type: "button" | "submit" | "reset",
  fontColor: string,
  borderColor: string,
  backgroundColor: string
}

export default function ButtonGeneric({ text, label, type, fontColor, borderColor, backgroundColor } : Props) {
  return (
    <Style.Button
        type={type}
        aria-label={label}
        fontColor={fontColor}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
    >
        {text}
    </Style.Button>
  );
}