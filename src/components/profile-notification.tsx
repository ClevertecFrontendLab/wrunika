import { Text } from '@chakra-ui/icons';
import { Button, Flex, Image } from '@chakra-ui/react';

import { profileNotificationItems } from '~/mochs/data';

type Props = {
    direction: 'row' | 'column' | 'row-reverse' | 'column-reverse' | undefined;
    gap: number;
    textSize: string;
};

export const ProfileNotification = ({ direction, gap, textSize }: Props) => (
    <Flex direction={direction} gap={gap}>
        {profileNotificationItems.map((item) => (
            <Button
                leftIcon={<Image src={item.icon} />}
                key={item.id}
                variant='ghost'
                _hover={{ bg: 'transparent' }}
            >
                <Text fontSize={textSize} fontWeight='600' color='lime.600'>
                    {item.count}
                </Text>
            </Button>
        ))}
    </Flex>
);
