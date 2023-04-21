import React from 'react';
import * as Style from './SocialMedia.style';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    iconName: IconProp
    url: string
}

export function SocialMedia({ url, iconName } : Props): JSX.Element {
    return (
        <Style.Anchor
            href={url}
            target='_blank'
            rel='noreferrer'
        >
            <FontAwesomeIcon 
                icon={iconName} 
                size='2xl' 
            />
        </Style.Anchor>
    );
}
