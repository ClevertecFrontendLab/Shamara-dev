import { Card, CardBody, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';

import emojiIcon from '~/assets/icons/emoji.svg';
import favoriteIcon from '~/assets/icons/favourites.svg';

import CategorySection from './CategorySection';

interface NewRecipesCardProps {
    recipe: {
        id: number;
        image: string;
        title: string;
        description: string;
        badgeIcon: string;
        badgeTitle: string;
        badgeColor: string;
        favoriteCount?: string;
        likeCount?: string;
    };
}

const NewRecipesCard: React.FC<NewRecipesCardProps> = ({ recipe }) => {
    const {
        image,
        title,
        description,
        badgeIcon,
        badgeTitle,
        badgeColor,
        favoriteCount,
        likeCount,
    } = recipe;

    const [isLaptop] = useMediaQuery('(min-width: 1024px)');

    return (
        <Card
            position='relative'
            w={{ base: '158px', lg: '277px', xl: '322px' }}
            h={{ base: '220px', lg: '402px', xl: '414px' }}
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
        >
            <Image h={{ base: 32, lg: 'auto' }} src={image} borderRadius='8px' />
            {!isLaptop && (
                <Flex
                    position={{ base: 'absolute', lg: 'static' }}
                    top={2}
                    left={2}
                    p='2px 4px'
                    alignItems='center'
                    gap='2px'
                    bg={badgeColor}
                    borderRadius='4px'
                >
                    <Image src={badgeIcon} boxSize={4} />
                    <Text fontSize='sm' lineHeight={5}>
                        {badgeTitle}
                    </Text>
                </Flex>
            )}
            <CardBody pt={{ base: 2, lg: 4 }} px={{ base: 2, lg: 6 }} pb={{ base: 0, lg: 5 }}>
                <Flex flexDirection='column' gap={2}>
                    <Text
                        fontWeight={500}
                        fontSize={{ base: 'md', lg: 'xl' }}
                        lineHeight={{ base: 6, lg: 7 }}
                        noOfLines={{ base: 2, lg: 1 }}
                    >
                        {title}
                    </Text>
                    {isLaptop && (
                        <Text fontSize='sm' lineHeight={5} noOfLines={3}>
                            {description}
                        </Text>
                    )}
                </Flex>
                {isLaptop ? (
                    <CategorySection
                        badgeIcon={badgeIcon}
                        badgeTitle={badgeTitle}
                        badgeColor={badgeColor}
                        favoriteCount={favoriteCount}
                        likeCount={likeCount}
                        mt={6}
                    />
                ) : (
                    <Flex mt={2} gap={2}>
                        {favoriteCount && (
                            <Flex px={1} alignItems='center' gap={1.5}>
                                <Image src={favoriteIcon} boxSize={3} />
                                <Text fontWeight={600} fontSize='xs' lineHeight={4} color='#2db100'>
                                    {favoriteCount}
                                </Text>
                            </Flex>
                        )}
                        {likeCount && (
                            <Flex px={1} alignItems='center' gap={1.5}>
                                <Image src={emojiIcon} boxSize={3} />
                                <Text fontWeight={600} fontSize='xs' lineHeight={4} color='#2db100'>
                                    {likeCount}
                                </Text>
                            </Flex>
                        )}
                    </Flex>
                )}
            </CardBody>
        </Card>
    );
};

export default NewRecipesCard;
