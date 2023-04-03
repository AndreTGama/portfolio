import React, {useState, useEffect} from 'react';
import Man from '../../../assets/parallax/city/man.png'
import BuildingsRight from '../../../assets/parallax/city/building-right.png'
import BuildingsLeft from '../../../assets/parallax/city/building-left.png'
import BuildingsBack from '../../../assets/parallax/city/building-back.png'
import Stars from '../../../assets/parallax/city/stars.png'
import Moon from '../../../assets/parallax/city/moon.png'

import {
  Section,
  MoonImage,
  ManImage,
  StarsImage,
  BuildingsImagesRight,
  BuildingsImagesLeft 
} from './style';
 
export default function Index() {
  const [scrollTop, setScrollTop] = useState(0);
  const [hiddenMoon, setHiddenMoon] = useState(false);

  console.log(scrollTop);
  useEffect(() => {
    const handleScroll = ({ event } : any) => {
      setScrollTop(window.scrollY);
    };

    if(window.scrollY >= 45) {
      console.log(window.scrollY);
      setHiddenMoon(true);
    }else {
      setHiddenMoon(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <Section className='parallax'>
      <StarsImage left={scrollTop - 200} src={Stars} alt="Noite com estrelas" />
      <MoonImage hiddenMoon={hiddenMoon} top={scrollTop -100} src={Moon} alt="Lua" />
      <BuildingsImagesRight left={scrollTop} src={BuildingsBack} alt="Prédios do fundo" />
      <BuildingsImagesRight left={scrollTop} src={BuildingsLeft} alt="Prédios na parte da esquerda" />
      <BuildingsImagesLeft left={scrollTop} src={BuildingsRight} alt="Prédios na parte da frente" />
      <ManImage src={Man} alt="Homem no terraço de um prédio" />
    </Section>
  );
}