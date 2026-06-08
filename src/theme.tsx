import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#2e7d32',
            light: '#4caf50',
            dark: '#1b5e20',
        },
        secondary: {
            main: '#795548',
            light: '#a1887f',
            dark: '#4e342e',
        },
        background: {
            default: '#fafaf7',
            paper: '#ffffff',
        },
        text: {
            primary: '#2c2c2c',
            secondary: '#5f5f5f',
        },
    },
    typography: {
        fontFamily: '"Pretendard", "Noto Sans KR", -apple-system, BlinkMacSystemFont, sans-serif',
        h3: {
            fontWeight: 700,
            letterSpacing: '-0.02em',
        },
        h4: {
            fontWeight: 700,
            letterSpacing: '-0.01em',
        },
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
        body1: {
            lineHeight: 1.8,
        },
        body2: {
            lineHeight: 1.6,
        },
    },
    shape: {
        borderRadius: 12,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1400,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: 8,
                    fontWeight: 600,
                },
                containedPrimary: {
                    boxShadow: '0 2px 8px rgba(46, 125, 50, 0.3)',
                    '&:hover': {
                        boxShadow: '0 4px 16px rgba(46, 125, 50, 0.4)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#e0ddd5',
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
