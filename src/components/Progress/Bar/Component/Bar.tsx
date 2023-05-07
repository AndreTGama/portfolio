import React from 'react';
import * as Style from './Bar.style';
import * as Global from '../../../../styles/global';

import MoreInfo from '../../../Icons/MoreInfo/MoreInfo';

type Props = {
    title: string,
    information: string,
    color: string,
    percentage: string
}

export default function Index({title, information, color, percentage} : Props) {

  return (
    <Style.Container>
        <Global.Row>
          <Style.Label>{title}</Style.Label>
          <MoreInfo information={information} label={`Mais informação sobre ${title}`}/>
        </Global.Row>
        <Style.Progress>
            <Style.BarProgress color={color} percentage={percentage}>{percentage}</Style.BarProgress>
        </Style.Progress>
    </Style.Container>
  );
}