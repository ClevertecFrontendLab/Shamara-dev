import { Avatar, Box, Flex, FlexProps, Text } from '@chakra-ui/react';

interface AvatarCardProps extends FlexProps {
    avatar: string;
    userName: string;
    accountName: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ avatar, userName, accountName, ...props }) => (
    <Flex {...props}>
        <Avatar src={avatar} name='avatar' />
        <Box>
            <Text
                fontWeight={500}
                fontSize={{ base: 'md', lg: 'lg' }}
                lineHeight={{ base: 6, lg: 7 }}
                textOverflow='ellipsis'
                whiteSpace='nowrap'
                overflow='hidden'
                maxWidth='100%'
                minWidth={0}
            >
                {userName}
            </Text>
            <Text fontSize='sm' lineHeight={5} opacity='64%'>
                {accountName}
            </Text>
        </Box>
    </Flex>
);

export default AvatarCard;
