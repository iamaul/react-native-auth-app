import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#fefae6',
      100: '#fcf1b5',
      200: '#fbe884',
      300: '#f9df53',
      400: '#F9E058',
      500: '#F9E058',
      600: '#ac9306',
      700: '#7b6904',
      800: '#4a3f03',
      900: '#191501',
    },
    secondary: {
      50: '#fce8ed',
      100: '#f7bbca',
      200: '#f18da7',
      300: '#ec6084',
      400: '#E83F6B',
      500: '#E83F6B',
      600: '#9f1338',
      700: '#720e28',
      800: '#440818',
      900: '#170308',
    },
    stroke: {
      50: '#f9f9f9',
      100: '#EEEEEE',
      200: '#EEEEEE',
      300: '#EEEEEE',
      400: '#EEEEEE',
      500: '#EEEEEE',
      600: '#e2e2e2',
      700: '#d6d6d6',
      800: '#d6d6d6',
      900: '#cbcbcb',
    },
    gray: {
      400: '#AEAEAE',
      500: '#AEAEAE',
    },
    text: {
      50: '#424242',
      100: '#424242',
      200: '#424242',
      300: '#424242',
      400: '#424242',
      500: '#424242',
      600: '#262626',
      700: '#262626',
      800: '#0d0d0d',
      900: '#0d0d0d',
    },
    subtext: {
      400: '#828282',
      500: '#828282',
    },
  },
  fontConfig: {
    Poppins: {
      100: {
        normal: 'Poppins-Thin',
        italic: 'Poppins-ThinItalic',
      },
      200: {
        normal: 'Poppins-Light',
        italic: 'Poppins-LightItalic',
      },
      300: {
        normal: 'Poppins-Light',
        italic: 'Poppins-LightItalic',
      },
      400: {
        normal: 'Poppins-Regular',
        italic: 'Poppins-Italic',
      },
      500: {
        normal: 'Poppins-Medium',
        italic: 'Poppins-MediumItalic',
      },
      600: {
        normal: 'Poppins-SemiBold',
        italic: 'Poppins-SemiBoldItalic',
      },
      700: {
        normal: 'Poppins-Bold',
        italic: 'Poppins-BoldItalic',
      },
      800: {
        normal: 'Poppins-ExtraBold',
        italic: 'Poppins-ExtraBoldItalic',
      },
      900: {
        normal: 'Poppins-Black',
        italic: 'Poppins-BlackItalic',
      },
    },
  },
  fonts: {
    heading: 'Poppins-SemiBold',
    body: 'Poppins-Regular',
    mono: 'Poppins-Light',
  },
  components: {
    Button: {
      baseStyle: {
        elevation: 0,
        rounded: 'md',
        _text: {
          color: '#424242',
        },
      },
      sizes: {
        lg: {
          _text: {
            fontSize: '18px',
          },
        },
        md: {
          _text: {
            fontSize: '12px',
          },
        },
        sm: {
          _text: {
            fontSize: '10px',
          },
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 11,
        color: '#424242',
      },
      defaultProps: {
        size: 'md',
      },
      sizes: {
        lg: {fontSize: '18px'},
        md: {fontSize: '12px'},
        sm: {fontSize: '10px'},
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: '#424242',
      },
    },
  },
});
