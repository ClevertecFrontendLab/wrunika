import { Flex } from '@chakra-ui/react';

import { Carousel, SectionTitle } from '~/components';

export const NewRecipes = () => (
    <Flex direction='column' align='start' rowGap='1.5rem'>
        <SectionTitle title='Новые рецепты' />
        <Carousel />
    </Flex>
);
