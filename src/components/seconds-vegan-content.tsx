import {
    Button,
    SimpleGrid,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    VStack,
} from '@chakra-ui/react';

import { BlockWithoutImages, ContentLayout, DishCard } from '~/components';
import { desertsLastBlockData, navMenuItems, veganDishes } from '~/mochs/data';

const data = {
    title: 'Веганская кухня',
    subtitle:
        'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
};

export const SecondsVeganContent = () => (
    <ContentLayout title={data.title} subtitle={data.subtitle}>
        <VStack gap={4}>
            <Tabs
                defaultIndex={2}
                maxW={{ base: 'calc(100vw - 60px)', xl: 'full' }}
                overflow='hidden'
            >
                <TabList
                    w='fit-content'
                    margin='0 auto'
                    ml={{ base: '-8.125rem', xl: 'auto' }}
                    whiteSpace='nowrap'
                >
                    {navMenuItems[6].options.map((item, index) => (
                        <Tab
                            key={index}
                            fontSize={{ base: 'sm', xl: 'md' }}
                            fontWeight='medium'
                            color='lime.800'
                            _selected={{ color: 'lime.600', borderColor: 'lime.600' }}
                        >
                            {item}
                        </Tab>
                    ))}
                </TabList>

                <TabPanels pt={6}>
                    {new Array(navMenuItems[6].options.length).fill(undefined).map((_, index) => (
                        <TabPanel key={index} p={0}>
                            <SimpleGrid
                                w='full'
                                gap={{ base: 4, xl: 6 }}
                                columns={{ base: 1, md: 2, xl: 1, '2xl': 2 }}
                            >
                                {veganDishes.map((item) => (
                                    <DishCard
                                        key={item.id}
                                        item={item.badgeInfo}
                                        title={item.title}
                                        info={item.description}
                                        image={item.dishImage}
                                    />
                                ))}
                            </SimpleGrid>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
            <Button bg='lime.400'>Загрузить еще</Button>
        </VStack>

        <BlockWithoutImages
            title={desertsLastBlockData.title}
            description={desertsLastBlockData.description}
            dishes={desertsLastBlockData.dishes}
            buttonsItems={desertsLastBlockData.buttonsItems}
        />
    </ContentLayout>
);
