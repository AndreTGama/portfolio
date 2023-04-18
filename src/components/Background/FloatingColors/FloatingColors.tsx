import React from 'react';
import { BackGround } from './FloatingColors.style';

type Props = {
    children: JSX.Element | JSX.Element[]
}

export function FloatingColors({ children } : Props): JSX.Element {
    return (
        <BackGround>
            <div className="context">
                <div className='children'>
                    {children}
                </div>
            </div>
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </BackGround>
        
    );
}
