import React from 'react';
import { BackGround } from './FloatingColors.style';

type Props = {
    children: JSX.Element | JSX.Element[]
}

export function FloatingColors({ children } : Props): JSX.Element {
    return (
        <BackGround>
            <span className='bubble' />
            <span className='bubble' />
            <span className='bubble' />
            <span className='bubble' />
            <span className='bubble' />
            <span className='bubble' />
            <span className='bubble' />
            <span className='bubble' />
            <span className='bubble' />
            <span className='bubble' />
            {children}
        </BackGround>
    );
}
