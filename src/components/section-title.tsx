import { Heading } from '@chakra-ui/react';

type Props = {
    title: string;
};

export const SectionTitle = ({ title }: Props) => (
    <Heading fontSize={{ base: '2xl', lg: '5xl' }} fontWeight='medium' lineHeight='short'>
        {title}
    </Heading>
);
