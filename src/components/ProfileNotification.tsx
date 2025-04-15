import { Flex, Image, Text } from '@chakra-ui/react';

import emoji from '~/assets/icons/emoji.svg';
import favourites from '~/assets/icons/favourites.svg';
import people from '~/assets/icons/people.svg';

const reactions = [
    {
        image: favourites,
        text: 185,
    },
    {
        image: people,
        text: 589,
    },
    {
        image: emoji,
        text: 587,
    },
];

const ProfileNotification = () => (
    <Flex
        flexDirection={{ base: 'row', lg: 'column' }}
        gap={{ base: 0, lg: 6 }}
        fontSize={{ base: 'xs', lg: 'md' }}
        lineHeight={{ base: 4, lg: 6 }}
    >
        {reactions.map((reaction) => (
            <Flex
                key={reaction.image}
                w={{ base: '56px', lg: '85px' }}
                py={1}
                px={2}
                align='center'
                gap={1.5}
            >
                <Image src={reaction.image} boxSize={3} />
                <Text fontWeight={600} fontSize='xs' lineHeight={4} color='lime.600'>
                    {reaction.text}
                </Text>
            </Flex>
        ))}
    </Flex>
);

export default ProfileNotification;
