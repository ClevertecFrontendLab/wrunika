import { Box, Stack, Text } from '@chakra-ui/react';

import { UserProfile } from '~/components';

type Props = {
    name: string;
    nickname: string;
    avatar: string;
    info: string;
};

export const AuthorCard = ({ avatar, name, nickname, info }: Props) => (
    <Stack
        spacing={4}
        bg='white'
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='lg'
        p={{ base: '1rem', xl: '1.5rem 1.5rem 1.25rem 1.5rem' }}
        _hover={{ shadow: 'md' }}
    >
        <UserProfile name={name} nickname={nickname} avatar={avatar} />
        <Box>
            <Box
                overflow='hidden'
                display='-webkit-box'
                sx={{
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                }}
            >
                <Text textAlign='start' fontSize='sm' fontWeight='normal'>
                    {info}
                </Text>
            </Box>
        </Box>
    </Stack>
);
