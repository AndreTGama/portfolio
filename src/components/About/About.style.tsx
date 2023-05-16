import styled from 'styled-components';

export const ProfileImg = styled.img`
    width: 300px;
    height: 100%;
    margin-bottom: 15px;
`

export const Container = styled.div`
    width: 40%;
    @media (max-width: 900px) {
        width: 100%;
    }
`

export const TitleOffice = styled.h2`
    font-weight: 400;
    font-family: "Lato";
    color: rgb(81, 81, 81);
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 15px;
`