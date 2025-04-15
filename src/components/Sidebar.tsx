import { EditIcon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';

import ProfileNotification from './ProfileNotification';

const Sidebar = () => (
    <Flex
        position='fixed'
        top={20}
        right={0}
        h='calc(100vh - 80px)'
        display={{ base: 'none', lg: 'flex' }}
        direction='column'
        justifyContent='space-between'
        alignItems='center'
        pl={16}
        pr={14}
        pb={12}
        pt={4}
    >
        <ProfileNotification />
        <Flex as='button' cursor='pointer' direction='column' alignItems='center' mx='auto'>
            <Flex bg='radial-gradient(62.52% 62.51% at 48.89% 37.5%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'>
                <Flex
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='50%'
                    width='48px'
                    height='48px'
                    mb={{
                        base: 0,
                        lg: 3,
                    }}
                    bg='black'
                >
                    <EditIcon width='24px' height='24px' color='lime.50' />
                </Flex>
            </Flex>
            <Text fontSize='xs' whiteSpace='nowrap'>
                Записать рецепт
            </Text>
        </Flex>
    </Flex>
);

export default Sidebar;
