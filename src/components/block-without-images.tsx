import { Text } from '@chakra-ui/icons';
import { Box, Flex, Grid, Stack, VStack } from '@chakra-ui/react';

import { CookButton, DishCardWithoutImage, SectionTitle } from '~/components';
import { CardItem, Item } from '~/utils';

type Props = {
    title: string;
    description: string;
    dishes: Omit<CardItem, 'dishImage'>[];
    buttonsItems: Item[];
};

export const BlockWithoutImages = ({ title, description, dishes, buttonsItems }: Props) => (
    <Stack spacing={{ base: 3, lg: 6 }} w='full' borderTop='1px solid rgba(0, 0, 0, 0.08)' pb={4}>
        <Flex
            gap={3}
            paddingBlock={{ base: '0.5rem 1rem', xl: 6 }}
            align='center'
            justify='space-between'
            w='full'
            textAlign='start'
            wrap={{ base: 'wrap', xl: 'nowrap' }}
        >
            <SectionTitle title={title} />
            <Text
                w={{ base: 'auto', xl: '62%', '2xl': '50%' }}
                fontSize={{ base: 'sm', xl: 'md' }}
                fontWeight='medium'
                color='blackAlpha.700'
            >
                {description}
            </Text>
        </Flex>

        <Grid
            gap={{ base: 3, xl: 6 }}
            templateColumns={{
                base: '1fr',
                md: '32% 32% 32%',
                '2xl': '23.5% 23.5% 49%',
            }}
            templateRows='repeat(1, 1fr)'
        >
            {dishes.map((dish) => (
                <Box key={dish.id} border='1px solid rgba(0, 0, 0, 0.08)' borderRadius='lg'>
                    <DishCardWithoutImage
                        hide='base'
                        title={dish.title}
                        info={dish.description}
                        badgeBgColor='lime.50'
                        moveBadge={false}
                        item={dish.badgeInfo}
                        titleLinesCount={1}
                    />
                </Box>
            ))}
            <VStack spacing={3}>
                {buttonsItems.map((item) => (
                    <CookButton key={item.id} icon={item.icon} title={item.title} />
                ))}
            </VStack>
        </Grid>
    </Stack>
);
