import React from 'react';
import * as Style from './Stacks.style'

export default function Index(): JSX.Element {

    return (
        <Style.Row>
            <Style.Achor title='70%' href='https://developer.mozilla.org/pt-BR/docs/Web/HTML'>
                <img alt='html-icon' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg' />
            </Style.Achor>
            <Style.Achor title='70%' href='https://developer.mozilla.org/pt-BR/docs/Web/CSS'>
                <img alt='css-icon' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg' />
            </Style.Achor>    
            <Style.Achor title='70%' href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript'>
                <img alt='js-icon' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' />
            </Style.Achor>
            <Style.Achor title='40%' href='https://nodejs.dev/learn'>
                <img alt='node-icon' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' />
            </Style.Achor>  
            <Style.Achor title='75%' href='https://reactjs.org/'>
                <img alt='react-icon' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
            </Style.Achor>
            <Style.Achor title='85%' href='https://www.php.net/docs.php'>
                <img alt='php-icon' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' />
            </Style.Achor>
            <Style.Achor title='85%' href='https://laravel.com/'>
                <img alt='laravel-icon' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' />
            </Style.Achor> 
            <Style.Achor title='50%' href='https://flutter.dev/'>
                <img alt='flutter icon' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' />
            </Style.Achor>    
        </Style.Row>
        
    );
}
