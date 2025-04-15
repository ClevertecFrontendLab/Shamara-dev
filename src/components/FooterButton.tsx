import { Flex, Text } from '@chakra-ui/react';

const variants = {
    primary: {
        bg: 'black',
        shadow: 'radial-gradient(48.89% 37.5% at 48.89% 37.5%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)',
    },
    default: {
        bg: 'transparent',
        shadow: 'none',
    },
};

type FooterButtonProps = {
    text: string;
    icon: React.ReactElement;
    variant?: keyof typeof variants;
};

const FooterButton = ({ icon, text, variant = 'default', ...props }: FooterButtonProps) => (
    <Flex
        w={{ base: '90px', md: '192px' }}
        cursor='pointer'
        direction='column'
        alignItems='center'
        mx='auto'
        {...props}
        bg={variants[variant].shadow}
    >
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
            bg={variants[variant].bg}
        >
            {icon}
        </Flex>
        <Text fontSize='xs' whiteSpace='nowrap'>
            {text}
        </Text>
    </Flex>
);

export default FooterButton;
