import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Text } from '@chakra-ui/react';

import elenaAvatar from '~/assets/images/avatar1.png';
import alexAvatar from '~/assets/images/avatar2.png';
import ekaterinaAvatar from '~/assets/images/avatar3.png';

import BlogCard from './BlogCard';

const blogs = [
    {
        avatar: elenaAvatar,
        userName: 'Елена Высоцкая',
        accountName: '@elenapovar',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        avatar: alexAvatar,
        userName: 'Alex Cook',
        accountName: '@luntasticooking',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        avatar: ekaterinaAvatar,
        userName: 'Екатерина Константинопольская',
        accountName: '@bake_and_ple',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];

const Blogs = () => (
    <Flex p={6} flexDirection='column' gap={6} borderRadius='16px' bg='lime.300'>
        <Flex alignItems='center' justifyContent='space-between'>
            <Text fontSize={{ base: '2xl', md: '4xl' }} lineHeight={{ base: '8', md: '10' }}>
                Кулинарные блоги
            </Text>
            <Button
                display={{ base: 'none', md: 'block' }}
                rightIcon={<ArrowForwardIcon />}
                px={6}
                fontWeight={600}
                fontSize='lg'
                lineHeight={7}
                variant='outstule'
            >
                Все авторы
            </Button>
        </Flex>
        <Flex gap={4} flexDirection={{ base: 'column', md: 'row' }}>
            {blogs.map((card) => (
                <BlogCard
                    avatar={card.avatar}
                    userName={card.userName}
                    accountName={card.accountName}
                    text={card.text}
                />
            ))}
        </Flex>
        <Button
            display={{ base: 'block', md: 'none' }}
            rightIcon={<ArrowForwardIcon />}
            px={6}
            fontWeight={600}
            fontSize='lg'
            lineHeight={7}
            variant='outstule'
        >
            Все авторы
        </Button>
    </Flex>
);

export default Blogs;
