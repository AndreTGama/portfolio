import React from 'react';
import { Ham, Top, Middle, Bottom } from './Hamburger.style';

// TODO assim que voltar internet validar a melhor maneira de usar esses tipos
export function Hamburger({
    active,
    setActive,
}: {
    active: boolean;
    setActive: (value: boolean) => void;
}): JSX.Element {
    return (
        <Ham
            className="ham hamRotate ham4"
            viewBox="0 0 100 100"
            onClick={() => setActive(!active)}
            active={active}
        >
            <Top
                active={active}
                d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <Middle active={active} d="m 70,50 h -40" />
            <Bottom
                active={active}
                d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
        </Ham>
    );
}
