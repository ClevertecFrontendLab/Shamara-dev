import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Image, Link } from '@chakra-ui/react';

import logo from '~/assets/icons/logo.svg';
import mobileLogo from '~/assets/icons/mobile-logo.svg';
import avatar from '~/assets/images/avatar.png';

import AvatarCard from './AvatarCard';
import Breadcrumbs from './Breadcrumbs';
import ProfileNotification from './ProfileNotification';

const Header = () => (
    <Flex
        as='header'
        data-test-id='header'
        position='fixed'
        zIndex={10}
        top={0}
        w='100vw'
        h={{ base: 16, md: 20 }}
        alignItems='center'
        justifyContent='space-between'
        bg='#ffffd3'
    >
        <Flex alignItems='center'>
            <Link href='/' ml={4}>
                <Image src={logo} alt='logo' display={{ base: 'none', md: 'block' }} />
                <Image src={mobileLogo} alt='logo' display={{ base: 'block', md: 'none' }} />
            </Link>
            <Breadcrumbs ml={32} display={{ base: 'none', lg: 'block' }} />
        </Flex>

        <AvatarCard
            avatar={avatar}
            userName='Екатерина Константинопольская'
            accountName='@bake_and_pie'
            display={{ base: 'none', lg: 'flex' }}
            px={6}
            gap={3}
            mr={14}
        />

        <Flex mr={4} display={{ base: 'flex', lg: 'none' }} gap={2}>
            <ProfileNotification />
            <IconButton
                aria-label='Hamburger'
                size='lg'
                variant='ghost'
                icon={<HamburgerIcon boxSize={5} />}
            />
        </Flex>
    </Flex>
);

export default Header;
