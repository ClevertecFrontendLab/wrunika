import { ChakraProvider, Container, Show } from '@chakra-ui/react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router';

import { theme } from '~/app/theme';
import { Footer, Header, Layout } from '~/components';
import { Paths } from '~/constants';
import { JuiciestPage, MainPage, SecondsVeganCuisinePage } from '~/pages';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return (
        <BrowserRouter>
            <ChakraProvider resetCSS theme={theme}>
                <Container maxW='1920px' p='0' centerContent pos='relative'>
                    <Header />
                    <Layout>
                        <Routes>
                            <Route path={Paths.MAIN} element={<MainPage />} />
                            <Route path={Paths.JUICIEST} element={<JuiciestPage />} />
                            <Route
                                path={Paths.VEGAN_CUISINE}
                                element={
                                    <>
                                        <Outlet />
                                    </>
                                }
                            >
                                <Route path={Paths.SECONDS} element={<SecondsVeganCuisinePage />} />
                            </Route>
                        </Routes>
                    </Layout>
                    <Show below='lg'>
                        <Footer />
                    </Show>
                </Container>
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default App;
