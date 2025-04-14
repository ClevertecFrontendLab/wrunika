import { HStack, Text } from '@chakra-ui/icons';
import { Box, Button, Image } from '@chakra-ui/react';

type Props = {
    icon: string;
    title: string;
};

export const CookButton = ({ icon, title }: Props) => (
    <HStack
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='lg'
        p={{ base: '0.625rem 0.75rem', '2xl': '0.75rem 1rem' }}
        w='full'
        justify='space-between'
    >
        <HStack>
            <Image boxSize={6} src={icon} />
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
                    <Text fontWeight='medium' fontSize={{ base: 'md', xl: 'lg', '2xl': 'xl' }}>
                        {title}
                    </Text>
                </Box>
            </Box>
        </HStack>
        <Button
            size='sm'
            variant='outline'
            colorScheme='lime'
            px='1rem'
            fontSize={{ base: 'xs', '2xl': 'sm' }}
            minW='70px'
            w={{ base: '70px', '2xl': '87px' }}
        >
            Готовить
        </Button>
    </HStack>
);
