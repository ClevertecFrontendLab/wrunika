import { AccordionButton, AccordionIcon, AccordionItem, HStack } from '@chakra-ui/icons';
import {
    Accordion,
    AccordionPanel,
    Box,
    Button,
    chakra,
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

import { leftIcon } from '~/assets';
import { Paths } from '~/constants';
import { navMenuItems } from '~/mochs/data';

const linksForNavMenu: Record<string, number> = {
    salads: 0,
    appetisers: 1,
    firsts: 2,
    seconds: 3,
    deserts: 4,
    grilled: 5,
    vegan_cuisine: 6,
    kids_dishes: 7,
    healthy_food: 8,
    national_food: 9,
    sauces: 10,
    drinks: 11,
    preparations: 12,
};

export const NavMenu = () => {
    const location = useLocation();
    const pathNames = location.pathname.split('/').filter((path) => path);
    const defaultIndex: number | undefined = linksForNavMenu[pathNames[0]];
    const [groupIndex, setGroupIndex] = useState<number | number[]>(
        defaultIndex === undefined ? -1 : defaultIndex,
    );
    const navigate = useNavigate();
    const goToVeganSeconds = (id: number) => {
        id === 7 && navigate(`${Paths.VEGAN_CUISINE}/${Paths.SECONDS}`);
    };
    const handleChange = (index: number | number[]) => {
        setGroupIndex(index);
    };
    useEffect(() => {
        setGroupIndex(defaultIndex === undefined ? -1 : defaultIndex);
    }, [defaultIndex]);

    return (
        <Flex
            direction='column'
            boxShadow=' 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)'
            justify='space-between'
            align='center'
            h='calc(100vh - 80px)'
            pos='fixed'
            w={64}
        >
            <Accordion
                index={Array.isArray(groupIndex) ? groupIndex : [groupIndex]}
                onChange={handleChange}
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
                {navMenuItems.map((item) => (
                    <AccordionItem key={item.id} border='none'>
                        <AccordionButton
                            data-test-id={item.id === 7 ? 'vegan-cuisine' : ''}
                            _hover={{ bg: 'lime.50' }}
                            _expanded={{ bg: 'lime.100' }}
                            fontWeight='medium'
                            h={12}
                            onClick={() => goToVeganSeconds(item.id)}
                        >
                            <Box as='span' flex='1' textAlign='left'>
                                <Flex columnGap={3} align='center'>
                                    <Image src={item.icon} alt='Placeholder' boxSize={6} />
                                    <span>{item.title}</span>
                                </Flex>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel p={0}>
                            {item.options.map((option, i) => (
                                <HStack
                                    gap='11px'
                                    paddingLeft={10}
                                    paddingBlock='0.5rem 0.25rem'
                                    fontWeight={i === 2 ? 'bold' : 'medium'}
                                    as={Link}
                                    to={`${Paths.VEGAN_CUISINE}/${Paths.SECONDS}`}
                                    _hover={{ bg: 'lime.50' }}
                                    key={i + 'o'}
                                    onClick={() => console.log(option)}
                                >
                                    <chakra.div
                                        width={i === 2 ? '5px' : '1px'}
                                        height={6}
                                        bg='lime.300'
                                    />
                                    <span>{option}</span>
                                </HStack>
                            ))}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>

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
