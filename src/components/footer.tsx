import { EditIcon, HStack, SearchIcon, Text } from '@chakra-ui/icons';
import { Avatar, Box, Flex, IconButton, Image } from '@chakra-ui/react';

import { avatar, homeIcon } from '~/assets';

const footerItems = [
    {
        id: 1,
        isActive: true,
        icon: <Image src={homeIcon} />,
        subTitle: 'Главная',
        background: 'radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)',
    },
    {
        id: 1,
        isActive: false,
        icon: <SearchIcon boxSize={6} />,
        subTitle: 'Поиск',
        background: 'inherit',
    },
    {
        id: 1,
        isActive: false,
        icon: <EditIcon boxSize={6} />,
        subTitle: 'Записать',
        background: 'inherit',
    },
    {
        id: 1,
        isActive: false,
        icon: <Avatar src={avatar} boxSize={10} />,
        subTitle: 'Мой профиль',
        background: 'inherit',
    },
];

export const Footer = () => (
    <Box w='full' bg='lime.50' as='footer' px={[1, 8]} data-test-id='footer' pos='fixed' bottom={0}>
        <HStack justify='space-between'>
            {footerItems.map((item) => (
                <Flex
                    w={84}
                    h={84}
                    key={item.id}
                    direction='column'
                    align='center'
                    justify='center'
                    background={item.background}
                >
                    <IconButton
                        icon={item.icon}
                        aria-label=''
                        size='lg'
                        variant='ghost'
                        _hover={{ bg: 'transparent' }}
                    />
                    <Text
                        color={item.isActive ? 'black' : 'blackAlpha.700'}
                        fontSize='xs'
                        lineHeight='short'
                    >
                        {item.subTitle}
                    </Text>
                </Flex>
            ))}
        </HStack>
    </Box>
);
