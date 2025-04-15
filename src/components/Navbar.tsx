import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Image,
    Tab,
    TabList,
    Tabs,
    Text,
} from '@chakra-ui/react';
import { Link, NavLink } from 'react-router';

import exit from '~/assets/icons/exit.svg';
import { navigation } from '~/constants/navigation';

const Navbar = () => (
    <Box
        position='fixed'
        top={20}
        w={64}
        h='calc(100vh - 80px)'
        pt={6}
        display={{ base: 'none', lg: 'flex' }}
        flexDirection='column'
        justifyContent='space-between'
        boxShadow='0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)'
    >
        <Accordion
            p='10px 16px 10px 10px'
            overflowY='auto'
            overflowX='hidden'
            allowToggle
            boxShadow='0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            borderRadius={3}
        >
            {navigation.map((navItem) => (
                <AccordionItem key={navItem.id} w={230} border='none'>
                    <AccordionButton as={Link} to={navItem.link} px={2} py={3} gap={3}>
                        <Image src={navItem.icon} />
                        <Text
                            data-test-id={navItem.link === 'vegan-cuisine' ? 'vegan-cuisine' : ''}
                            as={NavLink}
                            to={navItem.link}
                            flex='1'
                            textAlign='left'
                            letterSpacing={0.5}
                        >
                            {navItem.title}
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel py={1.25} pl={12}>
                        <Tabs orientation='vertical' variant='navbar'>
                            <TabList>
                                {navItem.tabs.map((tab) => (
                                    <Tab key={tab.link}>{tab.title}</Tab>
                                ))}
                            </TabList>
                        </Tabs>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>

        <footer>
            <Flex w={64} h={36} mb={8} px={6} flexDirection='column' gap={4}>
                <Text opacity='24%' fontWeight='500' fontSize='xs' lineHeight={4}>
                    Версия программы 03.25
                </Text>
                <Text w={52} opacity='64%' fontSize='xs' lineHeight={4}>
                    Все права защищены,
                    <br />
                    ученический файл,
                    <br />
                    ©Клевер Технолоджи, 2025
                </Text>
                <Flex>
                    <Image src={exit} alt='exit' mr={1.5} />
                    <Text fontWeight='600' fontSize='xs' lineHeight={4}>
                        Выйти
                    </Text>
                </Flex>
            </Flex>
        </footer>
    </Box>
);

export default Navbar;
