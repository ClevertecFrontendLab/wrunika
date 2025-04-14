import { Text } from '@chakra-ui/icons';
import { Box, Container, Hide } from '@chakra-ui/react';

type Props = {
    title: string;
    info: string;
    hide: string;
    titleLinesCount?: number;
};

export const CardDishInfo = ({ info, hide, title, titleLinesCount }: Props) => {
    const cardTitleSize = { base: 'md', lg: 'lg', '2xl': 'xl' };
    return (
        <Container p={0} textAlign='start'>
            <Box pb={2}>
                <Box
                    overflow='hidden'
                    display='-webkit-box'
                    sx={{
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: { base: titleLinesCount || 2, lg: 1 },
                    }}
                >
                    <Text fontSize={cardTitleSize} fontWeight='medium' color='black'>
                        {title}
                    </Text>
                </Box>
            </Box>

            <Hide below={hide}>
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
            </Hide>
        </Container>
    );
};
