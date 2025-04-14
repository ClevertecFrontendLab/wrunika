import { Flex } from '@chakra-ui/react';

import { BadgeNotification, CardDishInfo } from '~/components';
import { BadgeInfo } from '~/utils';

type Props = {
    title: string;
    info: string;
    item: BadgeInfo;
    hide: string;
    badgeBgColor: string;
    moveBadge?: boolean;
    titleLinesCount?: number;
};

export const DishCardWithoutImage = ({
    info,
    hide,
    item,
    title,
    badgeBgColor,
    moveBadge,
    titleLinesCount,
}: Props) => {
    const cardBodyPadding = {
        base: '0.5rem 0.5rem 0.25rem',
        lg: '0.75rem',
        '2xl': '1rem 1.5rem 1.25rem',
    };
    return (
        <Flex direction='column' rowGap={{ base: 2, xl: 6 }} p={cardBodyPadding} align='start'>
            <CardDishInfo hide={hide} title={title} info={info} titleLinesCount={titleLinesCount} />
            <BadgeNotification item={item} badgeBgColor={badgeBgColor} moveBadge={moveBadge} />
        </Flex>
    );
};
