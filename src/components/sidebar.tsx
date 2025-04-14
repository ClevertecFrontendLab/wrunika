import { Text } from '@chakra-ui/icons';
import { Box, Button, Flex, Image } from '@chakra-ui/react';

import { writeIconButton } from '~/assets';
import { ProfileNotification } from '~/components';

export const Sidebar = () => (
    <Flex
        direction='column'
        alignItems='end'
        paddingTop={4}
        justifyContent='space-between'
        h='calc(100vh - 80px)'
        pos='fixed'
    >
        <Box pr={14}>
            <ProfileNotification direction='column' gap={6} textSize='md' />
        </Box>

        <Flex
            w={52}
            h={52}
            align='center'
            justify='center'
            background='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
        >
            <Button
                _hover={{ bg: 'transparent' }}
                rowGap={3}
                size='lg'
                flexDirection='column'
                variant='ghost'
            >
                <Image src={writeIconButton} />
                <Text fontSize='xs' lineHeight='short' color='blackAlpha.700'>
                    Записать рецепт
                </Text>
            </Button>
        </Flex>
    </Flex>
);
