import React from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import * as Style from './MoreInfo.style';

type Props = {
    information: string
}

function sendAlert(information: string) {
    Swal.fire({
        text: information,
        icon: 'info',
    });
}


export default function Index({ information } : Props): JSX.Element {
    return (
        <Style.Button onClick={() => sendAlert( information )}>
            <FontAwesomeIcon icon={faCircleInfo} />   
        </Style.Button>
    );
}
