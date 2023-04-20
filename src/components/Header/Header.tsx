import React from 'react';
import { Box, Title, BlockTitle, TitleH, TileSpan, Role, BlockRole, RoleP } from './Header.style';
import { Instagram } from '../Icons/SocialMedia/Instagram';
import { FloatingColors } from '../Background/FloatingColors/FloatingColors';
import { Linkedin } from '../Icons/SocialMedia/Linkedin';

export function Header(): JSX.Element {
    return (
        <FloatingColors>
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
                    <Linkedin />
                </Role>
            </Box>
        </FloatingColors>
    );
}
