import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';

import dessertIcon from '~/assets/icons/dessert.svg';
import saladIcon from '~/assets/icons/salad.svg';
import soupIcon from '~/assets/icons/soup.svg';
import veganIcon from '~/assets/icons/vegan.svg';
import cutlets from '~/assets/images/cutlets.jpg';
import pancakes from '~/assets/images/pancakes.jpg';
import salad from '~/assets/images/salad.jpg';
import soup from '~/assets/images/soup.jpg';

import NewRecipesCard from './NewRecipesCard';

const mockNewRecipes = [
    {
        id: 1,
        image: soup,
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        badgeIcon: soupIcon,
        badgeTitle: 'Первые блюда',
        badgeColor: 'lime.150',
        favoriteCount: '1',
    },
    {
        id: 2,
        image: cutlets,
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных блюд.',
        badgeIcon: veganIcon,
        badgeTitle: 'Веганские блюда',
        badgeColor: 'lime.150',
        favoriteCount: '2',
        likeCount: '1',
    },
    {
        id: 3,
        image: pancakes,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeIcon: dessertIcon,
        badgeTitle: 'Десерты, выпечка',
        badgeColor: 'lime.150',
        likeCount: '1',
    },
    {
        id: 4,
        image: salad,
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.',
        badgeIcon: saladIcon,
        badgeTitle: 'Салаты',
        badgeColor: 'lime.150',
    },
    {
        id: 5,
        image: pancakes,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeIcon: dessertIcon,
        badgeTitle: 'Десерты, выпечка',
        badgeColor: 'lime.150',
        likeCount: '1',
    },
    {
        id: 6,
        image: pancakes,
        title: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        badgeIcon: dessertIcon,
        badgeTitle: 'Десерты, выпечка',
        badgeColor: 'lime.150',
        likeCount: '1',
    },
];

const NewRecipes = () => (
    <Flex flexDirection='column' gap={{ base: 3, lg: 6 }} position='relative'>
        <Text
            fontWeight={500}
            fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
            lineHeight={{ base: '8', md: '10', lg: 'none' }}
        >
            Новые рецепты
        </Text>
        <Box w='100%' overflowX='hidden'>
            <Flex gap={{ base: 3, xl: 6 }}>
                {mockNewRecipes.map((recipe) => (
                    <Box
                        minW={{
                            base: '158px',
                            lg: '277px',
                            xl: '322px',
                        }}
                        flexBasis={{
                            base: '158px',
                            lg: '277px',
                            xl: '322px',
                        }}
                    >
                        <NewRecipesCard key={recipe.id} recipe={recipe} />
                    </Box>
                ))}
            </Flex>
        </Box>
        <>
            <IconButton
                display={{ base: 'none', lg: 'block' }}
                aria-label='slider left'
                position='absolute'
                top='219px'
                left='-8px'
                w='48px'
                h='48px'
                bg='black'
            >
                <ArrowBackIcon color='lime.50' boxSize={6} />
            </IconButton>
            <IconButton
                display={{ base: 'none', lg: 'block' }}
                aria-label='slider right'
                position='absolute'
                top='219px'
                right='-8px'
                w='48px'
                h='48px'
                bg='black'
            >
                <ArrowForwardIcon color='lime.50' boxSize={6} />
            </IconButton>
        </>
    </Flex>
);

export default NewRecipes;
