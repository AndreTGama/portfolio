import React from 'react';
import * as Style from './SocialMedia.style';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    iconName: IconProp
    label: string
    url: string
}

export function SocialMedia({ url, label, iconName } : Props): JSX.Element {
    return (
        <Style.Anchor
            href={url}
            target='_blank'
            rel='noreferrer'
            aria-label={label}
        >
            <FontAwesomeIcon 
                icon={iconName} 
                size='2xl' 
            />
        </Style.Anchor>
    );
}
