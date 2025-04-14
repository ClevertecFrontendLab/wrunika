import { FormControl, FormLabel, Input, InputRightElement, SearchIcon } from '@chakra-ui/icons';
import { Flex, Hide, IconButton, Image, InputGroup, Select, Switch } from '@chakra-ui/react';

import { searchingIconButton } from '~/assets';
import { MainTitle } from '~/components/main-title';

type Props = {
    title: string;
    subtitle?: string;
};

export const SearchingList = ({ title, subtitle }: Props) => {
    const size = { base: 8, xl: 12 };

    return (
        <Flex
            direction='column'
            rowGap='2rem'
            maxW='43.5rem'
            w='full'
            align='center'
            alignSelf='center'
            textAlign='center'
        >
            <MainTitle title={title} subtitle={subtitle} />
            <Flex direction='column' rowGap='1rem' maxW='32.37rem' w='full'>
                <Flex columnGap={3}>
                    <IconButton
                        h={size}
                        w={size}
                        px={{ base: 0, xl: '11px' }}
                        variant='outline'
                        aria-label=''
                        icon={<Image src={searchingIconButton} />}
                    />
                    <InputGroup w={{ base: '100%', sm: '25.25rem', lg: '28.62rem' }} size='lg'>
                        <Input
                            size={{ base: 'sm', xl: 'lg' }}
                            _placeholder={{ color: 'lime.800' }}
                            placeholder='Название или ингредиент...'
                            color='lime.800'
                        />
                        <InputRightElement boxSize={size}>
                            <SearchIcon boxSize={{ base: '0.875rem', xl: '1rem' }} />
                        </InputRightElement>
                    </InputGroup>
                </Flex>
                <Hide below='lg'>
                    <Flex>
                        <FormControl display='flex' alignItems='center'>
                            <FormLabel htmlFor='allergic' mb='0'>
                                Исключить мои аллергены
                            </FormLabel>
                            <Switch id='allergic' />
                        </FormControl>

                        <Select placeholder='Выберите из списка...'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Flex>
                </Hide>
            </Flex>
        </Flex>
    );
};
