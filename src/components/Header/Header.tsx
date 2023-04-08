import React from 'react';
import { Row, Container } from '../../styles/global';
import { Colors } from '../../styles/Colors.styles';

export function Header(): JSX.Element {
    return (
        <Container
            id="home"
            linearEffect={false}
            firstColor={Colors.darkBlue}
            secondColor={Colors.lightBlue}
        >
            <Row>
                <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <img src="https://avatars.githubusercontent.com/u/43018148?s=400&u=3472e1a848fed9effdb3e721ae2d918031d5faf4&v=4"></img>
            </Row>
        </Container>
    );
}
