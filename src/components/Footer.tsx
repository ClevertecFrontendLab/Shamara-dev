import { EditIcon, SearchIcon } from '@chakra-ui/icons';
import { Flex, Image } from '@chakra-ui/react';
import { Link } from 'react-router';

import homeIcon from '~/assets/icons/home.svg';
import avatarIcon from '~/assets/images/avatar.png';

import FooterButton from './FooterButton';

const Footer = () => (
    <Flex
        data-test-id='footer'
        position='fixed'
        zIndex={10}
        bottom={0}
        w='100%'
        h='84px'
        py='10px'
        display={{ base: 'flex', lg: 'none' }}
        bg='lime.50'
        boxShadow='0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)'
    >
        <Link to=''>
            <FooterButton icon={<Image src={homeIcon} />} text='Главная' variant='primary' />
        </Link>
        <Link to=''>
            <FooterButton icon={<SearchIcon />} text='Поиск' />
        </Link>
        <Link to=''>
            <FooterButton icon={<EditIcon />} text='Записать' />
        </Link>
        <Link to=''>
            <FooterButton icon={<Image src={avatarIcon} />} text='Мой профиль' />
        </Link>
    </Flex>
);

export default Footer;
