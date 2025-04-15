import {
    Button,
    Card,
    CardBody,
    Flex,
    IconButton,
    Image,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';

import emojiIcon from '~/assets/icons/emoji.svg';
import favoriteIcon from '~/assets/icons/favourites.svg';

import CategorySection from './CategorySection';

interface MostPopularCardProps {
    recipe: {
        image: string;
        badgeIcon: string;
        badgeTitle: string;
        badgeColor: string;
        favoriteCount: string;
        likeCount: string;
        title: string;
        description: string;
    };
}

const MostPopularCard: React.FC<MostPopularCardProps> = ({ recipe }) => {
    const {
        image,
        badgeIcon,
        badgeTitle,
        badgeColor,
        favoriteCount,
        likeCount,
        title,
        description,
    } = recipe;

    const [isLaptop] = useMediaQuery('(min-width: 1440px)');

    return (
        <Card
            w={{ base: '354px', lg: '100%', xl: '664px' }}
            h={{ base: '128px', lg: '244px' }}
            display='flex'
            flexDirection='row'
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
        >
            <Image
                src={image}
                w={{ base: '158px', lg: '346px' }}
                h={{ base: '128px', lg: '244px' }}
                borderRadius='8px'
            />
            <CardBody
                w={{ base: '198px', lg: '322px' }}
                p={{ base: '8px 8px 4px', lg: '20px 24px' }}
                display='flex'
                flexDirection='column'
                gap={{ base: 0, lg: 6 }}
            >
                {isLaptop ? (
                    <CategorySection
                        badgeIcon={badgeIcon}
                        badgeTitle={badgeTitle}
                        badgeColor={badgeColor}
                        favoriteCount={favoriteCount}
                        likeCount={likeCount}
                    />
                ) : (
                    <>
                        <Flex
                            position='absolute'
                            top={2}
                            left={2}
                            gap={2}
                            p='4px 8px'
                            alignItems='center'
                            bg={badgeColor}
                            borderRadius='4px'
                        >
                            <Image src={badgeIcon} boxSize={4} />
                            <Text fontSize='sm' lineHeight={5}>
                                {badgeTitle}
                            </Text>
                        </Flex>
                        <Flex gap={2}>
                            {favoriteCount && (
                                <Flex px={1} alignItems='center' gap={1.5}>
                                    <Image src={favoriteIcon} boxSize={3} />
                                    <Text
                                        fontWeight={600}
                                        fontSize='xs'
                                        lineHeight={4}
                                        color='#2db100'
                                    >
                                        {favoriteCount}
                                    </Text>
                                </Flex>
                            )}
                            {likeCount && (
                                <Flex px={1} alignItems='center' gap={1.5}>
                                    <Image src={emojiIcon} boxSize={3} />
                                    <Text
                                        fontWeight={600}
                                        fontSize='xs'
                                        lineHeight={4}
                                        color='#2db100'
                                    >
                                        {likeCount}
                                    </Text>
                                </Flex>
                            )}
                        </Flex>
                    </>
                )}
                {isLaptop ? (
                    <Flex w='100%' flexDirection='column' gap={{ base: 0, lg: 2 }}>
                        <Text
                            fontWeight={500}
                            fontSize='xl'
                            lineHeight={7}
                            textOverflow='ellipsis'
                            whiteSpace='nowrap'
                            overflow='hidden'
                        >
                            {title}
                        </Text>

                        <Text fontSize='sm' lineHeight={5} noOfLines={3}>
                            {description}
                        </Text>
                    </Flex>
                ) : (
                    <Flex flexDirection='column' gap={{ base: 0, lg: 2 }}>
                        <Text
                            h={12}
                            fontWeight={500}
                            fontSize={{ base: 'md', lg: 'xl' }}
                            lineHeight={{ base: 6, lg: 7 }}
                            noOfLines={2}
                        >
                            {title}
                        </Text>
                    </Flex>
                )}
                <Flex
                    w='100%'
                    h={{ base: 6, lg: 8 }}
                    mt={{ base: 5, lg: 0 }}
                    justifyContent='flex-end'
                    gap={{ base: 3, lg: 2 }}
                    fontWeight={600}
                    fontSize='sm'
                    lineHeight={5}
                >
                    {isLaptop ? (
                        <Button
                            variant='outline'
                            leftIcon={<Image src={favoriteIcon} boxSize={3} />}
                        >
                            {isLaptop && 'Сохранить'}
                        </Button>
                    ) : (
                        <IconButton
                            aria-label='favorite'
                            icon={<Image src={favoriteIcon} w={2.5} h={3} />}
                            variant='outline'
                            h={6}
                        />
                    )}
                    <Button
                        h={{ base: 6, lg: 8 }}
                        variant='solid'
                        bg='rgba(0, 0, 0, 0.92)'
                        color='#fff'
                        px={2}
                    >
                        Готовить
                    </Button>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default MostPopularCard;
