import React from 'react';
import Man from '../../../assets/parallax/city/man.png'
import BuildingsFront from '../../../assets/parallax/city/building-front.png'
import BuildingsBack from '../../../assets/parallax/city/building-back.png'
import Stars from '../../../assets/parallax/city/stars.png'
import Moon from '../../../assets/parallax/city/moon.png'

import { Section, Img, MoonImage } from './style';
 
export default function Index() {
  return (
    <Section className='parallax'>
      <Img src={Stars} alt="Noite com estrelas" />
      <MoonImage src={Moon} alt="Lua" />
      <Img src={BuildingsBack} alt="Prédios do fundo" />
      <Img src={BuildingsFront} alt="Prédios na parte da frente" />
      <Img src={Man} alt="Homem no terraço de um prédio" />
    </Section>
  );
}