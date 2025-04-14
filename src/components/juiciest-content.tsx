import { Button, SimpleGrid, VStack } from '@chakra-ui/react';

import { BlockWithoutImages, ContentLayout, DishCard } from '~/components';
import { juiciestContentItems, veganLastBlockData } from '~/mochs/data';

export const JuiciestContent = () => (
    <ContentLayout title='Самое сочное'>
        <VStack gap={4}>
            <SimpleGrid
                w='full'
                gap={{ base: 4, xl: 6 }}
                columns={{ base: 1, md: 2, xl: 1, '2xl': 2 }}
            >
                {juiciestContentItems.map((item) => (
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

            <Button bg='lime.400' _hover='inherit'>
                Загрузить еще
            </Button>
        </VStack>

        <BlockWithoutImages
            title={veganLastBlockData.title}
            description={veganLastBlockData.description}
            dishes={veganLastBlockData.dishes}
            buttonsItems={veganLastBlockData.buttonsItems}
        />
    </ContentLayout>
);
