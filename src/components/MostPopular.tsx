import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router';

import internationalIcon from '~/assets/icons/international.svg';
import panIcon from '~/assets/icons/pan.svg';
import ham from '~/assets/images/ham.png';
import knelli from '~/assets/images/knelli.png';
import noodles from '~/assets/images/noodles.png';
import tomyam from '~/assets/images/tomyam.png';

import MostPopularCard from './MostPopularCard';

const recipes = [
    {
        id: 1,
        image: knelli,
        badgeIcon: panIcon,
        badgeTitle: 'Вторые блюда',
        badgeColor: 'lime.50',
        favoriteCount: '85',
        likeCount: '152',
        title: 'Кнели со спагетти',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 2,
        image: ham,
        badgeIcon: panIcon,
        badgeTitle: 'Вторые блюда',
        badgeColor: 'lime.50',
        favoriteCount: '159',
        likeCount: '257',
        title: 'Пряная ветчина по итальянски',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 3,
        image: noodles,
        badgeIcon: panIcon,
        badgeTitle: 'Вторые блюда',
        badgeColor: 'lime.50',
        favoriteCount: '258',
        likeCount: '342',
        title: 'Лапша с курицей и шафраном',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        id: 4,
        image: tomyam,
        badgeIcon: internationalIcon,
        badgeTitle: 'Национальные',
        badgeColor: 'lime.50',
        favoriteCount: '124',
        likeCount: '324',
        title: 'Том-ям с капустой кимчи',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];

const MostPopular = () => (
    <Flex flexDirection='column' gap={6}>
        <Flex alignItems='center' justifyContent='space-between'>
            <Text
                fontWeight={500}
                fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                lineHeight={{ base: '8', md: '10', lg: 'none' }}
            >
                Самое сочное
            </Text>

            <Button
                data-test-id='juiciest-link'
                as={NavLink}
                to='/juiciest'
                display={{ base: 'none', lg: 'block' }}
                rightIcon={<ArrowForwardIcon />}
                px={6}
                fontWeight={600}
                fontSize='lg'
                lineHeight={7}
                bg='lime.400'
            >
                Вся подборка
            </Button>
        </Flex>
        <Flex flexWrap='wrap' gap={{ base: 4, lg: 6 }}>
            {recipes.map((recipe) => (
                <MostPopularCard key={recipe.id} recipe={recipe} />
            ))}
        </Flex>
        <Button
            data-test-id='juiciest-link-mobile'
            as={NavLink}
            to='/juiciest'
            display={{ base: 'block', lg: 'none' }}
            w='167px'
            mx='auto'
            rightIcon={<ArrowForwardIcon />}
            px={6}
            fontWeight={600}
            lineHeight={6}
            bg='lime.400'
        >
            Вся подборка
        </Button>
    </Flex>
);

export default MostPopular;
