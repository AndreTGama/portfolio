import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

export function Instagram() {
    return (
        <FontAwesomeIcon 
            icon={faInstagram} 
            style={{
                color: "#381f50"
            }}
            size='2xl' 
        />
    );
}
