import { Button, Card, Flex, Hide, Image } from '@chakra-ui/react';

import { saved } from '~/assets';
import { BadgeNotification, BadgeWithRecommendations, CardDishInfo } from '~/components';
import { BadgeInfo, Recommendation } from '~/utils';

type Props = {
    item: BadgeInfo;
    title: string;
    image: string;
    info: string;
    hasRecommendations?: boolean;
    recommendation?: Recommendation;
};

export const DishCard = ({ image, info, item, title, recommendation }: Props) => (
    <Card
        pos='relative'
        display='flex'
        direction='row'
        borderRadius='lg'
        overflow='hidden'
        _hover={{ shadow: 'md' }}
    >
        <Image w={{ base: 158, xl: 346 }} h={{ base: 128, xl: 244 }} src={image} />
        {recommendation && (
            <Hide below='xl'>
                <BadgeWithRecommendations recommendation={recommendation} />
            </Hide>
        )}

        <Flex
            w='full'
            direction='column'
            p={{ base: 2, xl: '1.25rem 1.5rem' }}
            rowGap={{ base: 0, xl: 6 }}
            border='1px solid rgba(0, 0, 0, 0.08)'
        >
            <BadgeNotification item={item} badgeBgColor='lime.50' />
            <CardDishInfo hide='lg' title={title} info={info} />
            <Flex columnGap={2} alignSelf='end' mt='auto'>
                <Button
                    size={{ base: 'xs', xl: 'sm' }}
                    w={{ base: 6, xl: 'auto' }}
                    leftIcon={<Image boxSize={3.5} marginLeft={1.5} src={saved} />}
                    variant='outline'
                    colorScheme='blackAlpha.800'
                >
                    <Hide below='lg'>Сохранить</Hide>
                </Button>
                <Button size={{ base: 'xs', xl: 'sm' }} color='white' bg='blackAlpha.900'>
                    Готовить
                </Button>
            </Flex>
        </Flex>
    </Card>
);
