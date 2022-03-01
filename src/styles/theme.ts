import type {} from '@mui/lab/themeAugmentation'
import { createTheme } from '@mui/material'
import { blue, green, grey, red } from './colors'

const DefaultTheme = createTheme({
  palette: {
    primary: {
      main: blue[600],
      dark: blue[900],
    },
    info: {
      main: blue[300],
      light: blue[100],
    },
    secondary: {
      main: blue[300],
    },
    grey: {
      100: grey[100],
      200: grey[200],
      300: grey[300],
      600: grey[600],
      900: grey[900],
    },
    error: {
      main: red[600],
      dark: red[900],
      light: red[300],
    },
    success: {
      main: green[600],
      dark: green[900],
      light: green[300],
    },
    text: {
      primary: grey[900],
      secondary: grey[600],
      disabled: grey[300],
    },
    action: {
      disabled: grey[300],
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontSize: 32,
      lineHeight: '46px',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 24,
      lineHeight: '35px',
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 20,
      lineHeight: '29px',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 'normal',
    },
    body2: {
      fontSize: 10,
      lineHeight: '14px',
      fontWeight: 'normal',
    },
    subtitle1: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 'bold',
    },
    subtitle2: {
      fontSize: 14,
      lineHeight: '20px',
      fontWeight: 'normal',
    },
    h5: {
      fontSize: 12,
      lineHeight: '20px',
      fontWeight: 'normal',
    },
    h6: {
      fontSize: 11,
      lineHeight: '20px',
      fontWeight: 'normal',
    },
    fontFamily: ['"Noto Sans JP"', '"Hiragino Kaku Gothic ProN"', 'Meiryo', 'sans-serif'].join(
      ', ',
    ),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          fontSize: 14,
          lineHeight: '20px',
          padding: 0,
          minWidth: 'auto',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        textPrimary: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        textSecondary: {
          color: grey[600],
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: '0px 1px 3px 1px rgba(27, 30, 37, 0.16)',
        },
        elevation2: {
          boxShadow: '0px 2px 8px 2px rgba(27, 30, 37, 0.16)',
        },
        elevation8: {
          boxShadow: '0px 4px 16px 3px rgba(27, 30, 37, 0.15)',
        },
        outlined: {
          border: '1px solid #bfc2cc',
          padding: 16,
          overflow: 'hidden',
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: {
            color: 'root',
          },
          style: {
            color: grey[900],
          },
        },
        {
          props: {
            color: 'tooltipPrimary',
          },
          style: {
            color: blue[900],
          },
        },
        {
          props: {
            color: 'primary',
          },
          style: {
            color: blue[600],
          },
        },
        {
          props: {
            color: 'secondary',
          },
          style: {
            color: grey[600],
          },
        },
        {
          props: {
            color: 'error',
          },
          style: {
            color: red[600],
          },
        },
        {
          props: {
            color: 'gutterBottom',
          },
          style: {
            marginBottom: 16,
          },
        },
        {
          props: {
            color: 'subtitle2',
          },
          style: {
            marginBottom: 8,
            color: grey[600],
          },
        },
      ],
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 11,
          lineHeight: 1,
          fontWeight: 'normal',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: 14,
          lineHeight: '18px',
          fontWeight: 400,
          marginBottom: 24,
        },
        standardError: {
          color: red[900],
          backgroundColor: red[100],
        },
        standardInfo: {
          background: grey[100],
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        colorPrimary: {
          color: blue[900],
        },
        colorAction: {
          color: blue[600],
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: grey[900],
        },
        colorSecondary: {
          color: grey[600],
          '&:hover': {
            backgroundColor: grey[100],
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            color: '#bfc2cc',
            opacity: 1,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: blue[900],
          fontSize: 14,
          fontWeight: 700,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          backgroundColor: blue[300],
          color: blue[900],
        },
        colorDefault: {
          backgroundColor: blue[100],
          color: blue[900],
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: grey[300],
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
  },
})

export default DefaultTheme
