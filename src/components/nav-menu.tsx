import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    chakra,
    Flex,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    Text,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router';

import { leftIcon } from '~/assets';
import { Paths } from '~/constants';
import { navMenuItems } from '~/mochs/data';

export const NavMenu = () => {
    const navigate = useNavigate();
    const goToVeganSeconds = (id: number) => {
        id === 7 && navigate(`${Paths.VEGAN_CUISINE}/${Paths.SECONDS}`);
    };

    return (
        <Flex
            direction='column'
            boxShadow=' 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)'
            justify='space-between'
            align='center'
            h='calc(100vh - 80px)'
            pos='fixed'
        >
            <Flex
                direction='column'
                w='full'
                h='calc(100vh - 144px)'
                marginTop={6}
                overflowY='auto'
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        borderRadius: 'lg',
                        background: 'blackAlpha.50',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: 'lg',
                        background: 'blackAlpha.300',
                    },
                }}
            >
                {navMenuItems.map((item, index) => (
                    <Menu gutter={0} autoSelect={false} key={index} matchWidth={true} flip={false}>
                        {({ isOpen }) => (
                            <>
                                <MenuButton
                                    data-test-id={item.id === 7 ? 'vegan-cuisine' : ''}
                                    _hover={{ bg: 'lime.50' }}
                                    _expanded={{ bg: 'lime.100' }}
                                    bg='transparent'
                                    //isActive={isOpen}
                                    as={Button}
                                    onClick={() => goToVeganSeconds(item.id)}
                                    rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                    minH='3rem'
                                >
                                    <Flex columnGap={3} align='center'>
                                        <Image src={item.icon} alt='Placeholder' boxSize={6} />
                                        <span>{item.title}</span>
                                    </Flex>
                                </MenuButton>
                                <Box padding='0' border='none' display={isOpen ? 'block' : 'none'}>
                                    {item.options.map((option, index) => (
                                        <MenuItem
                                            icon={
                                                <chakra.div
                                                    width={index === 2 ? '5px' : '1px'}
                                                    height={6}
                                                    bg='lime.300'
                                                />
                                            }
                                            iconSpacing='11px'
                                            paddingLeft={10}
                                            paddingBlock='0.5rem 0.25rem'
                                            fontWeight={index === 2 ? 'bold' : 'medium'}
                                            as={Link}
                                            to={`${Paths.VEGAN_CUISINE}/${Paths.SECONDS}`}
                                            _hover={{ bg: 'lime.50' }}
                                            key={index}
                                            onClick={() => console.log(option)}
                                        >
                                            <span>{option}</span>
                                        </MenuItem>
                                    ))}
                                </Box>
                            </>
                        )}
                    </Menu>
                ))}
            </Flex>

            <Flex
                as='footer'
                direction='column'
                padding='0 1.5rem 2rem 1.5rem'
                rowGap={4}
                w='full'
                align='start'
            >
                <Text fontSize='xs' lineHeight='short' color='blackAlpha.400'>
                    Версия программы 03.25
                </Text>
                <Text textAlign='start' lineHeight='short' fontSize='xs' color='blackAlpha.700'>
                    Все права защищены,
                    <br /> ученический файл,
                    <br /> ©Клевер Технолоджи, 2025
                </Text>
                <Button
                    _hover={{ bg: 'transparent' }}
                    p={0}
                    h='fit-content'
                    variant='ghost'
                    fontSize='xs'
                    color='black'
                    leftIcon={<Image src={leftIcon} />}
                >
                    <Text lineHeight='short'>Выйти</Text>
                </Button>
            </Flex>
        </Flex>
    );
};
