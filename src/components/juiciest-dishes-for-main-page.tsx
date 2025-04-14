import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, SimpleGrid, Stack } from '@chakra-ui/react';
import { Link } from 'react-router';

import { DishCard, SectionTitle } from '~/components';
import { Paths } from '~/constants';
import { juiciestFoodItems } from '~/mochs/data';

export const JuiciestDishesForMainPage = () => (
    <Stack spacing={{ base: 3, xl: 6 }} w='full'>
        <Flex align='center' justify='space-between' w='full'>
            <SectionTitle title='Самое сочное' />
            <Button
                data-test-id='juiciest-link'
                display={{ base: 'none', xl: 'flex' }}
                size='lg'
                bg='lime.400'
                as={Link}
                to={Paths.JUICIEST}
                rightIcon={<ArrowForwardIcon />}
            >
                Вся подборка
            </Button>
        </Flex>

        <SimpleGrid w='full' gap={{ base: 4, xl: 6 }} columns={{ base: 1, md: 2, xl: 1, '2xl': 2 }}>
            {juiciestFoodItems.map((item) => (
                <DishCard
                    key={item.id}
                    item={item.badgeInfo}
                    title={item.title}
                    info={item.description}
                    image={item.dishImage}
                    recommendation={item.recommendation}
                />
            ))}
        </SimpleGrid>

        <Button
            data-test-id='juiciest-link-mobile'
            display={{ base: 'flex', xl: 'none' }}
            size='lg'
            bg='lime.400'
            as={Link}
            to={Paths.JUICIEST}
            w='10.44rem'
            m='0 auto'
            rightIcon={<ArrowForwardIcon />}
        >
            Вся подборка
        </Button>
    </Stack>
);
