import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Card, Flex, Hide, IconButton, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { DishCardWithoutImage } from '~/components';
import { newRecipesItems } from '~/mochs/data';

export const Carousel = () => {
    //const containerWidth = { base: 'calc(100vw - 60px)', lg: 'calc(100vw - 560px)' };
    //const containerWidth = { base: 'calc(100vw - 32px)', sm: 'calc(100vw - 40px)', lg: 'calc(100vw - 560px)' };
    const containerWidth = {
        base: 'calc(100vw - 42px)',
        sm: 'calc(100vw - 50px)',
        lg: 'calc(100vw - 560px)',
    };
    //const cardWidth = { base: '158px', lg: '279px', '2xl': '322px' };
    const cardWidth = { base: '153px', lg: '279px', '2xl': '322px' };
    const boxGap = { base: '0.75rem', '2xl': '1.5rem' };

    const [currentIndex, setCurrentIndex] = useState(0);

    const onNextButtonClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newRecipesItems.length);
    };

    const onPrevButtonClick = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + newRecipesItems.length) % newRecipesItems.length,
        );
    };
    const MotionBox = motion.create(Flex);

    return (
        <Flex direction='column' align='center' pos='relative'>
            <Flex
                width={containerWidth}
                maxW={1360}
                overflow='hidden'
                mr={{ base: -2.5, lg: 0 }}
                ml={{ base: -2, lg: 0 }}
            >
                <MotionBox
                    transform={`translateX(-${currentIndex * 322}px)`}
                    gap={boxGap}
                    transition={{ duration: '0.9' }}
                >
                    {newRecipesItems.map((item) => (
                        <Card
                            key={item.id}
                            width={cardWidth}
                            borderRadius='md'
                            overflow='hidden'
                            border='1px solid rgba(0, 0, 0, 0.08)'
                            _hover={{ shadow: 'md' }}
                        >
                            <Image src={item.dishImage} alt={item.title} />
                            <DishCardWithoutImage
                                hide='lg'
                                badgeBgColor='lime.150'
                                title={item.title}
                                info={item.description}
                                item={item.badgeInfo}
                            />
                        </Card>
                    ))}
                </MotionBox>
            </Flex>

            <Hide below='lg'>
                <>
                    <IconButton
                        aria-label='left-button'
                        onClick={onPrevButtonClick}
                        _hover={{ bg: '#000' }}
                        size='lg'
                        bg='#000'
                        position='absolute'
                        left='-5px'
                        top='40%'
                        transform='translateY(-50%)'
                        zIndex='1'
                    >
                        <ArrowBackIcon color='#fff' boxSize='24px' />
                    </IconButton>

                    <IconButton
                        aria-label='right-button'
                        onClick={onNextButtonClick}
                        _hover={{ bg: '#000' }}
                        size='lg'
                        bg='#000'
                        position='absolute'
                        right='-5px'
                        top='40%'
                        transform='translateY(-50%)'
                        zIndex='1'
                    >
                        <ArrowForwardIcon color='white' boxSize={6} />
                    </IconButton>
                </>
            </Hide>
        </Flex>
    );
};
