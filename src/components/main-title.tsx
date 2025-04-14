import { Text } from '@chakra-ui/icons';
import { Flex, Heading } from '@chakra-ui/react';

type Props = {
    title: string;
    subtitle?: string;
};

export const MainTitle = ({ title, subtitle }: Props) => (
    <Flex direction='column' rowGap={3}>
        <Heading as='h1' fontSize={{ base: '2xl', xl: '5xl' }}>
            {title}
        </Heading>
        <Text fontSize={{ base: 'sm', xl: 'md' }} color='blackAlpha.600' fontWeight='medium'>
            {subtitle}
        </Text>
    </Flex>
);
