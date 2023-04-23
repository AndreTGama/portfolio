import React from 'react';
import * as Style from './Card.style';

type Props = {
    title?: string,
    list?: [],
    color?: string
}

export default function Index({title, list, color} : Props) {

  return (
    <Style.Container>
        <Style.Label>{title}</Style.Label>
        <Style.Progress>
            <Style.BarProgress color='#8943D9' percentage='5%'>5%</Style.BarProgress>
        </Style.Progress>
    </Style.Container>
  );
}