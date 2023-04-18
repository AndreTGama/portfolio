import React from 'react';
import { Row, Container } from '../../styles/global';
import { Box, Title, BlockTitle, TitleH, TileSpan, Role, BlockRole, RoleP, Footer } from './Header.style';
import { Colors } from '../../styles/Colors.styles';
import { Instagram } from '../Icons/SocialMedia/Instagram';
import { FloatingColors } from '../Background/FloatingColors/FloatingColors';

export function Header(): JSX.Element {
    return (
        <FloatingColors>
            <Container
                id="home"
                linearEffect={false}
                firstColor={Colors.darkBlue}
                secondColor={Colors.lightBlue}
            >
                <Row>
                    <Box>
                        <Title>
                            <BlockTitle />
                            <TitleH>
                                André Toledo Gama
                                <TileSpan/>
                            </TitleH>
                        </Title>
                        <Role>
                            <BlockRole />
                            <RoleP>Back-end Developer</RoleP>
                        </Role>
                        <Role>
                            <Instagram />
                        </Role>
                    </Box>
                    <img src="https://avatars.githubusercontent.com/u/43018148?s=400&u=3472e1a848fed9effdb3e721ae2d918031d5faf4&v=4" alt="Foto"/>
                </Row>
            </Container>
        </FloatingColors>
    );
}
