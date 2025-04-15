import { Flex, FlexProps, Image, Text } from '@chakra-ui/react';

import emojiIcon from '~/assets/icons/emoji.svg';
import favoriteIcon from '~/assets/icons/favourites.svg';

interface CategorySectionProps extends FlexProps {
    badgeIcon: string;
    badgeTitle: string;
    badgeColor: string;
    favoriteCount?: string;
    likeCount?: string;
}

const CategorySection: React.FC<CategorySectionProps> = ({
    badgeIcon,
    badgeTitle,
    badgeColor,
    favoriteCount,
    likeCount,
    ...props
}) => (
    <Flex justifyContent='space-between' {...props}>
        <Flex gap={2} p='4px 8px' alignItems='center' bg={badgeColor} borderRadius='4px'>
            <Image src={badgeIcon} boxSize={4} />
            <Text fontSize='sm' lineHeight={5}>
                {badgeTitle}
            </Text>
        </Flex>
        <Flex gap={2}>
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
    </Flex>
);

export default CategorySection;
