import { Button, Flex, Image, Text } from '@chakra-ui/react';

import panIcon from '~/assets/icons/pan.svg';

import RelevantKitchenCard from './RelevantKitchenCard';

const recipes = [
    {
        id: 1,
        title: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день. Фасоль в данном случае заменяет мясо, делая рагу сытным и питательным. Чтобы сократить время приготовления, возьмём консервированную фасоль. Блюдо хоть и простое, но в полной мере наполнено ароматами и имеет выразительный вкус за счёт добавления томатной пасты.',
        badgeIcon: panIcon,
        badgeTitle: 'Вторые блюда',
        badgeColor: 'lime.50',
        favoriteCount: '1',
        likeCount: '1',
    },
    {
        id: 2,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        badgeIcon: panIcon,
        badgeTitle: 'Вторые блюда',
        badgeColor: 'lime.50',
        favoriteCount: '2',
        likeCount: '1',
    },
];

const RelevantKitchen = () => (
    <Flex flexDirection='column' gap={{ base: 4, lg: 6 }}>
        <Flex
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'start', lg: 'center' }}
            justifyContent='space-between'
            gap={3}
        >
            <Text
                fontWeight={500}
                fontSize={{ base: '2xl', lg: '4xl', xl: '5xl' }}
                lineHeight='none'
            >
                Веганская кухня
            </Text>
            <Text
                w={{ base: '100%', lg: '668px' }}
                fontWeight={500}
                letterSpacing={0.65}
                opacity='64%'
                fontSize={{ base: 'sm', lg: 'md' }}
                lineHeight={{ base: 5, lg: 6 }}
                noOfLines={4}
            >
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
        </Flex>
        <Flex flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 3, lg: 4, xl: 6 }}>
            {recipes.map((recipe) => (
                <RelevantKitchenCard recipe={recipe} />
            ))}
            <Flex gap={3} flexDirection='column'>
                <Flex
                    w={{ base: '100%', md: '240px', lg: '282px', xl: '668px' }}
                    h='56px'
                    py={3}
                    px={3}
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    border='1px solid rgba(0, 0, 0, 0.08)'
                    borderRadius='8px'
                >
                    <Flex gap={{ base: 2, xl: 3 }}>
                        <Image src={panIcon} boxSize={6} />
                        <Text textOverflow='ellipsis' whiteSpace='nowrap' overflowX='hidden'>
                            Стейк для вегетарианцев
                        </Text>
                    </Flex>
                    <Button
                        h={8}
                        px={2}
                        variant='outline'
                        fontSize='sm'
                        lineHeight={4}
                        borderColor='lime.600'
                        color='lime.600'
                    >
                        Готовить
                    </Button>
                </Flex>
                <Flex
                    w={{ base: '100%', md: '240px', lg: '282px', xl: '668px' }}
                    h='56px'
                    py={3}
                    px={3}
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    border='1px solid rgba(0, 0, 0, 0.08)'
                    borderRadius='8px'
                >
                    <Flex gap={{ base: 2, xl: 3 }}>
                        <Image src={panIcon} boxSize={6} />
                        <Text textOverflow='ellipsis' whiteSpace='nowrap' overflowX='hidden'>
                            Стейк для вегетарианцев
                        </Text>
                    </Flex>
                    <Button
                        h={8}
                        px={2}
                        variant='outline'
                        fontSize='sm'
                        lineHeight={4}
                        borderColor='lime.600'
                        color='lime.600'
                    >
                        Готовить
                    </Button>
                </Flex>
                <Flex
                    w={{ base: '100%', md: '240px', lg: '282px', xl: '668px' }}
                    h='56px'
                    py={3}
                    px={3}
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    border='1px solid rgba(0, 0, 0, 0.08)'
                    borderRadius='8px'
                >
                    <Flex gap={{ base: 2, xl: 3 }}>
                        <Image src={panIcon} boxSize={6} />
                        <Text textOverflow='ellipsis' whiteSpace='nowrap' overflowX='hidden'>
                            Стейк для вегетарианцев
                        </Text>
                    </Flex>
                    <Button
                        h={8}
                        px={2}
                        variant='outline'
                        fontSize='sm'
                        lineHeight={4}
                        borderColor='lime.600'
                        color='lime.600'
                    >
                        Готовить
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
);

export default RelevantKitchen;
