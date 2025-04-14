import { Flex } from '@chakra-ui/react';

import {
    BlockWithoutImages,
    ContentLayout,
    CulinaryBlogs,
    JuiciestDishesForMainPage,
    NewRecipes,
} from '~/components';
import { veganLastBlockData } from '~/mochs/data';

export const MainContent = () => (
    <ContentLayout title='Приятного аппетита!'>
        <Flex direction='column' rowGap='2.5rem' align='start'>
            <NewRecipes />
            <JuiciestDishesForMainPage />
            <CulinaryBlogs />
            <BlockWithoutImages
                title={veganLastBlockData.title}
                description={veganLastBlockData.description}
                dishes={veganLastBlockData.dishes}
                buttonsItems={veganLastBlockData.buttonsItems}
            />
        </Flex>
    </ContentLayout>
);
