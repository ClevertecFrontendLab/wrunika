import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { SearchingList } from '~/components';

type Props = {
    title: string;
    subtitle?: string;
};

export const ContentLayout = ({ title, subtitle, children }: PropsWithChildren<Props>) => (
    <Flex
        direction='column'
        rowGap={{ base: 8, lg: 14 }}
        paddingInline={{ base: '1.25rem 1.25rem', lg: '1.5rem 4.5rem' }}
        pt={{ base: 4, lg: 8 }}
        pb={{ base: '5rem', lg: 0 }}
    >
        <SearchingList title={title} subtitle={subtitle} />
        {children}
    </Flex>
);
