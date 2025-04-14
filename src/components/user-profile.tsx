import { Text } from '@chakra-ui/icons';
import { Avatar, Box, Flex } from '@chakra-ui/react';

import { User } from '~/utils';

type Props = User;

export const UserProfile = ({ avatar, name, nickname }: Props) => (
    <Flex columnGap={3} align='center'>
        <Avatar src={avatar} size={{ base: 'sm', xl: 'md' }} />
        <Flex direction='column' align='start'>
            <Box p={0}>
                <Box
                    overflow='hidden'
                    display='-webkit-box'
                    wordBreak='break-all'
                    textAlign='start'
                    sx={{
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 1,
                    }}
                >
                    <Text fontSize={{ base: 'md', xl: 'lg' }} fontWeight='medium'>
                        {name}
                    </Text>
                </Box>
            </Box>
            <Text fontSize={{ base: 'xs', xl: 'sm' }} color='blackAlpha.700'>
                {nickname}
            </Text>
        </Flex>
    </Flex>
);
