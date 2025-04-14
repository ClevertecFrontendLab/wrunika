import { Badge, Text } from '@chakra-ui/icons';
import { Button, Flex, Image, useBreakpointValue } from '@chakra-ui/react';

import { badge } from '~/components/badges';
import { BadgeInfo } from '~/utils';

type Props = {
    item: BadgeInfo;
    badgeBgColor: string;
    moveBadge?: boolean;
};

export const BadgeNotification = ({ item, badgeBgColor, moveBadge = true }: Props) => {
    const changedBadgeStyle = useBreakpointValue({
        base: { ...badge, columnGap: '2px', pos: 'absolute', top: '0.5rem', left: '0.5rem' },
        lg: badge,
    });
    const badgeStyle = moveBadge ? changedBadgeStyle : badge;

    return (
        <Flex w='full' justify='space-between'>
            <Badge sx={badgeStyle} bg={badgeBgColor}>
                <Image w={4} h={4} src={item.badgeIcon} />
                {item.badgeTitle}
            </Badge>
            <Flex gap={2}>
                {item.badgeNotifications?.map((n, i) => (
                    <Button
                        p='0'
                        h={6}
                        w='2.125rem'
                        leftIcon={<Image boxSize={3} m={0} src={n.icon} />}
                        key={i}
                        variant='ghost'
                        _hover={{ bg: 'transparent' }}
                    >
                        <Text
                            fontSize='xs'
                            lineHeight='none'
                            fontWeight='semibold'
                            color='lime.600'
                        >
                            {n.count}
                        </Text>
                    </Button>
                ))}
            </Flex>
        </Flex>
    );
};
