import React from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import * as Style from './MoreInfo.style';

type Props = {
    information: string
    label: string
}

function sendAlert(information: string) {
    Swal.fire({
        text: information,
        icon: 'info',
    });
}


export default function Index({ information, label } : Props): JSX.Element {
    return (
        <Style.Button onClick={() => sendAlert( information )} aria-label={label}>
            <FontAwesomeIcon icon={faCircleInfo} />   
        </Style.Button>
    );
}
