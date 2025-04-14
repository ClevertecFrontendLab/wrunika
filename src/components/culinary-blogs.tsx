import { ArrowForwardIcon, Text } from '@chakra-ui/icons';
import { Button, Flex, Hide, SimpleGrid, Stack } from '@chakra-ui/react';

import { AuthorCard } from '~/components';
import { authorsItems } from '~/mochs/data';

export const CulinaryBlogs = () => (
    <Stack
        spacing={{ base: 3, xl: 6 }}
        bg='lime.300'
        w='full'
        borderRadius='2xl'
        p={{ base: 3, xl: 6 }}
    >
        <Flex align='center' justify='space-between' w='full'>
            <Text fontSize={{ base: '2xl', xl: '4xl' }} fontWeight='normal'>
                Кулинарные блоги
            </Text>

            <Hide below='xl'>
                <Button
                    _hover={{ bg: 'inherit' }}
                    size='lg'
                    variant='ghost'
                    rightIcon={<ArrowForwardIcon />}
                >
                    Все авторы
                </Button>
            </Hide>
        </Flex>
        <SimpleGrid columns={[1, 3]} gap={{ base: 3, xl: 4 }}>
            {authorsItems.map((author) => (
                <AuthorCard
                    key={author.id}
                    name={author.user.name}
                    nickname={author.user.nickname}
                    avatar={author.user.avatar}
                    info={author.info}
                />
            ))}
        </SimpleGrid>
        <Hide above='xl'>
            <Button
                _hover={{ bg: 'inherit' }}
                size='md'
                variant='ghost'
                w='9.31rem'
                m='0 auto'
                rightIcon={<ArrowForwardIcon />}
            >
                Все авторы
            </Button>
        </Hide>
    </Stack>
);
