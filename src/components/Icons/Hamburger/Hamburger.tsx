import React, { useState } from 'react';
import { Ham, Top, Line, Bottom } from './Hamburger.style';

export function Hamburger(): JSX.Element {
    const [activeValue, setActiveValue] = useState(false);

    return (
        <Ham
            className="ham hamRotate ham4"
            viewBox="0 0 100 100"
            onClick={() => setActiveValue(!activeValue)}
            active={activeValue}
        >
            <Top
                active={activeValue}
                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <Line
                d="m 70,50 h -40"
            />
            <Bottom
                active={activeValue}
                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
        </Ham>
    );
}
