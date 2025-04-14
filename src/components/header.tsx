import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Hide, IconButton, Image } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import { logo, logoText } from '~/assets';
import { Breadcrumbs, ProfileNotification, UserProfile } from '~/components';
import { user } from '~/mochs/data';

const headerStyle = {
    maxW: '120rem',
    w: 'full',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lime.50',
    pos: 'fixed',
    zIndex: 'docked',
};

export const Header = () => (
    <Box
        as='header'
        data-test-id='header'
        p={{ base: '0.5rem 1.25rem', lg: '1rem 3.5rem 1rem 1rem' }}
        sx={headerStyle}
    >
        <Flex columnGap='8rem'>
            <Flex align='center' columnGap='7px'>
                <Image src={logo} alt='logo' boxSize={8} />
                <Hide below='sm'>
                    <Image src={logoText} alt='logo' height={25} width={24} />
                </Hide>
            </Flex>
            <Hide below='lg'>
                <Breadcrumbs />
            </Hide>
        </Flex>
        <Hide below='lg'>
            <UserProfile avatar={user.avatar} name={user.name} nickname={user.nickname} />
        </Hide>
        <Hide above='lg'>
            <Flex align='center'>
                <ProfileNotification direction='row' gap={0} textSize='xs' />
                <IconButton
                    size='lg'
                    bg='transparent'
                    aria-label='burger'
                    icon={<HamburgerIcon />}
                />
            </Flex>
        </Hide>
    </Box>
);
