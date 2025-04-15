import { Flex, Text } from '@chakra-ui/react';

import AvatarCard from './AvatarCard';

interface BlogCardProps {
    avatar: string;
    userName: string;
    accountName: string;
    text: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ avatar, userName, accountName, text }) => (
    <Flex
        pt={{ base: 3, lg: 4, xl: 6 }}
        px={{ base: 4, xl: 6 }}
        pb={{ base: 4, xl: 5 }}
        flexDirection='column'
        bg='#fff'
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='8px'
    >
        <AvatarCard avatar={avatar} userName={userName} accountName={accountName} gap={2} />
        <Text pt={{ base: 2, xl: 3 }} fontSize='sm' lineHeight={5} noOfLines={3}>
            {text}
        </Text>
    </Flex>
);

export default BlogCard;
