import { Card, CardBody, Flex, Text } from '@chakra-ui/react';

import CategorySection from './CategorySection';

interface RelevantKitchenCardProps {
    recipe: {
        id: number;
        title: string;
        description: string;
        badgeIcon: string;
        badgeTitle: string;
        badgeColor: string;
        favoriteCount: string;
        likeCount: string;
    };
}

const RelevantKitchenCard: React.FC<RelevantKitchenCardProps> = ({ recipe }) => {
    const { title, description, badgeIcon, badgeTitle, badgeColor, favoriteCount, likeCount } =
        recipe;
    return (
        <Card
            w={{ base: '100%', md: '232px', lg: '282px', xl: '322px' }}
            h='192px'
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
        >
            <CardBody p={{ base: '12px', lg: '16px', xl: '24px 24px 20px' }}>
                <Flex flexDirection='column' gap={3}>
                    <Text
                        fontWeight={500}
                        fontSize={{ base: 'md', lg: 'xl' }}
                        lineHeight={{ base: 6, lg: 7 }}
                        textOverflow='ellipsis'
                        whiteSpace='nowrap'
                        overflow='hidden'
                        maxWidth='100%'
                        minWidth={0}
                    >
                        {title}
                    </Text>
                    <Text fontSize='sm' lineHeight={5} noOfLines={3}>
                        {description}
                    </Text>
                </Flex>
                <CategorySection
                    badgeIcon={badgeIcon}
                    badgeTitle={badgeTitle}
                    badgeColor={badgeColor}
                    favoriteCount={favoriteCount}
                    likeCount={likeCount}
                    mt={6}
                />
            </CardBody>
        </Card>
    );
};

export default RelevantKitchenCard;
