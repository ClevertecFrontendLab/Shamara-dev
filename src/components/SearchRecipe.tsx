import { SearchIcon } from '@chakra-ui/icons';
import {
    Flex,
    Heading,
    IconButton,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Switch,
    Text,
} from '@chakra-ui/react';

import filter from '~/assets/icons/filter.svg';

interface SearchRecipeProps {
    title: string;
    description?: string;
}

const SearchRecipe = ({ title, description = '' }: SearchRecipeProps) => (
    <Flex
        pt={{ base: 0, lg: 8 }}
        gap={{ base: 4, lg: 8 }}
        flexDirection='column'
        alignItems='center'
    >
        <Flex gap={{ base: 4, lg: 3 }} flexDirection='column' alignItems='center'>
            <Heading fontSize={{ base: '2xl', lg: '5xl' }} lineHeight={{ base: 8, lg: 'none' }}>
                {title}
            </Heading>
            {description && (
                <Text
                    w={{ base: '100%', lg: '696px' }}
                    textAlign='center'
                    fontWeight={500}
                    opacity='48%'
                >
                    {description}
                </Text>
            )}
        </Flex>
        <Flex flexDirection='column' gap={4} width={{ base: '100%', md: '448px', lg: '518px' }}>
            <Flex gap={3}>
                <IconButton
                    aria-label='filter'
                    variant='outline'
                    boxSize={{ base: 8, lg: 12 }}
                    borderColor='blackAlpha.600'
                    icon={<Image src={filter} boxSize={{ base: 3.5, lg: 6 }} />}
                />
                <InputGroup borderColor='blackAlpha.600' size={{ base: 'sm', lg: 'lg' }}>
                    <Input
                        color='lime.800'
                        placeholder='Название или ингредиент...'
                        _placeholder={{
                            color: 'lime.800',
                        }}
                    />
                    <InputRightElement boxSize={{ base: 8, lg: 12 }}>
                        <SearchIcon />
                    </InputRightElement>
                </InputGroup>
            </Flex>
            <Flex gap={4} alignItems='center' display={{ base: 'none', lg: 'flex' }}>
                <Flex gap={3} alignItems='center'>
                    <Text whiteSpace='nowrap' fontWeight={500}>
                        Исключить мои аллергены
                    </Text>
                    <Switch />
                </Flex>
                <Select placeholder='Выберите из списка...' color='blackAlpha.700' />
            </Flex>
        </Flex>
    </Flex>
);

export default SearchRecipe;
