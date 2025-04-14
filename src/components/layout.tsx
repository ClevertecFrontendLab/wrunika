import { Grid, GridItem, Hide } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { NavMenu, Sidebar } from '~/components';

type Props = {
    children: ReactNode;
};

export const Layout = ({ children }: Props) => (
    <Grid
        w='full'
        pt={20}
        templateAreas={{ base: `'main'`, lg: `'nav main sidebar'` }}
        gridTemplateColumns={{ base: '1fr', lg: '256px calc(100% - 464px) 208px' }}
        fontWeight='bold'
    >
        <Hide below='lg'>
            <GridItem area='nav'>
                <NavMenu />
            </GridItem>
        </Hide>
        <GridItem area='main'>{children}</GridItem>
        <Hide below='lg'>
            <GridItem area='sidebar'>
                <Sidebar />
            </GridItem>
        </Hide>
    </Grid>
);
