import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { SocialMedia } from '../../../assets/data/profile/SocialMedia'; 
import * as Style from './SocialMedia.style';

export function Linkedin() {
    return (
        <Style.Anchor
            href={SocialMedia.linkedin}
            target='_blank'
            rel='noreferrer'
        >
            <FontAwesomeIcon 
                icon={faLinkedin} 
                size='2xl' 
            />
        </Style.Anchor>
        
    );
}
