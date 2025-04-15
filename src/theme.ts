import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    styles: {
        global: {
            '::-webkit-scrollbar': {
                width: '8px',
                background: 'transparent',
            },
            '::-webkit-scrollbar-track': {
                bg: 'rgba(0, 0, 0, 0.04)',
            },
            '::-webkit-scrollbar-thumb': {
                bg: 'rgba(0, 0, 0, 0.16)',
                borderRadius: '8px',
            },
        },
    },
    colors: {
        lime: {
            50: '#FFFFD3',
            100: '#defcb2',
            150: '#d7ff94',
            200: '#caf884',
            300: '#b5f554',
            400: '#b1ff2e',
            500: '#88d90d',
            600: '#2DB100',
            700: '#4a7801',
            800: '#134B00',
            900: '#0b1900',
        },
    },
    breakpoints: {
        base: '0',
        sm: '360px',
        md: '768px',
        lg: '1440px',
        xl: '1920px',
    },
    components: {
        Tabs: {
            variants: {
                navbar: {
                    tab: {
                        justifyContent: 'start',
                        padding: 0,
                        height: 9,
                        position: 'relative',
                        fontWeight: 500,
                        _before: {
                            content: '""',
                            position: 'absolute',
                            height: 6,
                            width: '1px',
                            left: -3,
                            background: '#c4ff61',
                        },
                        _activeLink: {
                            fontWeight: 700,
                            '&::before': {
                                width: 2,
                                left: -4,
                                transition: 'width 0.2s, left 0.2s',
                            },
                        },
                    },
                    tablist: {
                        flexDirection: 'column',
                    },
                    root: {
                        orientation: 'vertical',
                        gap: 4,
                    },
                },
            },
        },
    },
});
